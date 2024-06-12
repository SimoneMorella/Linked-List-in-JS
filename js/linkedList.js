import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.linkedHead = null;
  }

  prepend(value) {
    let temp = null;
    if (this.linkedHead !== null) temp = this.linkedHead;
    this.linkedHead = new Node(value);
    this.linkedHead.nextNode = temp;
  }

  append(value) {
    if (this.linkedHead === null) this.prepend(value);
    else {
      let temp = this.linkedHead;
      while (temp.nextNode !== null) temp = temp.nextNode;
      temp.next = new Node(value);
    }
  }

  size() {
    let count = 0;
    let temp = null;
    if (this.linkedHead === null) return count;
    while (temp.nextNode !== null) {
      count++;
      temp = temp.nextNode;
    }
    return count;
  }

  head() {
    return this.linkedHead;
  }

  tail() {
    let temp = this.linkedHead;
    while (temp.nextNode !== null) temp = temp.nextNode;
    return temp;
  }

  at(index) {
    let temp = this.linkedHead;
    for (let i = 0; i < index; i++) {
      temp = temp.nextNode;
      if (temp === null) return "No item for this index";
    }
    return temp;
  }

  pop() {
    let curr = this.linkedHead;
    let prev = null;
    while (curr.nextNode !== null) {
        prev = curr;
        curr = curr.nextNode;
    }
    prev.nextNode = null;
  }
}
