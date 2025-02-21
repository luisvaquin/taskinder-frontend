import React, { useEffect, useState } from "react";
import { useTrail, a } from "@react-spring/web";
import SectionTeamDeveloper from "../sections/section.teamDeveloper.jsx";
import NavbarNavigate from "../../components/navbar/navbarNavigate";
import styles from "./styles.module.css";
import "./styles.homePage.css";

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

function HomePage() {
  useEffect(() => {
    // Agrega la clase 'body' al elemento <body> del documento
    document.body.classList.add("body");

    return () => {
      document.body.classList.remove("body"); // Limpiar la clase al desmontar el componente
    };
  }, []);

  const [open, set] = useState(true);

  return (
    <>
      <NavbarNavigate />
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 " />
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-12 md:py-24">
          {/*Contendedor zoom img homePage*/}
          <div className="max-w-3xl space-y-[2rem] md:space-y-8 lg:space-y-10 m-[1rem] md:m-0">
            {/*Contenedor de texto*/}
            <div className="">
              <Trail open={open}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight animate-wave">
                  TASKINN
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 animate-wave">
                  Organiza tu tiempo, maximiza tu productividad <br />y alcanza
                  tus metas con claridad
                </p>
              </Trail>
            </div>
            <div className="flex flex-wrap gap-[3rem] pt-[2rem]">
              <button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 rounded-[5rem] h-[3rem] w-[11.5rem]"
              >
                <a href="/">¿Que es Taskinn?</a>
              </button>

              <button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                <a href="/login">Iniciar</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <SectionTeamDeveloper />
    </>
  );
}

export default HomePage;
