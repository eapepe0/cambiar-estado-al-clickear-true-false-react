import React from "react";

export default function Box(props) {
  const [estado, setEstado] = React.useState(props.on);
  /* useState recibe , props.on que esta definida como true/false */

  /* los estilos tienen que ser CamelCase (minuscula 1era palabra , mayusc 1era letra 2da palagra) 
  ej( backgroundColor )
 */
  const estilos = {
    backgroundColor: estado ? "black" : "white"
    /* si estado es true : negro de lo contrario blanco */
    /* como estado esta definido primeramente por default leyendo los datos del boxes.js*/
    /* si en lugar de estado tenemos props.on nunca van a ser cambiados por la funcion setEstado */
  };

  function clickeado() {
    /* si clickeamos */
    setEstado((prevEstado) => !prevEstado);
    /* func setEstado recibe prevEstado , devuelve al reves  */
    console.log(estado);
    console.log("Me has clickeado");
  }
  /* creamos los estilos en una constante */
  console.log(props.on);
  return <div style={estilos} className="box" onClick={clickeado}></div>;

  /* <div style={{}} className="box" key={caja.id}></div>*/
  /* los {} de afuera representa que es javascript */
  /* los {} de adentro representa que es un objeto */
  /* conviene para no generar confusion , generar los estilos en una const */
  /* devolvemos el div con los estilos cargados */
}
