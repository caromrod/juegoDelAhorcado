const boton = document.getElementById("btnAudio");
//generar dos botones para prender y apagar la musica del juego, hacer que el sonido sea
// infinito y que la musica empiece sola

const etiquetaAudio = document.createElement("audio");
boton.addEventListener("click", () => {
              //sonidos para el boton


                etiquetaAudio.setAttribute("src", "../diseño/sonidos/index.wav");
                etiquetaAudio.play()
                etiquetaAudio.loop = true;

      
})

const botonmute = document.getElementById("btnAudioMute");
botonmute.addEventListener("click", () => {

  etiquetaAudio.pause()
})

