class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const a = new Node(7);
const b = new Node(10);
const c = new Node(3);
const d = new Node(1);

a.next = b;
b.next = c;
c.next = d;

Iterative | O(n) time and O(1) space complexity
const reverseList = (head) => {
    let prev = null; //2nd
    let current = head; //1st

    while(current !== null){
        const next = current.next; //1st to keep track of the next variable before overidding it
        current.next = prev; //2nd :Having the arrow point to the previous node | This would override without the declaration above
        prev = current; // 4th: The prev shou
        current = next; //3rd 
        console.log(prev.val);

    }
    
    return prev; // The previous will become the new head, it was the tail
}

// Recursive O(n) and O(n) space and time complecities
// const reverseList = (head, prev = null) => {
//     if(head === null) return prev;
//     const next = head.next;
//     head.next = prev;
//     console.log(prev);
//     return reverseList(next, head);
    
// }

// reverseList(a,null);

// N  <-  a   b   c  d
//      prev cur next
