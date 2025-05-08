//Create a simple function that allows the user to create a profile with
//name, age and email and prints this in the console;

function createProfile() {
    let name = prompt("Enter your name:");
    let age = prompt("Enter your age:");
    let email = prompt("Enter your email:");

    console.log("User Profile:");
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Email:", email);
}

createProfile();

