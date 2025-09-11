import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CreditCard, Plus, Calendar, MapPin, Car, Clock } from 'lucide-react';

export default function PaymentMethod() {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState('card1');

  const handleSubmit = () => {
    navigate('/tracking');
  };


  return (
    <div className="screen-container bg-gray-50">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="bg-white flex items-center justify-between p-4 shadow-sm">
          <button onClick={() => navigate('/address')}>
            <ArrowRight size={24} className="text-gray-600" />
          </button>
          <h1 className="text-lg font-almarai font-bold text-gray-800">تأكيد الحجز</h1>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Calendar size={16} />
            <span className="font-arabic-city">تاريخ ووقت الحجز</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {/* Map Section */}
          <div className="bg-gray-300 h-48 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={32} className="text-gray-600 mx-auto mb-2" />
                <p className="text-gray-600 text-sm font-arabic-city">خريطة الموقع</p>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
            </div>
            <button className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-sm">
              <span className="text-xs font-arabic-city text-gray-600">Locate me</span>
            </button>
          </div>

          {/* Location and Date Info */}
          <div className="bg-white p-4 border-b border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-600" />
                <span className="text-sm font-arabic-city text-gray-600">العنوان</span>
              </div>
              <span className="text-sm font-almarai font-medium text-gray-800">الرياض، ح. شارع 4231</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-gray-600" />
                <span className="text-sm font-arabic-city text-gray-600">التاريخ الحجز</span>
              </div>
              <span className="text-sm font-almarai font-medium text-gray-800">December 23, 2025</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-gray-600" />
                <span className="text-sm font-arabic-city text-gray-600">وقت الحجز</span>
              </div>
              <span className="text-sm font-almarai font-medium text-gray-800">10:00 AM</span>
            </div>
          </div>

          {/* Vehicle Section */}
          <div className="bg-white p-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Car size={20} className="text-gray-600" />
                <div>
                  <p className="text-sm font-arabic-city text-gray-600">المركبة</p>
                  <p className="font-almarai font-medium text-gray-800">مركبة 1</p>
                  <p className="text-xs font-arabic-city text-gray-500">خدمة تجريبية</p>
                </div>
              </div>
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-almarai">
                تغيير
              </button>
            </div>
          </div>

          {/* Orders Note - Delivery Options */}
          <div className="p-4 mx-4 mt-4">
            <h3 className="text-lg font-almarai font-bold text-gray-800 mb-4 text-right">ملاحظات للطلبات</h3>
            
            <div className="grid grid-cols-3 gap-3 mb-4">
              {/* Home Delivery */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-3 text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Car size={20} className="text-gray-600" />
                </div>
                <p className="text-xs font-almarai text-gray-700">غسيل داخلي</p>
                <p className="text-xs font-almarai text-gray-500">فقط</p>
              </div>

              {/* External Wash */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-3 text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Car size={20} className="text-gray-600" />
                </div>
                <p className="text-xs font-almarai text-gray-700">غسيل خارجي</p>
                <p className="text-xs font-almarai text-gray-500">فقط</p>
              </div>

              {/* Complete Service - Selected */}
              <div className="bg-primary-50 border-2 border-primary-400 rounded-xl p-3 text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Car size={20} className="text-primary-600" />
                </div>
                <p className="text-xs font-almarai text-primary-700">كامل</p>
              </div>
            </div>

            {/* Add Promo Code Button */}
            <button className="w-full flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-600 hover:bg-gray-100 transition-colors">
              <Plus size={16} />
              <span className="font-almarai">إضافة الرمز الترويجي</span>
              <div></div>
            </button>
          </div>

          {/* Order Details */}
          <div className="bg-white p-4 mx-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-almarai font-bold text-gray-800 mb-4 text-right">تفاصيل الحجز</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-almarai text-gray-600">غسيل</span>
                <span className="font-almarai text-gray-800">1</span>
                <span className="font-almarai text-gray-800">ر.س 233</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-almarai text-gray-600">خدمات إضافية</span>
                <span className="font-almarai text-gray-800">2</span>
                <span className="font-almarai text-gray-800">ر.س 28</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-almarai text-gray-600">المبلغ قبل الضريبة</span>
                <span className="font-almarai text-gray-800">ر.س 123</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-almarai text-gray-600">ضريبة القيمة المضافة</span>
                <span className="font-almarai text-gray-800">ر.س 3</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Confirm Button */}
        <div className="bg-white p-4 border-t border-gray-200">
          <button 
            onClick={handleSubmit}
            className="w-full bg-primary-600 text-white font-almarai font-bold py-4 px-6 rounded-xl hover:bg-primary-700 transition-colors"
          >
            تأكيد
          </button>
        </div>
      </div>
    </div>
  );
}