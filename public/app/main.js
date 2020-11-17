/**
 * Consts and state
 */


// Contenedor de instancia del juego
let game;


// Valores constantes
const OPPONENT_HEIGHT = 15,
    OPPONENT_PICTURE = "assets/img/malo-game.png",
    OPPONENT_PICTURE_DEAD = "assets/img/muerte.gif",
    OPPONENT_SPEED = 10,
    OPPONENT_WIDTH = 15,
    GAME_OVER_PICTURE = "assets/img/game_over.png",
    KEY_LEFT = "LEFT",
    KEY_RIGHT = "RIGHT",
    KEY_SHOOT = "SHOOT",
    MIN_TOUCHMOVE = 20,
    PLAYER_HEIGHT = 15,
    PLAYER_PICTURE = "assets/img/bueno.png",
    PLAYER_PICTURE_DEAD = "assets/img/muerte.gif",
    PLAYER_SPEED = 20,
    PLAYER_WIDTH = 15,
    SHOT_HEIGHT = 1.5,
    SHOT_SPEED = 20,
    SHOT_PICTURE_PLAYER = "assets/img/shot1.png",
    SHOT_PICTURE_OPPONENT = "assets/img/shot2.png",
    SHOT_WIDTH = 1.5;


// Selectores DOM y estado del juego
const GAME_UI = {
    app: document.querySelector('#app'),
    gameBoard: document.querySelector('.game'),
    pages: {
        splash: document.querySelector('#splash_page'),
        swiperContainer: document.querySelector('#swiper_page'),
        main: document.querySelector('#main_page'),
        menu: document.querySelector('#menu_page'),
        settings: document.querySelector('#settings_page'),
        leaderboard: document.querySelector('#leaderboard_page')
    },
    modalWindows: {
        pause: document.querySelector('#modal_pause_window'),
        confirm: document.querySelector('#modal_confirm'),
        spinner: document.querySelector('#modal_loading_spinner')
    },
    state: {
        navigationStage: '',
        playing: false,
        paused: false,
        spinning: false
    }
};



/**
 * loading scripts
 */
window.addEventListener('load', () => {
    initNavigation();
    initUI();
    navigationTo('#splash_page', 'fade_in');
});
