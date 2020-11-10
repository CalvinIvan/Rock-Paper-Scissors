const RPS = [
    {
        name: '👊🏽',
        beats: '✌🏽'
    },
    {
        name: '🖐🏽',
        beats: '👊🏽'
    },
    {
        name: '✌🏽',
        beats: '🖐🏽'
    }
]

function winner(userSelect) {
    console.log(userSelect, cSelect());
}


const userSelect = (clicked_id) => {
    let x = document.getElementById(clicked_id).value;
    for(y = 0; y > RPS.length; y++) {
        if(x === RPS[y].name) {
            alert('hi');
        }
    }
}

const cSelect = () => {
   selection = RPS[Math.floor(Math.random()*RPS.length)];
   return selection.name;
}