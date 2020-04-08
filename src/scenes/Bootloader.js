class Bootloader extends Phaser.Scene{
    constructor(){
        super({
            key: 'Bootloader'
        });
    }

    init() {
        console.log('Escena Bootloader');
    }
    preload() {
        this.load.path = './assets/';  

        //se carga el fondo 
        this.load.image('fondoSchattenC','fondo/bosque.png');

        //se carga el audio de fondo
        // this.load.audio("truenoC","audio/truenoC.mp3");
        this.load.audio("ashesC","audio/ashesC.mp3");


        //se cargan los botones y efectos del menu
        this.load.image('jugarC','fondo/jugarC.png');
        this.load.image('garraC','fondo/garra.png');

        
        //se carga a santino
        this.load.atlas('santinoidlec', 'santino/santinoidlec.png',
        'santino/santinoidlec_atlas.json');
        this.load.animation('santinoidlecanim', 'santino/santinoidlec_anim.json');

    }
    create() {
        //Se coloca el fondo
        this.fondoC = this.add.image(0,0,'fondoSchattenC');
        this.fondoC.setOrigin(0,0);
        this.fondoC.setDepth(-1);

        //se crea y reproduce el audio de fondo
        this.ashesC=this.sound.add ("ashesC", {volume: 0.8});
        this.ashesC.play();

        //se coloca parte del menu
        this.jugarC = this.add.image(140,200,'jugarC').setInteractive();
        this.jugarC.setOrigin(0,0);
        this.jugarC.inputEnabled = true;    //Activar para eventos

        this.garraC = this.add.image(160,200,'garraC').setScale(.3);
        this.garraC.setOrigin(0,0);
        this.garraC.setVisible(false);


        //Se coloca a santino en el fondo con su animacion 
        this.santinoFondoC = this.add.sprite(643, 540, 'santinoidlec', 0).setScale(1);
        this.santinoFondoC.anims.play("santinoidlec");

        //para la seleccion con el click
        const eventos = Phaser.Input.Events;

        this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, gameObject) => { 
            // this.truenoC=this.sound.add  ("truenoC");
            // this.truenoC.play();
            this.ashesC.stop();
            this.scene.start("TestScene");           
    
        });

        this.input.on(eventos.GAMEOBJECT_OVER, (pointer, gameObject) =>{//efecto al pasar puntero
            this.garraC.setVisible(true);
        });
        this.input.on(eventos.GAMEOBJECT_OUT, (pointer, gameObject) =>{//efecto al quitar puntero
            this.garraC.setVisible(false);
        });



    }
    update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
    }
}

export default Bootloader;