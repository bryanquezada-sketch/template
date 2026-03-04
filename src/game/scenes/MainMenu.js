import { Scene } from 'phaser';

export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.add.image(0, 0, 'background').setOrigin(0).setDisplaySize(this.scale.width, this.scale.height);

        this.add.image(this.scale.width / 2, this.scale.height / 2, 'logo').setOrigin(0.5).setScale(0.5);

        this.add.bitmapText(this.scale.width / 2, this.scale.height / 2 - 35, 'globalFont', 'MADE WITH', 10);

        this.add.bitmapText(this.scale.width / 2, this.scale.height / 2 + 50, 'globalFont', 'Click to Start', 14);

        this.add.bitmapText(400, 300, 'globalFont', 'SCORE: 100', 16, 0);

        
        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }
}
