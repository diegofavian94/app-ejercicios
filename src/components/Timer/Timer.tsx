import { useRef, useState } from "react";
import "./Timer.css"
import audioTimer from "../../audio/mixkit-facility-alarm-908.wav"
const Timer = () => {
    const timeOut = useRef(0)
    const interval: { current: NodeJS.Timeout | null } = useRef(null)
    const [timerIniciado, setTimerIniciado] = useState(false)
    const [timerText, setTimerText] = useState("")
    const time = useRef<HTMLInputElement>(null)
    const audio = useRef<HTMLAudioElement>(null)

    function iniciarTimer(){ 
        if (timerIniciado===false) {
            setTimerText("Temporizador Iniciado"); 
            let tiempo = (time?.current?.valueAsNumber ?? 1) * 60000
            timeOut.current=setTimeout(
                function(){ 
                    setTimerText("Temporizador Finalizado"); 
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
    setTimerText("Temporizador Finalizado"); 
    setTimerIniciado(false)
}

const clock = (sec: number):string => `${Math.floor(sec/60)} minutos con ${sec%60} segundos restantes`

  return (
    <div className="timer-container">
        <div className="row timer-controls-row">
            <div className="column timer-time-input-container">
                <input className="timer-time-input" ref={time} type="number" id="tempoId"/>
            </div>
            <div className="column">
                <button onClick={()=>iniciarTimer()}>Iniciar Tempo</button> 
            </div>
            <div className="column">
                <button onClick={()=>cancelar()}>Cancelar</button>
            </div>
        </div>
        <div className="row timer-text-container">
            <span>{timerText}</span>
        </div>
        <audio ref={audio} style={{display: "none"}} controls id="audioFinal">
			<source src={audioTimer} type="audio/wav" />
		    Your browser does not support the audio element.
		</audio>
    </div>
  )
}

export default Timer