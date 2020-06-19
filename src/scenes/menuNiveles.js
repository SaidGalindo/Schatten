

class menuNiveles extends Phaser.Scene{
    
    constructor(){
        super({
            key: 'menuNiveles'
        });
    }
    
    init() {
        console.log('menuNiveles');
    }

    create() {
        //Se coloca el fondo
        //nota//no se carga en preload por que ya se cargo en la escena bootloader
        this.fondoC = this.add.image(0,0,'fondoSchattenC');
        this.fondoC.setOrigin(0,0);
        this.fondoC.setDepth(-1);


        //se colocan los nombres de los nivels

        this.cNiveles2 = this.add.image(50,200,'cNiveles').setInteractive();
        this.cNiveles2.setOrigin(0,0);
        this.cNiveles2.setName("cNiveles2");
        this.cNiveles2.inputEnabled = true; 
        
        this.cInfortunio = this.add.image(50,300,'cInfortunio').setInteractive();
        this.cInfortunio.setOrigin(0,0);
        this.cInfortunio.setName("cInfortunio");
        this.cInfortunio.inputEnabled = true;    //Activar para eventos

        this.cDesesperacion = this.add.image(50,400,'cDesesperacion').setInteractive();
        this.cDesesperacion.setOrigin(0,0);
        this.cDesesperacion.setName("cDesesperacion");
        this.cDesesperacion.inputEnabled = true; 

        this.cIncertidumbre = this.add.image(50,500,'cIncertidumbre').setInteractive();
        this.cIncertidumbre.setOrigin(0,0);
        this.cIncertidumbre.setName("cIncertidumbre");
        this.cIncertidumbre.inputEnabled = true; 

        //efecto de la garra
        this.garraC = this.add.image(160,200,'garraC').setScale(.3);
        this.garraC.setOrigin(0,0);
        this.garraC.setVisible(false);

        //para la seleccion con el click
        const eventos = Phaser.Input.Events;


        this.input.on(eventos.GAMEOBJECT_OVER, (pointer, gameObject) =>{//efecto al pasar puntero
            //efectos de garras sobre las letras del menu
            if(gameObject.name == "cInfortunio"){
                this.garraC.setVisible(true);
                this.garraC.setPosition(360,280);
            }else if(gameObject.name == "cDesesperacion"){
                this.garraC.setVisible(true);
                this.garraC.setPosition(360,385);
            }else if(gameObject.name == "cIncertidumbre"){ 
                this.garraC.setVisible(true);
                this.garraC.setPosition(360,480);
            }
        });
        this.input.on(eventos.GAMEOBJECT_OUT, (pointer, gameObject) =>{//efecto al quitar puntero
            //cuando se quita el cursor de las letras del menu desaparecela garra
            if(gameObject.name == "cInfortunio" || gameObject.name == "cDesesperacion" || gameObject.name == "cIncertidumbre"){
                this.garraC.setVisible(false);
            }
        });

        //al dar click
        this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, gameObject) => {   
            if(gameObject.name == "cInfortunio"){

                this.scene.start("TestScene");
            }else if(gameObject.name == "cDesesperacion"){

                //aqui se inicia el rio
            }else if(gameObject.name == "cIncertidumbre"){ 
                this.scene.start("cueva");
            }         
    
        });


    }

    update(time, delta) {

    }
}
export default menuNiveles;