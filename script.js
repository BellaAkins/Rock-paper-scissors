//const check = document.querySelector(".naming");
//check.innerHTML = yourName;
const yourName = prompt("What is your Name?");
const displayyourName = document.querySelector(".name-display");

displayyourName.innerHTML = `Welcome ${yourName}`;
