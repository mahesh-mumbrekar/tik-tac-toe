function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  
  PlayerConfigOverlayElement.style.display = 'block';
  backDropElement.style.display = 'block';

}



function closePlayerConfig() {
  PlayerConfigOverlayElement.style.display = 'none';
  backDropElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('error'); 
  errorsOutputElement.textContent = '';  
  formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('username').trim();
  


    if (!enteredPlayerName) {
       event.target.firstElementChild.classList.add('error');
       errorsOutputElement.textContent = 'Please enter a valid name!';
      return;
  }

     const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data')
     updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
  
     players[editedPlayer - 1].name = enteredPlayerName;

    closePlayerConfig();
   
}

/*function savePlayerConfig(event) {
  event.preventDefault();
  const enteredPlayername = event.target.elements.playername.value;
  console.log(enteredPlayername);
}*/


