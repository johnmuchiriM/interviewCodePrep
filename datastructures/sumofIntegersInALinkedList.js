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

const sumList = (head) =>{
    let sum = 0;
    let current = head;

    while(current !== null){
        sum += current.val;
        current = current.next;
    }
    console.log(sum);
    return sum;
    
}

sumList(a);