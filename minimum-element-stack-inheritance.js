class Stack {
    constructor() {
        this.data = [];
    }

    pushToStack(element) {
        this.data.push(element);
    }

    popFromStack() {
        this.data.pop();
    }

    isEmpty() {
        return this.data.length === 0;
    }

    stackLength() {
        return this.data.length;
    }

    stackPeek() {
        return this.data[this.data.length - 1];
    }
}

class MinStack extends Stack {
    constructor() {
        super();
        this.minimum = new Stack();
    }

    pushToStack(element) {
        super.pushToStack(element);

        if ( !this.minimum.isEmpty() ) {
            // console.log(`${element} < ${this.minimum.stackPeek()}`);
            if ( element < this.minimum.stackPeek() ) {
                return this.minimum.pushToStack(element);
            }
        } else if ( this.minimum.isEmpty() ) {
            return this.minimum.pushToStack(element);
        }
        // return this.data.push(element);
    }

    popFromStack() {
        const minElement = this.minimum.stackPeek();
        const poppedElement = super.popFromStack();

        this.minimum.popFromStack();

        return poppedElement;
    }

    get min() {
        console.log(this.minimum);
        return this.minimum.stackLength() ? this.minimum.stackPeek() : undefined;
    }
}

const fillMinStack = (minStack, ...args) => {
    args.forEach( (arg) => {
        minStack.pushToStack(arg);
    });
};

const minStack = new MinStack();
console.log(minStack);
console.log(minStack.data);

fillMinStack(minStack, 11, 2, 55, 678, -9, -23, 456, 666, 1399, 9800, 0.5);
// fillMinStack(minStack, 'aa', 'zapato', 'a', 'bb');

console.log(minStack.minimum.data);
console.log(minStack.min);

minStack.popFromStack();
console.log(minStack.min);
minStack.popFromStack();
console.log(minStack.min);
