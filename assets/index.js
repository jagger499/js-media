import MediaPlayer  from "./mediaPlayer.js";
import Autoplay from "../Plugins/Autoplay.js";

//selecciono los elementos button y video y los almaceno en las variables
const playButton = document.getElementById("play");
const unmuteButton = document.getElementById("unmute");
const video = document.querySelector("video");

//creo una instancia y le paso en la configuracion el video
const player = new MediaPlayer({ element : video , pluggins : [new Autoplay()] });

//al hacer click invoco el metodo play de el objeto player
playButton.onclick = () => player.playMedia();
unmuteButton.onclick = () => player.unmute();

