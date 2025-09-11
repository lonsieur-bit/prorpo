import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import PhoneVerification from './components/PhoneVerification';
import PinVerification from './components/PinVerification';
import LocationPermission from './components/LocationPermission';
import HomeScreen from './components/HomeScreen';
import BookingDetails from './components/BookingDetails';
import DateTimeSelection from './components/DateTimeSelection';
import AddressConfirmation from './components/AddressConfirmation';
import PaymentMethod from './components/PaymentMethod';
import OrderTracking from './components/OrderTracking';
import UserProfile from './components/UserProfile';
import LocationManager from './components/LocationManager';
import CarManager from './components/CarManager';
import GiftsPage from './components/GiftsPage';
import OrdersPage from './components/OrdersPage';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/phone-verification" element={<PhoneVerification />} />
            <Route path="/pin-verification" element={<PinVerification />} />
            <Route path="/location-permission" element={<LocationPermission />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/booking" element={<BookingDetails />} />
            <Route path="/datetime" element={<DateTimeSelection />} />
            <Route path="/address" element={<AddressConfirmation />} />
            <Route path="/payment" element={<PaymentMethod />} />
            <Route path="/tracking" element={<OrderTracking />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/location" element={<LocationManager />} />
            <Route path="/cars" element={<CarManager />} />
            <Route path="/gifts" element={<GiftsPage />} />
            <Route path="/orders" element={<OrdersPage />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;