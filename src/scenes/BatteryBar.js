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
        var MAX_power = 200;     //Energía máxima de la batería
        this.energy = 10;      //Energía actual

        //GRAFICO DE BATERIA  
        this.graphics = this.add.graphics({
            fillStyle: {color: 0xE1D779}
        });
        this.battery_bar = new Phaser.Geom.Rectangle(20,20, this.energy, 50);

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
    if(this.ss_lanternOn){
        this.energy++;
        this.battery_bar.width = this.energy;
        console.log("asdasda"+this.energy);
    }
  }

}
  
  export default BatteryBar;