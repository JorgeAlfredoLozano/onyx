import  { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import emailjs from "emailjs-com";

const Popup = ({ message, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
    <div className="bg-white mx-auto rounded-lg p-2 max-w-md">
      <p className="text-xl text-justify">{message}</p>
      <button
        onClick={onClose}
        className="mt-4 bg-blue-500 hover:bg-blue-800 text-white py-2 px-4 rounded"
      >
        OK
      </button>
    </div>
  </div>
);

const Contacto = () => {
  const form = useRef();
  const contactInfo = useSelector((state) => state.contact.contactInfo);
  const [formData, setFormData] = useState(contactInfo);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [toHome, setToHome] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setFormData(contactInfo);
  }, [contactInfo]);

  const handleWhatsAppClick = (phoneNumber) => {
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappLink, "_blank");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    let ok = true;

    if (
      formData.Nombre === "" ||
      (formData.Telefono === "" && formData.Email === "") ||
      formData.Mensaje === ""
    ) {
      ok = false;
      setPopupMessage(
        `Los campos Nombre, Mensaje y al menos uno de Teléfono o Correo Electrónico son requeridos`
      );
      setPopupVisible(true);
    } else {
      const data = {
        to_name: "Onyx Premium Candles",
        from_name: "www.onyxpremiumcandles.com",
        message: `
          Nombre: ${formData.Nombre}
          Teléfono: ${formData.Telefono}
          Correo Electrónico: ${formData.Email}
          Mensaje: ${formData.Mensaje}
        `,
      };

      emailjs
        .send("service_vjy8sr7", "template_iju7pan", data, "gpbomxlTYg_HN8BXB")
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            setPopupMessage("Mensaje enviado correctamente");
            setPopupVisible(true);
            setToHome(true);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const closePopup = () => {
    setPopupVisible(false);
    if (toHome) {
      window.location.href = "/";
    }
  };

  return (
    <div className="container text-gray-500 mx-auto p-4 flex flex-col md:flex-row justify-center">
      {popupVisible && <Popup message={popupMessage} onClose={closePopup} />}
      <div className="w-full md:w-1/2 md:pr-2">
        <h1 className="text-2xl text-backGround-1 font-bold mb-4">CONTACTENOS</h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 text-backGround-1 pr-2">
              <label htmlFor="Nombre">Nombre:</label>
              <input
                type="text"
                id="Nombre"
                name="Nombre"
                value={formData.Nombre}
                onChange={handleChange}
                className={`block w-full  p-2 border ${isSubmitted && formData.Nombre === "" ? "border-red-500" : "border-gray-300"
                  } rounded-md`}
              />
            </div>
            <div className="md:w-1/2 text-backGround-1">
              <label htmlFor="Telefono">Teléfono:</label>
              <input
                type="text"
                id="Telefono"
                name="Telefono"
                value={formData.Telefono}
                onChange={handleChange}
                className={`block w-full  p-2 border ${isSubmitted && formData.Telefono === "" ? "border-red-500" : "border-gray-300"
                  } rounded-md`}
              />
            </div>
          </div>
          <div className="text-backGround-1 mt-2">
            <label htmlFor="Email">Correo Electrónico:</label>
            <input
              type="email"
              id="Email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              className={`block w-full  p-2 border ${isSubmitted && formData.Email === "" ? "border-red-500" : "border-gray-300"
                } rounded-md`}
            />
          </div>
          <div className="text-backGround-1 mt-2">
            <label htmlFor="Mensaje">Mensaje:</label>
            <textarea
              id="Mensaje"
              name="Mensaje"
              value={formData.Mensaje}
              onChange={handleChange}
              className={`block w-full  p-2 border ${isSubmitted && formData.Mensaje === "" ? "border-red-500" : "border-gray-300"
                } rounded-md`}
            />
          </div>
          <div className="text-gray-500 mt-2">
            <button
              type="submit"
              className="bg-backGround-1 hover:bg-blue-700 text-black py-2 px-4 rounded"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
      <div className="md:w-1/2 my-16 md:pl-4 md:py-2 bg-backGround-1 h-56 bg-opacity-100 border-2 border-gray-300 p-4 flex flex-col items-center rounded-lg shadow-xl justify-center">
        <div className="flex items-center mt-3">
          <p className="text-lg font-medium mb-4 mr-2 text-black">
            Camila:&nbsp;&#8201;&#8201;&nbsp; +52 (624) 238 22 755
          </p>
          <img
            onClick={() => handleWhatsAppClick("5262423822755")}
            src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'
            alt="WhatsApp"
            className="cursor-pointer w-7 h-7 mb-4 hover:w-9 hover:h-9 transition-all duration-300"
          />
        </div>
        <div className="flex items-center mt-3">
          <p className="text-lg font-medium mb-4 mr-2 text-black">
            contacto@onyxpremiumcandles.com
          </p>
          <a href="mailto:soportedesarrollar@gmail.com">
            <p className="cursor-pointer text-2xl font-medium mb-4 text-white">
             @ 
            </p>
            
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
