// Assignments 2
// Write a function call isEmpty that returns true if an object has no property or false otherwise
// create an empty object

function isEmpty(obj) {
    if (Object.values(obj).length === 0) {
        return "true";
    } else {
        return "false";
    }
  }
    console.log(isEmpty({ name: "james"}));