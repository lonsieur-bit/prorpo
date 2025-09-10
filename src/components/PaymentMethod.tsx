import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CreditCard, Plus, CheckCircle2 } from 'lucide-react';
import StatusBar from './StatusBar';

export default function PaymentMethod() {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState('card1');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = () => {
    setShowSuccess(true);
    setTimeout(() => {
      navigate('/tracking');
    }, 2000);
  };

  if (showSuccess) {
    return (
      <div className="screen-container">
        <StatusBar />
        <div className="flex flex-col items-center justify-center h-full p-6 text-center">
          <div className="bg-green-100 p-8 rounded-full mb-6">
            <CheckCircle2 size={64} className="text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">تم الدفع بنجاح</h1>
          <p className="text-gray-600 mb-8">
            تم تسجيل الطلب وسيتم إرسال فني التنظيف إليك
          </p>
          <div className="w-full">
            <button 
              onClick={() => navigate('/tracking')}
              className="btn-primary"
            >
              عرض تفاصيل الطلب
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="screen-container">
      <StatusBar />
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <button onClick={() => navigate('/address')}>
            <ArrowRight size={24} className="text-gray-600" />
          </button>
          <h1 className="text-lg font-bold text-gray-800">الدفع</h1>
          <div></div>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">اختر طريقة الدفع</h2>
            
            <div className="space-y-3">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <CreditCard size={24} className="text-primary-600" />
                    <div>
                      <p className="font-medium text-gray-800">Mastercard</p>
                      <p className="text-sm text-gray-500">**** **** **** 4545</p>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="payment"
                    value="card1"
                    checked={selectedPayment === 'card1'}
                    onChange={(e) => setSelectedPayment(e.target.value)}
                    className="text-primary-600"
                  />
                </div>
                <button className="flex items-center gap-2 text-primary-600 text-sm">
                  <Plus size={16} />
                  إضافة بطاقة جديدة
                </button>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded"></div>
                    <p className="font-medium text-gray-800">Apple Pay</p>
                  </div>
                  <input
                    type="radio"
                    name="payment"
                    value="apple"
                    checked={selectedPayment === 'apple'}
                    onChange={(e) => setSelectedPayment(e.target.value)}
                    className="text-primary-600"
                  />
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded"></div>
                    <p className="font-medium text-gray-800">الدفع عند الاستلام</p>
                  </div>
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={selectedPayment === 'cash'}
                    onChange={(e) => setSelectedPayment(e.target.value)}
                    className="text-primary-600"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">ملخص الطلب</h2>
            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">الخدمة</span>
                <span className="font-medium">غسيل السيارة</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">التاريخ</span>
                <span className="font-medium">20 مارس 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">الوقت</span>
                <span className="font-medium">10:00 صباحاً</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">الموقع</span>
                <span className="font-medium">الرياض، حي شبرا 4231</span>
              </div>
              <hr className="border-gray-300" />
              <div className="flex justify-between text-lg font-bold">
                <span>الإجمالي</span>
                <span className="text-primary-600">399 ريال</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200">
          <button onClick={handleSubmit} className="btn-primary">
            ادفع
          </button>
        </div>
      </div>
    </div>
  );
}