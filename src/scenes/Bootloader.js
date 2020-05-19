//esta es la escena del menu y la que administrara las demas 

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
        this.load.audio("cCaballo","audio/cCaballo.mp3");


        //se cargan los botones y efectos del menu (se cargan los de todas las escenas de menus)
        this.load.image('jugarC','fondo/jugarC.png');
        this.load.image('cInfortunio','fondo/cInfortunio.png');
        this.load.image('cDesesperacion','fondo/cDesesperacion.png');
        this.load.image('cIncertidumbre','fondo/cIncertidumbre.png');
        this.load.image('cDesarrollado','fondo/cDesarrollado.png');
        this.load.image('jugarC','fondo/jugarC.png');
        this.load.image('cNiveles','fondo/cNiveles.png');
        this.load.image('cCreditos','fondo/cCreditos.png');
        this.load.image('garraC','fondo/garra.png');
        this.load.image('cFondoMontaña','fondo/cFondoMontaña.jpg');
        this.load.image('shadowTitleC','fondo/shadowTitleC.png');

        
        //se carga a santino
        this.load.atlas('santinoidlec', 'santino/santinoidlec.png',
        'santino/santinoidlec_atlas.json');
        this.load.animation('santinoidlecanim', 'santino/santinoidlec_anim.json');

    }
    create() {
        
        //this.scene.launch('BatteryBar');
        //Se coloca el fondo
        this.fondoC = this.add.image(0,0,'fondoSchattenC');
        this.fondoC.setOrigin(0,0);
        this.fondoC.setDepth(-1);

        //se crea y reproduce el audio de fondo
        this.ashesC=this.sound.add ("ashesC", {volume: 0.8});
        this.ashesC.play();

        //se coloca el texto(botones) del menu
        this.jugarC = this.add.image(140,200,'jugarC').setInteractive();
        this.jugarC.setOrigin(0,0);
        this.jugarC.setName("jugarC");
        this.jugarC.inputEnabled = true;    //Activar para eventos

        this.cNiveles = this.add.image(105,300,'cNiveles').setInteractive();
        this.cNiveles.setOrigin(0,0);
        this.cNiveles.setName("cNiveles");
        this.cNiveles.inputEnabled = true; 

        this.cCreditos = this.add.image(95,400,'cCreditos').setInteractive();
        this.cCreditos.setOrigin(0,0);
        this.cCreditos.setName("cCreditos");
        this.cCreditos.inputEnabled = true; 



        this.garraC = this.add.image(160,200,'garraC').setScale(.3);
        this.garraC.setOrigin(0,0);
        this.garraC.setVisible(false);


        //Se coloca a santino en el fondo con su animacion 
        this.santinoFondoC = this.add.sprite(643, 540, 'santinoidlec', 0).setScale(1).setInteractive();
        this.santinoFondoC.anims.play("santinoidlec");
        this.santinoFondoC.setName("santinoFondoC");

        //se colocan efectos en el menu al tocar a santino
        this.shadowTitleC = this.add.image(1247,380,'shadowTitleC').setScale(.1);
        this.shadowTitleC.flipX = true;
        this.shadowTitleC.setAlpha(.3);
        this.shadowTitleC.setVisible(false);

        //para la seleccion con el click
        const eventos = Phaser.Input.Events;

        this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, gameObject) => {   
            if(gameObject.name == "jugarC"){
                //this.truenoC=this.sound.add  ("truenoC");//esto genera un error (probablememtte el peso del audio )
                //this.truenoC.play();
                this.ashesC.stop();
                this.scene.start("TestScene");
            }else if(gameObject.name == "cNiveles"){
                this.ashesC.stop();
                this.scene.start("menuNiveles");
            }else if(gameObject.name == "cCreditos"){ 
                this.ashesC.stop();
                this.scene.start("creditos");
            }         
    
        });

        this.input.on(eventos.GAMEOBJECT_OVER, (pointer, gameObject) =>{//efecto al pasar puntero
            //efectos de garras sobre las letras del menu
            if(gameObject.name == "jugarC"){
                this.garraC.setVisible(true);
                this.garraC.setPosition(160,200);
            }else if(gameObject.name == "cNiveles"){
                this.garraC.setVisible(true);
                this.garraC.setPosition(160,285);
            }else if(gameObject.name == "cCreditos"){ 
                this.garraC.setVisible(true);
                this.garraC.setPosition(160,380);
            }else if(gameObject.name == "santinoFondoC"){//aparece una sombra al pasar el puntero sobre 
                this.shadowTitleC.setVisible(true);      //santino

            }
        });
        this.input.on(eventos.GAMEOBJECT_OUT, (pointer, gameObject) =>{//efecto al quitar puntero
            //cuando se quita el cursor de las letras del menu desaparecela garra
            if(gameObject.name == "jugarC" || gameObject.name == "cCreditos" || gameObject.name == "cNiveles"){
                this.garraC.setVisible(false);
            }
        });



    }
    update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
    }
}

export default Bootloader;