var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#010101',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var controls;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('lemming', 'assets/sprites/lemming.png');
}

function create ()
{
    this.cameras.main.zoom = 0.5;

    //  Our container
    var container = this.add.container(400, 300);

    //  Add some sprites - positions are relative to the Container x/y
    var sprite0 = this.add.sprite(0, 0, 'lemming');
    var sprite1 = this.add.sprite(-100, -100, 'lemming');
    var sprite2 = this.add.sprite(100, -100, 'lemming');
    var sprite3 = this.add.sprite(100, 100, 'lemming');
    var sprite4 = this.add.sprite(-100, 100, 'lemming');

    container.add(sprite0);
    container.add(sprite1);
    container.add(sprite2);
    container.add(sprite3);
    container.add(sprite4);

    //  You could also pass them in as an array, to save doing them one by one

    this.tweens.add({
        targets: container,
        angle: 360,
        duration: 6000,
        yoyo: true,
        repeat: -1
    });

    var cursors = this.input.keyboard.createCursorKeys();

    var controlConfig = {
        camera: this.cameras.main,
        left: cursors.left,
        right: cursors.right,
        up: cursors.up,
        down: cursors.down,
        zoomIn: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
        zoomOut: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),
        acceleration: 0.06,
        drag: 0.0005,
        maxSpeed: 1.0
    };

    controls = new Phaser.Cameras.Controls.Smoothed(controlConfig);
}

function update (time, delta)
{
    controls.update(delta);
}
