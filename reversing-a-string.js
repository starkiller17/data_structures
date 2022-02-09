class Stack {
  constructor() {
    this.data = [];
  }

  // The pop and push operations take O(1) time if used in an array.
  pushToStack(element) {
    return this.data.push(element);
  }

  popFromStack() {
    return this.data.pop();
  }

  isEmpty() {
    return this.data.length === 0;
  }

  fillStack(strArray) {
    strArray.forEach(character => {
      this.pushToStack(character);
    });
  }

  reverseStack() {
    let reversed_string = "";
    
    while( !this.isEmpty() ) {
      reversed_string += this.popFromStack();
    }
    
    return reversed_string;
  }

}

const stack = new Stack();
const str = 'Anita lava la tina.'

const strArray = Array.from(str);

stack.fillStack(strArray);
const reversed_string = stack.reverseStack();

console.log(`Original string: ${str}`)
console.log(`Reversed string: ${reversed_string}`);