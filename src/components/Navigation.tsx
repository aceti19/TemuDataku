
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Home, LogIn, List, User } from 'lucide-react';

const Navigation = () => {
  const { isAuthenticated, user, logout, loading } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg border-b border-green-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              TemuDataku
            </Link>
            
            <div className="hidden md:flex space-x-4">
              <Link
                to="/"
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'bg-green-100 text-green-700' 
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Link>
              
              {isAuthenticated && (
                <Link
                  to="/katalog"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive('/katalog') 
                      ? 'bg-green-100 text-green-700' 
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  <List className="w-4 h-4 mr-2" />
                  Katalog
                </Link>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {loading ? (
              <div className="animate-pulse">
                <div className="h-8 w-20 bg-gray-200 rounded"></div>
              </div>
            ) : isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-gray-700">
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">{user?.email}</span>
                </div>
                <Button 
                  onClick={logout} 
                  variant="outline"
                  size="sm"
                  className="hover:bg-red-50 hover:text-red-600 hover:border-red-300"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Link to="/login">
                <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
