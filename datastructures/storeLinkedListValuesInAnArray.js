class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;


// ITERATIVELY
// const linkedListValues = (head) => {
//     const values = [];
//     let current = head;
//     while(current !== null) {
//         values.push(current.val);
//         current = current.next;
        

//     }
    

// }

// RECURSIVE

const linkedListValues = (head) => {
    const values = [];
    fillValues(head, values);
    return values;
}

const fillValues = (head, values) => {
    if(head === null ) return;
    values.push(head.val);
    fillValues(head.next, values);
}

// DIFFERENCE BETWEEN == AND ===
// These characters are called operators. One is the assignment operator, as in,

// var a = 42;
// // and
// var obj = {};
// // and
// var myFunc = function (){};
// In each case, an object on the right hand side is being assigned to the identifier (variable) on the left hand side. It is the only use for = in JavaScript, and is never used to compare two operands. For that we have comparison operators, as in,

// var age = prompt("What is your age?", null);
// if (age){
//     if (age == 13){
//         // code
//     }
// } else {
//     // user aborted
// }
// The comparison above is referred to as type converting or loose type matching. What this means is that the value returned from the prompt() is a string, say “13” but the comparison is with a number, 13. They are not of the same data type, but type conversion transmutes the “13” into a 13 for the purpose of the conditional. JavaScript strives toward a solution at every turn, and type conversion is what allows it to do this.

// Not so the case had we written,

// if (age === 13)
// This is a strict type match, non-converting comparison. If age is not a number, 13, the net yield will be false. We can still work with this, though. JavaScript hasn’t given up on us, and there are tools to massage age from a string to a number. The simplest is another operator called a, unary plus.

// if (+age === 13)
// When age is "13", the operator will coerce the string into its number type. The result will then be true.

// In these modules, we rarely see the == operator since it comes with a lot of its own pitfalls and uncertainties and it requires a level of understanding and practical experience not yet reached in this introductory course. For our purposes, better to get used to using === in all comparisons of equality.