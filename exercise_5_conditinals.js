// Please find bellow 4 more exercises to test your understanding of Conditionals:
// 1. Write a JavaScript program that accept two integers and display the larger in the console. 
function largerNum(a, b) {

    if (a > b) {
        console.log(a);
    }
    else if (b > a) {
        console.log(b);
    }
    else {
        console.log(`The numbers are equal!`);
    }
}
console.log(largerNum(5, 6));
console.log(largerNum(7, 58));
console.log(largerNum(-5, 32));
console.log(largerNum(5, 5));

// 2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display the specified sign in the console.
// Sample numbers : 3, -7, 2
// Output : The sign is -
function theNumberSign(a, b, c) {

    let d = a * b * c;

    if (d >= 0) {
        console.log('The sign is +');
    }
    else {
        console.log('The sign is -');
    }
}

console.log(theNumberSign(1, 3, -1));
console.log(theNumberSign(0, 3, -1));
console.log(theNumberSign(1, 3, 15));

// 3. Write a JavaScript conditional statement to sort three numbers. Display the result in the console
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

function sortNumbers(a, b, c) {
    let unsortedNumbers = [a, b, c];
    let sortedNumbers = [];

    for (let i = 0; i < unsortedNumbers.length; i++) {

        for (let j = i; j < unsortedNumbers.length; j++) {
            if (unsortedNumbers[i] > unsortedNumbers[j]) {
                let tempValue = unsortedNumbers[j];
                unsortedNumbers[j] = unsortedNumbers[i];
                unsortedNumbers[i] = tempValue;
            }
        }
        sortedNumbers.push(unsortedNumbers[i]);
    }
    console.log(sortedNumbers);
}

sortNumbers(15, 256, 23);
sortNumbers(21, 5, 56);

function sortNu(a, b, c) {
    let sorted;
    let min;
    let max;
    let middle;

    if (a < b) {
        if (a < c) {
            min = a;
            if (b < c) {
                middle = b;
                max = c;
                sorted = [min, middle, max];
                console.log(sorted);
            } else if (b > c) {
                middle = c;
                max = b;
                sorted = [min, middle, max];
                console.log(sorted);
            } else if (b = c) {
                middle = c;
                max = b;
                sorted = [min, middle, max];
                console.log(sorted);
            }
        }

    }
    else if (a > b) {
        if (b < c) {
            min = b;
            if (a < c) {
                middle = a;
                max = c;
                sorted = [min, middle, max];
                console.log(sorted);
            } else if (a > c) {
                middle = c;
                max = a;
                sorted = [min, middle, max];
                console.log(sorted);
            } else if (a = c) {
                middle = c;
                max = b;
                sorted = [min, middle, max];
                console.log(sorted);
            }

        }
    } else if (a = b) {
        if (a < c) {
            min = a;
            middle = b;
            max = c;
            sorted = [min, middle, max];
            console.log(sorted);
        }
        else if (a > c) {
            min = c;
            middle = max = a;
            sorted = [min, middle, max];
            console.log(sorted);
        }

    }
}
sortNu(15, 256, 23);
sortNu(21, 5, 56);
// 4. Write a JavaScript conditional statement to find the largest of five numbers.Display the result in the console. 
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

function theLargerNum(a, b, c, d, e) {
    let theLargest;

    if (a > b) {
        theLargest = a;
    } else {
        theLargest = b;
    }
    if (theLargest < c) {
        theLargest = c;
    }
    if (theLargest < d) {
        theLargest = d;
    }
    if (theLargest < e) {
        theLargest = e;
        console.log(theLargest);
    } else {
        console.log(theLargest);
    }
}

theLargerNum(-5, -2, -6, 0, -1);
theLargerNum(8, -2, 16, 0, -1);
// //JavaScript conditional statement to find the largest of five numbers.Display the result in the console.
// // Sample numbers : -5, -2, -6, 0, -1
// // Output : 0

// // All the initial numbers should be declared in separate variables.All the results should be displayed with console.log()
// // Test your code using different combination of initial values.

