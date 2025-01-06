import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import {
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box,
    CssBaseline,
    AppBar,
    IconButton,
    Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import handleNavbarScroll from './navbar.scrollHadler.js';

const drawerWidth = 240; // Ancho del drawer (barra lateral móvil).

// Elementos de navegación.
const navItems = [
    { label: 'Login', path: '/' }, // Enlace a la página de inicio.
    { label: 'register', path: '/register' }, // Enlace a la página de proyectos.
    { label: '', path: '/', icon: faInfo }, // Ícono de información (sin texto asociado).
];

function NavbarNavigate(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false); // Estado para controlar si el drawer móvil está abierto.
    const [navBackground, setNavBackground] = React.useState('transparent'); // Estado para el color de fondo dinámico de la barra de navegación.

    // Alterna entre abrir y cerrar el drawer móvil.
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    // Efecto para manejar el cambio de fondo de la barra de navegación al hacer scroll.
    React.useEffect(() => {
        const cleanup = handleNavbarScroll(setNavBackground);
        return cleanup; // Limpieza del efecto al desmontar el componente.
    }, []);

    // Contenido del drawer (barra lateral móvil).
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', fontSize: '35px' }}>
            {/* Título de la barra lateral */}
            <Typography variant="h6" sx={{ my: 4, fontSize: '28px' }}>
                Taskin
            </Typography>
            <Divider />
            {/* Lista de elementos de navegación dentro del drawer */}
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label || item.icon?.iconName} disablePadding>
                        <ListItemButton
                            component={Link}
                            to={item.path}
                            sx={{
                                display: 'flex', // Asegura que el contenido sea un contenedor flexible
                                justifyContent: 'center', // Centra horizontalmente
                                alignItems: 'center', // Centra verticalmente
                                textAlign: 'center', // Alineación del texto
                            }}
                        >
                            {item.icon ? (
                                <FontAwesomeIcon
                                    icon={item.icon}
                                    style={{
                                        color: '#000000',
                                        fontSize: '1rem',
                                        display: 'block', // Asegura que sea tratada como un bloque para centrar
                                    }}
                                />
                            ) : (
                                <ListItemText primary={item.label} />
                            )}
                        </ListItemButton>

                    </ListItem>
                ))}
            </List>
        </Box>
    );

    // Determina el contenedor del drawer para pantallas móviles (útil si el componente está renderizado en un modal).
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ position: 'absolute' }}>
            <CssBaseline />
            {/* Barra de navegación superior */}
            <AppBar
                component="nav"
                className="h-[4.5rem]"
                sx={{
                    backgroundColor: navBackground, // Cambia dinámicamente según el scroll.
                    color: navBackground === 'transparent' ? '#fff' : '#000', // Cambia el color del texto.
                    transition: 'background-color 0.3s ease', // Suaviza el cambio de fondo.
                    boxShadow: 'none', // Elimina las sombras para un diseño plano.
                }}
            >
                <Toolbar className="p-[1rem]">
                    {/* Botón para abrir el drawer en pantallas pequeñas */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Título o espacio para logo */}
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', fontSize: '30px' } }}
                    >
                        Taskin
                    </Typography>

                    {/* Lista de navegación visible en pantallas grandes */}
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.label || item.icon?.iconName}
                                component={Link}
                                to={item.path}
                                sx={{
                                    color: navBackground === 'transparent' ? '#fff' : '#000',
                                    minWidth: 'auto', // Ajusta el tamaño mínimo para elementos solo con íconos.
                                    padding: '1rem',
                                }}
                            >
                                {item.icon ? (
                                    <FontAwesomeIcon
                                        icon={item.icon}
                                        style={{ color: '#fff', fontSize: '1.1rem' }}
                                    />
                                ) : (
                                    item.label
                                )}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Drawer para pantallas pequeñas */}
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Mejora el rendimiento en dispositivos móviles.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

export default NavbarNavigate;
