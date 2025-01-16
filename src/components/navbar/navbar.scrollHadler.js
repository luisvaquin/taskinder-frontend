const handleNavbarScroll = (setNavBackground) => {
    const handleScroll = () => {
        if (typeof window !== 'undefined' && window.scrollY > 30) {
            setNavBackground('#ffffff'); // Cambio al fondo blanco cuando se realiza scroll.
        } else {
            setNavBackground('transparent'); // Fondo transparente cuando no se realiza scroll.
        }
    };

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', handleScroll);
    }

    return () => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('scroll', handleScroll);
        }
    };
};

export default handleNavbarScroll;