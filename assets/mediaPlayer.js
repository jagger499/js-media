
//creo un objeto le paso como parametro un objeto de configuracion
function MediaPlayer(config){
    //almaceno el objeto de la configuracion en la variable media
    this.media = config.element;
    //si existen plugins los agrego al atributo plugins
    this.pluggins = config.pluggins || [];

    //inicializo los plugins del config
    this._initPlugins();
};

//creo un metodo de la clase mediaPlayer que reproduce la media o la pausa segun la validacion de paused
MediaPlayer.prototype.playMedia = function(){
    (this.media.paused)?
        this.play():
        this.pause();
}

//creo un metodo de la clase mediaPlayer que reproduce la media
MediaPlayer.prototype.play = function(){
    this.media.play();
}

//creo un metodo de la clase mediaPlayer que pausa la media
MediaPlayer.prototype.pause = function(){
    this.media.pause()
}

//Creo un meroodo de la clase mediaPlayer que mutea la media
MediaPlayer.prototype.mute = function(){
    this.media.muted = true;
}

//Creo un meroodo de la clase mediaPlayer que desmutea la media
MediaPlayer.prototype.unmute = function(){
    this.media.muted = false;
}

//creo un metodo de la clase mediaPlayer que inicia cada pluggin
MediaPlayer.prototype._initPlugins = function(){
    this.pluggins.forEach(pluggin => {
        pluggin.run(this);
    });
}

export default MediaPlayer;