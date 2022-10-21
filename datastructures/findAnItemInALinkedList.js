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

// Iterative way
const linkedListFind =(head, target) => {
    let current = head;
    while (current !== null){
        if(current.val === target) return true;
        current = current.next;

        
    }
    // This ensures that we return false only when we have looped through all the nodes, that why we didn't place the else after the "if" statement
    return false;
}

linkedListFind(a,11);