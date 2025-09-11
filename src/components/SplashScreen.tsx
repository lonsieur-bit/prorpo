import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <div className="flex flex-col items-center justify-center h-full bg-gray-100 p-8">
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="mb-8">
            <img 
              src="/شعار نشمي.pdf (3).png" 
              alt="شعار نشمي" 
              className="w-32 h-32 object-contain"
            />
          </div>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">كار سيرفيس</h1>
            <p className="text-secondary-600 text-lg">غسيل السيارات المتنقل</p>
          </div>
        </div>

        <div className="mb-8">
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