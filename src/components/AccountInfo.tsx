import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, User, Phone, Mail, Edit3 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function AccountInfo() {
  const navigate = useNavigate();
  const { user, updateUser } = useApp();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    phone: user.phone,
    email: user.email
  });

  const handleSave = () => {
    updateUser(formData);
    setIsEditing(false);
  };

  return (
    <div className="screen-container">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <button onClick={() => navigate('/profile')}>
            <ArrowRight size={24} className="text-gray-600" />
          </button>
          <h1 className="text-lg font-almarai font-bold text-gray-800">معلومات حسابي</h1>
          <button onClick={() => setIsEditing(!isEditing)}>
            <Edit3 size={20} className="text-primary-600" />
          </button>
        </div>

        <div className="flex-1 p-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
                <User size={32} className="text-primary-600" />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-almarai font-medium text-gray-700 mb-2">الاسم الكامل</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="input-field"
                  />
                ) : (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-arabic-city text-gray-800">{user.name}</p>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-almarai font-medium text-gray-700 mb-2">رقم الهاتف</label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="input-field"
                    dir="ltr"
                  />
                ) : (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-arabic-city text-gray-800" dir="ltr">{user.phone}</p>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-almarai font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="input-field"
                    dir="ltr"
                  />
                ) : (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-arabic-city text-gray-800" dir="ltr">{user.email}</p>
                  </div>
                )}
              </div>
            </div>

            {isEditing && (
              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleSave}
                  className="flex-1 bg-primary-600 text-white font-almarai font-medium py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  حفظ التغييرات
                </button>
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setFormData({ name: user.name, phone: user.phone, email: user.email });
                  }}
                  className="flex-1 bg-gray-100 text-gray-700 font-almarai font-medium py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  إلغاء
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}