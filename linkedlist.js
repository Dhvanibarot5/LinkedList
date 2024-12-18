// LinkedList Operations
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  addLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  addAt(index, data) {
    if (index === 0) {
      this.addFirst(data);
      return;
    }
    let current = this.head;
    let count = 0;
    while (current && count < index - 1) {
      current = current.next;
      count++;
    }
    if (!current) throw new Error("Index out of bounds");
    const newNode = new Node(data);
    newNode.next = current.next;
    current.next = newNode;
  }

  removeFirst() {
    if (!this.head) throw new Error("List is empty");
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) throw new Error("List is empty");
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.next && current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  removeAt(index) {
    if (index === 0) {
      this.removeFirst();
      return;
    }
    let current = this.head;
    let count = 0;
    while (current && count < index - 1) {
      current = current.next;
      count++;
    }
    if (!current || !current.next) throw new Error("Index out of bounds");
    current.next = current.next.next;
  }

  printLinkedList() {
    const elements = [];
    let current = this.head;
    while (current) {
      elements.push(current.data);
      current = current.next;
    }
    console.log("Linked List:", elements);
  }

  reverseList() {
    let prev = null;
    let current = this.head;
    while (current) {
      const nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
    this.head = prev;
  }
}

const linkedList = new SinglyLinkedList();

linkedList.addFirst(12);
linkedList.addLast(20);
linkedList.addAt(1, 15);
linkedList.printLinkedList();

linkedList.removeAt(2);
linkedList.printLinkedList();

linkedList.reverseList();
linkedList.printLinkedList();

linkedList.removeFirst();
linkedList.printLinkedList();

linkedList.removeLast();
linkedList.printLinkedList();
