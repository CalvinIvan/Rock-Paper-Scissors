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

const winner = (userSelect) => {
    console.log(`${userSelect}: ` , compSelect());
}
const userSelect = (clicked_id) => {
    let x = document.getElementById(clicked_id).value;
    return x;
}

const compSelect = () => {
    let randNum = Math.floor(Math.random()*RPS.length);
    let cSelect = RPS[randNum];
    return cSelect.name;
}
