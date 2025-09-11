import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MessageCircle, Send } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function SupportPage() {
  const navigate = useNavigate();
  const { user } = useApp();
  const [ticketForm, setTicketForm] = useState({
    name: user.name,
    phone: user.phone,
    email: user.email,
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate('/profile');
    }, 2000);
  };

  if (showSuccess) {
    return (
      <div className="screen-container">
        <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-white">
          <div className="bg-primary-100 p-8 rounded-full mb-6">
            <MessageCircle size={64} className="text-primary-600" />
          </div>
          <h1 className="text-2xl font-almarai font-bold text-gray-800 mb-2">تم إرسال طلبك</h1>
          <p className="text-gray-600 font-arabic-city mb-8">
            سوف يتم إرسالة طلبك وجميع البيانات خلال 24 ساعة
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="screen-container">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <button onClick={() => navigate('/profile')}>
            <ArrowRight size={24} className="text-gray-600" />
          </button>
          <h1 className="text-lg font-almarai font-bold text-gray-800">الدعم الفني</h1>
          <div></div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
            <h2 className="text-lg font-almarai font-bold text-gray-800 mb-4">إنشاء تذكرة دعم</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-almarai font-medium text-gray-700 mb-2">الاسم الكامل</label>
                <input
                  type="text"
                  value={ticketForm.name}
                  onChange={(e) => setTicketForm(prev => ({ ...prev, name: e.target.value }))}
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-almarai font-medium text-gray-700 mb-2">رقم الجوال</label>
                <input
                  type="tel"
                  value={ticketForm.phone}
                  onChange={(e) => setTicketForm(prev => ({ ...prev, phone: e.target.value }))}
                  className="input-field"
                  dir="ltr"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-almarai font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  value={ticketForm.email}
                  onChange={(e) => setTicketForm(prev => ({ ...prev, email: e.target.value }))}
                  className="input-field"
                  dir="ltr"
                  placeholder="info@support.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-almarai font-medium text-gray-700 mb-2">الموضوع</label>
                <input
                  type="text"
                  value={ticketForm.subject}
                  onChange={(e) => setTicketForm(prev => ({ ...prev, subject: e.target.value }))}
                  className="input-field"
                  placeholder="اكتب موضوع طلبك هنا"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-almarai font-medium text-gray-700 mb-2">الرسالة</label>
                <textarea
                  value={ticketForm.message}
                  onChange={(e) => setTicketForm(prev => ({ ...prev, message: e.target.value }))}
                  className="input-field resize-none"
                  rows={4}
                  placeholder="اكتب تفاصيل طلبك هنا..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white font-almarai font-bold py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={20} />
                إرسال الطلب
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="text-lg font-almarai font-bold text-gray-800 mb-4">معلومات التواصل</h3>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                <Phone size={20} className="text-primary-600" />
                <div>
                  <p className="font-almarai font-medium text-gray-800">الهاتف</p>
                  <p className="text-sm font-arabic-city text-gray-600" dir="ltr">{user.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                <Mail size={20} className="text-primary-600" />
                <div>
                  <p className="font-almarai font-medium text-gray-800">البريد الإلكتروني</p>
                  <p className="text-sm font-arabic-city text-gray-600" dir="ltr">{user.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}