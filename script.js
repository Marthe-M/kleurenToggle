const menu = document.querySelector(".menu");
const home = document.querySelector(".home");

home.addEventListener("click", event => {
menu.classList.toggle("showMenu");
    });

const body = document.body;

const blueBackground = document.querySelector(".blue");
blueBackground.addEventListener('click', event => {
    body.className = "";
    body.classList.add("blue");
    menu.classList.toggle("showMenu");
    const par = document.createElement("p");
    const text = document.createTextNode("The background is now BLUE");
    par.appendChild(text);
    document.body.appendChild(par);
  });

const greenBackground = document.querySelector(".green");
greenBackground.addEventListener('click', event => {
    body.className = "";
    body.classList.add("green");
    menu.classList.toggle("showMenu");
    const par = document.createElement("p");
    const text = document.createTextNode("The background is now GREEN");
    par.appendChild(text);
    document.body.appendChild(par);
  });

const yellowBackground = document.querySelector(".yellow");
yellowBackground.addEventListener('click', event => {
    body.className = "";
    body.classList.add("yellow");
    menu.classList.toggle("showMenu");
    const par = document.createElement("p");
    const text = document.createTextNode("The background is now YELLOW");
    par.appendChild(text);
    document.body.appendChild(par);
  });

const orangeBackground = document.querySelector(".orange");
orangeBackground.addEventListener('click', event => {
    body.className = "";
    body.classList.add("orange");
    menu.classList.toggle("showMenu");
    const par = document.createElement("p");
    const text = document.createTextNode("The background is now ORANGE");
    par.appendChild(text);
    document.body.appendChild(par);
  });

const redBackground = document.querySelector(".red");
redBackground.addEventListener('click', event => {
    body.className = "";
    body.classList.add("red");
    menu.classList.toggle("showMenu");
    const par = document.createElement("p");
    const text = document.createTextNode("The background is now RED");
    par.appendChild(text);
    document.body.appendChild(par);
  });

const greyBackground = document.querySelector(".home");
greyBackground.addEventListener('click', event => {
    body.className = "";
    const text = document.querySelector('p');
    text.remove();
  });



