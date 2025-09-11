import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import StatusBar from './StatusBar';

export default function DateTimeSelection() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(18);
  const [selectedTime, setSelectedTime] = useState('10:00');

  const morningTimes = ['09:00', '10:00', '11:00', '12:00'];
  const eveningTimes = ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00'];

  const calendar = [
    [null, null, null, 1, 2, 3, 4],
    [5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30, 31, null]
  ];

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const handleSubmit = () => {
    navigate('/address');
  };

  return (
    <div className="screen-container">
      <StatusBar />
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <button onClick={() => navigate('/booking')}>
            <ArrowRight size={24} className="text-gray-600" />
          </button>
          <h1 className="text-lg font-bold text-gray-800">تفاصيل الحجز</h1>
          <div></div>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800">التاريخ</h2>
              <div className="flex items-center gap-2">
                <ChevronRight size={20} className="text-gray-400" />
                <span className="text-sm text-gray-600">مارس 2024</span>
                <ChevronLeft size={20} className="text-gray-400" />
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="grid grid-cols-7 gap-1 mb-2">
                {weekDays.map((day) => (
                  <div key={day} className="text-center text-xs text-gray-500 p-2">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-1">
                {calendar.flat().map((date, index) => (
                  <button
                    key={index}
                    onClick={() => date && setSelectedDate(date)}
                    className={`p-2 text-sm rounded-lg transition-colors ${
                      date === selectedDate
                        ? 'bg-primary-600 text-white'
                        : date
                        ? 'hover:bg-gray-100 text-gray-700'
                        : 'text-transparent'
                    }`}
                    disabled={!date}
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">الساعات المتاحة</h2>
            
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">صباحاً</h3>
              <div className="grid grid-cols-4 gap-2">
                {morningTimes.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-2 text-sm rounded-lg border transition-colors ${
                      selectedTime === time
                        ? 'bg-primary-600 text-white border-primary-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-primary-300'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">مساءً</h3>
              <div className="grid grid-cols-4 gap-2">
                {eveningTimes.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-2 text-sm rounded-lg border transition-colors ${
                      selectedTime === time
                        ? 'bg-primary-600 text-white border-primary-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-primary-300'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">الخدمات الإضافية</h2>
            <div className="space-y-3">
              <div className="bg-primary-100 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-primary-800 font-medium">+ موافق</span>
                  <button className="bg-primary-600 text-white px-3 py-1 rounded text-sm">
                    إضافة
                  </button>
                </div>
              </div>
              <div className="bg-secondary-100 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-secondary-800 font-medium">+ موافق</span>
                  <button className="bg-secondary-600 text-white px-3 py-1 rounded text-sm">
                    إضافة
                  </button>
                </div>
              </div>
              <div className="bg-green-100 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-green-800 font-medium">+ موافق</span>
                  <button className="bg-green-600 text-white px-3 py-1 rounded text-sm">
                    إضافة
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-bold text-gray-800">إجمالي الطلب</span>
            <span className="text-xl font-bold text-primary-600">700 ريال</span>
          </div>
          <button onClick={handleSubmit} className="btn-primary">
            تأكيد
          </button>
        </div>
      </div>
    </div>
  );
}