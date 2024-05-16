class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addLast(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    addFirst(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    removeFirst() {
        if (!this.head) {
            throw new Error("Cannot remove from an empty list");
        }
        const value = this.head.val;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return value;
    }

    getFirst() {
        if (!this.head) {
            throw new Error("List is empty");
        }
        return this.head.val;
    }

    isEmpty() {
        return this.length === 0;
    }
}

module.exports = LinkedList;