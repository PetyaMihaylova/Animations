// 1.Description: Write a program that prints all the numbers from 1 to 100. 
// If the number is a multiple of 3, print "Fizz" instead of the number. 
// If the number is a multiple of 5, print "Buzz". 
// For numbers that are multiples of both 3 and 5, print "FizzBuzz".


// function numbersTo100(n) {

    
//     // let arr = Array.from(Array(100).keys()) //I found how to create an array from 1 to 100, but in this case I do not need it in my function
//     debugger

//     for (n = 1; n <= 100; n++) {
//         if (n % 15 === 0)
//             {console.log('Fizzbuzz');}

//         else if (n % 3 === 0)
//             {console.log('Fizz');
                
//             }
        
//         else if (n % 5 === 0)
//             {console.log('Buzz');
                    
//             }

//         else console.log(n)
//     }}

//     numbersTo100()
    
// 2.Description: Write a program that iterates through an array of numbers and adds them to a total sum until a negative number is encountered. Finally, print the total sum of the entered numbers.
// const numbers = [1, 2, 3, 4, 5, 6]; // Sample array with a negative number


// ---------ALTERNATE SOLUTION TO TASK 2----------


// const numbers = [1, 2, 3, 4, 5, 6, -1, 9, 11]
// let totalSum = 0;

// for (let i = 0; i  < numbers.length; i++) {
//     if (numbers[i] < 0) {
//         break;
//     }
//     totalSum +=  numbers[i]
//     //totalSum = totalSum + numbers[i] UNDER THE HOOD!
// }

// console.log(totalSum) //21


// 3.Description: Write a program that iterates through an array of passwords and stops when the correct password ("12345") is found. After the correct password is found, print a welcome message.
// const passwords = ["password1", "password2", "12345", "password3"];

const passArr = [ 'password1', 'password2', '12345', 'password3'];

function findPass(arr) {
    debugger
       
    for (let index = 0; index < passArr.length; index++) {
    
        if (passArr[index] === '12345') {
     
     console.log('Welcome!');
    
    break;}
        else {console.log('Pass not found!')
    }
            

}}



findPass(passArr)