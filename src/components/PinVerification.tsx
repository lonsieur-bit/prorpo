import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, RefreshCw, Clock } from 'lucide-react';
import ProgressBar from './ProgressBar';

export default function PinVerification() {
  const navigate = useNavigate();
  const [pin, setPin] = useState(['', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes

  React.useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePinChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);
      
      if (value && index < 3) {
        const nextInput = document.getElementById(`pin-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/location-permission');
  };

  const handleResend = () => {
    setTimeLeft(120);
    setPin(['', '', '', '']);
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
              <button onClick={() => navigate('/phone-verification')} className="p-2 bg-white/20 rounded-full">
                <ArrowRight size={20} className="text-white" />
              </button>
              
              <div className="flex items-center gap-2">
                <img 
                  src="/شعار نشمي.pdf (3).png" 
                  alt="شعار نشمي" 
                  className="w-10 h-10 object-contain filter brightness-0 invert"
                />
              </div>
              
              <ProgressBar currentStep={1} totalSteps={4} />
            </div>

            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30">
                <Shield size={32} className="text-white" />
              </div>
              <h1 className="text-2xl font-almarai font-bold mb-2">رمز التحقق</h1>
              <p className="text-white/90 font-arabic-city text-sm">أدخل الرمز المرسل إلى +966508370594</p>
            </div>
          </div>
          
          {/* Curved bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-br from-primary-50 via-white to-secondary-50 rounded-t-3xl"></div>
        </div>

        {/* Content */}
        <div className="flex-1 px-6 -mt-3 pt-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* PIN Input */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <label className="block text-sm font-almarai font-medium text-gray-700 mb-4 text-center">
                أدخل الرمز المكون من 4 أرقام
              </label>
              
              <div className="flex justify-center gap-3 mb-6 px-4">
                {pin.map((digit, index) => (
                  <input
                    key={index}
                    id={`pin-${index}`}
                    type="number"
                    value={digit}
                    onChange={(e) => handlePinChange(index, e.target.value)}
                    className="w-14 h-14 text-center text-xl font-bold border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 bg-gray-50 focus:bg-white transition-all"
                    maxLength={1}
                  />
                ))}
              </div>

              {/* Timer */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock size={16} className="text-gray-500" />
                <span className="text-sm font-arabic-city text-gray-600">
                  انتهاء الصلاحية خلال: {formatTime(timeLeft)}
                </span>
              </div>
            </div>

            {/* Resend Section */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-4 border border-orange-200">
              <div className="text-center">
                <p className="text-sm font-arabic-city text-gray-700 mb-3">
                  لم تتلق الرمز؟
                </p>
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={timeLeft > 0}
                  className="flex items-center gap-2 mx-auto px-4 py-2 bg-white border border-orange-300 rounded-lg text-sm font-almarai font-medium text-orange-700 hover:bg-orange-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <RefreshCw size={16} />
                  إعادة الإرسال
                </button>
              </div>
            </div>
            
            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={pin.some(digit => !digit)}
              className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-almarai font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              تأكيد الرمز
            </button>

            {/* Help Text */}
            <div className="text-center">
              <p className="text-xs font-arabic-city text-gray-500 leading-relaxed">
                تأكد من إدخال الرمز بشكل صحيح للمتابعة
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}