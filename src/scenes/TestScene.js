class TestScene extends Phaser.Scene{
    constructor(){
        super("TestScene");
    }

    init(){
        console.log("Escena Test");
    }

    preload(){
        this.load.path = './assets/';
        this.load.audio("truenoC","audio/truenoC.mp3");
        this.load.audio("radio","audio/radionoise.mp3");
        this.load.audio("pandora","audio/musicbox.mp3");
        this.load.image('santino','santinoPack/0.png');
        this.load.image("fondoColorSolido", "forest/PNG/Background layers/layer01.png");
        this.load.image("troncos5", "forest/PNG/Background layers/layer02.png");
        this.load.image("troncos4", "forest/PNG/Background layers/layer03.png");
        this.load.image("troncos3", "forest/PNG/Background layers/layer04.png");
        this.load.image("troncos2", "forest/PNG/Background layers/layer05.png");
        this.load.image("troncos1", "forest/PNG/Background layers/layer06.png");
        this.load.image("hojas", "forest/PNG/Background layers/layer07.png");
        this.load.image("pasto", "forest/PNG/Background layers/layer08.png");
        this.load.image("tierra", "forest/PNG/Background layers/layer09.png");
        this.load.image("mogno", "objetos/mo.png");
        this.load.image("hueso", "objetos/hueso.png");
        this.load.image("roca", "objetos/roca.png");
    }

    create(){
        this.cantMons;
        this.cantMons = 0;

        this.cursors = this.input.keyboard.createCursorKeys();

        //sonido camino en pasto
        this.pandora=this.sound.add("pandora");

        //sonido susurros
        this.radio = this.sound.add("radio");

        //sonido truenos
        this.trueno = this.sound.add("truenoC");
        
        var configMusic = {
            loop: true,
            volume: 2,
        }

        this.pandora.play(configMusic);
        this.radio.play(configMusic);
        this.trueno.play(configMusic);

        //-- Fondo
        this.fondo = this.add.tileSprite(0, 0, this.sys.canvas.width, this.sys.canvas.height, "fondoColorSolido");   //atributo
        this.fondo.setOrigin(0,0);
        this.fondo.setScrollFactor(0);

        this.troncos5 = this.add.tileSprite(0, 0, this.sys.canvas.width, 0, "troncos5");   //atributo
        this.troncos5.setOrigin(0,0);
        this.troncos5.setScrollFactor(0);

        this.troncos4 = this.add.tileSprite(0, 0, this.sys.canvas.width, 0, "troncos4");   //atributo
        this.troncos4.setOrigin(0,0);
        this.troncos4.setScrollFactor(0);

        this.troncos3 = this.add.tileSprite(0, 0, this.sys.canvas.width, 0, "troncos3");   //atributo
        this.troncos3.setOrigin(0,0);
        this.troncos3.setScrollFactor(0);

        this.troncos2 = this.add.tileSprite(0, 0, this.sys.canvas.width, 0, "troncos2");   //atributo
        this.troncos2.setOrigin(0,0);
        this.troncos2.setScrollFactor(0);

        this.troncosFrente = this.add.tileSprite(0, 0, this.sys.canvas.width, 0, "troncos1");   //atributo
        this.troncosFrente.setOrigin(0,0);
        this.troncosFrente.setScrollFactor(0);

        this.hojas = this.add.tileSprite(0, 0, this.sys.canvas.width, 0, "hojas");   //atributo
        this.hojas.setOrigin(0,0);
        this.hojas.setScrollFactor(0);

        this.hojas2 = this.add.tileSprite(0, -100, this.sys.canvas.width, 0, "hojas");   //atributo
        this.hojas2.setOrigin(0,0);
        this.hojas2.setScrollFactor(0);

        this.hojas3 = this.add.tileSprite(0, -200, this.sys.canvas.width, 0, "hojas");   //atributo
        this.hojas3.setOrigin(0,0);
        this.hojas3.setScrollFactor(0);

        this.piso = this.add.tileSprite(0, 0, this.sys.canvas.width, 0, "pasto");   //atributo
        this.piso.setOrigin(0,0);
        this.piso.setScrollFactor(0);

        this.tierra = this.add.tileSprite(0, 0, this.sys.canvas.width, 0, "tierra");   //atributo
        this.tierra.setOrigin(0,0);
        this.tierra.setScrollFactor(0);
        this.tierra.setDepth(3);
        //--

        this.roca = this.add.image(2000, 630, "roca");
        this.roca.setOrigin(0,0);
        this.roca.setScale(0.09);

        this.monio = this.add.image(1290, 630, "mogno");
        this.monio.setOrigin(0,0);
        this.monio.setScale(0.008);
        this.monio.setDepth(4);

        this.monio2 = this.add.image(2520, 630, "mogno");
        this.monio2.setOrigin(0,0);
        this.monio2.setScale(0.008);
        this.monio2.setDepth(4);

        this.monio3 = this.add.image(3700, 630, "mogno");
        this.monio3.setOrigin(0,0);
        this.monio3.setScale(0.008);
        this.monio3.setDepth(4);

        this.tweenMoniosFlotando = this.add.tween({
            targets: [this.monio,this.monio2,this.monio3],
            y: 640,
            repeat: -1,
            duration: 1000,
            yoyo: true
        });

        this.timeline = this.tweens.timeline({
            paused: true,
            targets: [this.monio],
            // totalDuration: 1000,
            tweens: [
                {
                    y: 400
                    // duration: 3000,
                }
            ],
            onStart:() =>{
                this.textoMonios.setText("Moños: 1");
                this.troncos5.setTint("0x0e5178");
                this.troncos4.setTint("0x0e5178");
            },
            onComplete: () => {
                this.monio.setAlpha(0);
            } 
        });

        this.timeline2 = this.tweens.timeline({
            paused: true,
            targets: [this.monio2],
            // totalDuration: 1000,
            tweens: [
                {
                    y: 400
                    // duration: 3000,
                }
            ],
            onStart:() =>{
                this.textoMonios.setText("Moños: 2");
                this.troncos5.setTint("0x05283d");
                this.troncos4.setTint("0x05283d");
                this.troncos3.setTint("0x05283d");
            },
            onComplete: () => {
                this.monio2.setAlpha(0);
            } 
        });

        this.timeline3 = this.tweens.timeline({
            paused: true,
            targets: [this.monio3],
            // totalDuration: 1000,
            tweens: [
                {
                    y: 400
                    // duration: 3000,
                }
            ],
            onStart:() =>{
                this.textoMonios.setText("Moños: 3");
                this.troncos5.setTint("0x032130");
                this.troncos4.setTint("0x032130");
                this.troncos3.setTint("0x032130");
                this.troncos2.setTint("0x032130");
                this.troncosFrente.setTint("0x032130");
                this.hojas.setTint("0x032130");
                this.hojas2.setTint("0x032130");
                this.hojas3.setTint("0x032130");
            },
            onComplete: () => {
                this.monio3.setAlpha(0);
            } 
        });

        this.textoMonios = this.add.text(70, 70, "Moños: 0", {
            color: "white",
            fontSize: 30,
            backgroundColor: "rgba(0,0,0,0.52)"
        });
        this.textoMonios.setScrollFactor(0);

        this.player = this.add.image(200,635, "santino");
        this.player.setDepth(2);
        this.cameras.main.setBounds(0, 0, this.sys.canvas.width * 5, this.sys.canvas.height);
        this.cameras.main.startFollow(this.player);

        //TWEEEN salto
        this.salto = this.add.tween({
            targets: [this.player],
            y: 570,
            yoyo: true,
            duration: 400,
        });
        
    }

    movement(){
        if (this.cursors.left.isDown && (this.player.x > 100)) {
            this.player.x -= 3;
            this.player.flipX = 1;
            // console.log(this.player.x);

        } else if (this.cursors.right.isDown && (this.player.x < this.sys.canvas.width * 5)) {
            this.player.x += 3;
            this.player.flipX = 0;
            // console.log(this.player.x);
        }
        else{
            if (this.cursors.up.isDown) {
                this.salto.play();
            }
            // console.log("Estoy quieto");
        }

    }

    verificaPos(){
        if (this.player.x >= 1290) {
            this.timeline.play();

        }
        if (this.player.x >= this.monio2.x) {
            // this.trueno.play();
            this.timeline2.play();
        }
        if (this.player.x >= this.monio3.x) {
            // this.trueno.play();
            this.timeline3.play();
        }
    }

    update(){
        this.movement();
        this.troncos5.tilePositionX = this.cameras.main.scrollX * 0.2;
        this.troncos4.tilePositionX = this.cameras.main.scrollX * 0.25;
        this.troncos3.tilePositionX = this.cameras.main.scrollX * 0.4;
        this.troncos2.tilePositionX = this.cameras.main.scrollX * 0.43;
        this.troncosFrente.tilePositionX = this.cameras.main.scrollX *0.6;
        this.hojas.tilePositionX = this.cameras.main.scrollX *0.6;
        this.hojas2.tilePositionX = this.cameras.main.scrollX *0.6;
        this.hojas3.tilePositionX = this.cameras.main.scrollX *0.6;
        this.piso.tilePositionX = this.cameras.main.scrollX *0.65;
        this.tierra.tilePositionX = this.cameras.main.scrollX *0.65;

        this.verificaPos();

        if(this.cantMons == 1){
            this.troncos5.setTint("0x0e5178");
        }
        else{
            if(this.cantMons == 2){
                this.troncos5.setTint("0x05283d");
            }
            else{
                if(this.cantMons == 3){
                    this.troncos5.setTint("0x000203");
                }
            }
        }
    }

}

export default TestScene;