class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      const oldHead = this.head;
      this.head = node;
      this.head.next = oldHead;
    }
    this.length++;
    return node.value;
  }

  pop() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    this.head = oldHead.next;
    oldHead.next = null;
    return oldHead;
  }
}
