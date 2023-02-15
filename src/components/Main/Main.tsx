import { useState } from 'react'
import Media from '../Media/Media'
import Timer from '../Timer/Timer'
import './Main.css'
import Ejercicios from "../../data/ejercicios.json"

const Main = () => {
    const [tipo, setTipo] = useState("Calentamiento")
    const [dia, setDia] = useState("Martes")
    const [iniciar, setIniciar] = useState(false)    
    const [currentObject, setCurrentObject] = useState(Ejercicios.Calentamiento)
    

    function handleSelectTipo(value:string){
        setTipo(value)        
        if(value==="Calentamiento") setCurrentObject(Ejercicios.Calentamiento)
        if(value==="Ejercicios") setCurrentObject(Ejercicios.Ejercicios.Martes)
        if(value==="Estiramientos Carpianos") setCurrentObject(Ejercicios['Estiramientos Carpianos'])
    }

    function handleSelectDia(value:string){
        setDia(value)
        if(value==="Martes"){
            setCurrentObject(Ejercicios.Ejercicios.Martes)
        }
        if(value==="Jueves"){
            setCurrentObject(Ejercicios.Ejercicios.Jueves)
        }
    }
    
    function handleCerrarContenido(){
        setIniciar(false)
        setTipo("Calentamiento")
        setDia("Martes")
        setCurrentObject(Ejercicios.Calentamiento)
    }
  return (
    <div className="main-container">
        <div className="main-title-row" data-testid="row-main">
            <h1>{`${tipo}`}</h1>
        </div>
        <div className="main-inputs-col" data-testid="row-main">
            {!iniciar?
            <div className="group-input">
                <span>Seleccionar Tipo de Ejercicio:</span>
                <select onChange={(e)=>handleSelectTipo(e.target.value)} className="select-tipo" value={tipo}>
                    <option>Calentamiento</option>
                    <option>Ejercicios</option>
                    <option>Estiramientos Carpianos</option>
                </select>
            </div>
            :null
            }
            {tipo==="Ejercicios" && !iniciar?
                <div className="group-input">
                    <span>Seleccionar el día:</span>
                    <select onChange={(e)=>handleSelectDia(e.target.value)} className="select-dia" value={dia}>
                        <option>Martes</option>
                        <option>Jueves</option>
                    </select>
                </div>
            :null
            }
            <div className="main-buttons">
                {!iniciar?
                    <div className="main-buttons-column">
                        <button className="button-iniciar" onClick={()=>setIniciar(true)}>{`Inicio`}</button>
                    </div>
                : null
                }
                <div className="column main-buttons-column">
                    <button className="button-cerrar" onClick={()=>handleCerrarContenido()}>Reiniciar</button>
                </div>
            </div>
        </div>
        {iniciar?
            <div className="main-content-row" data-testid="row-main">
                <div className="media-column">
                    <Media ejerciciosArray={currentObject}/>
                </div>
                <div className="media-column">
                    <Timer />
                </div>
            </div>
        : null
        }
        
    </div>
  )
}

export default Main
