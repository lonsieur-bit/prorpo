import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Gift, Star } from 'lucide-react';

export default function GiftsPage() {
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState('AHM500');

  const conditions = [
    'الشروط والأحكام يتم كتابتها هنا',
    'الشروط والأحكام يتم كتابتها هنا', 
    'الشروط والأحكام يتم كتابتها هنا',
    'الشروط والأحكام يتم كتابتها هنا'
  ];

  return (
    <div className="screen-container">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <button onClick={() => navigate('/home')}>
            <ArrowRight size={24} className="text-gray-600" />
          </button>
          <h1 className="text-lg font-almarai font-bold text-gray-800">الهدايا والعروض</h1>
          <div></div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {/* Main Gift Card */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 text-white mb-6 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Gift size={32} className="text-white" />
                </div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              
              <h2 className="text-xl font-almarai font-bold mb-2">
                لك ولأصحابك 10 ريال بعد أول طلب!
              </h2>
              <p className="text-white/90 text-sm font-arabic-city leading-relaxed">
                شارك صديقك برابط التطبيق واحصل على 10 ريال
                بعد أول طلب يتم حجزه باستخدام الكود الترويجي
              </p>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
            <h3 className="text-lg font-almarai font-bold text-gray-800 mb-4">الشروط والأحكام</h3>
            <div className="space-y-2">
              {conditions.map((condition, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold text-sm">{index + 1} -</span>
                  <p className="text-sm font-arabic-city text-gray-600 flex-1">{condition}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Promo Code Section */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <h3 className="text-lg font-almarai font-bold text-gray-800 mb-3">الرمز الترويجي</h3>
            <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <p className="text-2xl font-almarai font-bold text-gray-800 tracking-wider">
                {promoCode}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Action Button */}
        <div className="p-6 border-t border-gray-200">
          <button 
            onClick={() => {
              // Copy promo code to clipboard
              navigator.clipboard.writeText(promoCode);
              alert('تم نسخ الرمز الترويجي');
            }}
            className="w-full bg-primary-600 text-white font-almarai font-bold py-4 px-6 rounded-xl hover:bg-primary-700 transition-colors"
          >
            نسخ رابط الدعوة
          </button>
        </div>
      </div>
    </div>
  );
}