'use strict'
const hide = document.getElementById('hide')
const side = document.querySelector('.side');

function Nav(){
    side.classList.toggle('active')
};

// Dom i want make you help me with

let userNameInput = document.querySelector('.userNameInput');

// userNameInput = prompt('Enter User Name');
// console.log(userNameInput);
// const myP = document.querySelector('.myP');
// myP.textContent = `Welcome ${userNameInput}`;

const slash = document.querySelector('.fa-eye-slash');
const eyes = document.querySelector('.fa-eye');
function Hide(){
    const amount = document.querySelector('.amount');
    amount.innerText = '*******';
    // amount.innerText = '$10,000,000'
    eyes.style.display = 'none';
    slash.style.display = 'block';
};

function Show(){
    const amount = document.querySelector('.amount');
    amount.innerText = '$10,000,000';
    eyes.style.display = 'block';
    slash.style.display = 'none';
}

// Trying out for of loops
// let user = 10;

// for(user of user){
//     console.log(`How many ${user}`)
// }

