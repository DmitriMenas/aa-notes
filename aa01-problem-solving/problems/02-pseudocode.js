/*
Pseudocode With Polya's

Write pseudocode for Step 1 and 2 of Polya's Problem Solving framework for the
given problem statement. Then execute Step 3 of Polya's Problem Solving
framework. Finally, test your code in Step 4 of Polya's Problem Solving
framework.
*/

/*
Problem Statement:
Given a number, write a function called within5Of100 to return true if the given
number is within 5 of 100.
*/

// console.log(within5Of100(94));  //=> false
// console.log(within5Of100(95));  //=> true
// console.log(within5Of100(100)); //=> true
// console.log(within5Of100(105)); //=> true
// console.log(within5Of100(106)); //=> false

// CHALLENGE: Can you design a function that would return true if a given number
// is within X of another given number Y?

/*Read the problem statement.
Determine that the function needs to check proximity to the number 100.
Clarify that proximity means being within a range of 5 units either below or above 100.
*/

/*Define a function named within5Of100 that takes a parameter num.
    Compute the absolute difference between num and 100.
    If the absolute difference is less than or equal to 5:
        Return true
    Else:
        Return false
*/
function within5Of100(num){
    return (94 < num ) && (num < 106);
}

console.log(within5Of100(93));



/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = within5Of100;
