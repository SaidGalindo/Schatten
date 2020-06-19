class cueva extends Phaser.Scene {
  constructor() {
    super("cueva");
  }

  init() {
    console.log("escena cueva");
  }

  preload() {
    this.load.path = "./assets/";
    this.load.audio("truenoC", "audio/truenoC.mp3");
    this.load.image("santino", "santinoPack/0.png");
    this.load.image("fondoSimple", "cueva/cueva_fondo2.png");
    this.load.image("fondo", "cueva/cueva_Fondo.png");
    this.load.image("piso", "cueva/cueva_piso.png");
    //--- rocas para poner como ostáculos o plataformas ---
    this.load.image("rocaHor", "cueva/cueva_rocaHorizontal.png");
    this.load.image("rocaVer", "cueva/cueva_RocaVertical.png");

    //se carga el audio
    this.load.audio("cAshes", "audio/ashesC.mp3");
    this.load.audio("cPerroHit", "audio/cPerroHit.mp3");
  }

  create() {
    this.scene.launch("BatteryBar");
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
      "fondoSimple"
    ); //atributo
    this.fondo.setOrigin(0, 0);
    this.fondo.setScrollFactor(0);
    this.fondo.width = this.sys.canvas.width;

    this.pilar = this.add.tileSprite(0, 0, this.sys.canvas.width, 0, "fondo"); //atributo
    this.pilar.setOrigin(0, 0);
    this.pilar.setScale(0.9);
    this.pilar.setScrollFactor(0);

    this.piso = this.add.tileSprite(0, 35, this.sys.canvas.width, 0, "piso"); //atributo
    this.piso.setOrigin(0, 0);
    this.piso.setScrollFactor(0);


    //-- Jugador
    this.player = this.physics.add.image(100, 400, "santino"); //Se agregaron fisicas al jugador
    this.player.setDepth(2).setGravityY(200);

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
  }

  movement() {
    //Joshua , tu funcion no me gusta .-.
    if (this.cursors.left.isDown && this.player.x > 100) {
      this.player.x -= 5;
      this.player.flipX = 1;
      console.log(this.player.x);
    } else if (
      this.cursors.right.isDown &&
      this.player.x < this.sys.canvas.width * 3
    ) {
      this.player.x += 5;
      this.player.flipX = 0;
      //console.log(this.player.x);
    }
  }
  Jump() {
    if (this.cursors.up.isDown) {
      //this.salto.play();
      this.player.setVelocityY(-200);
    }
  }
  verificaPos() {
    if (this.player.x >= 1290) {
      this.timeline.play();
    }

    //rocas para saltar

    this.rocaHor = this.physics.add.image(50, 600, "rocaHor");
    this.rocaHor.setOrigin(0, 0).setDepth(2);
    //this.rocaHor.setScale(0.3);
    this.rocaHor.setImmovable(true);
    this.physics.add.collider(this.player, this.rocaHor);
    this.physics.world.collide(this.player, this.rocaHor, () => {});


    this.rocaVer = this.physics.add.image(500, 400, "rocaVer");
    this.rocaVer.setOrigin(0, 0).setDepth(2);
    //this.rocaVer.setScale(0.09);
    this.rocaVer.setImmovable(true);
    this.physics.add.collider(this.player, this.rocaVer);
    this.physics.world.collide(this.player, this.rocaVer, () => {});


    this.rocaVer1 = this.physics.add.image(630, 300, "rocaVer");
    this.rocaVer1.setOrigin(0, 0).setDepth(2);
    //this.rocaVer.setScale(0.09);
    this.rocaVer1.setImmovable(true);
    this.physics.add.collider(this.player, this.rocaVer1);
    this.physics.world.collide(this.player, this.rocaVer1, () => {});


    this.rocaVer2 = this.physics.add.image(760, 200, "rocaVer");
    this.rocaVer2.setOrigin(0, 0).setDepth(2);
    //this.rocaVer.setScale(0.09);
    this.rocaVer2.setImmovable(true);
    this.physics.add.collider(this.player, this.rocaVer2);
    this.physics.world.collide(this.player, this.rocaVer2, () => {});


    this.rocaVer3 = this.physics.add.image(1100, 400, "rocaVer");
    this.rocaVer3.setOrigin(0, 0).setDepth(2);
    //this.rocaVer.setScale(0.09);
    this.rocaVer3.setImmovable(true);
    this.physics.add.collider(this.player, this.rocaVer3);
    this.physics.world.collide(this.player, this.rocaVer3, () => {});

    //fisicas de santino
    //this.player = this.physics.add.image(200, 600, "santino");
    //this.player.setDepth(6).setGravityY(400);

    //audio perro
    this.cPerroHit=this.sound.add("cPerroHit");
    this.cAshes = this.sound.add("cAshes",{volume: 0.4});
    this.cAshes.play();
  }

  update() {
    this.movement();
    this.verificaPos();
    this.Jump();
    this.pilar.tilePositionX = this.cameras.main.scrollX * 0.2;
    this.piso.tilePositionX = this.cameras.main.scrollX * 0.5;

    if(this.player.y > 595 && this.player.y < 600){
      this.cPerroHit.play();
    }
    if(this.player.y > 580){
      this.player.setTint("0xff0000");
      //this.cPerroHit.play();
    }else{
      this.player.setTint();
    }
  }
}

export default cueva;
