import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from "../../../assets/Logo.png";

const NavBars = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { name: 'Inicio', path: '#inicio' },
        { name: 'Productos', path: '#productos' },
        { name: 'Links', path: '#redes' },
        { name: 'Contacto', path: '#contacto' },
    ];

    return (
        <nav className="bg-backGround-1 h-auto w-full z-50 flex justify-center items-center">
            <div className="relative flex items-center justify-center">
                {/* SVG para texto curvado alrededor del logo */}
                {/* <svg height="310" width="310" className="absolute">
                    <defs>
                        <path
                            id="circlePath"
                            d="M 150, 150 m -100, 0 a 100,100 0 1,1 210,0 a 100,100 0 1,1 -200,0"
                        />
                    </defs>

                    {navLinks.map((link, index) => (
                        <text key={index} fontSize="19" textAnchor="middle">
                            <textPath href="#circlePath" startOffset={`${index * (54 / navLinks.length) + 4}%`}>
                                <tspan
                                    className="flame-animation cursor-pointer transition-transform duration-200 ease-in-out"
                                    onMouseOver={(e) => {
                                        e.currentTarget.setAttribute("transform", "scale(2)"); // Aumentar tamaño
                                    }} 
                                    onMouseOut={(e) => {
                                        e.currentTarget.setAttribute("transform", "scale(1)"); // Tamaño original
                                    }}
                                >
                                    {link.name}
                                </tspan>
                            </textPath>
                        </text>
                    ))}
                </svg> */}

                {/* Logo en el centro con tamaño duplicado y sin márgenes */}
                <a href="#inicio" className="bg-backGround-1">
                    <img
                        className="rounded-full mt-1 object-cover h-52 w-52"
                        src={logo}
                        alt="Desarrollar"
                        style={{ objectFit: 'cover' }} // Asegura que la imagen cubra el contenedor
                    />
                </a>
            </div>

            {/* Mobile menu, show/hide based on menu state. */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navLinks.map(link => (
                        <a
                            key={link.path}
                            href={link.path}
                            className={`block rounded-md px-3 py-2 text-base font-medium ${activeLink === link.path ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                            aria-current={activeLink === link.path ? 'page' : undefined}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>

            {/* Estilos CSS para la animación de los colores */}
            {/* <style jsx>{`
                @keyframes flame {
                    0% { fill: #FF4500; }
                    20% { fill: #FF6347; }
                    40% { fill: #FF7F50; }
                    60% { fill: #FF8C00; }
                    80% { fill: #FFD700; }
                    100% { fill: #FFFACD; }
                }

                .flame-animation {
                    animation: flame 3s infinite alternate;
                }
            `}</style> */}
        </nav>
    );
};

export default NavBars;
