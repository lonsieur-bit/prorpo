import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Car, Sparkles, MapPin } from 'lucide-react';
import StatusBar from './StatusBar';

export default function LocationPermission() {
  const navigate = useNavigate();

  const handleAllow = () => {
    navigate('/home');
  };

  const handleDeny = () => {
    navigate('/home');
  };

  return (
    <div className="screen-container">
      <StatusBar />
      <div className="flex flex-col h-full p-6">
        <div className="flex items-center justify-between mb-8 pt-4">
          <ArrowRight size={24} className="text-gray-600" />
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-500 p-2 rounded-lg">
              <Car size={20} className="text-white" />
            </div>
            <Sparkles size={20} className="text-secondary-500" />
          </div>
          <div className="flex gap-1">
            <div className="w-6 h-1 bg-primary-600 rounded"></div>
            <div className="w-2 h-1 bg-primary-600 rounded"></div>
            <div className="w-2 h-1 bg-primary-600 rounded"></div>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="bg-green-100 p-6 rounded-full mb-6">
            <MapPin size={48} className="text-green-600" />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-800 mb-4">اسمح لنا باستخدام موقعك</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            نحتاج إلى معرفة موقعك الدقيق حتى نتمكن من إرسال خدمة غسيل السيارات إليك
          </p>

          <div className="w-full space-y-4">
            <button onClick={handleAllow} className="btn-primary">
              السماح مرة واحدة
            </button>
            
            <button onClick={handleAllow} className="btn-primary">
              السماح أثناء استخدام التطبيق
            </button>
            
            <button onClick={handleDeny} className="btn-secondary">
              لا نسمح
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}