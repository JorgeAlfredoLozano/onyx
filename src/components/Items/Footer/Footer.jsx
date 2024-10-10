import Popup from "../Popup/Popup";
import { useState } from "react";
import privacidadTexto from "./privacidad";
import terminosServicioTexto from "./terminos";
const Footer = () => {
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");
    const [nombreBoton, setNombreBoton] = useState("");

    const closePopup = () => {
        setPopupVisible(false);
      };

      return (
        <footer className="bg-backGround-1">
  {popupVisible && <Popup message={popupMessage} onClose={closePopup} buttonName={nombreBoton} />}
  
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
      {/* Primera fila/columna: Copyright */}
      <div className="flex justify-center">
        <a href="https://www.desarrollar.com.ar" target="_blank" rel="noopener noreferrer">
          <p className="text-black">
            © 2024 Desarrollar. All rights reserved.
          </p>
        </a>
      </div>

      {/* Segunda fila/columna: Íconos */}
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-black hover:text-white">
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.25 4.25 0 0 0 1.88-2.34c-.82.49-1.74.84-2.71 1.03a4.22 4.22 0 0 0-7.2 3.85c-3.5-.18-6.6-1.86-8.67-4.41a4.17 4.17 0 0 0-.57 2.13c0 1.48.75 2.79 1.89 3.56a4.2 4.2 0 0 1-1.91-.53v.05c0 2.07 1.48 3.8 3.44 4.19a4.23 4.23 0 0 1-1.9.07 4.22 4.22 0 0 0 3.94 2.92 8.47 8.47 0 0 1-5.25 1.81c-.34 0-.68-.02-1.01-.06a11.96 11.96 0 0 0 6.48 1.9c7.78 0 12.04-6.45 12.04-12.04 0-.18-.01-.35-.02-.53A8.62 8.62 0 0 0 24 4.59c-.89.39-1.84.66-2.84.78a4.18 4.18 0 0 0 1.83-2.3z" />
          </svg>
        </a>

        <a href="#" className="text-black hover:text-white">
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 23 23">
            <path d="M12 2.04c-5.52 0-10 4.48-10 10.01 0 4.42 3.64 8.05 8.35 9.22.61.12.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.4.73-4.12-1.64-4.12-1.64-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.74.08-.74 1.22.08 1.87 1.26 1.87 1.26 1.08 1.86 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.71-.31-5.56-1.36-5.56-6.05 0-1.34.48-2.44 1.26-3.3-.13-.31-.55-1.54.12-3.21 0 0 1.02-.33 3.34 1.26.97-.27 2.01-.4 3.04-.41 1.03.01 2.07.14 3.04.41 2.32-1.59 3.34-1.26 3.34-1.26.67 1.67.25 2.9.12 3.21.79.87 1.26 1.97 1.26 3.3 0 4.7-2.86 5.73-5.58 6.03.43.37.81 1.1.81 2.22 0 1.61-.02 2.91-.02 3.3 0 .32.21.7.83.58 4.71-1.17 8.35-4.8 8.35-9.22 0-5.53-4.48-10.01-10-10.01z" />
          </svg>
        </a>

        <a href="#" className="text-black hover:text-white">
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-6 2c13 8 27 0 27-16a10.38 10.38 0 0 0-.08-1.84A7.72 7.72 0 0 0 23 3z" />
          </svg>
        </a>
      </div>

      {/* Tercera fila/columna: Enlaces */}
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-black hover:text-white" onClick={() => {setNombreBoton("Cerrar"); setPopupMessage(privacidadTexto); setPopupVisible(true)}}>Políticas de Privacidad</a>
        <a href="#" className="text-black hover:text-white" onClick={() => {setNombreBoton("Cerrar"); setPopupMessage(terminosServicioTexto); setPopupVisible(true)}}>Términos del Servicio</a>

      </div>
    </div>
  </div>
</footer>




    );
};

export default Footer;
