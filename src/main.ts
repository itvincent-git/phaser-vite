import "./style.css";
import { Game, AUTO } from "phaser";
import GameScene from "./scenes/game";
import LoadRemoteScene from "./scenes/load-remote";

// config for game
const config = {
  type: AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  parent: "app",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      // debug: true
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [LoadRemoteScene, GameScene],
};

window.addEventListener("load", () => {
  // Expose `_game` to allow debugging, mute button and fullscreen button
  (window as any)._game = new Game(config);
});
