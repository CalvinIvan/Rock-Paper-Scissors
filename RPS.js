let USERCHOICE;
let COMPCHOICE;
let randNum;

const choice = [
  {
    symbol: '👊🏽',
    beats: '✌🏽',
    get Beats() {
      return this.beats;
    }
  },
  {
    symbol: '🖐🏽',
    beats: '👊🏽',
    get Beats() {
      return this.beats;
    }
  },
  {
    symbol: '✌🏽',
    beats: '🖐🏽',
    get Beats() {
      return this.beats;
    }
  }
];

function winner() {
  
  //alert(randNum);
 // document.getElementById('winner').innerHTML = 'hi';

 alert(USERCHOICE + choice[randNum].Beats);
}

//Comp function
function compfn() {
  COMPCHOICE = choice[randNum].symbol;
  document.getElementById('comp-R').innerHTML = COMPCHOICE;
  document.getElementById('winner').innerHTML = COMPCHOICE;
}

//User function
function shoot(clicked_id){
  randNum = Math.floor(Math.random()*3);
  document.getElementById('winner').innerHTML = "";
  if(clicked_id === '👊🏽') {
    USERCHOICE = clicked_id;
    document.getElementById('you-R').innerHTML = clicked_id;
    compfn();
    winner();
  } else if (clicked_id === '🖐🏽') {
    USERCHOICE = clicked_id;
    document.getElementById('you-R').innerHTML = clicked_id;
    compfn();
    winner();
  } else if (clicked_id === '✌🏽') {
    USERCHOICE = clicked_id;
    document.getElementById('you-R').innerHTML = clicked_id;
    compfn();
    winner();
  }
  //alert(choice[randNum].symbol);
}

