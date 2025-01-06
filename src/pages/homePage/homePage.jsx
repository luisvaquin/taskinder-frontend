import React, { useEffect } from 'react';

import NavbarNavigate from '../../components/navbar/navbarNavigate';
import './styles.homePage.css';

function HomePage() {

    useEffect(() => { // Agrega la clase 'body' al elemento <body> del documento
        document.body.classList.add('body');

        return () => {
            document.body.classList.remove('body');  // Limpiar la clase al desmontar el componente
        };
    }, []);

    return (
        <>
            <header>
                <NavbarNavigate />
            </header>
            <main>
                <section>

                </section>
            </main>
        </>
    );
}

export default HomePage;
