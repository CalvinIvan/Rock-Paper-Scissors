//Globals
let COMPCHOICE;
let USERCHOICE;


//Obj choices
const choices = [{
  name: '👊🏽',
  beats: '✌🏽',
  get Name() {
    return this.name;
  }, 
  get Beats() {
    return this.beats;
  }
},
{
  name: '🖐🏽',
  beats: '👊🏽', 
  get Name() {
    return this.name;
  },
  get Beats() {
    return this.beats;
  }
},
{
  name: '✌🏽',
  beats: '🖐🏽',
  get Name() {
    return this.name;
  },
  get Beats() {
    return this.beats;
  }
}]

//Prints & generates User + Comp selection
function shoot(clicked_id) {
  document.getElementById('winner').innerHTML = "";
  COMPCHOICE = choices[Math.floor(Math.random()*3)].Name;
  if (clicked_id === '👊🏽') {
    document.getElementById('you-R').innerHTML = '👊🏽';
    USERCHOICE = '👊🏽';
  } else if (clicked_id === '🖐🏽') {
    document.getElementById('you-R').innerHTML = '🖐🏽';
    USERCHOICE = '🖐🏽';
  } else if (clicked_id === '✌🏽') {
    document.getElementById('you-R').innerHTML = '✌🏽';
    USERCHOICE = '✌🏽';
  }
  document.getElementById('comp-R').innerHTML = COMPCHOICE;
  winnerCheck();
}

//Check for winner

function winnerCheck() {
  if(USERCHOICE === COMPCHOICE) {
    document.getElementById('winner').innerHTML = 'YEEEEAAAAAAWWWW ITS A DRAAAAAWWWWW';
  } else {
    alert(choices[COMPCHOICE].Beats);
  }
}


//if (USERCHOICE.choices.Beats === COMPCHOICE.choices.Name)