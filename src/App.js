import React from "react";
import boxes from "./boxes";
import Box from "./components/Box.js";

export default function App(props) {
  /**
   * Challenge part 1:
   * 1. Initialize state with the default value of the
   *    array pulled in from boxes.js
   * 2. Map over that state array and display each one
   *    as an empty square (black border, transparent bg color)
   *    (Don't worry about using the "on" property yet)
   */

  const [cajas, setCajas] = React.useState(boxes);
  /* inicializamos cajas con los datos de boxes */

  const cajaElementos = cajas.map((caja) => <Box on={caja.on} key={caja.id} />);
  /* mapeamos por cada elemento en cajas , sacamos un componente box , usamos el id como key */

  console.log(cajas);
  return <main>{cajaElementos}</main>;
  /* devolvemos todo lo mapeado */
}
