
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