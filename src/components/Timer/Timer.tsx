import { useRef, useState } from "react";
import "./Timer.css"
import audioTimer from "../../audio/mixkit-facility-alarm-908.wav"
const Timer = () => {
    const timeOut = useRef(0)
    const interval: { current: NodeJS.Timeout | null } = useRef(null)
    const [timerIniciado, setTimerIniciado] = useState(false)
    const [timerText, setTimerText] = useState(<span></span>)
    const time = useRef<HTMLInputElement>(null)
    const audio = useRef<HTMLAudioElement>(null)

    function iniciarTimer(){ 
        if (timerIniciado===false) {
            setTimerText(<span>Temporizador Iniciado</span>); 
            let tiempo = (time?.current?.valueAsNumber ?? 1) * 60000
            timeOut.current=setTimeout(
                function(){ 
                    setTimerText(<span>Temporizador Finalizado</span>); 
                    audio?.current?.play()
                    cancelar()
                    },tiempo,"JavaScript"); 
            let tiempoInterval=tiempo/1000;
            interval.current =setInterval(function() {setTimerText(clock(tiempoInterval-1)); tiempoInterval--}, 1000);
        }
        setTimerIniciado(true)
    } 
function cancelar(){ 
    clearTimeout(timeOut.current); 
    clearInterval(interval.current  as NodeJS.Timeout);
    setTimerText(<span>Temporizador Finalizado</span>); 
    setTimerIniciado(false)
}

const clock = (sec: number) => <span className="timer-text"><span>{`${Math.floor(sec/60)}`}</span> minutos con <span>{`${sec%60}`}</span> segundos restantes</span>

  return (
    <div className="timer-container">
        <div className="group-input">
            <span>Seleccionar Tiempo en minutos:</span>
            <input className="timer-time-input" ref={time} type="number" id="tempoId"/>
        </div>
        
        <div className="timer-controlers">
            <button onClick={()=>iniciarTimer()}>Iniciar Tempo</button>        
            <button onClick={()=>cancelar()}>Cancelar</button>
        </div>
        <div className="timer-text-container">
            {timerText}
        </div>
        <audio ref={audio} style={{display: "none"}} controls id="audioFinal">
			<source src={audioTimer} type="audio/wav" />
		    Your browser does not support the audio element.
		</audio>
    </div>
  )
}

export default Timer