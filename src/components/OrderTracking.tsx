import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Car, CheckCircle, Star } from 'lucide-react';

export default function OrderTracking() {
  const navigate = useNavigate();

  return (
    <div className="screen-container">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <button onClick={() => navigate('/home')}>
            <ArrowRight size={24} className="text-gray-600" />
          </button>
          <h1 className="text-lg font-bold text-gray-800">تفاصيل الطلب</h1>
          <div></div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="bg-gray-300 h-40 flex items-center justify-center mb-6 relative">
            <div className="text-center">
              <MapPin size={32} className="text-gray-600 mx-auto mb-2" />
              <p className="text-gray-600 text-sm">تتبع الموقع المباشر</p>
            </div>
            
            <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-600">حالة الطلب قيد التحضير</span>
              </div>
            </div>
          </div>

          <div className="px-6">
            <div className="card mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-800">سائق التوصيل</h2>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Car size={20} className="text-primary-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">احمد العربي</p>
                  <p className="text-sm text-gray-600">في الطريق إليك</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-3 rounded-lg">
                <p className="text-sm text-gray-700">يمكنك التواصل مع السائق حتى يصل إلى موقعك بسهولة</p>
              </div>
            </div>

            <div className="card mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">تفاصيل الطلب</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-green-500" />
                    <span className="text-sm text-gray-700">تم تجهيز الطلبات</span>
                  </div>
                  <span className="text-xs text-gray-500">تم</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-primary-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-700">في الطريق إليك</span>
                  </div>
                  <span className="text-xs text-primary-600">جاري التنفيذ</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                    <span className="text-sm text-gray-400">تم الوصول</span>
                  </div>
                  <span className="text-xs text-gray-400">تم الوصول</span>
                </div>
              </div>
            </div>

            <div className="card mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">تفاصيل الطلب</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">طلب رقم</span>
                  <span className="font-medium">92587879</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">نوع الخدمة</span>
                  <span className="font-medium">غسيل السيارة</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">حالة الطلب</span>
                  <div className="bg-primary-100 px-2 py-1 rounded text-xs text-primary-700">
                    في الطريق إليك
                  </div>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between">
                  <span className="text-gray-600">وقت الوصول المتوقع</span>
                  <div className="bg-gray-100 px-2 py-1 rounded text-xs">
                    15 دقيقة
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">المسافة</span>
                  <div className="bg-gray-100 px-2 py-1 rounded text-xs">
                    2.5 كم
                  </div>
                </div>
                
                <div className="flex justify-between text-lg font-bold text-primary-600 pt-2">
                  <span>إجمالي المبلغ: 399 ريال</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200">
          <button className="btn-primary">
            تأكيد
          </button>
        </div>
      </div>
    </div>
  );
}