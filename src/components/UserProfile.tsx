import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, User, Phone, Mail, Settings, HelpCircle, Gift, ShoppingBag } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function UserProfile() {
  const navigate = useNavigate();
  const { user } = useApp();

  const menuItems = [
    { icon: ShoppingBag, label: 'طلباتي', color: 'text-pink-600', route: '/orders' },
    { icon: User, label: 'معلومات حسابي', color: 'text-gray-600', route: '/account-info' },
    { icon: Gift, label: 'هدايا وعروض', color: 'text-orange-600', route: '/gifts' },
    { icon: HelpCircle, label: 'الدعم الفني المساعد', color: 'text-blue-600', route: '/support' },
    { icon: Settings, label: 'الإعدادات والإشعارات', color: 'text-gray-600', route: '/settings' }
  ];

  return (
    <div className="screen-container">
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
              <h1 className="text-xl font-almarai font-bold">{user.name}</h1>
              <p className="text-white/80 font-arabic-city">{user.phone}</p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-6">
          <div className="space-y-1">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(item.route)}
                className="w-full flex items-center gap-4 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors"
              >
                <item.icon size={20} className={item.color} />
                <span className="flex-1 text-right text-gray-700 font-arabic-city">{item.label}</span>
                <ArrowRight size={16} className="text-gray-400 rotate-180" />
              </button>
            ))}
          </div>

          <div className="mt-8 bg-gray-50 rounded-lg p-4">
            <h2 className="text-lg font-almarai font-bold text-gray-800 mb-4">معلومات التواصل</h2>
            
            <div className="bg-primary-100 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-primary-800 font-almarai font-medium">الدعم الفني</span>
                <Phone size={16} className="text-primary-600" />
              </div>
              <p className="text-primary-700 text-sm font-arabic-city">{user.email}</p>
              <p className="text-primary-600 text-xs font-arabic-city">{user.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}