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

// Recursive | O(n) space and O(n) time 
// const getNodeValue =(head, index)=>{
//     if(head === null) return null;
//     if(index === 0) return head.val;
//     return getNodeValue(head.next, index -1);

// }

// Iterative | O(1) space and O(n) time

const getNodeValue = (head, index) => {
    let current = head;
    let count = 0;

    while(current !== null){
        if(count === index) return current.val;
        count += 1;
        current = current.next;

    }

    return null;
}


getNodeValue(a, 7);