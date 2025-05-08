// Write a function to check if a string is a palindrome
// e.g ara is a palindrome, rat is not a palindrome, 848 is a palindrome

function isPalindrome(str) {
   
    str = String(str);

    let reversed = str.split("").reverse().join("");

    if (str === reversed) {
        console.log(str + " is a palindrome");
    } else {
        console.log(str + " is not a palindrome");
    }
}

isPalindrome("ara");   
isPalindrome("rat");  
isPalindrome(848);    

