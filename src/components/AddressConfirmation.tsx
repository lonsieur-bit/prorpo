import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, Edit3, Navigation } from 'lucide-react';
import StatusBar from './StatusBar';

export default function AddressConfirmation() {
  const navigate = useNavigate();
  const [selectedAddress, setSelectedAddress] = useState('الموقع الرئيسي');
  const [currentLocation, setCurrentLocation] = useState('الرياض، حي شبرا 4231');
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  const addresses = [
    { id: 1, name: 'الموقع الرئيسي', address: 'الرياض، حي شبرا 4231', distance: '1 كيلومتر' },
    { id: 2, name: 'خدمات متنوعة 2', address: 'الرياض، حي شبرا 4231', distance: '2 خدمة' },
    { id: 3, name: 'خدمات متنوعة', address: 'الرياض، حي شبرا 4231', distance: '1 خدمة' },
    { id: 4, name: 'تجارة المتطلبات', address: 'الرياض، حي شبرا 4231', distance: '2 خدمة' }
  ];

  const getCurrentLocation = () => {
    setIsLoadingLocation(true);
    
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
          } catch (error) {
            console.error('Error getting address:', error);
            setCurrentLocation(`الموقع الحالي: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
          }
          
          setIsLoadingLocation(false);
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('لا يمكن الحصول على موقعك الحالي. يرجى التأكد من تفعيل خدمة الموقع.');
          setIsLoadingLocation(false);
        }
      );
    } else {
      alert('متصفحك لا يدعم خدمة تحديد الموقع');
      setIsLoadingLocation(false);
    }
  };

  const handleSubmit = () => {
    navigate('/payment');
  };

  return (
    <div className="screen-container">
      <StatusBar />
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <button onClick={() => navigate('/datetime')}>
            <ArrowRight size={24} className="text-gray-600" />
          </button>
          <h1 className="text-lg font-bold text-gray-800">تأكيد العنوان</h1>
          <div></div>
        </div>

        <div className="flex-1">
          <div className="bg-gray-300 h-48 flex items-center justify-center mb-6 relative">
            <div className="text-center">
              <MapPin size={32} className="text-gray-600 mx-auto mb-2" />
              <p className="text-gray-600 text-sm">خريطة الموقع</p>
            </div>
            <button className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow">
              <Edit3 size={16} className="text-gray-600" />
            </button>
          </div>

          <div className="px-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={20} className="text-primary-600" />
                <div className="flex-1">
                  <p className="font-medium text-gray-800">الموقع الحالي</p>
                  <p className="text-sm text-gray-600">{currentLocation}</p>
                </div>
                <button
                  onClick={getCurrentLocation}
                  disabled={isLoadingLocation}
                  className="text-primary-600 hover:text-primary-700 disabled:opacity-50"
                  title="تحديث الموقع"
                >
                  <Navigation size={20} className={isLoadingLocation ? 'animate-spin' : ''} />
                </button>
              </div>
              <div className="text-xs text-gray-500">
                <p>{new Date().toLocaleDateString('ar-SA')}</p>
                <p>{new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' })}</p>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">تفاصيل العنوان</h2>
              
              <div className="space-y-3">
                {addresses.map((address) => (
                  <div 
                    key={address.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-primary-100 p-2 rounded">
                        <MapPin size={16} className="text-primary-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 text-sm">{address.name}</p>
                        <p className="text-xs text-gray-600">{address.address}</p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 text-left">
                      <p>{address.distance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-600">الإجمالي الرئيسي</span>
            <div className="text-center">
              <p className="text-xs text-gray-500">Far</p>
              <div className="w-6 h-1 bg-gray-300 rounded mx-auto"></div>
            </div>
          </div>
          <button onClick={handleSubmit} className="btn-primary">
            تأكيد
          </button>
        </div>
      </div>
    </div>
  );
}