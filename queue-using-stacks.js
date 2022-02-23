// Exercise
// Implement a Queue Using Stacks
class Stack {
  constructor() {
    this.data = [];
  }

  pushToStack(element) {
    return this.data.push(element);
  }

  popFromStack() {
    return this.data.pop();
  }

  stackIsEmpty() {
    return this.data.length === 0;
  }
}

class Queue {

  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(element) {
    this.stack1.pushToStack(element);
  }

  dequeue() {
    let dequeueElement;
    if (!this.stack1.stackIsEmpty()) {
      this.stackInterchange(this.stack1, this.stack2);
      dequeueElement = this.stack2.popFromStack();
      this.stackInterchange(this.stack2, this.stack1);
    } else {
      dequeueElement = 'Queue is empty.';
    }
    return dequeueElement;
  }

  stackInterchange(stackToEmpty, stackToFill) {
    while (!stackToEmpty.stackIsEmpty()) {
      const poppedElement = stackToEmpty.popFromStack();
      stackToFill.pushToStack( poppedElement );
    };
  }

}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.dequeue();
console.log(queue);

