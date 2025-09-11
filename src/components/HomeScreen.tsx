import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Car, Sparkles, Calendar, User, Gift, ShoppingBag } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function HomeScreen() {
  const navigate = useNavigate();
  const { user, booking } = useApp();

  return (
    <div className="screen-container">
      <div className="flex flex-col h-full bg-gray-50">
        {/* Header */}
        <div className="bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <img 
                  src="/شعار نشمي.pdf (3).png" 
                  alt="شعار نشمي" 
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 text-right">
              <button 
                onClick={() => navigate('/location')}
                className="hover:text-primary-600 transition-colors"
              >
                <p className="text-sm font-almarai font-bold text-gray-800">الموقع</p>
                <p className="text-xs font-arabic-city text-gray-500">{user.currentAddress || 'الرياض، ح. شارع 4231'}</p>
              </button>
              <MapPin size={20} className="text-gray-600" />
            </div>
          </div>
        </div>

        <div className="flex-1 p-4 space-y-6">
          {/* Main Service Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center mb-4">
                <img 
                  src="/شعار نشمي.pdf (3).png" 
                  alt="شعار نشمي" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">كار سيرفيس</h2>
              <h2 className="text-xl font-almarai font-bold text-gray-800 mb-2">كار سيرفيس</h2>
              <p className="text-gray-600 text-sm font-arabic-city">خدمة التنظيف الأول</p>
            </div>

            {/* App Store Buttons */}
            <div className="flex gap-3 mb-6">
              <div className="flex-1 border border-gray-200 rounded-lg p-3 text-center">
                <div className="text-xs text-gray-600 mb-1">متوفر على</div>
                <div className="text-sm font-medium text-gray-800">Google Play</div>
              </div>
              <div className="flex-1 border border-gray-200 rounded-lg p-3 text-center">
                <div className="text-xs text-gray-600 mb-1">متوفر على</div>
                <div className="text-sm font-medium text-gray-800">App Store</div>
              </div>
            </div>

            {/* Offer Banner */}
            <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-xl p-4 text-white text-center mb-4">
              <p className="text-sm font-medium">3 غسلات بسعر 399 ريال فقط</p>
            </div>

            {/* Book Button */}
            <button 
              onClick={() => navigate('/booking')}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium py-3 px-6 rounded-xl flex items-center justify-center gap-3"
            >
              الذهاب إلى الحجز
              <img 
                src="/شعار نشمي.pdf (3).png" 
                alt="شعار نشمي" 
                className="w-5 h-5 object-contain"
              />
            </button>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-almarai font-bold text-gray-800 mb-4 text-right">الخدمات</h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Service Card 1 */}
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center mb-3">
                    <img 
                      src="/شعار نشمي.pdf (3).png" 
                      alt="شعار نشمي" 
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1">غسيل سيارات 2</h4>
                  <h4 className="font-almarai font-bold text-gray-800 mb-1">غسيل سيارات 2</h4>
                  <p className="text-xs font-arabic-city text-gray-600 mb-3">حالة جديدة</p>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm py-2 rounded-lg">
                  تفاصيل
                </button>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center mb-3">
                    <img 
                      src="/شعار نشمي.pdf (3).png" 
                      alt="شعار نشمي" 
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1">غسيل سيارات</h4>
                  <h4 className="font-almarai font-bold text-gray-800 mb-1">غسيل سيارات</h4>
                  <p className="text-xs font-arabic-city text-gray-600 mb-3">حالة جديدة</p>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm py-2 rounded-lg">
                  تفاصيل
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="flex justify-around">
            <button className="flex flex-col items-center gap-1">
              <Car size={20} className="text-blue-500" />
              <span className="text-xs text-blue-500 font-medium">الرئيسية</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <ShoppingBag 
                size={20} 
                className="text-gray-400" 
                onClick={() => navigate('/orders')}
              />
              <span 
                className="text-xs text-gray-400"
                onClick={() => navigate('/orders')}
              >
                طلباتي
              </span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <Gift 
                size={20} 
                className="text-gray-400"
                onClick={() => navigate('/gifts')}
              />
              <span 
                className="text-xs text-gray-400"
                onClick={() => navigate('/gifts')}
              >
                هدايا
              </span>
            </button>
            <button 
              onClick={() => navigate('/profile')}
              className="flex flex-col items-center gap-1"
            >
              <User size={20} className="text-gray-400" />
              <span className="text-xs text-gray-400">حسابي</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}