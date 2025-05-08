// Assignments 3 
// we have an object salaries
// let salaries = {
//  John: 100,
//  Ann: 160,
//  Pete: 130
// }
// Write a function that takes this object and returns the sum of all salaries
//
//
// Write another function that multiplies all salaries by 3 and returns the new object

let salaries ={
    John: 100,
    Ann: 160,
    Pete: 130,
    }
    
    let sum = 0;
    
    for (const key in salaries) {
    sum += salaries[key] * 3;
    }
    
    console.log(sum);

    // Write a function that takes this object and returns the sum of all salaries

let salaries ={
    John: 100,
    Ann: 160,
    Pete: 130,
  }
  
  let sum = 0;
  
  for (const key in salaries) {
   sum += salaries[key];
  }
  
  console.log(sum);