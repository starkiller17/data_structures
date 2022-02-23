class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(element) {
    return this.data.push(element);
  }

  dequeue() {
    return this.data.shift();
  }

  peek() {
    return this.data[0];
  }

  length() {
    return this.data.length;
  }
}

const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);

myQueue.dequeue();

console.log(myQueue.peek());
console.log(myQueue.length());

console.log(myQueue);