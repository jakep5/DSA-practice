/**
 * RECURSION
 *  - Base case, when to stop the recursive algo
 *  - Recursive case, the function calling itself
 * 
 *  - Base Case - simplest possible problem, solution to simplest version of problem
 * 
 *  - Algo that calculates sum of all numbers in array
 *      - Have a running total
 *      - Go through list and add each number until end of list is reached
 * 
 *  - Recursive implementation:
 */

 const sumOf = function(list) {
     // Base case
     if (list.length === 1) {
         return list[0];
     }
     // General case
     return list[0] + sumOf(list.slice(1));
 }

 /**
  * if statement above is the base case:
  *     - sum of 1 item list is just itself, so you just return list[0]
  * - After base case, function just calls itself
  *     - Argument is just a smaller version of the list
  *         - Done via .slice(1)
  * 
  * - Forward phase of recursion - make list shorter until we reach the point where only 1 item is present
  *     - Where call to a function returns another function call
  * 
  * - When base case is reached, control is returned to the previous function that called it
  *     - Continues up the stack until you reach the initial function call
  *     - Known as the backwards phase of recursion
  * 
  * - TIPS FOR SOLVING RECURSION PROBLEMS
  *     - What is the input to the program?
  *     - What is the output of the program?
  *     - What is the input to each recursive call?
  *     - What is the output of each recursive call?
  * 
  * / EXAMPLE 1 - Counting Sheep, recursion
  *     - Count how many sheep that go over fence, take a number as argument
  *     - Input: 3 
  *     - Output:
  *         - 3: Another sheep jumps over the fence
  *         - 2: Another sheep jumps over the fence
  *         - 1: Another sheep jumps over the fence
  *         - All sheep jumped over the fence   
  */
 
let sheepRecursion = function countSheep(sheep) {
    if (sheep === 0) {
        console.log('All sheep jumped over the fence');
    } else {
        console.log(`${sheep}: Another sheep jumps over the fence`); 
    
    countSheep(sheep - 1);
    }

    return;

    
}

let sheep = 3

console.log(sheepRecursion(sheep))

/**
 * EXAMPLE 2: POWER CALCULATOR:
 *  - Write powerCalulator() that takes 2 arguments:
 *      - 1) Base integer
 *      - 2) Exponent integer
 * - powerCalculator(10, 2) should return 100;
 */

 function powerCalculator(base, exp) {
     let count = exp - 1;

     if (count === 0) {
         return base;
     }

     return base * powerCalculator(base, exp - 1);
 }

 console.log(powerCalculator(3, 5))


/**
 * EX 3: REVERSE A STRING:
 *      - Write a function that reverses a string using recursion
 */

 function reverseString(string) {
     if (string.length === 1) {
         return string;
     }

     return string.substring(string.length - 1) + reverseString(string.substring(0, string.length - 1))
 }

 let string = 'Test string is a test string';

 console.log(reverseString(string))

 /**
  * EXAMPLE 4: STRING SPLITTER
  *     - Write recursive function that splits a string based on a seperator
  * 
  *     - Input: 02/20/2020
  *     - Output: ["02", "20", "2020"]
  */

  function stringSplitter(string, seperator) {
  }

  /**
   * EXAMPLE 5: FIBONACCI
   *    - Write a function that prints fibonacci sequence of a given num
   */

function fibonacci(num) {
    if(num <= 1) {
        return 1;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(5))

/**
 * side note - memoization!!
 * 
 * - Memoization - stores results of expensive function calls to speed up computer programs
 * 
 * - Basically, if we store the value of each index in a hash
 *      - We will avoid the computational time for that value, will just be retrieval
 * 
 * Memoization implementation:
 */

 function fibonacciMemo(num, memo) {
     if(memo) {
         memo = memo;
     } else {
         memo = {};
     }

     if (memo[num]) {
         return memo;
     }

     if (num <= 1) {
         return 1;
     }

     return memo[num] = fibonacci(num - 1, memo) + fibonacci( num - 2, memo);
 }

 console.log(fibonacciMemo(10))

 /**
  * EXAMPLE - FACTORIAL
  * 
  * - Ex - factorial of 5 is 5*4*3*2*1
  */

function factorial(num) {
    if (num === 1) {
        return num
    }

    return num * factorial(num - 1);
};

/**
 * 
 */
 