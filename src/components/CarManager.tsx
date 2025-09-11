import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Plus, Car, Edit3, Trash2, Palette } from 'lucide-react';

interface SavedCar {
  id: string;
  brand: string;
  model: string;
  year: string;
  color: string;
  plateNumber: string;
  type: 'sedan' | 'suv' | 'hatchback' | 'truck';
}

export default function CarManager() {
  const navigate = useNavigate();
  const [savedCars, setSavedCars] = useState<SavedCar[]>([
    {
      id: '1',
      brand: 'تويوتا',
      model: 'كامري',
      year: '2022',
      color: '#1E40AF',
      plateNumber: 'أ ب ج 1234',
      type: 'sedan'
    },
    {
      id: '2',
      brand: 'هوندا',
      model: 'أكورد',
      year: '2021',
      color: '#DC2626',
      plateNumber: 'د هـ و 5678',
      type: 'sedan'
    }
  ]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCar, setNewCar] = useState({
    brand: '',
    model: '',
    year: '',
    color: '#6B7280',
    plateNumber: '',
    type: 'sedan' as 'sedan' | 'suv' | 'hatchback' | 'truck'
  });

  const colors = [
    { name: 'ذهبي', value: '#D97706' },
    { name: 'أحمر', value: '#DC2626' },
    { name: 'أخضر', value: '#059669' },
    { name: 'أزرق', value: '#1E40AF' },
    { name: 'رمادي', value: '#6B7280' },
    { name: 'رمادي فاتح', value: '#9CA3AF' },
    { name: 'أسود', value: '#1F2937' },
    { name: 'أبيض', value: '#F9FAFB' }
  ];

  const carTypes = [
    { value: 'sedan', label: 'سيدان' },
    { value: 'suv', label: 'دفع رباعي' },
    { value: 'hatchback', label: 'هاتشباك' },
    { value: 'truck', label: 'شاحنة' }
  ];

  const deleteCar = (id: string) => {
    setSavedCars(prev => prev.filter(car => car.id !== id));
  };

  const addNewCar = () => {
    if (newCar.brand && newCar.model && newCar.plateNumber) {
      const newCarData: SavedCar = {
        id: Date.now().toString(),
        ...newCar
      };
      setSavedCars(prev => [...prev, newCarData]);
      setNewCar({
        brand: '',
        model: '',
        year: '',
        color: '#6B7280',
        plateNumber: '',
        type: 'sedan'
      });
      setShowAddForm(false);
    }
  };

  const getColorName = (colorValue: string) => {
    const color = colors.find(c => c.value === colorValue);
    return color ? color.name : 'غير محدد';
  };

  return (
    <div className="screen-container">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <button onClick={() => navigate(-1)}>
            <ArrowRight size={24} className="text-gray-600" />
          </button>
          <h1 className="text-lg font-almarai font-bold text-gray-800">إدارة السيارات</h1>
          <button onClick={() => setShowAddForm(true)}>
            <Plus size={24} className="text-primary-600" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <h2 className="text-lg font-almarai font-bold text-gray-800 mb-4">السيارات المحفوظة</h2>
          
          <div className="space-y-3">
            {savedCars.map((car) => (
              <div key={car.id} className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-gray-100 p-2 rounded">
                    <Car size={20} className="text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-almarai font-bold text-gray-800">{car.brand} {car.model}</p>
                    <p className="text-sm font-arabic-city text-gray-600">
                      {car.year} • {getColorName(car.color)} • {car.plateNumber}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-6 h-6 rounded-full border-2 border-gray-300"
                      style={{ backgroundColor: car.color }}
                    ></div>
                    <button
                      onClick={() => deleteCar(car.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg text-sm">
                    اختيار
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm">
                    تعديل
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add New Car Modal */}
        {showAddForm && (
          <div className="absolute inset-0 bg-black/50 flex items-end">
            <div className="bg-white w-full rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-almarai font-bold text-gray-800">إضافة سيارة جديدة</h3>
                <button onClick={() => setShowAddForm(false)}>
                  <ArrowRight size={24} className="text-gray-600" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-almarai font-medium text-gray-700 mb-2">الماركة</label>
                  <input
                    type="text"
                    value={newCar.brand}
                    onChange={(e) => setNewCar(prev => ({ ...prev, brand: e.target.value }))}
                    className="input-field"
                    placeholder="مثال: تويوتا، هوندا، نيسان"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-almarai font-medium text-gray-700 mb-2">الموديل</label>
                  <input
                    type="text"
                    value={newCar.model}
                    onChange={(e) => setNewCar(prev => ({ ...prev, model: e.target.value }))}
                    className="input-field"
                    placeholder="مثال: كامري، أكورد، التيما"
                  />
                </div>

                <div>
                  <label className="block text-sm font-almarai font-medium text-gray-700 mb-2">السنة</label>
                  <input
                    type="text"
                    value={newCar.year}
                    onChange={(e) => setNewCar(prev => ({ ...prev, year: e.target.value }))}
                    className="input-field"
                    placeholder="مثال: 2022"
                  />
                </div>

                <div>
                  <label className="block text-sm font-almarai font-medium text-gray-700 mb-2">رقم اللوحة</label>
                  <input
                    type="text"
                    value={newCar.plateNumber}
                    onChange={(e) => setNewCar(prev => ({ ...prev, plateNumber: e.target.value }))}
                    className="input-field"
                    placeholder="مثال: أ ب ج 1234"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-almarai font-medium text-gray-700 mb-2">نوع السيارة</label>
                  <select
                    value={newCar.type}
                    onChange={(e) => setNewCar(prev => ({ ...prev, type: e.target.value as any }))}
                    className="input-field"
                  >
                    {carTypes.map(type => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-almarai font-medium text-gray-700 mb-2">اللون</label>
                  <div className="grid grid-cols-4 gap-3">
                    {colors.map((color) => (
                      <button
                        key={color.value}
                        type="button"
                        onClick={() => setNewCar(prev => ({ ...prev, color: color.value }))}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          newCar.color === color.value 
                            ? 'border-primary-600 scale-105' 
                            : 'border-gray-300'
                        }`}
                      >
                        <div 
                          className={`w-6 h-6 rounded-full mx-auto mb-1 ${
                            color.value === '#F9FAFB' ? 'border-2 border-gray-300' : 'border'
                          }`}
                          style={{ backgroundColor: color.value }}
                        ></div>
                        <span className="text-xs font-arabic-city">{color.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={addNewCar}
                  className="w-full btn-primary"
                >
                  حفظ السيارة
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}