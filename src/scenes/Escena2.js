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
  }

  create() {
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

    //-- Jugador
    this.player = this.add.image(200, 620, "santino");
    this.player.setDepth(2);

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
      // console.log(this.player.x);
    }
  }

  update() {
    this.movement();
    this.troncos5.tilePositionX = this.cameras.main.scrollX * 0.2;
    this.troncos4.tilePositionX = this.cameras.main.scrollX * 0.25;
    this.troncos3.tilePositionX = this.cameras.main.scrollX * 0.4;
    this.troncos2.tilePositionX = this.cameras.main.scrollX * 0.43;
    this.troncos1.tilePositionX = this.cameras.main.scrollX * 0.6;
  }
}

export default Escena2;
