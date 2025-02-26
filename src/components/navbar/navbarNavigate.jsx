import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import handleNavbarScroll from "./navbar.scrollHadler.js";

// Define el ancho del menú lateral móvil (drawer).
const drawerWidth = 240;

// Define los elementos de navegación, con etiquetas, rutas y opcionalmente íconos.
const navItems = [
  { label: "Login", path: "/login" },
  { label: "Register", path: "/register" },
  { label: "", path: "https://luisrodrigov.netlify.app", icon: faInfo }, // Ejemplo de ícono
];

// Componente principal de la barra de navegación.
function NavbarNavigate(props) {
  const { window } = props; // Obtiene el objeto `window` desde las props.
  const [mobileOpen, setMobileOpen] = React.useState(false); // Controla si el menú lateral móvil está abierto.
  const [navBackground, setNavBackground] = React.useState("transparent"); // Controla el fondo dinámico de la barra de navegación.

  // Alterna entre abrir y cerrar el menú lateral móvil.
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Efecto que gestiona el cambio de fondo de la barra según el desplazamiento.
  React.useEffect(() => {
    const cleanup = handleNavbarScroll(setNavBackground); // Llama a la función para manejar el scroll.
    return cleanup; // Limpia el efecto cuando el componente se desmonta.
  }, []);

  // Contenido del menú lateral móvil.
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", fontSize: "35px" }}
    >
      {/* Título del menú lateral */}
      <Typography variant="h6" sx={{ my: 4, fontSize: "28px" }}>
        Taskin
      </Typography>
      <Divider />
      {/* Lista de elementos de navegación */}
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label || item.icon?.iconName} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{
                display: "flex", // Asegura que el contenido esté centrado.
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {item.icon ? ( // Si hay un ícono, se asegura de pasarlo correctamente.
                <FontAwesomeIcon
                  icon={item.icon}
                  style={{
                    color: "#000000",
                    fontSize: "1rem",
                    display: "block",
                  }}
                />
              ) : (
                <ListItemText primary={item.label} /> // Muestra el texto si no hay ícono.
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // Define el contenedor del menú lateral (drawer) para dispositivos móviles.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ position: "absolute" }}>
      <CssBaseline />
      {/* Barra de navegación superior */}
      <AppBar
        component="nav"
        sx={{
          backgroundColor: navBackground, // Cambia dinámicamente según el scroll.
          color: navBackground === "transparent" ? "#fff" : "#000", // Cambia el color del texto.
          transition: "background-color 0.3s ease", // Efecto suave para cambios de fondo.
          boxShadow: "none", // Elimina la sombra para un diseño limpio.
        }}
      >
        <Toolbar className="p-[1rem]">
          {/* Botón para abrir el menú lateral en pantallas pequeñas */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo y título */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", fontSize: "30px" },
            }}
          >
            {/* Taskin */}
            <img
              src="../../../public/iconLog_dev.png" // Reemplaza con tu imagen
              alt="Logo"
              style={{ width: 40, height: 40, marginRight: 10 }}
            />
          </Typography>

          {/* Lista de navegación para pantallas grandes */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.label || item.icon?.iconName}
                component={Link}
                to={item.path}
                sx={{
                  color: navBackground === "transparent" ? "#fff" : "#000",
                  minWidth: "auto",
                  padding: "1rem",
                }}
              >
                {item.icon ? ( // Muestra ícono si existe.
                  <FontAwesomeIcon
                    icon={item.icon}
                    style={{
                      color: navBackground === "transparent" ? "#fff" : "#000",
                    }}
                  />
                ) : (
                  item.label // Muestra texto si no hay ícono.
                )}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Menú lateral móvil */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Mejora el rendimiento en móviles.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default NavbarNavigate;
