import Bootloader from "./scenes/Bootloader.js";
import TestScene from "./scenes/TestScene.js";
import Escena2 from "./scenes/Escena2.js";
import menuNiveles from "./scenes/menuNiveles.js";
import creditos from "./scenes/creditos.js";
import BatteryBar from "./scenes/BatteryBar.js";
import StaminaBar from "./scenes/StaminaBar.js";
import cueva from "./scenes/cueva.js";

var config = {
  title: "Curso Phaser", //Nombre del juego (opcional)
  url: "http://google.es", //Dirección de la página del juego (opcional)
  version: "0.0.1", //Versión alfanumérica (opcional)
  type: Phaser.AUTO, //Tipo de renderizado (WEBGL, CANVAS, AUTO)
  // AUTO: busca primero WEBGL y si no está disponible eligirá CANVAS
  width: 1280, //Ancho de pantalla del juego
  height: 720, //Alto de pantalla del juego
  parent: "contenedor", //Nombre del id del elemento <div> en el index.html
  // se refiere a dónde se pondrá el canvas o lienzo
  pixelArt: true, //Diseño con pixeles definidos (no borrosos)
  backgroundColor: "#34495e", //Color de fondo del canvas ()
  scene: [
    Bootloader,
    cueva,
    menuNiveles,
    Escena2,
    TestScene,
    creditos,
    BatteryBar,
    StaminaBar,
  ], //Aquí irá la lista de scenas del juego
  physics: {
    default: "arcade", //Matter
    arcade: {
      //debug: true,
    },
  },
  banner: {
    hidePhaser: true,
    text: "#fff00f",
    background: ["#16a085", "#2ecc71", "#e74c3c", "#000000"],
  },
};

const game = new Phaser.Game(config);
