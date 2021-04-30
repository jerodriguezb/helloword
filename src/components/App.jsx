import React,{useState} from "react";

const App=(props)=> {

    // const mensaje=props.mensaje; es lo mismo que abajo
    const {mensaje}=props;
    const {mensaje2}=props;
    const {mensaje3}=props;
    const {mensaje4}=props;
        
    const [valor, setValor] = useState (mensaje2);

    const botonModifica=() => {
        
        setValor(mensaje3);
    
    }

    const botonClick=() => {
        
        setValor(mensaje3 + mensaje4);
    
    }

    return (

        <div>
                <h1>Ejercitacion:</h1>
                {/* <h1>{mensaje} {mensaje2}</h1> */}
                <h1>{mensaje} {valor}</h1>

                <button onClick={botonModifica}>Reemplazar</button>  
                <button onClick={botonClick}>Click me</button>

        </div>
    )   


}

export default App;





