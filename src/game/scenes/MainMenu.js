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

        this.add.text(this.scale.width / 2, this.scale.height / 2 - 35, 'MADE WITH', {
            fontFamily: 'Arial Black', fontSize: 10, color: '#ffffff',
            stroke: '#000000', strokeThickness: 4,
            align: 'center'
        }).setOrigin(0.5);

        this.add.text(this.scale.width / 2, this.scale.height / 2 + 50, 'Click to Start', {
            fontFamily: 'Arial Black', fontSize: 14, color: '#ffffff',
            stroke: '#000000', strokeThickness: 6,
            align: 'center'
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }
}
