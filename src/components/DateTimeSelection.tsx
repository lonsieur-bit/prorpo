import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

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

  const weekDays = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];

  const handleSubmit = () => {
    navigate('/address');
  };

  return (
    <div className="screen-container">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <button onClick={() => navigate('/booking')}>
            <ArrowRight size={24} className="text-gray-600" />
          </button>
          <h1 className="text-lg font-almarai font-bold text-gray-800">اختيار التاريخ والوقت</h1>
          <div></div>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-almarai font-bold text-gray-800">التاريخ</h2>
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
            <h2 className="text-lg font-almarai font-bold text-gray-800 mb-4">الساعات المتاحة</h2>
            
            <div className="mb-4">
              <h3 className="text-sm font-almarai font-medium text-gray-700 mb-2">صباحاً</h3>
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
              <h3 className="text-sm font-almarai font-medium text-gray-700 mb-2">مساءً</h3>
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
            <h2 className="text-lg font-almarai font-bold text-gray-800 mb-4">الخدمات الإضافية</h2>
            <div className="grid grid-cols-3 gap-2">
              {/* Service 1 - Cleaning (Bucket) */}
              <div className="bg-white border border-gray-200 rounded-xl p-3 text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-sm"></div>
                </div>
                <h3 className="font-almarai font-medium text-gray-800 mb-1 text-xs">تنظيف شامل</h3>
                <p className="text-xs font-arabic-city text-gray-500 mb-2">25 ر.س</p>
                <button className="w-full bg-primary-600 text-white py-1 px-2 rounded-lg text-xs hover:bg-primary-700 transition-colors">
                  إضافة
                </button>
              </div>

              {/* Service 2 - Wax (Bottle) */}
              <div className="bg-white border border-gray-200 rounded-xl p-3 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-4 h-6 bg-orange-500 rounded-sm"></div>
                </div>
                <h3 className="font-almarai font-medium text-gray-800 mb-1 text-xs">شمع</h3>
                <p className="text-xs font-arabic-city text-gray-500 mb-2">15 ر.س</p>
                <button className="w-full bg-orange-500 text-white py-1 px-2 rounded-lg text-xs hover:bg-orange-600 transition-colors">
                  إضافة
                </button>
              </div>

              {/* Service 3 - Interior Cleaning */}
              <div className="bg-white border border-gray-200 rounded-xl p-3 text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-4 bg-gray-600 rounded-sm"></div>
                </div>
                <h3 className="font-almarai font-medium text-gray-800 mb-1 text-xs">تنظيف داخلي</h3>
                <p className="text-xs font-arabic-city text-gray-500 mb-2">30 ر.س</p>
                <button className="w-full bg-gray-600 text-white py-1 px-2 rounded-lg text-xs hover:bg-gray-700 transition-colors">
                  إضافة
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Total Order Section - Updated Design */}
        <div className="bg-primary-600 text-white p-6 sticky bottom-0 z-10 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <img 
                  src="/شعار نشمي.pdf (3).png" 
                  alt="شعار نشمي" 
                  className="w-6 h-6 object-contain filter brightness-0 invert"
                />
              </div>
              <div>
                <p className="text-sm font-arabic-city opacity-90">إجمالي المبلغ</p>
                <p className="text-2xl font-almarai font-bold">74.44 ر.س</p>
              </div>
            </div>
            <button 
              onClick={handleSubmit}
              className="bg-white text-primary-600 font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              متابعة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}