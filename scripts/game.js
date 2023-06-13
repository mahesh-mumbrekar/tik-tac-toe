function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Plese set custom player name to  both players!')
        return;
    } 
        
     activePlayerNameElement.textContent = players[activePlayer].name;
    
    gameAreaElement.style.display = 'block'
    
}

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
}


function selectGameField(event) {
   
    const selectedColumn = event.target.dataset.col - 1;
    const selectedRow = event.target.dataset.row - 1;
    if (gameData[selectedRow][selectedColumn] > 0) {
        return;
    }
    event.target.textContent = players[activePlayer].symbol;
    event.target.classList.add('disabled');
    gameData[selectedRow][selectedColumn] = activePlayer + 1;

    const winnerId = checkForGameOver();
    if (winnerId !== 0) {
        endGAME(winnerId)
    }
    
    currentRound++

    switchPlayer();   
}



function checkForGameOver() {
    //for checking rows
    for (let i = 0; i < 3; i++) {
        if (
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1]===gameData[i][2]
        ) {
            return gameData[i][0];
        }
        
    }

    // for cheaking column
    for (let i = 0; i < 3; i++) {
        if (
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[1][i] === gameData[2][i]
        ) {
            return gameData[0][i];
        }
        
    }
     
    //for checking diagonal:top left to right bottom

    if (
        gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]
    ) {
        return gameData[0][0];
    }
     
    // for checking diagonal:top right to left bottom

    if (
        gameData[0][2] > 0 &&
        gameData[0][2] === gameData[1][1] &&
        gameData[1][1] === gameData[2][0]
    ) {
        return gameData[0][2];
    }

    if (currentRound === 9) {
        return -1;
    }

    return 0;
}


function endGAME(winnerId) {
    gameOverElement.style.display = 'block'
    
    if (winnerId > 0) {
        const winnerName = players[winnerId - 1].name;
        gameOverElement.firstElementChild.firstElementChild.textContent = winnerName;

    } else {
        gameOverElement.firstElementChild.textContent='It\'s a draw!'
    }

}