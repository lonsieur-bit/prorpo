import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

export default function ServiceRating() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleRatingClick = (value: number) => {
    setRating(value);
  };

  const handleSubmit = () => {
    setShowSuccess(true);
    setTimeout(() => {
      navigate('/home');
    }, 2000);
  };

  if (showSuccess) {
    return (
      <div className="screen-container">
        <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-white">
          <div className="bg-primary-100 p-8 rounded-full mb-6">
            <CheckCircle size={64} className="text-primary-600" />
          </div>
          <h1 className="text-2xl font-almarai font-bold text-gray-800 mb-2">تم الدفع بنجاح</h1>
          <p className="text-gray-600 font-arabic-city mb-8">
            تم الدفع بنجاح وتأكيد الموعد
          </p>
          <button 
            onClick={() => navigate('/home')}
            className="w-full bg-primary-600 text-white font-almarai font-bold py-4 px-6 rounded-xl hover:bg-primary-700 transition-colors"
          >
            عرض تفاصيل الطلب
          </button>
          <button 
            onClick={() => navigate('/home')}
            className="w-full bg-gray-100 text-gray-700 font-almarai font-medium py-3 px-6 rounded-xl hover:bg-gray-200 transition-colors mt-3"
          >
            العودة إلى الرئيسية
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="screen-container">
      <div className="flex flex-col h-full bg-white">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <button onClick={() => navigate('/home')}>
            <ArrowRight size={24} className="text-gray-600" />
          </button>
          <h1 className="text-lg font-almarai font-bold text-gray-800">كيف كانت الخدمة؟</h1>
          <div></div>
        </div>

        <div className="flex-1 p-6">
          <div className="text-center mb-8">
            <p className="text-gray-600 font-arabic-city mb-6">
              أكتب لنا تقييمك عن الخدمة
            </p>

            {/* Star Rating */}
            <div className="flex justify-center gap-2 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRatingClick(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    size={40}
                    className={`${
                      star <= (hoveredRating || rating)
                        ? 'fill-primary-500 text-primary-500'
                        : 'text-gray-300'
                    } transition-colors`}
                  />
                </button>
              ))}
            </div>

            {/* Feedback Text Area */}
            <div className="mb-8">
              <label className="block text-right font-almarai font-medium text-gray-700 mb-3">
                أكتب ملاحظاتك
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-xl text-right font-arabic-city resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                rows={4}
                placeholder="سعدت بالتعامل معك فقد كان فريق خدمات ممتازة"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="p-6 border-t border-gray-200">
          <button 
            onClick={handleSubmit}
            disabled={rating === 0}
            className="w-full bg-primary-600 text-white font-almarai font-bold py-4 px-6 rounded-xl hover:bg-primary-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            تأكيد
          </button>
        </div>
      </div>
    </div>
  );
}