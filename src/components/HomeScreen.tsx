import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Car, Sparkles, Calendar, User, Gift, ShoppingBag, Menu, ChevronDown } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function HomeScreen() {
  const navigate = useNavigate();
  const { user, booking } = useApp();

  return (
    <div className="screen-container">
      <div className="flex flex-col h-full bg-gray-50">
        <div className="flex-1 relative">
          {/* Fixed Header */}
          <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 shadow-sm">
            <div className="max-w-sm mx-auto px-4 py-3">
              <div className="flex items-center justify-between">
                {/* Empty space for balance */}
                <div className="w-16"></div>

                {/* Location Dropdown */}
                <button 
                  onClick={() => navigate('/location')}
                  className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md hover:bg-white transition-all border border-gray-200/50"
                >
                  <ChevronDown size={16} className="text-primary-600" />
                  <div className="text-right">
                    <p className="text-sm font-almarai font-bold text-gray-800">الموقع</p>
                    <p className="text-xs font-arabic-city text-gray-600">{user.currentAddress || 'الرياض، ح. شارع 4231'}</p>
                  </div>
                  <MapPin size={18} className="text-primary-600" />
                </button>

                {/* Gifts Button */}
                <button 
                  onClick={() => navigate('/gifts')}
                  className="flex flex-col items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-xl shadow-md hover:bg-white transition-all border border-gray-200/50"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Gift size={16} className="text-white" />
                  </div>
                  <span className="text-xs font-arabic-city text-gray-700 font-medium">هدايا وعروض</span>
                </button>
              </div>
            </div>
          </div>

          {/* Banner Image */}
          <div className="relative mt-16">
            <img 
              src="/لون[1].pdf.png" 
              alt="عروض الإطارات" 
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-4 space-y-6">
            {/* Offer Banner */}
            <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-xl p-4 text-white text-center shadow-lg">
              <p className="text-lg font-almarai font-bold mb-1">عرض خاص</p>
              <p className="text-sm font-arabic-city">3 غسلات بسعر 399 ريال فقط</p>
            </div>

            {/* Book Button */}
            <button 
              onClick={() => navigate('/booking')}
              className="w-full bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-almarai font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all"
            >
              احجز خدمتك الآن
              <img 
                src="/شعار نشمي.pdf (3).png" 
                alt="شعار نشمي" 
                className="w-6 h-6 object-contain filter brightness-0 invert"
              />
            </button>
          </div>

          {/* Services Section */}
          <div className="px-4 pb-4">
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
                  <h4 className="font-almarai font-bold text-gray-800 mb-1">غسيل سيارات 2</h4>
                  <p className="text-xs font-arabic-city text-gray-600 mb-3">حالة جديدة</p>
                </div>
                <button 
                  onClick={() => navigate('/booking')}
                  className="w-full bg-gradient-to-r from-primary-600 to-secondary-500 text-white text-sm py-2 rounded-lg hover:from-primary-700 hover:to-secondary-600 transition-all"
                >
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
                  <h4 className="font-almarai font-bold text-gray-800 mb-1">غسيل سيارات</h4>
                  <p className="text-xs font-arabic-city text-gray-600 mb-3">حالة جديدة</p>
                </div>
                <button 
                  onClick={() => navigate('/booking')}
                  className="w-full bg-gradient-to-r from-primary-600 to-secondary-500 text-white text-sm py-2 rounded-lg hover:from-primary-700 hover:to-secondary-600 transition-all"
                >
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
            <button 
              onClick={() => navigate('/orders')}
              className="flex flex-col items-center gap-1"
            >
              <ShoppingBag size={20} className="text-gray-400" />
              <span className="text-xs text-gray-400">طلباتي</span>
            </button>
            <button 
              onClick={() => navigate('/gifts')}
              className="flex flex-col items-center gap-1"
            >
              <Gift size={20} className="text-gray-400" />
              <span className="text-xs text-gray-400">هدايا</span>
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