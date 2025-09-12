import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CreditCard, Plus, Calendar, MapPin, Car, Clock, Star, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function PaymentMethod() {
  const navigate = useNavigate();
  const { booking, updateBooking } = useApp();
  const [selectedPayment, setSelectedPayment] = useState('card1');
  const [selectedNote, setSelectedNote] = useState('complete');
  const [showPromoPopup, setShowPromoPopup] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<{code: string, discount: number} | null>(null);

  const promoCodes = {
    'SAVE10': { discount: 10, type: 'percentage' },
    'SAVE20': { discount: 20, type: 'fixed' },
    'WELCOME': { discount: 15, type: 'percentage' },
    'FIRST': { discount: 25, type: 'fixed' }
  };

  const calculateDiscount = (total: number, promoData: {discount: number, type: string}) => {
    if (promoData.type === 'percentage') {
      return (total * promoData.discount) / 100;
    }
    return promoData.discount;
  };

  const getTotal = () => {
    const baseTotal = booking.totalPrice || 74.44;
    if (appliedPromo) {
      const discount = calculateDiscount(baseTotal, promoCodes[appliedPromo.code as keyof typeof promoCodes]);
      return Math.max(0, baseTotal - discount);
    }
    return baseTotal;
  };

  const getDiscountAmount = () => {
    if (appliedPromo) {
      const baseTotal = booking.totalPrice || 74.44;
      return calculateDiscount(baseTotal, promoCodes[appliedPromo.code as keyof typeof promoCodes]);
    }
    return 0;
  };

  const handleSubmit = () => {
    updateBooking({
      promoCode: appliedPromo?.code || '',
      discount: getDiscountAmount(),
      finalPrice: getTotal()
    });
    navigate('/tracking');
  };

  const handlePromoSubmit = () => {
    const upperPromoCode = promoCode.toUpperCase();
    if (promoCodes[upperPromoCode as keyof typeof promoCodes]) {
      const promoData = promoCodes[upperPromoCode as keyof typeof promoCodes];
      setAppliedPromo({ code: upperPromoCode, discount: promoData.discount });
      alert(`تم تطبيق الرمز الترويجي! خصم ${promoData.type === 'percentage' ? promoData.discount + '%' : promoData.discount + ' ريال'}`);
    } else {
      alert('رمز ترويجي غير صحيح');
    }
    setPromoCode('');
    setShowPromoPopup(false);
  };

  return (
    <div className="screen-container bg-gray-50">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="bg-white flex items-center justify-between p-4 shadow-sm">
          <button onClick={() => navigate('/address')}>
            <ArrowRight size={24} className="text-gray-600" />
          </button>
          <h1 className="text-lg font-almarai font-bold text-gray-800">تأكيد الحجز</h1>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Calendar size={16} />
            <span className="font-arabic-city">تاريخ ووقت الحجز</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {/* Map Section */}
          <div className="bg-gray-300 h-48 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={32} className="text-gray-600 mx-auto mb-2" />
                <p className="text-gray-600 text-sm font-arabic-city">خريطة الموقع</p>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
            </div>
            <button className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-sm">
              <span className="text-xs font-arabic-city text-gray-600">Locate me</span>
            </button>
          </div>

          {/* Location and Date Info */}
          <div className="bg-white p-4 border-b border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-600" />
                <span className="text-sm font-arabic-city text-gray-600">العنوان</span>
              </div>
              <span className="text-sm font-almarai font-medium text-gray-800">الرياض، ح. شارع 4231</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-gray-600" />
                <span className="text-sm font-arabic-city text-gray-600">التاريخ الحجز</span>
              </div>
              <span className="text-sm font-almarai font-medium text-gray-800">December 23, 2025</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-gray-600" />
                <span className="text-sm font-arabic-city text-gray-600">وقت الحجز</span>
              </div>
              <span className="text-sm font-almarai font-medium text-gray-800">10:00 AM</span>
            </div>
          </div>

          {/* Vehicle Section */}
          <div className="bg-white p-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Car size={20} className="text-gray-600" />
                <div>
                  <p className="text-sm font-arabic-city text-gray-600">المركبة</p>
                  <p className="font-almarai font-medium text-gray-800">مركبة 1</p>
                  <p className="text-xs font-arabic-city text-gray-500">خدمة تجريبية</p>
                </div>
              </div>
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-almarai">
                تغيير
              </button>
            </div>
          </div>

          {/* Orders Note - Delivery Options */}
          <div className="p-4 mx-4 mt-4">
            <h3 className="text-lg font-almarai font-bold text-gray-800 mb-4 text-right">ملاحظات للطلبات</h3>
            
            <div className="grid grid-cols-3 gap-3 mb-4">
              {/* Home Delivery */}
              <button 
                onClick={() => setSelectedNote('internal')}
                className={`rounded-xl p-3 text-center border-2 transition-all ${
                  selectedNote === 'internal' 
                    ? 'bg-primary-50 border-primary-400' 
                    : 'bg-gray-50 border-gray-200 hover:border-primary-300'
                }`}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Car size={20} className="text-primary-600" />
                </div>
                <p className="text-xs font-almarai text-primary-700">غسيل داخلي</p>
                <p className="text-xs font-almarai text-primary-700">فقط</p>
              </button>

              {/* External Wash */}
              <button 
                onClick={() => setSelectedNote('external')}
                className={`rounded-xl p-3 text-center border-2 transition-all ${
                  selectedNote === 'external' 
                    ? 'bg-primary-50 border-primary-400' 
                    : 'bg-gray-50 border-gray-200 hover:border-primary-300'
                }`}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Car size={20} className="text-primary-600" />
                </div>
                <p className="text-xs font-almarai text-primary-700">غسيل خارجي</p>
                <p className="text-xs font-almarai text-primary-700">فقط</p>
              </button>

              {/* Complete Service - Selected */}
              <button 
                onClick={() => setSelectedNote('complete')}
                className={`rounded-xl p-3 text-center border-2 transition-all ${
                  selectedNote === 'complete' 
                    ? 'bg-primary-50 border-primary-400' 
                    : 'bg-gray-50 border-gray-200 hover:border-primary-300'
                }`}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Car size={20} className="text-primary-600" />
                </div>
                <p className="text-xs font-almarai text-primary-700">كامل</p>
              </button>
            </div>

            {/* Add Promo Code Button */}
            <button 
              onClick={() => setShowPromoPopup(true)}
              className="w-full flex items-center justify-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-600 hover:bg-gray-100 transition-colors"
            >
              {appliedPromo ? (
                <>
                  <span className="font-almarai text-green-700">
                    {appliedPromo.code} - خصم {getDiscountAmount().toFixed(2)} ريال
                  </span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setAppliedPromo(null);
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X size={16} />
                  </button>
                </>
              ) : (
                <>
                  <Plus size={16} className="text-gray-600" />
                  <span className="font-almarai text-gray-700">إضافة الرمز الترويجي</span>
                </>
              )}
            </button>
          </div>

          {/* Order Details */}
          <div className="bg-white p-4 mx-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-almarai font-bold text-gray-800 mb-4 text-right">تفاصيل الحجز</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-almarai text-gray-600">غسيل</span>
                <span className="font-almarai text-gray-800">1</span>
                <span className="font-almarai text-gray-800">ر.س {(booking.basePrice || 74.44).toFixed(2)}</span>
              </div>
              {booking.extraServices && booking.extraServices.length > 0 && (
                <div className="flex justify-between items-center">
                  <span className="text-sm font-almarai text-gray-600">خدمات إضافية</span>
                  <span className="font-almarai text-gray-800">{booking.extraServices.length}</span>
                  <span className="font-almarai text-gray-800">ر.س {((booking.totalPrice || 74.44) - (booking.basePrice || 74.44)).toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between items-center">
                <span className="text-sm font-almarai text-gray-600">المبلغ قبل الضريبة</span>
                <span className="font-almarai text-gray-800">ر.س {(booking.totalPrice || 74.44).toFixed(2)}</span>
              </div>
              {appliedPromo && (
                <div className="flex justify-between items-center text-green-600">
                  <span className="text-sm font-almarai">خصم ({appliedPromo.code})</span>
                  <span className="font-almarai">- ر.س {getDiscountAmount().toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between items-center">
                <span className="text-sm font-almarai text-gray-600">ضريبة القيمة المضافة</span>
                <span className="font-almarai text-gray-800">ر.س {(getTotal() * 0.15).toFixed(2)}</span>
              </div>
              <hr className="border-gray-300" />
              <div className="flex justify-between items-center text-lg font-bold">
                <span className="font-almarai text-gray-800">الإجمالي النهائي</span>
                <span className="font-almarai text-primary-600">ر.س {(getTotal() + (getTotal() * 0.15)).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Confirm Button */}
        <div className="bg-white p-4 border-t border-gray-200">
          <button 
            onClick={handleSubmit}
            className="w-full bg-primary-600 text-white font-almarai font-bold py-4 px-6 rounded-xl hover:bg-primary-700 transition-colors"
          >
            تأكيد
          </button>
        </div>

        {/* Promo Code Popup */}
        {showPromoPopup && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-almarai font-bold text-gray-800">إضافة رمز ترويجي</h3>
                <button 
                  onClick={() => setShowPromoPopup(false)}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <X size={20} className="text-gray-600" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-almarai font-medium text-gray-700 mb-2">الرمز الترويجي</label>
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="أدخل الرمز الترويجي"
                  />
                  <div className="mt-2 text-xs text-gray-500">
                    <p>أكواد تجريبية: SAVE10, SAVE20, WELCOME, FIRST</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={handlePromoSubmit}
                    disabled={!promoCode}
                    className="flex-1 bg-primary-600 text-white font-almarai font-medium py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    تطبيق
                  </button>
                  <button
                    onClick={() => setShowPromoPopup(false)}
                    className="flex-1 bg-gray-100 text-gray-700 font-almarai font-medium py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    إلغاء
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