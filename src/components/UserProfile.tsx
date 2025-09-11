import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, User, Phone, Mail, Settings, HelpCircle, Gift, ShoppingBag, ChevronLeft, Star } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function UserProfile() {
  const navigate = useNavigate();
  const { user } = useApp();

  const menuItems = [
    { 
      icon: ShoppingBag, 
      label: 'طلباتي', 
      subtitle: 'عرض جميع طلباتك',
      color: 'from-pink-500 to-rose-500', 
      iconColor: 'text-white',
      route: '/orders' 
    },
    { 
      icon: User, 
      label: 'معلومات حسابي', 
      subtitle: 'إدارة بياناتك الشخصية',
      color: 'from-blue-500 to-indigo-500', 
      iconColor: 'text-white',
      route: '/account-info' 
    },
    { 
      icon: Gift, 
      label: 'هدايا وعروض', 
      subtitle: 'اكتشف العروض المتاحة',
      color: 'from-orange-500 to-amber-500', 
      iconColor: 'text-white',
      route: '/gifts' 
    },
    { 
      icon: HelpCircle, 
      label: 'الدعم الفني المساعد', 
      subtitle: 'تواصل معنا للمساعدة',
      color: 'from-green-500 to-emerald-500', 
      iconColor: 'text-white',
      route: '/support' 
    },
    { 
      icon: Settings, 
      label: 'الإعدادات والإشعارات', 
      subtitle: 'تخصيص تجربتك',
      color: 'from-gray-500 to-slate-500', 
      iconColor: 'text-white',
      route: '/settings' 
    }
  ];

  return (
    <div className="screen-container bg-gray-50">
      <div className="flex flex-col h-full">
        {/* Header with curved background */}
        <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full"></div>
          
          <div className="relative z-10 p-6 pb-8">
            <button onClick={() => navigate('/home')} className="mb-6">
              <ArrowRight size={24} className="text-white" />
            </button>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                  <User size={36} className="text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-almarai font-bold mb-1">{user.name}</h1>
                <p className="text-white/80 font-arabic-city text-sm mb-2">{user.phone}</p>
                <div className="flex items-center gap-1">
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white/90 text-xs font-arabic-city mr-2">عضو مميز</span>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
                <p className="text-2xl font-almarai font-bold text-white">12</p>
                <p className="text-white/80 text-xs font-arabic-city">طلب مكتمل</p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
                <p className="text-2xl font-almarai font-bold text-white">4.8</p>
                <p className="text-white/80 text-xs font-arabic-city">التقييم</p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
                <p className="text-2xl font-almarai font-bold text-white">95%</p>
                <p className="text-white/80 text-xs font-arabic-city">نسبة الرضا</p>
              </div>
            </div>
          </div>

          {/* Logout Button */}
          <div className="mt-6">
            <button 
              onClick={() => navigate('/')}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-almarai font-bold py-4 px-6 rounded-2xl transition-all duration-200 hover:scale-[1.02] shadow-lg"
            >
              تسجيل الخروج
            </button>
          </div>
          {/* Curved bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gray-50 rounded-t-3xl"></div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 p-6 -mt-3">
          <div className="space-y-4">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(item.route)}
                className="w-full bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}>
                    <item.icon size={20} className={item.iconColor} />
                  </div>
                  <div className="flex-1 text-right">
                    <h3 className="font-almarai font-bold text-gray-800 mb-1">{item.label}</h3>
                    <p className="text-sm font-arabic-city text-gray-500">{item.subtitle}</p>
                  </div>
                  <ChevronLeft size={20} className="text-gray-400" />
                </div>
              </button>
            ))}
          </div>

          {/* Contact Information Card */}
          <div className="mt-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-5 border border-primary-100">
            <h2 className="text-lg font-almarai font-bold text-gray-800 mb-4 flex items-center gap-2">
              <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                <Phone size={12} className="text-white" />
              </div>
              معلومات التواصل
            </h2>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-white/70 rounded-xl">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Phone size={16} className="text-primary-600" />
                </div>
                <div className="flex-1">
                  <p className="font-almarai font-medium text-gray-800 text-sm">الهاتف</p>
                  <p className="text-xs font-arabic-city text-gray-600" dir="ltr">{user.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-white/70 rounded-xl">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Mail size={16} className="text-primary-600" />
                </div>
                <div className="flex-1">
                  <p className="font-almarai font-medium text-gray-800 text-sm">البريد الإلكتروني</p>
                  <p className="text-xs font-arabic-city text-gray-600" dir="ltr">{user.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}