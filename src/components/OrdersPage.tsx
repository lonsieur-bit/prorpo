import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Clock, CheckCircle, XCircle, Car, MapPin } from 'lucide-react';

interface Order {
  id: string;
  service: string;
  date: string;
  time: string;
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  price: number;
  location: string;
  carDetails: string;
}

export default function OrdersPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'current' | 'history'>('current');

  const orders: Order[] = [
    {
      id: '92587879',
      service: 'غسيل السيارة الشامل',
      date: '20 مارس 2024',
      time: '10:00 صباحاً',
      status: 'in_progress',
      price: 399,
      location: 'الرياض، حي شبرا 4231',
      carDetails: 'تويوتا كامري 2022'
    },
    {
      id: '92587878',
      service: 'غسيل السيارة',
      date: '18 مارس 2024',
      time: '02:00 مساءً',
      status: 'completed',
      price: 299,
      location: 'الرياض، حي الملز',
      carDetails: 'هوندا أكورد 2021'
    },
    {
      id: '92587877',
      service: 'غسيل وتلميع',
      date: '15 مارس 2024',
      time: '11:30 صباحاً',
      status: 'cancelled',
      price: 450,
      location: 'الرياض، حي النرجس',
      carDetails: 'نيسان التيما 2020'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'في الانتظار';
      case 'in_progress': return 'قيد التنفيذ';
      case 'completed': return 'مكتمل';
      case 'cancelled': return 'ملغي';
      default: return 'غير محدد';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock size={16} />;
      case 'in_progress': return <Car size={16} />;
      case 'completed': return <CheckCircle size={16} />;
      case 'cancelled': return <XCircle size={16} />;
      default: return <Clock size={16} />;
    }
  };

  const currentOrders = orders.filter(order => 
    order.status === 'pending' || order.status === 'in_progress'
  );
  
  const historyOrders = orders.filter(order => 
    order.status === 'completed' || order.status === 'cancelled'
  );

  const displayOrders = activeTab === 'current' ? currentOrders : historyOrders;

  return (
    <div className="screen-container">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <button onClick={() => navigate('/home')}>
            <ArrowRight size={24} className="text-gray-600" />
          </button>
          <h1 className="text-lg font-almarai font-bold text-gray-800">طلباتي</h1>
          <div></div>
        </div>

        {/* Tabs */}
        <div className="flex bg-gray-50 mx-6 mt-4 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('current')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-almarai font-medium transition-colors ${
              activeTab === 'current'
                ? 'bg-white text-primary-600 shadow-sm'
                : 'text-gray-600'
            }`}
          >
            الطلبات الحالية ({currentOrders.length})
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-almarai font-medium transition-colors ${
              activeTab === 'history'
                ? 'bg-white text-primary-600 shadow-sm'
                : 'text-gray-600'
            }`}
          >
            السجل ({historyOrders.length})
          </button>
        </div>

        {/* Orders List */}
        <div className="flex-1 overflow-y-auto p-6">
          {displayOrders.length === 0 ? (
            <div className="text-center py-12">
              <Car size={48} className="text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-almarai font-bold text-gray-600 mb-2">
                {activeTab === 'current' ? 'لا توجد طلبات حالية' : 'لا يوجد سجل طلبات'}
              </h3>
              <p className="text-sm font-arabic-city text-gray-500">
                {activeTab === 'current' 
                  ? 'احجز خدمة غسيل السيارة الآن'
                  : 'ستظهر طلباتك المكتملة هنا'
                }
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {displayOrders.map((order) => (
                <div key={order.id} className="bg-white border border-gray-200 rounded-xl p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-almarai font-bold text-gray-800 mb-1">{order.service}</h3>
                      <p className="text-sm font-arabic-city text-gray-600">طلب رقم: {order.id}</p>
                    </div>
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      {getStatusText(order.status)}
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock size={16} />
                      <span className="font-arabic-city">{order.date} - {order.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin size={16} />
                      <span className="font-arabic-city">{order.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Car size={16} />
                      <span className="font-arabic-city">{order.carDetails}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-almarai font-bold text-primary-600">
                      {order.price} ريال
                    </span>
                    <div className="flex gap-2">
                      {order.status === 'in_progress' && (
                        <button 
                          onClick={() => navigate('/tracking')}
                          className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
                        >
                          تتبع الطلب
                        </button>
                      )}
                      <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">
                        التفاصيل
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Action */}
        {displayOrders.length === 0 && activeTab === 'current' && (
          <div className="p-6 border-t border-gray-200">
            <button 
              onClick={() => navigate('/booking')}
              className="w-full btn-primary"
            >
              احجز خدمة جديدة
            </button>
          </div>
        )}
      </div>
    </div>
  );
}