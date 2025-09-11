import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProgressBar from './ProgressBar';

export default function PhoneVerification() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('+966548995492');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/pin-verification');
  };

  return (
    <div className="screen-container bg-white">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 pt-12">
          <button onClick={() => navigate('/')} className="p-2">
            <ArrowRight size={24} className="text-gray-700" />
          </button>
          
          <div className="flex items-center gap-2">
            <img 
              src="/شعار نشمي.pdf (3).png" 
              alt="شعار نشمي" 
              className="w-10 h-10 object-contain"
            />
          </div>
          
          <ProgressBar currentStep={0} totalSteps={4} />
        </div>

        {/* Content */}
        <div className="flex-1 px-6 pt-8">
          <h1 className="text-xl font-medium text-gray-800 mb-8 text-right">
            أدخل رقم هاتفك للتحقق
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg text-lg text-right bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="+966548995492"
                dir="ltr"
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200"
            >
              إرسال الرمز
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}