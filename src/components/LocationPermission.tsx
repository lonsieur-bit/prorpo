import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, Navigation } from 'lucide-react';
import ProgressBar from './ProgressBar';

export default function LocationPermission() {
  const navigate = useNavigate();
  const [showMap, setShowMap] = useState(false);
  const [currentLocation, setCurrentLocation] = useState('');

  const handleAllow = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          
          try {
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=ar`
            );
            const data = await response.json();
            
            const address = data.locality || data.city || data.principalSubdivision || 'موقع غير محدد';
            setCurrentLocation(`${address}, ${data.countryName || 'السعودية'}`);
            setShowMap(true);
          } catch (error) {
            console.error('Error getting address:', error);
            setCurrentLocation(`الموقع الحالي: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
            setShowMap(true);
          }
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('لا يمكن الحصول على موقعك الحالي. يرجى التأكد من تفعيل خدمة الموقع.');
        }
      );
    } else {
      alert('متصفحك لا يدعم خدمة تحديد الموقع');
    }
  };

  const handleNext = () => {
    navigate('/home');
  };

  if (showMap) {
    return (
      <div className="screen-container bg-white">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 pt-12">
            <button onClick={() => setShowMap(false)} className="p-2">
              <ArrowRight size={24} className="text-gray-700" />
            </button>
            
            <div className="flex items-center gap-2">
              <img 
                src="/شعار نشمي.pdf (3).png" 
                alt="شعار نشمي" 
                className="w-8 h-8 object-contain"
              />
            </div>
            
            <ProgressBar currentStep={2} totalSteps={4} />
          </div>

          {/* Content */}
          <div className="flex-1 px-4">
            <h1 className="text-lg font-medium text-gray-800 mb-2 text-right">
              اسمح لنا باستخدام موقعك
            </h1>
            <p className="text-sm text-gray-600 mb-4 text-right leading-relaxed">
              احتاج إلى معرفة موقعك الدقيق حتى نتمكن من إرسال خدمة غسيل السيارات إليك في الوقت المناسب
            </p>

            {/* Map Area */}
            <div className="bg-gray-100 rounded-lg h-64 mb-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-primary-600 mx-auto mb-2" />
                  <p className="text-gray-600 text-sm">خريطة الموقع</p>
                </div>
              </div>
              
              {/* Location marker */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-primary-600 rounded-full border-2 border-white shadow-lg"></div>
              </div>
              
              {/* Mock map elements */}
              <div className="absolute top-4 right-4 w-16 h-12 bg-white/80 rounded border"></div>
              <div className="absolute bottom-4 left-4 w-20 h-8 bg-white/80 rounded border"></div>
            </div>

            {/* Location Info */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-primary-600" />
                <div className="flex-1">
                  <p className="text-sm text-gray-800 font-medium">الموقع الحالي</p>
                  <p className="text-xs text-gray-600">
                    {currentLocation || 'جاري تحديد الموقع...'}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-primary-600 text-white font-medium py-3 px-6 rounded-lg">
                السماح مرة واحدة
              </button>
              
              <button 
                onClick={handleNext}
                className="w-full bg-primary-600 text-white font-medium py-3 px-6 rounded-lg"
              >
                السماح أثناء استخدام التطبيق
              </button>
              
              <button 
                onClick={handleNext}
                className="w-full bg-gray-100 text-gray-700 font-medium py-3 px-6 rounded-lg"
              >
                لا نسمح
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="screen-container bg-white">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 pt-12">
          <button onClick={() => navigate('/pin-verification')} className="p-2">
            <ArrowRight size={24} className="text-gray-700" />
          </button>
          
          <div className="flex items-center gap-2">
            <img 
              src="/شعار نشمي.pdf (3).png" 
              alt="شعار نشمي" 
              className="w-8 h-8 object-contain"
            />
          </div>
          
          <ProgressBar currentStep={2} totalSteps={4} />
        </div>

        {/* Content */}
        <div className="flex-1 px-4 pt-8">
          <h1 className="text-lg font-medium text-gray-800 mb-2 text-right">
            اسمح لنا باستخدام موقعك
          </h1>
          <p className="text-sm text-gray-600 mb-8 text-right leading-relaxed">
            احتاج إلى معرفة موقعك الدقيق حتى نتمكن من إرسال خدمة غسيل السيارات إليك في الوقت المناسب
          </p>

          {/* Map Preview */}
          <div className="bg-gray-100 rounded-lg h-64 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 opacity-30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Navigation size={48} className="text-primary-600 mx-auto mb-2" />
                <p className="text-gray-600 text-sm">انقر للسماح بالوصول للموقع</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button 
              onClick={handleAllow}
              className="w-full bg-primary-600 text-white font-medium py-3 px-6 rounded-lg"
            >
              السماح مرة واحدة
            </button>
            
            <button 
              onClick={handleAllow}
              className="w-full bg-primary-600 text-white font-medium py-3 px-6 rounded-lg"
            >
              السماح أثناء استخدام التطبيق
            </button>
            
            <button 
              onClick={() => navigate('/home')}
              className="w-full bg-gray-100 text-gray-700 font-medium py-3 px-6 rounded-lg"
            >
              لا نسمح
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}