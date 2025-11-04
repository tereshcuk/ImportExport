//import Game, { GameSavingData , readGameSaving as loadGame, writeGameSaving as saveGame } from './game';
const {Game, GameSavingData, readGameSaving: loadGame, writeGameSaving: saveGame} = require('./game');


const game = new Game();
game.start();