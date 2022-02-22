class MinStack {
    constructor() {
        this.data = [];
    }

    pushToStack(element) {
        if ( !this.isEmpty() ) {
            if ( element < this.stackPeek() ) {
                return this.data.push(element);
            }
        } else if ( this.isEmpty() ) {
            return this.data.push(element);
        }
        // return this.data.push(element);
    }

    popFromStack() {
        return this.data.pop();
    }

    isEmpty() {
        return this.data.length === 0;
    }

    stackPeek() {
        return this.data[this.data.length - 1];
    }
}

const fillMinStack = (minStack, ...args) => {
    args.forEach( (arg) => {
        minStack.pushToStack(arg);
    });
};

const minStack = new MinStack();
// fillMinStack(minStack, 11, 2, 55, 678, -9, -23, 0.5);
fillMinStack(minStack, 'aa', 'zapato', 'a', 'bb');


console.log(minStack.data);
console.log(minStack.stackPeek());
