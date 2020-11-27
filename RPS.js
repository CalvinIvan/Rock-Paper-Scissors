'use strict'
const RPS = [{
        name: '👊🏽',
        beats: '✌🏽',
    },
    {
        name: '🖐🏽',
        beats: '👊🏽',

    },
    {
        name: '✌🏽',
        beats: '🖐🏽',
    }
];


function compSelection() {
    let randNum = Math.floor(Math.random() * RPS.length);
    return RPS[randNum].name;
}

const userSelection = document.querySelectorAll('[data-value]');

userSelection.forEach(button => {
    button.addEventListener('click', (choice) => {
        const x = button.dataset.value;
        makeSelection(x);
    })
})

function makeSelection(selection) {
    console.log(selection);
}