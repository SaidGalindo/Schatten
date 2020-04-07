class TestScene extends Phaser.Scene{
    constructor(){
        super({
            key: 'TestScene'
        });
    }

    init(){
        console.log("Escena Test");
    }

    preload(){
        this.load.path = './assets/';  
        this.load.image('santino','santino/santino.png');
    }

    create(){
        this.txt = this.add.text(50,50, "Cargando we...", {font: "25px Arial", fill: "yellow"});
        this.sant = this.add.image(200,200, "santino");
    }

    update(){

    }
}