import './style.css'
import { Game, AUTO } from 'phaser';
import GameScene from './scenes/game'

// config for game
const config = {
  type: AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  parent: 'app',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      // debug: true
    }
  },
  scene: [
    GameScene
  ]
}

window.addEventListener('load', () => {
  // Expose `_game` to allow debugging, mute button and fullscreen button
  (window as any)._game = new Game(config);
});
