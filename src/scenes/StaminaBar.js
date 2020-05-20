class StaminaBar extends Phaser.Scene {
  staminaBar = Phaser.Geom.Rectangle;

  constructor() {
    super("StaminaBar");
  }

  init() {
    console.log("StaminaBar initiated");
  }

  preload() {
    this.load.path = "./assets/";
    this.load.image("indicaStamina", "ui/stamina.png");
  }

  create() {
    this.indicadorStamina = this.add.image(85, 690, "indicaStamina");
    this.indicadorStamina.setOrigin(0, 0);
    this.indicadorStamina.setScale(0.07);
    this.indicadorStamina.setDepth(4);

    //VARIABLES
    this.ss_lanternOn = false; //Variable que nos dice si la batería está encendida
    this.energy = 300; //Energía actual
    this.consumeVel = 0.2; //Cuánto se quita al caminar/correr
    this.consumeVel_Salto = 0.5; //Cuánto se quita al hacer un salto

    //GRAFICO DE BATERIA
    this.graphics = this.add.graphics({
      fillStyle: { color: 0x4182d1 },
    });
    this.staminabar = new Phaser.Geom.Rectangle(110, 690, this.energy, 20);

    //Control por teclado
    const keyCodes = Phaser.Input.Keyboard.KeyCodes;

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.graphics.clear();
    this.staminabar = new Phaser.Geom.Rectangle(110, 690, this.energy, 20);
    this.graphics.fillRectShape(this.staminabar);
    this.staminaCalculator();
  }

  staminaCalculator() {
    if (this.cursors.left.isDown && this.energy > 0) {
      this.energy -= this.consumeVel;
      console.log(this.energy);
    } else {
      if (
        this.cursors.right.isDown &&
        // this.player.x < this.sys.canvas.width * 5 &&
        this.energy > 0
      ) {
        this.energy -= this.consumeVel;
        console.log(this.energy);
      } else {
        if (this.cursors.up.isDown && this.energy > 29) {
          this.energy -= this.consumeVel_Salto;
          console.log(this.energy);
        } else {
          if (this.energy < 300) {
            //verificamos si la estamina está debajo del máximo
            this.energy += 1;
          } else {
            //si no, no seguimos llenando la barra
          }
        }
      }
    }
  }
}

export default StaminaBar;
