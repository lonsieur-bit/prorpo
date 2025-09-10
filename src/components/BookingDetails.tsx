import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, Plus } from 'lucide-react';
import StatusBar from './StatusBar';

export default function BookingDetails() {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState('الرياض، حي شبرا 4231');
  const [selectedColors, setSelectedColors] = useState([0, 1, 2]);

  const colors = ['#1E40AF', '#0891B2', '#059669', '#DC2626', '#7C2D12', '#4338CA', '#0D9488', '#15803D'];

  const handleSubmit = () => {
    navigate('/datetime');
  };

  return (
    <div className="screen-container">
      <StatusBar />
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <button onClick={() => navigate('/home')}>
            <ArrowRight size={24} className="text-gray-600" />
          </button>
          <h1 className="text-lg font-bold text-gray-800">تفاصيل الحجز</h1>
          <div></div>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">الموقع</label>
            <div className="relative">
              <input
                type="text"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="input-field pl-10"
                placeholder="اختر موقعك"
              />
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-medium text-gray-700">اختيار السيارة</label>
              <button className="flex items-center gap-1 text-primary-600 text-sm">
                <Plus size={16} />
                إضافة سيارة جديدة
              </button>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <input
                type="text"
                className="input-field"
                placeholder="أدخل تفاصيل السيارة"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">اللون</label>
            <div className="flex gap-2 flex-wrap">
              {colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (selectedColors.includes(index)) {
                      setSelectedColors(selectedColors.filter(i => i !== index));
                    } else {
                      setSelectedColors([...selectedColors, index]);
                    }
                  }}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColors.includes(index) 
                      ? 'border-gray-800 scale-110' 
                      : 'border-gray-300'
                  } transition-all duration-200`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">اللوحة</label>
            <input
              type="text"
              className="input-field"
              placeholder="الرياض، حي شبرا 4231"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">ماركة السيارة</label>
            <div className="bg-gray-50 p-4 rounded-lg">
              <button className="w-full text-right text-gray-600">البحث... ✕</button>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200">
          <button onClick={handleSubmit} className="btn-primary">
            تأكيد
          </button>
        </div>
      </div>
    </div>
  );
}