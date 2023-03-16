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

// Iterative way O(1) space but O(n) time
const linkedListFind =(head, target) => {
    let current = head;
    while (current !== null){
        if(current.val === target) return true;
        current = current.next;

        
    }
    // This ensures that we return false only when we have looped through all the nodes, that why we didn't place the else after the "if" statement
    return false;
}

// Recursive way Uses O(n) space because of the call stack but O(n) time

const linkedListFind = (head, target) => {
    if(head === null) return false;
    if(head.val === target) return true;
    return linkedListFind(head.next, target);
}

linkedListFind(a,3);
