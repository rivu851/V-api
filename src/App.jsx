import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// Import all other components...

const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh'
  }}>
    <div>Loading...</div>
  </div>
);

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/flightbook" element={<FlightBooking />} />
          <Route path="/trainbook" element={<TrainBooking />} />
          <Route path="/busbook" element={<BusBooking />} />
          <Route path="/cabbook" element={<CabBooking />} />
          <Route path="/paris" element={<TravelDestination />} />
          <Route path="/purulia" element={<TravelDestinationPurulia />} />
          <Route path="/kerala" element={<TravelDestinationKerala />} />
          <Route path="/kashmir" element={<TravelDestinationJK />} />
          <Route path="/delhi" element={<TravelDestinationDelhi />} />
          <Route path="/andaman" element={<TravelDestinationAndaman />} />
          <Route path="/bishupur" element={<HiddenGemsBisnapur />} />
          <Route path="/doars" element={<HiddenGemsDooars />} />
          <Route path="/hotelbook" element={<HotelBooking />} />
          <Route path="/digha" element={<Digha />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
      </Suspense>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;