import React, { useState, useEffect } from "react";

import NavBars from "../NavBars/NavBars";



const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); //lo uso para el menu principalmente 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
        <div className="bg-backGround-1">
        <NavBars />
        </div>
   )
}

export default Header;
