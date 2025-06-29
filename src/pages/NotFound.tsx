
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      <main className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <h1 className="text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Maaf, halaman yang Anda cari tidak dapat ditemukan.
          </p>
        </div>
        
        <Link to="/">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Home className="w-5 h-5 mr-2" />
            Kembali ke Beranda
          </Button>
        </Link>
      </main>
    </div>
  );
};

export default NotFound;
