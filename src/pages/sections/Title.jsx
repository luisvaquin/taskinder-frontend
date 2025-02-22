import * as React from "react"; // Importa React

import { useInView, animated } from "@react-spring/web"; // Importa las funciones useInView y animated de @react-spring/web

import { buildInteractionObserverThreshold } from "./threshold.js"; // Importa la función buildInteractionObserverThreshold desde un archivo externo

// Componente Title
export const Title = ({ children }) => {
  // Hook useInView para detectar la visibilidad del elemento
  const [ref, springs] = useInView(
    () =>
      // Configuración de la animación cuando el elemento entra en la vista
      ({
        from: {
          opacity: 1,
          y: 0, // Más lento o más suave aquí
        },
        to: {
          opacity: 1,
          amount: 0.5,
          y: 90, // Prueba con un umbral menos sensible
          // Cambia esta parte
        },
      }),
    {
      rootMargin: "3% 0px 0px 0px", // Margen de visualización para el observador
      amount: buildInteractionObserverThreshold(), // Umbral de visibilidad, definido por la función buildInteractionObserverThreshold
    }
  );

  // Devuelve el componente h2 animado, con referencia y estilo animado
  return (
    <animated.h2 ref={ref} style={springs}>
      {" "}
      {/* Aplica la animación */}
      {children} {/* Renderiza cualquier contenido pasado como children */}
    </animated.h2>
  );
};
