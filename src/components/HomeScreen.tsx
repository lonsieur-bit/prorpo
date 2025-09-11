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
          {/* Banner Image with Overlay Buttons */}
          <div className="relative h-80">
            <img 
              src="/لون[1].pdf.png" 
              alt="عروض الإطارات" 
              className="w-full h-full object-cover"
            />
            
            {/* Overlay Buttons */}
            <div className="absolute top-4 left-0 right-0 px-4">
              <div className="flex items-center justify-between px-6">
                {/* Left - Empty space for balance */}
                <div className="w-20"></div>
              <div className="flex items-center justify-between">
                {/* Left - Gifts Button */}
                <button 
                  onClick={() => navigate('/gifts')}
                  className="flex items-center gap-2 bg-white/30 backdrop-blur-sm px-4 py-2 rounded-xl hover:bg-white/40 transition-all duration-300"
                >
                  <Gift size={16} className="text-black" />
                  <span className="text-sm font-almarai font-medium text-black">هدايا وعروض</span>
                </button>

                {/* Right - Location Dropdown */}
                <button 
                  onClick={() => navigate('/location')}
                  className="flex items-center gap-2 bg-white/30 backdrop-blur-sm px-4 py-2 rounded-xl hover:bg-white/40 transition-all duration-300"
                >
                  <MapPin size={16} className="text-black" />
                  <ChevronDown size={14} className="text-black" />
                  <div className="text-right">
                    <p className="text-sm font-almarai font-medium text-black">hbh</p>
                  </div>
                </button>
              </div>
            </div>
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