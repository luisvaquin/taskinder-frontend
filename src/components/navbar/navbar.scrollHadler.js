const handleNavbarScroll = (setNavBackground) => {
    const handleScroll = () => {
        if (window.scrollY > 30) {
            setNavBackground('#FFFFFF');
        } else {
            setNavBackground('transparent');
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
};

export default handleNavbarScroll