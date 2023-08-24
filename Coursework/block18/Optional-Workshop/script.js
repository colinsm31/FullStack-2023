submitButton.addEventListener('click', function addToRoster(){
  let newPlayer = document.createElement('section')
  let name = document.getElementById('playerName').value;
  let breed = document.getElementById('playerBreed').value;
  let team = document.getElementById('playerTeam').value
  if(!team){
    team = 'Unassigned'
  }

  newPlayer.innerHTML = `
    <div class="player-container">
      <div class="info-block">
        <label for="name">Name: </label>
        <div id="name">${name}</div>
      </div>
      <div class="info-block">
        <label for="breed">Breed: </label>
        <div id="breed">${breed}</div>
      </div>
      <div class="info-block">
        <label for="team">Team: </label>
        <div id="team">${team}</div>
      </div>
        <i id="remove-item" class="fas fa-trash"></i>
      </div>`

  roster.appendChild(newPlayer);

  name = "";
  breed = '';
});

roster.addEventListener('click', function(event){
  if(event.target && event.target.matches('.fas.fa-trash')){
    event.target.parentNode.parentNode.style.display = "none";
  }
})