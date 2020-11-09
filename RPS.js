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

const winner = (userSelect, compSelect) => {
    if(userSelect === compSelect) {
        console.log(userSelect);
    }
}
function userSelect(clicked_id){
    console.log(compSelect());
}

const compSelect = () => {
    let randNum = Math.floor(Math.random()*RPS.length);
    let cSelect = RPS[randNum];
    return cSelect.name;
}
