//import './domain';
require('./domain');
//export default Game;           
//export {GameSavingData};    
//export {readGameSaving, writeGameSaving};

class Game {
  start() {
    console.log('game started');
  }
}

class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}

module.exports = {
    Game, 
    GameSavingData,  
    readGameSaving, 
    writeGameSaving
}