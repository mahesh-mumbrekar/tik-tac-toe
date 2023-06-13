function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Plese set custom player name to  both players!')
        return;
    } 
        
    
    gameAreaElement.style.display = 'block'
    
}


function selectGameField(event) {
    event.target.textcontent = players[activePlayer].symbol;
    
}