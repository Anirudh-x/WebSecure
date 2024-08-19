// Packages
import React, { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import bgVideo from './assets/bg-video.mp4'

// Components
import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

const App = () => {

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    })
  })

  const [sidebar, setSidebar] = useState(false);
  
  return (
    
    <div className="h-full w-full text-white flex flex-col justify-between">
      
      <div className="h-full relative">
        <video autoPlay loop muted className='fixed top-0 h-[100vh] w-full object-cover z-[-1]'>
          <source src={bgVideo} type="video/mp4" />
        </video>
        
        <Navbar sidebar={sidebar} setSidebar={setSidebar} />
        <Sidebar sidebar={sidebar} />
        
      </div>

      <Outlet />

      <Footer />
    </div>
  );
};

export default App;
