import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/phone-verification');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="screen-container">
      <div className="flex items-center justify-center h-full bg-white">
        <div className="animate-pulse">
          <img 
            src="/شعار نشمي.pdf (3).png" 
            alt="شعار نشمي" 
            className="w-40 h-40 object-contain animate-bounce"
            style={{
              filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1))',
              animation: 'logoFade 2s ease-in-out infinite alternate'
            }}
          />
        </div>
        
        <style jsx>{`
          @keyframes logoFade {
            0% {
              opacity: 0.7;
              transform: scale(0.95);
            }
            100% {
              opacity: 1;
              transform: scale(1.05);
            }
          }
        `}</style>
      </div>
    </div>
  );
}