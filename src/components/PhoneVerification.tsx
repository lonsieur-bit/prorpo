import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Phone, Shield, CheckCircle } from 'lucide-react';
import ProgressBar from './ProgressBar';

export default function PhoneVerification() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('+966508370594');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/pin-verification');
  };

  return (
    <div className="screen-container">
      <div className="flex flex-col h-full bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-primary-600 to-secondary-600 text-white overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10 p-6 pt-12 pb-8">
            <div className="flex items-center justify-between mb-8">
              <button onClick={() => navigate('/')} className="p-2 bg-white/20 rounded-full">
                <ArrowRight size={20} className="text-white" />
              </button>
              
              <div className="flex items-center gap-2">
                <img 
                  src="/شعار نشمي.pdf (3).png" 
                  alt="شعار نشمي" 
                  className="w-10 h-10 object-contain filter brightness-0 invert"
                />
              </div>
              
              <ProgressBar currentStep={0} totalSteps={4} />
            </div>

            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30">
                <Phone size={32} className="text-white" />
              </div>
              <h1 className="text-2xl font-almarai font-bold mb-2">تسجيل الدخول</h1>
              <p className="text-white/90 font-arabic-city text-sm">أدخل رقم هاتفك للتحقق من هويتك</p>
            </div>
          </div>
          
          {/* Curved bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-br from-primary-50 via-white to-secondary-50 rounded-t-3xl"></div>
        </div>

        {/* Content */}
        <div className="flex-1 px-6 -mt-3 pt-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Phone Input */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <label className="block text-sm font-almarai font-medium text-gray-700 mb-3">
                رقم الهاتف
              </label>
              <div className="relative">
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg text-right bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:bg-white transition-all"
                  placeholder="+966508370594"
                  dir="ltr"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-6 h-4 rounded-sm flex items-center justify-center">
                    <span className="text-xs">🇸🇦</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Features */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-4 border border-green-200">
              <div className="flex items-center gap-3 mb-3">
                <Shield size={20} className="text-green-600" />
                <h3 className="font-almarai font-bold text-gray-800">حماية متقدمة</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm font-arabic-city text-gray-700">تشفير البيانات</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm font-arabic-city text-gray-700">التحقق الآمن</span>
                </div>
              </div>
            </div>
            
            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-almarai font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              إرسال رمز التحقق
            </button>

            {/* Help Text */}
            <div className="text-center">
              <p className="text-sm font-arabic-city text-gray-600 leading-relaxed">
                سيتم إرسال رمز التحقق عبر رسالة نصية إلى رقم هاتفك
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}