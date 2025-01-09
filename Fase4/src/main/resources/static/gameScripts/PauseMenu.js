class PauseMenuScene extends Phaser.Scene {
    constructor() {
        super('PauseMenuScene');
        //Elementos de la escena de menú de pausa
        this.background;
        this.resumeButton;
        this.pauseImage;
        this.resumeButtonContainer;
        this.exitButtonContainer;
        this.exitButton;
        this.gameScene;
        this.botonDetectChat;
    }

    initialize() {
        Phaser.Scene.call(this, { key: 'PauseMenuScene' });
    }

    preload() {
        //Cargamos las imágenes
        this.load.image('botonReanudar', 'assets/images/reanudarBoton.png')
        this.load.image('botonPause', 'assets/images/pausa.png')
        this.load.image('fondoPausa', 'assets/images/backgroundpausa.jpeg')
        this.load.image('botonExit', 'assets/images/botonSalir.png')
        this.load.image('chatButton', 'assets/images/botonChat.png');
    }

    create() {
        //Añadimos la imagen de fondo
        this.background = this.add.image(400, 300, 'fondoPausa');
        //Añadimos la imagen de pausa
        this.pauseImage = this.add.image(400, 50, 'botonPause');
        //Añadimos el boton de reanudar
        this.resumeButton = this.add.image(0, 0, 'botonReanudar');
        //Boton de salir
        this.exitButton = this.add.image(0, 0, 'botonExit');
        //Boton chat
        const chatButton = this.add.image(0, 0, 'chatButton');
        //Los hacemos interactivos
        this.resumeButtonContainer = this.add.container(400, 300, [this.resumeButton]);
        this.resumeButtonContainer.setSize(this.resumeButton.height, this.resumeButton.width);
        this.resumeButtonContainer.setInteractive();
        this.exitButtonContainer = this.add.container(700, 550, [this.exitButton]);
        this.exitButtonContainer.setSize(this.exitButton.height, this.exitButton.width);
        this.exitButtonContainer.setInteractive();
        // Hacemos que el botón sea interactivo
        this.chatButtonContainer = this.add.container(100, 550, [chatButton]);
        this.chatButtonContainer.setSize(chatButton.width, chatButton.height);
        this.chatButtonContainer.setInteractive();

        this.resumeButtonContainer.on('pointerdown', function () {
            this.scene.scene.sleep('PauseMenuScene');
            this.scene.scene.resume('GameScene');
        })

        if (this.resumeButtonContainer && this.resumeButton) {
            this.resumeButtonContainer.on('pointerover', () => {
                this.resumeButton.setScale(1.2);
            });

            this.resumeButtonContainer.on('pointerout', () => {
                this.resumeButton.setScale(1);
            });
        }
        this.gameScene = this.scene.get('GameScene');

        this.exitButtonContainer.on('pointerdown', function () {
            this.scene.scene.bringToTop('MainMenuScene');
            this.scene.scene.start('MainMenuScene');
        })

        if (this.exitButtonContainer && this.exitButton) {
            this.exitButtonContainer.on('pointerover', () => {
                this.exitButton.setScale(1.2);
            });

            this.exitButtonContainer.on('pointerout', () => {
                this.exitButton.setScale(1);
            });
        }

        // Si pulsamos, nos lleva a la escena de chat
        this.chatButtonContainer.on('pointerdown', function () {
            this.scene.scene.start('ChatScene');
        });

        // Resalta el botón al pasar el puntero sobre él
        this.chatButtonContainer.on('pointerover', function () {
            chatButton.setScale(1.5);
        });

        // Restaura la escala normal del botón al quitar el puntero
        this.chatButtonContainer.on('pointerout', function () {
            chatButton.setScale(1);
        });
    }

}
