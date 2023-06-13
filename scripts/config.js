function openPlayerConfig() {
  PlayerConfigOverlayElement.style.display = 'block';
  backDropElement.style.display = 'block';

}



function closePlayerConfig() {
  PlayerConfigOverlayElement.style.display = 'none';
  backDropElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('error'); 
  errorsOutputElement.textContent = '';  
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

    
}

/*function savePlayerConfig(event) {
  event.preventDefault();
  const enteredPlayername = event.target.elements.playername.value;
  console.log(enteredPlayername);
}*/