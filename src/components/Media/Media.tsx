import { useRef, useState } from "react"
import "./Media.css"

interface MediaProps {
    ejerciciosArray: {nombre:string, tipo:string, src:string}[]
}

const Media = (props: MediaProps) => {
    const {ejerciciosArray} = props
    const largo = useRef(ejerciciosArray.length)
    const [pointer, setPointer] = useState(0)
    
    function handleSiguiente(){
        if(pointer>=largo.current-1){
            setPointer(0)
        }else{
            setPointer((current)=>current+1)
        }

    }

    function handleAnterior(){
        if(pointer<=0){
            setPointer(largo.current-1)
        }else{
            setPointer((current)=>current-1)
        }

    }
    return (
    <div className="media-container">
        <h2>{`${ejerciciosArray[pointer].nombre}`}</h2>
        {ejerciciosArray[pointer].tipo==="video" &&
            <video className="media" autoPlay loop muted width="600" height="400" src={ejerciciosArray[pointer].src}></video>
        }
        {ejerciciosArray[pointer].tipo==="imagen" &&
            <img className="media" src={ejerciciosArray[pointer].src} alt={ejerciciosArray[pointer].nombre} />
        }
        <div className="media-controlers">
            <button className="button-controls" onClick={()=>handleAnterior()}>Anterior</button>
            <button className="button-controls" onClick={()=>handleSiguiente()}>Siguiente</button>
        </div>
    </div>
  )
}

export default Media