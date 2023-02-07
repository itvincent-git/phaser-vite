import { GameObjects, Scene } from "phaser";

export default class LoadRemoteScene extends Scene {
  private image: GameObjects.Image | undefined;
  private video: GameObjects.Video | undefined;

  constructor() {
    super("image-remote-scene");
  }

  preload() {
    // this.load.crossOrigin = "anonymous";
    this.load.image(
      "pidgeot",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    );
    this.load.video(
      "video-sample",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/video/test.mp4",
      "canplaythrough",
      true,
      true
    );
  }

  create() {
    this.image = this.add.image(
      window.innerWidth / 2,
      window.innerHeight / 2,
      "pidgeot"
    );
    this.video = this.add
      .video(400, 200, "video-sample")
      .setDisplaySize(400, 225)
      .setOrigin(0.5, 0.5)
      .setInteractive()
      .play(); // play the video
  }

  update(_: number, delta: number) {
    if (!this.image || !this.video) {
      return;
    }

    this.image.rotation += 0.0005 * delta
    this.video.rotation += 0.0005 * delta
  }
}
