
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import Navigation from '@/components/Navigation';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  duration: string;
  features: string[];
  status: string;
  button_text: string;
  is_available: boolean;
}

const Katalog = () => {
  const { isAuthenticated, user } = useAuth();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();



  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        toast({
          title: "Error",
          description: "Gagal memuat produk",
          variant: "destructive",
        });
        return;
      }

      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast({
        title: "Error",
        description: "Terjadi kesalahan saat memuat produk",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Data Analysis': 'bg-green-100 text-green-800',
      'Data Science': 'bg-emerald-100 text-emerald-800',
      'Machine Learning': 'bg-teal-100 text-teal-800',
      'Mentoring': 'bg-lime-100 text-lime-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getStatusIcon = (status: string) => {
    if (status === 'available') {
      return <CheckCircle className="w-4 h-4 text-green-500" />;
    }
    return <AlertCircle className="w-4 h-4 text-orange-500" />;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <Navigation />
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-green-600 border-t-transparent"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            Katalog Program TemuDataku
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Selamat datang, <span className="font-semibold text-green-600">{user?.email}</span>!
          </p>
          <p className="text-gray-500">
            Pilih program pembelajaran yang sesuai dengan kebutuhan dan level Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge className={`${getCategoryColor(product.category)} border-0`}>
                    {product.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    {getStatusIcon(product.status)}
                    <span className="text-xs text-gray-500 capitalize">{product.status}</span>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-2xl font-bold text-green-600">{product.price}</p>
                    {product.duration && (
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="w-3 h-3" />
                        {product.duration}
                      </div>
                    )}
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold text-gray-800 leading-tight">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm line-clamp-3">
                  {product.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                {product.features && product.features.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Yang akan Anda pelajari:</p>
                    <div className="space-y-1">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                      {product.features.length > 3 && (
                        <p className="text-xs text-gray-500">+{product.features.length - 3} lainnya</p>
                      )}
                    </div>
                  </div>
                )}
                
                <Button 
                  className={`w-full ${
                    product.is_available 
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700' 
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!product.is_available}
                >
                  {product.button_text}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">
            Menampilkan {products.length} program pembelajaran tersedia
          </p>
          <Button variant="outline" size="lg" className="border-green-300 text-green-600 hover:bg-green-50">
            Lihat Semua Program
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Katalog;
