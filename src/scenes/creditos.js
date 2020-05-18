class creditos extends Phaser.Scene{
    
    constructor(){
        super({
            key: 'creditos'
        });
    }
    
    init() {
        console.log('creditos');
    }

    create() {


        //se reproduce el audio de fondo
        this.cCaballo=this.sound.add ("cCaballo", {volume: 0.7});
        this.cCaballo.play();

        //Se coloca el fondo
        this.cFonfoMontaña = this.add.image(0,0,'cFondoMontaña');
        this.cFonfoMontaña.setOrigin(0,0);
        this.cFonfoMontaña.setDepth(-1);

        //las letras con los nombres
        this.cDesarrollado = this.add.image(800,100,'cDesarrollado').setInteractive();
        this.cDesarrollado.setScale(.7);
        this.cDesarrollado.setOrigin(0,0);
        this.cDesarrollado.setName("cDesarrollado");
        this.cDesarrollado.inputEnabled = true; 


    }

    update(time, delta) {

    }
}
export default creditos;