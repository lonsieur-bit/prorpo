import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, Sparkles } from 'lucide-react';

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/phone-verification');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="screen-container">
      <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-primary-50 to-secondary-50 p-8">
        <div className="relative mb-8">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-500 p-6 rounded-3xl shadow-xl">
            <Car size={48} className="text-white" />
          </div>
          <Sparkles className="absolute -top-2 -right-2 text-secondary-400" size={24} />
          <Sparkles className="absolute -bottom-2 -left-2 text-primary-400" size={20} />
        </div>
        
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">كار سيرفيس</h1>
          <p className="text-secondary-600 text-lg font-medium">غسيل السيارات المتنقل</p>
        </div>

        <div className="absolute bottom-8">
          <div className="flex justify-center">
            <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-primary-400 rounded-full mx-1 animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}