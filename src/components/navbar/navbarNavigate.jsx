import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import React from 'react';
import Divider from '@mui/material/Divider';
import { List, ListItem, ListItemButton, ListItemText, Box, CssBaseline, AppBar, IconButton, Drawer } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import handleNavbarScroll from "./navbar.scrollHadler.js";

const drawerWidth = 240;
const navItems = [
    { label: 'Home', path: '/', },
    { label: 'Proyectos', path: '/proyects', }
];

function NavbarNavigate(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [navBackground, setNavBackground] = React.useState('transparent');

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    React.useEffect(() => {
        const cleanup = handleNavbarScroll(setNavBackground);
        return cleanup;
    }, []);

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', fontSize: '35px' }}>
            <Typography variant="h6" sx={{ my: 4, fontSize: '25px' }}>
                Opciones
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton component={Link} to={item.path} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.label} className={item.style} sx={{ fontSize: '40px' }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <div className="mx-[1rem] max-[1000px]:mt-[-1.2rem]" id="">
                <img className="w-[auto] h-[auto] rounded-md mx-[auto] my-[auto]
                        animate-jiggle" src="./iconDevSvg.svg" alt="Graphic Design" id="routeProyects" />
            </div>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ position: 'absolute' }}>
            <CssBaseline />
            <AppBar
                component="nav"
                className="h-[4.5rem]"
                sx={{
                    backgroundColor: navBackground,
                    color: navBackground === 'transparent' ? '#fffff' : '#000',
                    transition: 'background-color 0.3s ease',
                    boxShadow: 'none',
                }}
            >

                <Toolbar className="p-[1rem]">

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >

                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                component={Link}
                                to={item.path}
                                className={item.style}
                                sx={{ color: navBackground === 'transparent' ? '#fff' : '#000' }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
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