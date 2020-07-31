//This is queue data structure
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
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
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this.tail;
  }

  pop() {
    if (!this.head) return undefined;
    const first = this.head;
    this.head = first.next;
    first.next = null;
    this.length--;
    return first;
  }
}

