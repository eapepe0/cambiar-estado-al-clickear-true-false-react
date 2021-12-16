import React from "react";
import boxes from "./boxes";
import Box from "./components/Box.js";

export default function App(props) {
  const [cajas, setCajas] = React.useState(boxes);
  /* inicializamos cajas con los datos de boxes */

  const cajaElementos = cajas.map((caja) => <Box on={caja.on} key={caja.id} />);
  /* mapeamos por cada elemento en cajas , sacamos un componente box , usamos el id como key */

  console.log(cajas);
  return <main>{cajaElementos}</main>;
  /* devolvemos todo lo mapeado */
}
