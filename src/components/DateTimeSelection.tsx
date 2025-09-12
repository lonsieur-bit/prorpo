import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function DateTimeSelection() {
  const navigate = useNavigate();
  const { updateBooking } = useApp();
  const [selectedDate, setSelectedDate] = useState(18);
  const [selectedTime, setSelectedTime] = useState('10:00');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const morningTimes = ['09:00', '10:00', '11:00', '12:00'];
  const eveningTimes = ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00'];

  const extraServices = [
    { id: 'deep-clean', name: 'تنظيف شامل', price: 25 },
    { id: 'wax', name: 'شمع', price: 15 },
    { id: 'interior', name: 'تنظيف داخلي', price: 30 }
  ];

  const basePrice = 74.44;

  const calculateTotal = () => {
    const servicesTotal = selectedServices.reduce((total, serviceId) => {
      const service = extraServices.find(s => s.id === serviceId);
      return total + (service ? service.price : 0);
    }, 0);
    return basePrice + servicesTotal;
  };

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };
  const calendar = [
    [null, null, null, 1, 2, 3, 4],
    [5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30, 31, null]
  ];

  const weekDays = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];

  const handleSubmit = () => {
    const total = calculateTotal();
    updateBooking({
      date: `${selectedDate} مارس`,
      time: selectedTime,
      extraServices: selectedServices,
      basePrice: basePrice,
      totalPrice: total
    });
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
              {extraServices.map((service, index) => {
                const isSelected = selectedServices.includes(service.id);
                const colors = [
                  { bg: 'bg-primary-100', button: 'bg-primary-600 hover:bg-primary-700', icon: 'bg-primary-600' },
                  { bg: 'bg-orange-100', button: 'bg-orange-500 hover:bg-orange-600', icon: 'bg-orange-500' },
                  { bg: 'bg-gray-100', button: 'bg-gray-600 hover:bg-gray-700', icon: 'bg-gray-600' }
                ];
                const color = colors[index];
                
                return (
                  <div key={service.id} className={`bg-white border-2 rounded-xl p-3 text-center transition-all ${
                    isSelected ? 'border-primary-500 bg-primary-50' : 'border-gray-200'
                  }`}>
                    <div className={`w-12 h-12 ${color.bg} rounded-full flex items-center justify-center mx-auto mb-3`}>
                      <div className={`${index === 0 ? 'w-6 h-6' : index === 1 ? 'w-4 h-6' : 'w-6 h-4'} ${color.icon} rounded-sm`}></div>
                    </div>
                    <h3 className="font-almarai font-medium text-gray-800 mb-1 text-xs">{service.name}</h3>
                    <p className="text-xs font-arabic-city text-gray-500 mb-2">{service.price} ر.س</p>
                    <button 
                      onClick={() => toggleService(service.id)}
                      className={`w-full py-1 px-2 rounded-lg text-xs transition-colors ${
                        isSelected 
                          ? 'bg-red-500 hover:bg-red-600 text-white' 
                          : `${color.button} text-white`
                      }`}
                    >
                      {isSelected ? 'إزالة' : 'إضافة'}
                    </button>
                  </div>
                );
              })}
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
                <p className="text-2xl font-almarai font-bold">{calculateTotal().toFixed(2)} ر.س</p>
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