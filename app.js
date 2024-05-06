//Write a JavaScript program to check whether a given positive number is a 
//multiple of 3 or 7.

let num = 48;
if (num > 0 && (num % 3 == 0 || num % 7 == 0)) {
    console.log(true);
} else {
    console.log(false);
}