//Get computer input

function computerChoice() {
  const randomNum = Math.floor(Math.random()*3);
  switch(randomNum) {
    case 0:
      return 'Rock';
      break;
    case 1:
      return 'Paper';
      break;
    case 2:
      return 'Scissors';
      break;
    default: 
      return 'Whoops, something is off!';
      break;
  }
}





//Button Click
function Shoot(){
    let text = document.getElementsByClassName("option1").innerHTML; 
    // Get random number from 0-2
    let x = document.getElementById("hi").innerHTML = (Math.ceil(Math.random() * (options.length)-1));
    // Rock, Paper or Scissors (String value of options array)
    let y = options[x];
    // User input
    let z = document.getElementsByClassName("option1").value;
   alert(situation);
   // document.getElementById("text").innerHTML = z;
    // alert(y);
    
      
}

    
    
    /*let i = options[randnum()];
    let j = document.getElementsByClassName("option1")[randnum()].value;
    alert(situation)[randnum()].value;
    //alert(document.getElementsByClassName("option1")[randnum()].value);
    document.getElementById("hi").innerHTML = options[randnum()];
    document.getElementById("counter").innerHTML++; */
 

