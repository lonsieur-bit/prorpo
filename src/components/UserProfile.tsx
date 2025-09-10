import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, User, Phone, Mail, Settings, HelpCircle } from 'lucide-react';
import StatusBar from './StatusBar';
import { useApp } from '../context/AppContext';

export default function UserProfile() {
  const navigate = useNavigate();
  const { user } = useApp();

  const menuItems = [
    { icon: Phone, label: 'طلبان', color: 'text-pink-600' },
    { icon: Settings, label: 'معلومات حسابي', color: 'text-gray-600' },
    { icon: HelpCircle, label: 'الدعم الفني المساعد', color: 'text-blue-600' },
    { icon: Settings, label: 'اعدادات وإشعارات', color: 'text-gray-600' }
  ];

  return (
    <div className="screen-container">
      <StatusBar />
      <div className="flex flex-col h-full">
        <div className="bg-gradient-to-r from-primary-600 to-secondary-500 text-white p-6">
          <button onClick={() => navigate('/home')} className="mb-4">
            <ArrowRight size={24} />
          </button>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <User size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">{user.name}</h1>
              <p className="text-white/80">{user.phone}</p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-6">
          <div className="space-y-1">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center gap-4 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors"
              >
                <item.icon size={20} className={item.color} />
                <span className="flex-1 text-right text-gray-700">{item.label}</span>
                <ArrowRight size={16} className="text-gray-400 rotate-180" />
              </button>
            ))}
          </div>

          <div className="mt-8 bg-gray-50 rounded-lg p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">التعليقات والتعليقات</h2>
            
            <div className="bg-primary-100 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-primary-800 font-medium">الدعم الفني</span>
                <Phone size={16} className="text-primary-600" />
              </div>
              <p className="text-primary-700 text-sm">{user.email}</p>
              <p className="text-primary-600 text-xs">+964</p>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-primary-600 text-white p-3 rounded-lg text-sm">
                اتصال
              </button>
              <button className="flex-1 bg-secondary-600 text-white p-3 rounded-lg text-sm">
                WhatsApp
              </button>
              <button className="flex-1 bg-green-600 text-white p-3 rounded-lg text-sm">
                Telegram
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}