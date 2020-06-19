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
    this.load.audio("cBonfire", "audio/cBonfire.mp3");
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
    this.player = this.physics.add.image(200, 600, "santino"); //Se agregaron fisicas al jugador
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

    //movimiento
    this.cursor = this.input.keyboard.createCursorKeys();
    this.cursor.right.on("down", () => {
      this.player.body.setVelocityX(400);
      this.player.flipX = false;
    });
    this.cursor.left.on("down", () => {
      this.player.body.setVelocityX(-400);
      this.player.flipX = true;
    });
  }

  movement() {
    //Joshua , tu funcion no me gusta .-.
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
    this.pilar.tilePositionX = this.cameras.main.scrollX * 0.2;
    this.piso.tilePositionX = this.cameras.main.scrollX * 0.5;

    //efecto
    // console.log(this.player.x);
    // if (this.player.x > 750 && this.player.x < 770) {
    //   this.cPerroHit.play();
    // }
    // if (this.player.x > 750) {
    //   this.player.setTint("0xff0000");
    //   //this.cPerroHit.play();
    // } else {
    //   this.player.setTint();
    // }
  }
}

export default cueva;
