class Stack {
  constructor(){
    this.data = [];
  }

  pushToStack(element) {
    return this.data.push(element);
  }

  popFromStack() {
    return this.data.pop();
  }

}

var our_stack = new Stack();

our_stack.pushToStack(1);
our_stack.pushToStack(2);
our_stack.pushToStack(3);

// console.log(our_stack);

our_stack.popFromStack();

our_stack.data.forEach((item) => {
  console.log(`stack item: ${item}`)
});