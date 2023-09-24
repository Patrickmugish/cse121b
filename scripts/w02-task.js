/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

const fullName = "Mugisha Patrick";

/* Step 2 - Variables */

const currentYear = new Date().getFullYear();

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const profilePicture = "images/myimage.jpeg";
const img = new Image();
img.src = profilePicture;

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;


/* Step 5 - Array */

let foodArray = ["Chicken","Chips","Yams","Beans","Sesame bread","spaghetti"]
foodElement.textContent = foodArray;

/*Add an element to the foodArray*/
foodArray.push("Cassava leaf stew",);
foodElement.innerHTML += `<br>${foodArray}`;

/*Remove the first element of the foodArray*/
foodArray.shift();
foodElement.innerHTML += `<br>${foodArray}`;

/*Remove the last element of the foodArray*/
foodArray.pop();
foodElement.innerHTML += `<br>${foodArray}`;


