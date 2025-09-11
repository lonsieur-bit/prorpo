import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Car, Sparkles } from 'lucide-react';

export default function PinVerification() {
  const navigate = useNavigate();
  const [pin, setPin] = useState(['', '', '', '', '']);

  const handlePinChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);
      
      if (value && index < 4) {
        const nextInput = document.getElementById(`pin-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/location-permission');
  };

  return (
    <div className="screen-container">
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
            <div className="w-2 h-1 bg-primary-600 rounded"></div>
            <div className="w-6 h-1 bg-primary-600 rounded"></div>
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">أدخل PIN المكون من 5 أرقام والذي تم إرساله إلى رقم هاتفك</h1>
          
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex justify-center gap-3 mb-8">
              {pin.map((digit, index) => (
                <input
                  key={index}
                  id={`pin-${index}`}
                  type="number"
                  value={digit}
                  onChange={(e) => handlePinChange(index, e.target.value)}
                  className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                  maxLength={1}
                />
              ))}
            </div>
            
            <button type="submit" className="btn-primary mb-4">
              تأكيد
            </button>
            
            <div className="flex items-center justify-center">
              <button type="button" className="text-primary-600 text-sm">
                لم تتلق الرمز؟ أعد الإرسال
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}