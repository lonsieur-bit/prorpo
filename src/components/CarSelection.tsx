import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Plus, Car } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface SavedCar {
  id: string;
  brand: string;
  model: string;
  year: string;
  color: string;
  plateNumber: string;
  type: 'sedan' | 'suv' | 'hatchback' | 'truck';
}

export default function CarSelection() {
  const navigate = useNavigate();
  const { updateUser } = useApp();
  const [selectedCar, setSelectedCar] = useState<string | null>(null);
  
  const savedCars: SavedCar[] = [
    {
      id: '1',
      brand: 'تويوتا',
      model: 'كامري',
      year: '2022',
      color: '#6B7280',
      plateNumber: 'أ ب ج 1234',
      type: 'sedan'
    }
  ];

  const colors = [
    { name: 'ذهبي', value: '#D97706' },
    { name: 'أحمر', value: '#DC2626' },
    { name: 'أخضر', value: '#059669' },
    { name: 'أزرق', value: '#1E40AF' },
    { name: 'رمادي', value: '#6B7280' },
    { name: 'رمادي فاتح', value: '#9CA3AF' }
  ];

  const [newCarForm, setNewCarForm] = useState({
    brand: '',
    model: '',
    year: '',
    color: '#6B7280',
    plateNumber: '',
    type: 'sedan' as 'sedan' | 'suv' | 'hatchback' | 'truck'
  });

  const carTypes = [
    { value: 'sedan', label: 'سيدان' },
    { value: 'suv', label: 'دفع رباعي' },
    { value: 'hatchback', label: 'هاتشباك' },
    { value: 'truck', label: 'شاحنة' }
  ];

  const getColorName = (colorValue: string) => {
    const color = colors.find(c => c.value === colorValue);
    return color ? color.name : 'غير محدد';
  };

  const selectCar = (car: SavedCar) => {
    setSelectedCar(car.id);
    updateUser({ 
      selectedCar: {
        brand: car.brand,
        model: car.model,
        year: car.year,
        color: getColorName(car.color),
        plateNumber: car.plateNumber
      }
    });
  };

  return (
    <div className="screen-container">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <button onClick={() => navigate(-1)}>
            <ArrowRight size={24} className="text-gray-600" />
          </button>
          <h1 className="text-lg font-almarai font-bold text-gray-800">اختيار السيارة</h1>
          <div></div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {/* Add New Car Section */}
          <div className="bg-white border-2 border-dashed border-primary-300 rounded-xl p-6 mb-6 text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus size={24} className="text-primary-600" />
            </div>
            <h3 className="font-almarai font-bold text-gray-800 mb-2">أضف سيارة</h3>
            <p className="text-sm font-arabic-city text-gray-600 mb-4">
              استطيع إيجاد سيارتك بدقة أكثر (اختياري)
            </p>
            <button 
              onClick={() => navigate('/cars')}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium"
            >
              ضبط في أي وقت
            </button>
          </div>

          {/* Saved Cars */}
          {savedCars.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-almarai font-bold text-gray-800 mb-4">السيارات المحفوظة</h2>
              <div className="space-y-3">
                {savedCars.map((car) => (
                  <div 
                    key={car.id}
                    className={`bg-white border-2 rounded-xl p-4 cursor-pointer transition-all ${
                      selectedCar === car.id 
                        ? 'border-primary-600 bg-primary-50' 
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                    onClick={() => selectCar(car)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <Car size={24} className="text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-almarai font-bold text-gray-800">
                          {car.brand} {car.model}
                        </h3>
                        <p className="text-sm font-arabic-city text-gray-600">
                          {car.year} • {getColorName(car.color)} • {car.plateNumber}
                        </p>
                      </div>
                      <div 
                        className={`w-8 h-8 rounded-full border-2 ${
                          car.color === '#F9FAFB' ? 'border-gray-400' : 'border-gray-300'
                        }`}
                        style={{ backgroundColor: car.color }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Add Form */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="font-almarai font-bold text-gray-800 mb-4">إضافة سريعة</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-almarai font-medium text-gray-700 mb-2">ماركة السيارة</label>
                <input
                  type="text"
                  value={newCarForm.brand}
                  onChange={(e) => setNewCarForm(prev => ({ ...prev, brand: e.target.value }))}
                  className="input-field"
                  placeholder="مثال: تويوتا، هوندا، نيسان"
                />
              </div>

              <div>
                <label className="block text-sm font-almarai font-medium text-gray-700 mb-2">نوع السيارة</label>
                <select
                  value={newCarForm.type}
                  onChange={(e) => setNewCarForm(prev => ({ ...prev, type: e.target.value as any }))}
                  className="input-field"
                >
                  {carTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-almarai font-medium text-gray-700 mb-2">طراز السيارة</label>
                <input
                  type="text"
                  value={newCarForm.model}
                  onChange={(e) => setNewCarForm(prev => ({ ...prev, model: e.target.value }))}
                  className="input-field"
                  placeholder="مثال: كامري، أكورد"
                />
              </div>

              <div>
                <label className="block text-sm font-almarai font-medium text-gray-700 mb-2">لون السيارة</label>
                <div className="flex gap-2 flex-wrap">
                  {colors.map((color) => (
                    <button
                      key={color.value}
                      type="button"
                      onClick={() => setNewCarForm(prev => ({ ...prev, color: color.value }))}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        newCarForm.color === color.value 
                          ? 'border-primary-600 scale-110' 
                          : color.value === '#F9FAFB' 
                          ? 'border-gray-400' 
                          : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color.value }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-almarai font-medium text-gray-700 mb-2">لوحة السيارة</label>
                <input
                  type="text"
                  value={newCarForm.plateNumber}
                  onChange={(e) => setNewCarForm(prev => ({ ...prev, plateNumber: e.target.value }))}
                  className="input-field"
                  placeholder="123456 ABC"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200">
          <button 
            onClick={() => {
              if (newCarForm.brand && newCarForm.model) {
                updateUser({ 
                  selectedCar: {
                    brand: newCarForm.brand,
                    model: newCarForm.model,
                    year: newCarForm.year,
                    color: getColorName(newCarForm.color),
                    plateNumber: newCarForm.plateNumber
                  }
                });
              }
              navigate(-1);
            }}
            className="w-full bg-primary-600 text-white font-almarai font-bold py-4 px-6 rounded-xl hover:bg-primary-700 transition-colors"
          >
            {newCarForm.brand && newCarForm.model ? 'اختيار هذه السيارة' : 'العودة'}
          </button>
        </div>
      </div>
    </div>
  );
}