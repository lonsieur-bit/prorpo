import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Car, Sparkles } from 'lucide-react';
import StatusBar from './StatusBar';

export default function PhoneVerification() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('+966548995492');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/pin-verification');
  };

  return (
    <div className="screen-container">
      <StatusBar />
      <div className="flex flex-col h-full p-6">
        <div className="flex items-center justify-between mb-8 pt-4">
          <ArrowRight size={24} className="text-gray-600" />
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-500 p-2 rounded-lg">
              <Car size={20} className="text-white" />
            </div>
            <Sparkles size={20} className="text-secondary-500" />
          </div>
          <div className="flex gap-1">
            <div className="w-2 h-1 bg-primary-600 rounded"></div>
            <div className="w-6 h-1 bg-primary-600 rounded"></div>
            <div className="w-2 h-1 bg-gray-300 rounded"></div>
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">أدخل رقم هاتفك للتحقق</h1>
          
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="mb-6">
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="input-field text-center text-lg"
                placeholder="رقم الهاتف"
                dir="ltr"
              />
            </div>
            
            <button type="submit" className="btn-primary">
              إرسال الرمز
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}