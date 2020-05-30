class TestScene extends Phaser.Scene {
  constructor() {
    super("TestScene");
  }

  init(vidas) {
    console.log("Escena Test");
    this.data.set("vidas", vidas);
  }

  preload() {
    
    this.load.path = "./assets/";
    this.load.audio("truenoC", "audio/truenoC.mp3");
    this.load.audio("radio", "audio/radionoise.mp3");
    this.load.audio("pandora", "audio/musicbox.mp3");
    this.load.image("santino", "santinoPack/0.png");
    this.load.image(
      "fondoColorSolido",
      "forest/PNG/Background layers/layer01.png"
    );
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
    //piso
    this.load.image("ground", "objetos/ground.png");
    //anim - Said
    this.load.atlas(
      "santinoRun",
      "santinoPack/santino_atlas.png",
      "santinoPack/santino_anim.json"
    );
  }

  create() {
    //Manejo de datos
    //this.data.set('vidas', vidas);
    console.log("vidas: ", this.data.list);

    //this.registry.events.emit('evento', 300);
    
    this.scene.launch("BatteryBar");
    this.scene.launch("StaminaBar");

    const keyCodes = Phaser.Input.Keyboard.KeyCodes;

    this.inputPLayer1 = this.input.keyboard.addKeys({
      u: keyCodes.UP,
      d: keyCodes.DOWN,
      l: keyCodes.LEFT,
      r: keyCodes.RIGHT,
      space: keyCodes.SPACE,
    });

    this.cantMons;
    this.cantMons = 0;

    this.cursors = this.input.keyboard.createCursorKeys();

    //Animacion
    this.anims.create({
      key: "santino_walk",
    });

    //sonido camino en pasto
    this.pandora = this.sound.add("pandora");

    //sonido susurros
    this.radio = this.sound.add("radio");

    //sonido truenos
    this.trueno = this.sound.add("truenoC");

    var configMusic = {
      loop: true,
      volume: 1.5,
    };

    this.pandora.play(configMusic);
    this.radio.play(configMusic);
    this.trueno.play(configMusic);

    //-- Fondo
    this.fondo = this.add.tileSprite(
      0,
      0,
      this.sys.canvas.width,
      this.sys.canvas.height,
      "fondoColorSolido"
    ); //atributo
    this.fondo.setOrigin(0, 0);
    this.fondo.setScrollFactor(0);

    this.troncos5 = this.add.tileSprite(
      0,
      0,
      this.sys.canvas.width,
      0,
      "troncos5"
    ); //atributo
    this.troncos5.setOrigin(0, 0);
    this.troncos5.setScrollFactor(0);

    this.troncos4 = this.add.tileSprite(
      0,
      0,
      this.sys.canvas.width,
      0,
      "troncos4"
    ); //atributo
    this.troncos4.setOrigin(0, 0);
    this.troncos4.setScrollFactor(0);

    this.troncos3 = this.add.tileSprite(
      0,
      0,
      this.sys.canvas.width,
      0,
      "troncos3"
    ); //atributo
    this.troncos3.setOrigin(0, 0);
    this.troncos3.setScrollFactor(0);

    this.troncos2 = this.add.tileSprite(
      0,
      0,
      this.sys.canvas.width,
      0,
      "troncos2"
    ); //atributo
    this.troncos2.setOrigin(0, 0);
    this.troncos2.setScrollFactor(0);

    this.troncosFrente = this.add.tileSprite(
      0,
      0,
      this.sys.canvas.width,
      0,
      "troncos1"
    ); //atributo
    this.troncosFrente.setOrigin(0, 0);
    this.troncosFrente.setScrollFactor(0);

    this.hojas = this.add.tileSprite(0, 0, this.sys.canvas.width, 0, "hojas"); //atributo
    this.hojas.setOrigin(0, 0);
    this.hojas.setScrollFactor(0);

    this.hojas2 = this.add.tileSprite(
      0,
      -100,
      this.sys.canvas.width,
      0,
      "hojas"
    ); //atributo
    this.hojas2.setOrigin(0, 0);
    this.hojas2.setScrollFactor(0);

    this.hojas3 = this.add.tileSprite(
      0,
      -200,
      this.sys.canvas.width,
      0,
      "hojas"
    ); //atributo
    this.hojas3.setOrigin(0, 0);
    this.hojas3.setScrollFactor(0);

    this.piso = this.add.tileSprite(0, 0, this.sys.canvas.width, 0, "pasto"); //atributo
    this.piso.setOrigin(0, 0);
    this.piso.setScrollFactor(0);

    this.tierra = this.add.tileSprite(0, 0, this.sys.canvas.width, 0, "tierra"); //atributo
    this.tierra.setOrigin(0, 0);
    this.tierra.setScrollFactor(0);
    this.tierra.setDepth(3);
    //--

    this.roca = this.physics.add.image(2000, 630, "roca");
    this.roca.setOrigin(0, 0).setDepth(2);
    this.roca.setScale(0.09);

    this.monio = this.physics.add.image(1290, 630, "mogno");
    this.monio.setOrigin(0, 0);
    this.monio.setScale(0.008);
    this.monio.setDepth(4);

    this.monio2 = this.add.image(2520, 630, "mogno");
    this.monio2.setOrigin(0, 0);
    this.monio2.setScale(0.008);
    this.monio2.setDepth(4);

    this.monio3 = this.add.image(3700, 630, "mogno");
    this.monio3.setOrigin(0, 0);
    this.monio3.setScale(0.008);
    this.monio3.setDepth(4);

    this.tweenMoniosFlotando = this.add.tween({
      targets: [this.monio, this.monio2, this.monio3],
      y: 640,
      repeat: -1,
      duration: 1000,
      yoyo: true,
    });

    this.timeline = this.tweens.timeline({
      paused: true,
      targets: [this.monio],
      // totalDuration: 1000,
      tweens: [
        {
          y: 400,
          // duration: 3000,
        },
      ],
      onStart: () => {
        this.textoMonios.setText("Moños: 1");
        this.troncos5.setTint("0x0e5178");
        this.troncos4.setTint("0x0e5178");
      },
      onComplete: () => {
        this.monio.setAlpha(0);
      },
    });

    this.timeline2 = this.tweens.timeline({
      paused: true,
      targets: [this.monio2],
      // totalDuration: 1000,
      tweens: [
        {
          y: 400,
          // duration: 3000,
        },
      ],
      onStart: () => {
        this.textoMonios.setText("Moños: 2");
        this.troncos5.setTint("0x05283d");
        this.troncos4.setTint("0x05283d");
        this.troncos3.setTint("0x05283d");
      },
      onComplete: () => {
        this.monio2.setAlpha(0);
      },
    });

    this.timeline3 = this.tweens.timeline({
      paused: true,
      targets: [this.monio3],
      // totalDuration: 1000,
      tweens: [
        {
          y: 400,
          // duration: 3000,
        },
      ],
      onStart: () => {
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
      },
    });

    this.textoMonios = this.add.text(70, 70, "Moños: 0", {
      color: "white",
      fontSize: 30,
      backgroundColor: "rgba(0,0,0,0.52)",
    });
    this.textoMonios.setScrollFactor(0);

    this.player = this.physics.add.image(200, 600, "santino");
    this.player.setDepth(2).setGravityY(400);
    //Collider

    //this.roca.body.collideWorldBounds = true;
    this.roca.setImmovable(true);
    this.physics.add.collider(this.player, this.roca);
    this.physics.world.collide(this.player, this.roca, () => {});

    this.cameras.main.setBounds(
      0,
      0,
      this.sys.canvas.width * 5,
      this.sys.canvas.height
    );
    this.cameras.main.startFollow(this.player);

    //TWEEEN salto
    // this.salto = this.add.tween({
    //     targets: [this.player],
    //     y: 570,
    //     yoyo: true,
    //     duration: 400,
    // });

    this.createGround();
  }

  update() {
    this.movement();
    this.troncos5.tilePositionX = this.cameras.main.scrollX * 0.2;
    this.troncos4.tilePositionX = this.cameras.main.scrollX * 0.25;
    this.troncos3.tilePositionX = this.cameras.main.scrollX * 0.4;
    this.troncos2.tilePositionX = this.cameras.main.scrollX * 0.43;
    this.troncosFrente.tilePositionX = this.cameras.main.scrollX * 0.6;
    this.hojas.tilePositionX = this.cameras.main.scrollX * 0.6;
    this.hojas2.tilePositionX = this.cameras.main.scrollX * 0.6;
    this.hojas3.tilePositionX = this.cameras.main.scrollX * 0.6;
    this.piso.tilePositionX = this.cameras.main.scrollX * 0.65;
    this.tierra.tilePositionX = this.cameras.main.scrollX * 0.65;

    this.verificaPos();
    this.Jump();

    if (this.cantMons == 1) {
      this.troncos5.setTint("0x0e5178");
    } else {
      if (this.cantMons == 2) {
        this.troncos5.setTint("0x05283d");
      } else {
        if (this.cantMons == 3) {
          this.troncos5.setTint("0x000203");
        }
      }
    }
  }

  movement() {
    if (this.cursors.left.isDown && this.player.x > 100) {
      this.player.x -= 3;
      this.player.flipX = 1;
      console.log(this.player.x);
    } else if (
      this.cursors.right.isDown &&
      this.player.x < this.sys.canvas.width * 5
    ) {
      this.player.x += 3;
      this.player.flipX = 0;
      // console.log(this.player.x);
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
    if (this.player.x >= this.monio2.x) {
      // this.trueno.play();
      this.timeline2.play();
    }
    if (this.player.x >= this.monio3.x) {
      // this.trueno.play();
      this.timeline3.play();
    }
  }

  createGround() {
    this.gr00 = this.physics.add
      .image(200, 710, "ground")
      .setDepth(4)
      .setScale(0.33)
      .setDepth(2)
      .setImmovable();
    this.gr01 = this.physics.add
      .image(400, 710, "ground")
      .setDepth(4)
      .setScale(0.33)
      .setDepth(2)
      .setImmovable();
    this.gr02 = this.physics.add
      .image(600, 710, "ground")
      .setDepth(4)
      .setScale(0.33)
      .setDepth(2)
      .setImmovable();
    this.gr03 = this.physics.add
      .image(800, 710, "ground")
      .setDepth(4)
      .setScale(0.33)
      .setDepth(2)
      .setImmovable();
    this.gr04 = this.physics.add
      .image(1000, 710, "ground")
      .setDepth(4)
      .setScale(0.33)
      .setDepth(2)
      .setImmovable();
    this.gr05 = this.physics.add
      .image(1200, 710, "ground")
      .setDepth(4)
      .setScale(0.33)
      .setDepth(2)
      .setImmovable();
    this.gr06 = this.physics.add
      .image(1400, 710, "ground")
      .setDepth(4)
      .setScale(0.33)
      .setDepth(2)
      .setImmovable();
    this.gr07 = this.physics.add
      .image(1600, 710, "ground")
      .setDepth(4)
      .setScale(0.33)
      .setDepth(2)
      .setImmovable();
    this.gr08 = this.physics.add
      .image(1800, 710, "ground")
      .setDepth(4)
      .setScale(0.33)
      .setDepth(2)
      .setImmovable();
    this.gr09 = this.physics.add
      .image(2000, 710, "ground")
      .setDepth(4)
      .setScale(0.33)
      .setDepth(2)
      .setImmovable();
    this.gr10 = this.physics.add
      .image(2200, 710, "ground")
      .setDepth(4)
      .setScale(0.33)
      .setDepth(2)
      .setImmovable();
    this.gr11 = this.physics.add
      .image(2400, 710, "ground")
      .setDepth(4)
      .setScale(0.33)
      .setDepth(2)
      .setImmovable();
    this.gr12 = this.physics.add
      .image(2600, 710, "ground")
      .setDepth(4)
      .setScale(0.33)
      .setDepth(2)
      .setImmovable();
    this.gr13 = this.physics.add
      .image(2800, 710, "ground")
      .setDepth(4)
      .setScale(0.33)
      .setDepth(2)
      .setImmovable();
    this.gr14 = this.physics.add
      .image(3000, 710, "ground")
      .setDepth(4)
      .setScale(0.33)
      .setDepth(2)
      .setImmovable();
    this.gr15 = this.physics.add
      .image(3200, 710, "ground")
      .setDepth(4)
      .setScale(0.33)
      .setDepth(2)
      .setImmovable();
    this.gr16 = this.physics.add
      .image(3400, 710, "ground")
      .setDepth(4)
      .setScale(0.33)
      .setDepth(2)
      .setImmovable();
    this.gr17 = this.physics.add
      .image(3600, 710, "ground")
      .setDepth(4)
      .setScale(0.33)
      .setDepth(2)
      .setImmovable();
    this.gr18 = this.physics.add
      .image(3800, 710, "ground")
      .setDepth(4)
      .setScale(0.33)
      .setDepth(2)
      .setImmovable();
    this.gr19 = this.physics.add
      .image(4000, 710, "ground")
      .setDepth(4)
      .setScale(0.33)
      .setDepth(2)
      .setImmovable();
    this.gr20 = this.physics.add
      .image(4200, 710, "ground")
      .setDepth(4)
      .setScale(0.33)
      .setDepth(2)
      .setImmovable();
    this.gr21 = this.physics.add
      .image(4400, 710, "ground")
      .setDepth(4)
      .setScale(0.33)
      .setDepth(2)
      .setImmovable();
    this.gr22 = this.physics.add
      .image(4600, 710, "ground")
      .setDepth(4)
      .setScale(0.33)
      .setDepth(2)
      .setImmovable();
    this.gr23 = this.physics.add
      .image(4800, 710, "ground")
      .setDepth(4)
      .setScale(0.33)
      .setDepth(2)
      .setImmovable();
    this.gr24 = this.physics.add
      .image(5000, 710, "ground")
      .setDepth(4)
      .setScale(0.33)
      .setDepth(2)
      .setImmovable();
    this.gr25 = this.physics.add
      .image(5200, 710, "ground")
      .setDepth(4)
      .setScale(0.33)
      .setDepth(2)
      .setImmovable();
    this.gr26 = this.physics.add
      .image(5400, 710, "ground")
      .setDepth(4)
      .setScale(0.33)
      .setDepth(2)
      .setImmovable();
    this.gr27 = this.physics.add
      .image(5600, 710, "ground")
      .setDepth(4)
      .setScale(0.33)
      .setDepth(2)
      .setImmovable();
    this.gr28 = this.physics.add
      .image(5800, 710, "ground")
      .setDepth(4)
      .setScale(0.33)
      .setDepth(2)
      .setImmovable();

    this.suelo = this.add.group();
    this.suelo.add(this.gr00);
    this.suelo.add(this.gr01);
    this.suelo.add(this.gr02);
    this.suelo.add(this.gr03);
    this.suelo.add(this.gr04);
    this.suelo.add(this.gr05);
    this.suelo.add(this.gr06);
    this.suelo.add(this.gr07);
    this.suelo.add(this.gr08);
    this.suelo.add(this.gr09);
    this.suelo.add(this.gr10);
    this.suelo.add(this.gr11);
    this.suelo.add(this.gr12);
    this.suelo.add(this.gr13);
    this.suelo.add(this.gr14);
    this.suelo.add(this.gr15);
    this.suelo.add(this.gr16);
    this.suelo.add(this.gr17);
    this.suelo.add(this.gr18);
    this.suelo.add(this.gr19);
    this.suelo.add(this.gr20);
    this.suelo.add(this.gr21);
    this.suelo.add(this.gr22);
    this.suelo.add(this.gr23);
    this.suelo.add(this.gr24);
    this.suelo.add(this.gr25);
    this.suelo.add(this.gr26);
    this.suelo.add(this.gr27);
    this.suelo.add(this.gr28);

    this.physics.add.collider(this.player, this.suelo);
  }
}

export default TestScene;
