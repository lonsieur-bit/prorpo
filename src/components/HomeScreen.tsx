import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Car, Sparkles, Calendar, User } from 'lucide-react';
import StatusBar from './StatusBar';
import { useApp } from '../context/AppContext';

export default function HomeScreen() {
  const navigate = useNavigate();
  const { user, booking } = useApp();

  return (
    <div className="screen-container">
      <StatusBar />
      <div className="flex flex-col h-full">
        <div className="bg-gradient-to-r from-primary-600 to-secondary-500 text-white p-6 rounded-b-3xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-2 rounded-lg">
                <Car size={20} />
              </div>
              <Sparkles size={20} />
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span className="text-sm">الموقع</span>
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-white/80 text-sm">4231 شبرا، الرياض</p>
          </div>
        </div>

        <div className="flex-1 p-6">
          <div className="mb-6">
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-4 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <Car size={24} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">كار سيرفيس</h3>
                  <p className="text-sm text-gray-600">خدمة التنظيف المنزلي</p>
                </div>
              </div>
              
              <div className="flex gap-4 mb-4">
                <div className="flex-1 bg-white p-3 rounded-lg">
                  <div className="w-8 h-8 bg-primary-100 rounded mb-2 flex items-center justify-center">
                    <Car size={16} className="text-primary-600" />
                  </div>
                  <p className="text-xs text-gray-600">iOS App</p>
                </div>
                <div className="flex-1 bg-white p-3 rounded-lg">
                  <div className="w-8 h-8 bg-secondary-100 rounded mb-2 flex items-center justify-center">
                    <Car size={16} className="text-secondary-600" />
                  </div>
                  <p className="text-xs text-gray-600">Android App</p>
                </div>
              </div>
              
              <div className="bg-orange-100 p-3 rounded-lg mb-4">
                <p className="text-sm text-orange-800">3 غسلات بسعر 399 ريال فقط</p>
              </div>
              
              <button 
                onClick={() => navigate('/booking')}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Car size={20} />
                الذهاب إلى الحجز
              </button>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">الخدمات</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <Car size={24} className="text-primary-600" />
                  </div>
                  <Sparkles size={20} className="text-secondary-500" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">غسيل سيارات 2</h3>
                <p className="text-sm text-gray-600 mb-3">خدمة جديدة</p>
                <button className="btn-primary text-sm py-2">تفاصيل</button>
              </div>
              
              <div className="card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-secondary-100 p-2 rounded-lg">
                    <Car size={24} className="text-secondary-600" />
                  </div>
                  <Sparkles size={20} className="text-primary-500" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">غسيل سيارات</h3>
                <p className="text-sm text-gray-600 mb-3">خدمة جديدة</p>
                <button className="btn-primary text-sm py-2">تفاصيل</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-t border-gray-200 p-4">
          <div className="flex justify-around">
            <button className="flex flex-col items-center gap-1">
              <Car size={20} className="text-primary-600" />
              <span className="text-xs text-primary-600">حساب المحجوز</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <Calendar size={20} className="text-gray-400" />
              <span className="text-xs text-gray-400">هيدا</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <User size={20} className="text-gray-400" />
              <span className="text-xs text-gray-400">طيبان</span>
            </button>
            <button 
              onClick={() => navigate('/profile')}
              className="flex flex-col items-center gap-1"
            >
              <User size={20} className="text-gray-400" />
              <span className="text-xs text-gray-400">ارشيفي</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}