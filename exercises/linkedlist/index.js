// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }
  getLast() {
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (this.head) {
      let newHead = this.head.next;
      this.head = newHead;
    }
  }
  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.clear();
    }
    if (this.head) {
      let prevNode = this.head;
      let node = this.head.next;
      while (node.next) {
        prevNode = node;
        node = node.next;
      }
      prevNode.next = null;
    }
  }
  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }
  getAt(num) {
    if (this.head) {
      let node = this.head;
      for (let i = 0; i < num; i++) {
        node = node.next;
      }
      return node;
    }
    return null;
  }
  removeAt(num) {
    if (!this.head) {
      return;
    }
    if (num === 0) {
      this.head = this.head.next;
    }
    if (this.getAt(num)) {
      let prevNode = this.getAt(num - 1);
      let nextNode = this.getAt(num + 1);
      prevNode.next = nextNode;
    }
  }
  insertAt(data, num) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (num === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    let prev = this.getAt(num - 1) || this.getLast();
    let node = new Node(data, prev.next);
    prev.next = node;
  }
  forEach(func) {
    if (!this.head) {
      return;
    }
    let node = this.head;
    while (node) {
      func(node);
      node = node.next;
    }
  }
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
