import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  user: {
    name: string;
    phone: string;
    email: string;
    currentAddress?: string;
  };
  booking: {
    location: string;
    destination: string;
    date: string;
    time: string;
    carType: string;
    price: number;
  };
  updateUser: (user: any) => void;
  updateBooking: (booking: any) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState({
    name: 'أحمد العربي',
    phone: '+966548995492',
    email: 'info@support.com'
  });

  const [booking, setBooking] = useState({
    location: 'الرياض، حي شبرا 4231',
    destination: '',
    date: '20 مارس',
    time: '10:00',
    carType: 'غسيل سيارات 2',
    price: 399
  });

  const updateUser = (userData: any) => {
    setUser(prev => ({ ...prev, ...userData }));
  };

  const updateBooking = (bookingData: any) => {
    setBooking(prev => ({ ...prev, ...bookingData }));
  };

  return (
    <AppContext.Provider value={{
      user,
      booking,
      updateUser,
      updateBooking
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}