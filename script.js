const rollButton = document.getElementById('rollButton');
const putterButton = document.getElementById('putterButton');
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const dice3 = document.getElementById('dice3');
const result = document.getElementById('result');
const resultPutter = document.getElementById('resultPutter');

// Arrays of disc golf shots and disc types
const shots = ['Backhand', 'Backhand', 'Forehand', 'Roller', 'Overhand', '🃏'];
const discTypes = ['Putter', 'Midrange', 'Driver', 'Flippy', 'Overstable', '🃏'];
const puttTypes = ['Stagger', 'Straddle', 'Scoober', 'Driver', 'Mini', '🃏'];

let previousShotIndex = null;
let previousDiscTypeIndex = null;
let previousPuttTypeIndex = null;

function rollDice() {
    // Generate random indexes for each array
    let shotIndex = Math.floor(Math.random() * shots.length);
    let discTypeIndex = Math.floor(Math.random() * discTypes.length);

    // Ensure dice always spin even if the same value is rolled
    if (shotIndex === previousShotIndex) {
        shotIndex = (shotIndex + 1) % shots.length; // Rotate to next value
    }
    if (discTypeIndex === previousDiscTypeIndex) {
        discTypeIndex = (discTypeIndex + 1) % discTypes.length; // Rotate to next value
    }

    // Get the result from the arrays
    const shotResult = shots[shotIndex];
    const discTypeResult = discTypes[discTypeIndex];

    // Apply rotations based on the random index
    const rotations = [
        {x: 0, y: 0},   // Front
        {x: 0, y: 180}, // Back
        {x: 0, y: -90}, // Left
        {x: 0, y: 90},  // Right
        {x: -90, y: 0}, // Top
        {x: 90, y: 0}   // Bottom
    ];

    // Apply rotation to the dice
    dice1.style.transform = `rotateX(${rotations[shotIndex].x + 360}deg) rotateY(${rotations[shotIndex].y + 360}deg)`;
    dice2.style.transform = `rotateX(${rotations[discTypeIndex].x + 360}deg) rotateY(${rotations[discTypeIndex].y + 360}deg)`;

    // Update previous indexes
    previousShotIndex = shotIndex;
    previousDiscTypeIndex = discTypeIndex;

    // Display the result after the rolling animation completes
    /*setTimeout(() => {
        result.textContent = `You rolled: ${shotResult} with a ${discTypeResult}!`;
    }, 1000);*/ // Wait for 1 second for the dice to finish rolling
}

function rollPutterDie() {
    // Generate random indexes for each array
    let puttTypeIndex = Math.floor(Math.random() * puttTypes.length);

    // Ensure dice always spin even if the same value is rolled
    if (puttTypeIndex === previousPuttTypeIndex) {
        puttTypeIndex = (puttTypeIndex + 1) % puttTypes.length; // Rotate to next value
    }

    // Get the result from the arrays
    const puttTypeResult = puttTypes[puttTypeIndex];

    // Apply rotations based on the random index
    const rotations = [
        {x: 0, y: 0},   // Front
        {x: 0, y: 180}, // Back
        {x: 0, y: -90}, // Left
        {x: 0, y: 90},  // Right
        {x: -90, y: 0}, // Top
        {x: 90, y: 0}   // Bottom
    ];

    // Apply rotation to the dice
    dice3.style.transform = `rotateX(${rotations[puttTypeIndex].x + 360}deg) rotateY(${rotations[puttTypeIndex].y + 360}deg)`;

    // Update previous indexes
    previousPuttTypeIndex = puttTypeIndex;

    // Display the result after the rolling animation completes
    /*setTimeout(() => {
        result.textContent = `You rolled: ${shotResult} with a ${discTypeResult}!`;
    }, 1000);*/ // Wait for 1 second for the dice to finish rolling
}

// Attach the function to the button
rollButton.addEventListener('click', rollDice);
putterButton.addEventListener('click', rollPutterDie);
