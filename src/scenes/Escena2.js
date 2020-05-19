class Escena2 extends Phaser.Scene {
  constructor() {
    super("Escena2");
  }

  init() {
    console.log("Escena 2 test");
  }

  preload() {
    this.load.path = "./assets/";
    this.load.audio("truenoC", "audio/truenoC.mp3");
    // this.load.audio("radio", "audio/radionoise.mp3");
    // this.load.audio("pandora", "audio/musicbox.mp3");
    this.load.image("santino", "santinoPack/0.png");
    this.load.image("troncos5", "darkForest/bgrd_tree5.png");
    this.load.image("troncos4", "darkForest/bgrd_tree4.png");
    this.load.image("troncos3", "darkForest/bgrd_tree3.png");
    this.load.image("troncos2", "darkForest/bgrd_tree2.png");
    this.load.image("troncos1", "darkForest/bgrd_tree1.png");
    this.load.image("fondo", "darkForest/main_background.png");
    //piso
    this.load.image("ground", "objetos/ground.png");

    //Se carga la fogata Salio chueco :/
    /*this.load.atlas('cfire', 'cFire/cfire.png',
    'cFire/cfire_atlas.json');
    this.load.animation('cfireAnim', 'cFire/cfire_anim.json');
    */
   this.load.image("cFire", "cFire/cfireImg.png");

   //se carga el audio 
   this.load.audio("cBonfire","audio/cBonfire.mp3");
   this.load.audio("cPerroHit","audio/cPerroHit.mp3");



  }

  create() {
    this.scene.launch('BatteryBar');
    // var configMusic = {
    //   loop: true,
    //   volume: 2,
    // };
    // this.truenoC.play(configMusic);

    //-- Controles
    const keyCodes = Phaser.Input.Keyboard.KeyCodes;

    this.inputPLayer1 = this.input.keyboard.addKeys({
      u: keyCodes.UP,
      d: keyCodes.DOWN,
      l: keyCodes.LEFT,
      r: keyCodes.RIGHT,
      space: keyCodes.SPACE,
    });

    this.cursors = this.input.keyboard.createCursorKeys();

    //-- Fondo
    this.fondo = this.add.tileSprite(
      0,
      0,
      this.sys.canvas.width,
      this.sys.canvas.height,
      "fondo"
    ); //atributo
    this.fondo.setOrigin(0, 0);
    this.fondo.setScrollFactor(0);
    this.fondo.setScale(1.2);
    this.fondo.width = this.sys.canvas.width;

    this.troncos5 = this.add.tileSprite(
      0,
      275,
      this.sys.canvas.width,
      0,
      "troncos5"
    ); //atributo
    this.troncos5.setOrigin(0, 0);
    this.troncos5.setScrollFactor(0);
    this.troncos5.setScale(1.6);

    this.troncos4 = this.add.tileSprite(
      0,
      275,
      this.sys.canvas.width,
      0,
      "troncos4"
    ); //atributo
    this.troncos4.setOrigin(0, 0);
    this.troncos4.setScrollFactor(0);
    this.troncos4.setScale(1.6);

    this.troncos3 = this.add.tileSprite(
      0,
      275,
      this.sys.canvas.width,
      0,
      "troncos3"
    ); //atributo
    this.troncos3.setOrigin(0, 0);
    this.troncos3.setScrollFactor(0);
    this.troncos3.setScale(1.6);

    this.troncos2 = this.add.tileSprite(
      0,
      275,
      this.sys.canvas.width,
      0,
      "troncos2"
    ); //atributo
    this.troncos2.setOrigin(0, 0);
    this.troncos2.setScrollFactor(0);
    this.troncos2.setScale(1.6);

    this.troncos1 = this.add.tileSprite(
      0,
      275,
      this.sys.canvas.width,
      0,
      "troncos1"
    ); //atributo
    this.troncos1.setOrigin(0, 0);
    this.troncos1.setScrollFactor(0);
    this.troncos1.setScale(1.6);

    //se crean los audios
    this.cBonfire=this.sound.add("cBonfire");
    this.cPerroHit=this.sound.add("cPerroHit");
    this.cBonfire.play();       //sonido de fondo

    //se crea el fuego
    //this.cfire = this.add.sprite(600, 450, 'cfire', 1).setScale(.5);
    //this.cfire.anims.play("cfireidle");
    this.cFire = this.add.image(900, 680, "cFire").setScale(.5);
    this.physics.add.existing(this.cFire, true);
    this.cFire.body.setSize(90, 80);
    this.cFire.body.setOffset(85, 40);

    //-- Jugador
    this.player = this.physics.add.image(200, 670, "santino");  //Se agregaron fisicas al jugador
    this.player.setDepth(2);

    //choque de bordes 
    this.player.body.setCollideWorldBounds(true);

    //-- Cámaras
    this.cameras.main.setBounds(
      0,
      0,
      this.sys.canvas.width * 3,
      this.sys.canvas.height
    );
    this.cameras.main.startFollow(this.player);

    //se añade la colision
    this.physics.add.collider(this.player,this.cFire);



    //movimiento
    this.cursor = this.input.keyboard.createCursorKeys();
    this.cursor.right.on('down', () => {
    this.player.body.setVelocityX(400);
    this.player.flipX = false;
    });
    this.cursor.left.on('down', () => {
      this.player.body.setVelocityX(-400);
      this.player.flipX = true;
      });
  }



  movement() {      //Joshua , tu funcion no me gusta .-.
    if (this.cursors.left.isDown && this.player.x > 100) {
      this.player.x -= 3;
      this.player.flipX = 1;
      console.log(this.player.x);
    } else if (
      this.cursors.right.isDown &&
      this.player.x < this.sys.canvas.width * 3
    ) {
      this.player.x += 3;
      this.player.flipX = 0;
      //console.log(this.player.x);
    }
  }

  update() {
    //this.movement();
    this.troncos5.tilePositionX = this.cameras.main.scrollX * 0.2;
    this.troncos4.tilePositionX = this.cameras.main.scrollX * 0.25;
    this.troncos3.tilePositionX = this.cameras.main.scrollX * 0.4;
    this.troncos2.tilePositionX = this.cameras.main.scrollX * 0.43;
    this.troncos1.tilePositionX = this.cameras.main.scrollX * 0.6;


    //efecto
    console.log(this.player.x);
    if(this.player.x > 750 && this.player.x < 770){
      this.cPerroHit.play();
    }
    if(this.player.x > 750){
      this.player.setTint("0xff0000");
      //this.cPerroHit.play();
    }else{
      this.player.setTint();
    }

  }
}

export default Escena2;
