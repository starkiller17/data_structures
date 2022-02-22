let data = [];

class TwoStacks {
    
  constructor(name) {
    this.name = name;
    this.start = undefined;
    this.end = undefined;
  }

  pushToStack(stackObject, element) {
    if (data.length === 0) {
      this.start = 0;
      this.end = 0;
    } else {
        if ( this.start === undefined ) {
          this.start = data.length;
          this.end = data.length;
        }
        else {
          this.end++;
        }
    }
    
    if ( this.end === data.length ) {
      data.push(element);
    } else {
      const backup = data.slice(this.end);
      data.splice(this.end);
      data.push(element);
      data = data.concat(backup);
      stackObject.start = this.end + 1;
      stackObject.end = data.length - 1;
    }
  }

  popFromStack(stackObject) {
    if ( this.start !== undefined && this.end !== undefined ) {
      const popedElement = data.splice(this.end, 1);
      console.log(popedElement);
      
      if (stackObject.start !== 0) {
        stackObject.start--;
        stackObject.end--;
    }

      if (this.start === this.end) {
        this.start = undefined;
        this.end = undefined;
      } else {
        this.end--;
      }

      return popedElement;
    } else {
      return "There are not elements in Stack 1.";
    }   
  }

  get printStack() {
    console.log(this);
    // const name = obj => Object.keys(obj)[0];
    const stackEnd = this.end + 1;
    return this.name + ": " + data.slice(this.start, stackEnd);
  }
}

const firstStack = new TwoStacks('First Stack');
const secondStack = new TwoStacks('Second Stack');

secondStack.pushToStack(firstStack, 7);
firstStack.pushToStack(secondStack, 1);
secondStack.pushToStack(firstStack, 8);
secondStack.pushToStack(firstStack, 9);
firstStack.pushToStack(secondStack, 2);
firstStack.pushToStack(secondStack, 3);
secondStack.pushToStack(firstStack, 10);
secondStack.pushToStack(firstStack, 11);

secondStack.popFromStack(firstStack);
firstStack.popFromStack(secondStack);
secondStack.popFromStack(firstStack);
secondStack.popFromStack(firstStack);
secondStack.popFromStack(firstStack);
secondStack.popFromStack(firstStack);
secondStack.popFromStack(firstStack);
secondStack.popFromStack(firstStack);
secondStack.pushToStack(firstStack, 666);

console.log(firstStack.printStack);
console.log(secondStack.printStack);
console.log('Data: ' + data);

// secondStack.popFromStack(firstStack);
// firstStack.popFromStack(secondStack);
// secondStack.popFromStack(firstStack);
// firstStack.popFromStack(secondStack);

console.log(firstStack.printStack);
console.log(secondStack.printStack);
console.log('Data: ' + data);