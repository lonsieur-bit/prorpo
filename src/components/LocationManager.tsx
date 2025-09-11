import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, Plus, Navigation, Edit3, Trash2, Home, Building2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface SavedAddress {
  id: string;
  name: string;
  address: string;
  type: 'home' | 'work' | 'other';
  coordinates: { lat: number; lng: number };
}

export default function LocationManager() {
  const navigate = useNavigate();
  const { user, updateUser } = useApp();
  const [savedAddresses, setSavedAddresses] = useState<SavedAddress[]>([
    {
      id: '1',
      name: 'المنزل',
      address: 'الرياض، حي شبرا 4231',
      type: 'home',
      coordinates: { lat: 24.7136, lng: 46.6753 }
    },
    {
      id: '2',
      name: 'العمل',
      address: 'الرياض، حي الملز',
      type: 'work',
      coordinates: { lat: 24.6877, lng: 46.7219 }
    }
  ]);
  const [currentLocation, setCurrentLocation] = useState('');
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: '',
    address: '',
    type: 'other' as 'home' | 'work' | 'other'
  });

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    setIsLoadingLocation(true);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          
          try {
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=ar`
            );
            const data = await response.json();
            
            const address = data.locality || data.city || data.principalSubdivision || 'موقع غير محدد';
            setCurrentLocation(`${address}, ${data.countryName || 'السعودية'}`);
          } catch (error) {
            console.error('Error getting address:', error);
            setCurrentLocation(`الموقع الحالي: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
          }
          
          setIsLoadingLocation(false);
        },
        (error) => {
          console.error('Error getting location:', error);
          setIsLoadingLocation(false);
        }
      );
    }
  };

  const openGoogleMaps = (address?: SavedAddress) => {
    if (address) {
      const url = `https://www.google.com/maps/search/?api=1&query=${address.coordinates.lat},${address.coordinates.lng}`;
      window.open(url, '_blank');
    } else {
      const url = 'https://www.google.com/maps';
      window.open(url, '_blank');
    }
  };

  const selectAddress = (address: SavedAddress) => {
    updateUser({ currentAddress: address.address });
    navigate(-1);
  };

  const deleteAddress = (id: string) => {
    setSavedAddresses(prev => prev.filter(addr => addr.id !== id));
  };

  const addNewAddress = () => {
    if (newAddress.name && newAddress.address) {
      const newAddr: SavedAddress = {
        id: Date.now().toString(),
        name: newAddress.name,
        address: newAddress.address,
        type: newAddress.type,
        coordinates: { lat: 24.7136, lng: 46.6753 } // Default coordinates
      };
      setSavedAddresses(prev => [...prev, newAddr]);
      setNewAddress({ name: '', address: '', type: 'other' });
      setShowAddForm(false);
    }
  };

  const getAddressIcon = (type: string) => {
    switch (type) {
      case 'home': return Home;
      case 'work': return Building2;
      default: return MapPin;
    }
  };

  return (
    <div className="screen-container">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <button onClick={() => navigate(-1)}>
            <ArrowRight size={24} className="text-gray-600" />
          </button>
          <h1 className="text-lg font-bold text-gray-800">إدارة المواقع</h1>
          <button onClick={() => setShowAddForm(true)}>
            <Plus size={24} className="text-primary-600" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {/* Current Location */}
          <div className="p-6 border-b border-gray-100">
            <div className="bg-primary-50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <Navigation size={20} className="text-primary-600" />
                <div className="flex-1">
                  <p className="font-medium text-primary-800">الموقع الحالي</p>
                  <p className="text-sm text-primary-600">
                    {isLoadingLocation ? 'جاري تحديد الموقع...' : currentLocation}
                  </p>
                </div>
                <button
                  onClick={getCurrentLocation}
                  disabled={isLoadingLocation}
                  className="text-primary-600 hover:text-primary-700 disabled:opacity-50"
                >
                  <Navigation size={20} className={isLoadingLocation ? 'animate-spin' : ''} />
                </button>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => openGoogleMaps()}
                  className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg text-sm"
                >
                  فتح الخريطة
                </button>
                <button
                  onClick={() => {
                    if (currentLocation) {
                      updateUser({ currentAddress: currentLocation });
                      navigate(-1);
                    }
                  }}
                  className="flex-1 bg-white text-primary-600 border border-primary-600 py-2 px-4 rounded-lg text-sm"
                >
                  استخدام هذا الموقع
                </button>
              </div>
            </div>
          </div>

          {/* Saved Addresses */}
          <div className="p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">العناوين المحفوظة</h2>
            
            <div className="space-y-3">
              {savedAddresses.map((address) => {
                const IconComponent = getAddressIcon(address.type);
                return (
                  <div key={address.id} className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-gray-100 p-2 rounded">
                        <IconComponent size={16} className="text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">{address.name}</p>
                        <p className="text-sm text-gray-600">{address.address}</p>
                      </div>
                      <button
                        onClick={() => deleteAddress(address.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    
                    <div className="flex gap-2">
                      <button
                        onClick={() => selectAddress(address)}
                        className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg text-sm"
                      >
                        اختيار
                      </button>
                      <button
                        onClick={() => openGoogleMaps(address)}
                        className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm"
                      >
                        عرض على الخريطة
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Add New Address Modal */}
        {showAddForm && (
          <div className="absolute inset-0 bg-black/50 flex items-end">
            <div className="bg-white w-full rounded-t-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">إضافة عنوان جديد</h3>
                <button onClick={() => setShowAddForm(false)}>
                  <ArrowRight size={24} className="text-gray-600" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">اسم العنوان</label>
                  <input
                    type="text"
                    value={newAddress.name}
                    onChange={(e) => setNewAddress(prev => ({ ...prev, name: e.target.value }))}
                    className="input-field"
                    placeholder="مثال: المنزل، العمل"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">العنوان</label>
                  <input
                    type="text"
                    value={newAddress.address}
                    onChange={(e) => setNewAddress(prev => ({ ...prev, address: e.target.value }))}
                    className="input-field"
                    placeholder="أدخل العنوان التفصيلي"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">نوع العنوان</label>
                  <select
                    value={newAddress.type}
                    onChange={(e) => setNewAddress(prev => ({ ...prev, type: e.target.value as any }))}
                    className="input-field"
                  >
                    <option value="home">المنزل</option>
                    <option value="work">العمل</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={addNewAddress}
                    className="flex-1 btn-primary"
                  >
                    حفظ العنوان
                  </button>
                  <button
                    onClick={() => openGoogleMaps()}
                    className="flex-1 btn-secondary"
                  >
                    اختيار من الخريطة
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}