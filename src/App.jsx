// App.js

import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import ReactGA from 'react-ga4';
import ScrollToTop from "./components/ScrollToTop";

// Components
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import AboutUs from './components/AboutUs';
import Careers from './components/Careers';
import Catalogue from "./components/Catalogue";
import ContactUs from "./components/ContactUs";
import DiningRooms from "./components/DiningRooms";
import Nu from "./components/Nu";
import VanDu from "./components/VanDu";
import Collection from "./components/Collection";
import Blog from './components/Blog';
import LivingSpaces from './components/LivingSpaces';
import Shop from './components/Shop';
import Footer from "./components/Footer";

// Initialize Google Analytics
ReactGA.initialize("G-GKPZ9CHJYL");

function AppContent() {
  const location = useLocation();
  
  useEffect(() => {
    // Set document title
    document.title = "Aly Arafa";
    // Send pageview to Google Analytics
    ReactGA.send({ 
      hitType: "pageview", 
      page: location.pathname 
    });
  }, [location]);


  const isHome = location.pathname === "/";

  return (
    <div className="relative min-h-screen w-full">
  
      <Navbar />


      <main className={`flex-1 ${isHome ? "" : "pt-[12vh]"}`}>
        <Routes>
   
          <Route path="/" element={<Slider />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/livingspaces" element={<LivingSpaces />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/diningrooms" element={<DiningRooms />} />
          <Route path="/nu" element={<Nu />} />
          <Route path="/vandu" element={<VanDu />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="*"
            element={
              <div className="flex items-center justify-center min-h-screen">
                <p className="text-xl">Page not found</p>
              </div>
            }
          />
        </Routes>
      </main>
      
  
      {!isHome && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
           <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
