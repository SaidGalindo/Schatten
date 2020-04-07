class TestScene extends Phaser.Scene{
    constructor(){
        super("TestScene");
    }

    init(){
        console.log("Escena Test");
    }

    preload(){
        this.load.path = './assets/';  
        this.load.image('santino','santinoPack/0.png');
        this.load.image("forest", "forest/Preview/backResized.png");
        
    }

    create(){
        const keyCodes = Phaser.Input.Keyboard.KeyCodes;
        //PlayerOne keys
        //this.txt = this.add.text(50,50, "Cargando we...", {font: "25px Arial", fill: "yellow"});
        this.background = this.add.image(0,0, "forest").setScale(2).setDepth(0);
        this.player = this.add.image(200,580, "santino");
        this.inputPLayer1 = this.input.keyboard.addKeys({
            u: keyCodes.UP,
            d: keyCodes.DOWN,
            l: keyCodes.LEFT,
            r: keyCodes.RIGHT,
            space: keyCodes.SPACE
            });
        
    }

    update(){
         if(this.inputPLayer1.l.isDown){
             this.moveOnX(this.player, -5);
         }
         if(this.inputPLayer1.r.isDown){
             this.moveOnX(this.player, 5);
         }
    }

    moveOnX(object, speed){
       
       
        if(speed<0){
         object.flipX = true;
         object.x += speed;
        }
        else {
            object.flipX = false;
            object.x += speed;
        } 
   
}

}

export default TestScene;