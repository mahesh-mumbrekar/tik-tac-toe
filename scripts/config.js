function openPlayerConfig() {
    PlayerConfigOverlayElement.style.display = 'block'
    backDropElement.style.display='block'

}



function closePlayerConfig() {
     PlayerConfigOverlayElement.style.display = 'none'
     backDropElement.style.display='none'

    
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('username').trim();
    
}

/*function savePlayerConfig(event) {
  event.preventDefault();
  const enteredPlayername = event.target.elements.playername.value;
  console.log(enteredPlayername);
}*/