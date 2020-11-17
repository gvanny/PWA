/**
 * Cada uno de los elementos del juego
 */
class Entity {
    /**
     * Inicializa un elemento del juego
     * @param game {Game} La instancia del juego al que pertenece el elemento
     * @param width {Number} Ancho del elemento
     * @param height {Number} Alto del elemento
     * @param x {Number} Posición horizontal del elemento
     * @param y {Number} Posición vertical del elemento
     * @param speed {Number} Velocidad del elemento
     * @param myImage {String} Ruta de la imagen del elemento
     */
    constructor(game, width, height, x, y, speed, myImage) {
        this.game = game;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speed = speed;
        
        this.myImage = new Image();
        this.myImage.src = myImage;
        this.myImage.style.width = '100%';

        this.myImageContainer = document.createElement('div');
        this.myImageContainer.appendChild(this.myImage);
        this.myImageContainer.className = this.constructor.name;

        if (this.constructor.name === 'Player'){
            this.myImageContainer.setAttribute("xpos", this.x);
            this.myImageContainer.setAttribute("ypos", this.y);
        }

        this.myImageContainer.style.position = "absolute";
        this.myImageContainer.style.height = this.height === "auto" ? "auto" : `${this.height}px`;
        this.myImageContainer.style.width = this.width === "auto" ? "auto" : `${this.width}px`;
        this.myImageContainer.style.top = `0px`;
        this.myImageContainer.style.left = `0px`;
        this.myImageContainer.style.transform = `translate(${this.x}px, ${this.y}px)`;

        GAME_UI.gameBoard.appendChild(this.myImageContainer);
    }

    remove() {
        document.body.removeChild(this.image);
    }


    /**
     * Actualiza la posición del elemento en la pantalla
     */
    render() {
        this.myImageContainer.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}