import React, { useEffect } from 'react';

import NavbarNavigate from '../../components/navbar/navbarNavigate';
import './styles.homePage.css';
import Image from "../../../public/iconLog_dev.png";

function HomePage() {

    useEffect(() => { // Agrega la clase 'body' al elemento <body> del documento
        document.body.classList.add('body');

        return () => {
            document.body.classList.remove('body');  // Limpiar la clase al desmontar el componente
        };
    }, []);

    return (
        <>
            <NavbarNavigate />
            <div className="relative min-h-screen flex items-center">
                <div className="absolute inset-0 bg-black/40" />

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 py-12 md:py-24">
                    {/* Logo */}
                    {/* Main Content */}
                    <div className="max-w-3xl space-y-6">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                            TASKINN

                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300">
                            Organiza tu tiempo, maximiza tu productividad <br />
                            y alcanza tus metas con claridad
                        </p>

                        <div className="flex flex-wrap gap-[2rem] pt-6">
                            <button
                                asChild
                                size="lg"
                                className="bg-white text-black hover:bg-gray-100 rounded-[5rem] h-[2.5rem] w-[5.5rem]"
                            >
                                <a href="/buy">Buy Now</a>
                            </button>

                            <button
                                asChild
                                size="lg"
                                variant="outline"
                                className="text-white border-white hover:bg-white/10"
                            >
                                <a href="/services">Shop All</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
