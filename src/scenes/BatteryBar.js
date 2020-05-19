class BatteryBar extends Phaser.Scene {
battery_bar = Phaser.Geom.Rectangle;

    constructor() {
      super("BatteryBar");
      
    }
  
    init() {
      console.log("BatteryBar initiated");
    }
  
    create() {
        //VARIABLES
        this.ss_lanternOn = false;        //Variable que nos dice si la batería está encendida
        this.MAX_power = 300;     //Energía máxima de la batería
        this.energy = 10;      //Energía actual
        this.consumeVel = 2;  //Velocidad de descarga

        //GRAFICO DE BATERIA  
        this.graphics = this.add.graphics({
            fillStyle: {color: 0xE1D779}
        });
        this.battery_bar = new Phaser.Geom.Rectangle(900,680, this.MAX_power, 20);

        //Control por teclado
        const keyCodes = Phaser.Input.Keyboard.KeyCodes;

        this.batteryControl = this.input.keyboard.addKeys({
            light: keyCodes.F
            });
            
         this.batteryControl.light.on('down', () =>{
            console.log("Lantern on");
            this.ss_lanternOn = !(this.ss_lanternOn);
            console.log("Lantern is: " + this.ss_lanternOn);
        });
    }


  
  
    update() {
        this.graphics.clear();
        this.graphics.fillRectShape(this.battery_bar);
        this.lanternOn();
        
  }

  lanternOn(){
    if(this.ss_lanternOn && this.energy>0){
        this.energy = this.energy - 1*this.consumeVel;
        this.battery_bar.width = this.energy;
        console.log("asdasda"+this.energy);
    }else if (!(this.ss_lanternOn) && this.energy<this.MAX_power){
     
      this.energy++;
      this.battery_bar.width = this.energy;
    }
  }

}

  
  export default BatteryBar;