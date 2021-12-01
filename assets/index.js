        //selecciono los elementos button y video y los almaceno en las variables
        const button = document.querySelector("button");
        const video  = document.querySelector("video");

        //creo un objeto le paso como parametro un objeto de configuracion
        function MediaPlayer(config){
            //almaceno el elemento de la configuracion en la variable media
            this.media = config.element;
        };

        //creo un metodo del objeto mediaplayer que reproduce la media
        MediaPlayer.prototype.play = function(){
            (this.media.paused)?
                this.media.play():
                this.media.pause();
        }

        //creo una instancia y le paso en la configuracion el video
        const player = new MediaPlayer({ element : video });

        //al hacer click invoco el metodo play de el objeto player
        button.onclick = () => player.play();