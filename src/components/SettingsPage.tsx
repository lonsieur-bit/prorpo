import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Bell, Globe, Shield, Moon, Volume2 } from 'lucide-react';

export default function SettingsPage() {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    notifications: true
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const settingsItems = [
    {
      icon: Bell,
      label: 'الإشعارات',
      key: 'notifications' as keyof typeof settings,
      type: 'toggle'
    },
    {
      icon: Shield,
      label: 'الخصوصية والأمان',
      key: 'privacy' as keyof typeof settings,
      type: 'navigation'
    }
  ];

  return (
    <div className="screen-container">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <button onClick={() => navigate('/profile')}>
            <ArrowRight size={24} className="text-gray-600" />
          </button>
          <h1 className="text-lg font-almarai font-bold text-gray-800">الإعدادات والإشعارات</h1>
          <div></div>
        </div>

        <div className="flex-1 p-6">
          <div className="space-y-1">
            {settingsItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <item.icon size={20} className="text-gray-600" />
                  <span className="font-arabic-city text-gray-700">{item.label}</span>
                </div>
                
                {item.type === 'toggle' && (
                  <button
                    onClick={() => toggleSetting(item.key)}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings[item.key] ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        settings[item.key] ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                )}
                {item.type === 'navigation' && (
                  <ArrowRight size={16} className="text-gray-400 rotate-180" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-almarai font-bold text-gray-800 mb-4">حول التطبيق</h3>
            <div className="space-y-2">
              <p className="text-sm font-arabic-city text-gray-600">الإصدار: 1.0.0</p>
              <p className="text-sm font-arabic-city text-gray-600">آخر تحديث: يناير 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}