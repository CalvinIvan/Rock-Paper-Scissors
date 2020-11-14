const RPS = [
    {
        name: '👊🏽',
        beats: '✌🏽',
        getname: function() {
            return this.name;
        }
    },
    {
        name: '🖐🏽',
        beats: '👊🏽',
        getname: function() {
            return this.name;
        }
    },
    {
        name: '✌🏽',
        beats: '🖐🏽',
        getname: function() {
            return this.name;
        }
    }
]

function winner(userSelect, cSelection) {
    //alert(userSelect.beats);
    let a = cSelection;
    //console.log(userSelect, cSelect());
    document.getElementById('user-R').innerHTML = userSelect;
    document.getElementById('comp-R').innerHTML = a;
}


const userSelect = (clicked_id) => {
    let i = document.getElementById(clicked_id).value;
    for(let x in RPS) {
        if(i === RPS[x].name) {
            i = RPS[x].name;
            return i;
        }
    }
}

const cSelect = function(){
    let randNum = Math.floor(Math.random()*RPS.length);
   let selection = RPS[randNum];
   return selection.name;
}

const cSelection = cSelect();
console.log(cSelection);
