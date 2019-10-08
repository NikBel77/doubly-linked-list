const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let node = new Node (data);
        if (this.length === 0) {
            this._head = node;
            this._tail = node;
        }
        else {
            node.prev = this._tail;
            this._tail.next = node;
            this._tail = node;
        }
        this.length += 1;
        return this;
    }

    head() {
        return (this._head.data);
    }

    tail() {
        return (this._tail.data);
    }

    at(index) {
        let current = this._head
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return (current.data)
    }

    insertAt(index, data) {
        let node = new Node(data);
        let current = this._head
        if (index === 0) {
            this._head.prev = node;
            node.next = this._head;
            this._head = node;
        }
        else {
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            node.prev = current.prev;
            node.next = current;
            current.prev.next = node;
            current.prev = node;
        }
        this.length += 1;
        return this;
    }

    isEmpty() {
        if (this.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }

    clear() {
        this._head.data = null;
        this._head.next = null;
        this._tail.data = null;
        this._tail.prev = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        if (this.length === 1) {
            this._head.data = null;
            this.length = 0;
            return this;
        }
        let current = this._head
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
        this.length -= 1;
        return this;
    }

    reverse() {
        if (this.length > 1) {
            let current = this._head;
            let currentPrev = null;
            for (let i = 0; i < this.length; i++) {
                let currentNext = current.next;
                current.prev = currentNext;
                current.next = currentPrev;
                currentPrev = current;
                current = currentNext;
            }
            this._tail = this._head;
            this._head = currentPrev;
        }
        return this;
    }

    indexOf(data) {
        let current = this._head
        for (let i = 0; i < this.length; i++) {
            if (current.data === data) {
                return (i)
            }
            current = current.next;
        }
        return (-1)
    }
}

module.exports = LinkedList;
