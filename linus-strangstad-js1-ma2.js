// question 1
let myFunctionExpression = function() {
  console.log("Linus");
};
myFunctionExpression();
// question 2
const myButton = document.querySelector(".btn");
myButton.addEventListener("click", function() {
  console.log("I was Clicked");
});

// question 3
const inputCallback = document.querySelector("#firstName");
function callAfterClick(event) {
  console.log(event.key);
}
inputCallback.addEventListener("keydown", callAfterClick);
// question 4
const mySecondButton = document.getElementsByTagName("button")[1];
function addingClass() {
  mySecondButton.classList.add("hover");
}
mySecondButton.addEventListener("mouseover", addingClass);

// question 5
const dataButton = document.querySelector("[data-animal='dog']");
function removeClass() {
  dataButton.classList.remove("hover");
}
dataButton.addEventListener("mouseout", removeClass);

// question 6
const animalList = document.querySelectorAll("li");
function infoAboutAnimals(event) {
  console.log(event.target.dataset.animal);
}
for (let i = 0; i < animalList.length; i++) {
  animalList[i].addEventListener("mouseover", infoAboutAnimals);
}

// question 7

const animal = "cow";
switch (animal) {
  case "cat":
    console.log("Meow");
    break;

  case "cow":
    console.log("Moo");
    break;

  case "bird":
    console.log("Tweet");
    break;

  default:
    console.log("Harrumph");
}

// question 8
const sheep = ["Malcolm", "Anders", "Marie"];
sheep.forEach(function(sheep) {
  console.log(sheep);
});

// question 9
function logHello() {
  console.log("Hello");
  if (counter === 5) {
    clearInterval(intervalId);
  }
  counter++;
}
let counter = 0;
const intervalId = setInterval(logHello, 500);

//  question 10
const updateContainer = document.querySelector("div.container");

function updateDiv() {
  updateContainer.innerHTML = "Text updated";
}

setTimeout(updateDiv, 2000);
