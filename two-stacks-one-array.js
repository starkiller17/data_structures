let data = [];
class TwoStacks {
    
    constructor(name) {
        this.name = name;
        this.start = undefined;
        this.end = undefined;
    }

    pushToStack1(element) {
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
            secondStack.start = this.end + 1;
            secondStack.end = data.length - 1;
        }
    }

    popFromStack1() {
        console.log(this.end);
        if ( this.start !== undefined && this.end !== undefined ) {
            const popedElement = data.splice(this.end, 1);
            if (secondStack.start !== 0) {
                secondStack.start--;
                secondStack.end--;
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

    pushToStack2(element) {
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
            firstStack.start = this.end + 1;
            firstStack.end = data.length - 1;
        }
    }

    popFromStack2() {
        if ( this.start !== undefined && this.end !== undefined ) {
            const popedElement = data.splice(this.end, 1);
            
            if (firstStack.start !== 0) {
                --firstStack.start;
                --firstStack.end;
            }

            if (this.start === this.end) {
                this.start = undefined;
                this.end = undefined;
            } else {
                this.end--;
            }

            return popedElement;
        } else {
            return "There are not elements in Stack 2.";
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

// secondStack.pushToStack2(7);
// firstStack.pushToStack1(1);
// secondStack.pushToStack2(8);
// secondStack.pushToStack2(9);
// firstStack.pushToStack1(2);
// firstStack.pushToStack1(3);
// secondStack.pushToStack2(10);
// secondStack.pushToStack2(11);

// console.log(firstStack.printStack);
// console.log(secondStack.printStack);
// console.log('Data: ' + data);


// console.log(secondStack.popFromStack2());
// console.log(firstStack.popFromStack1());
// console.log(secondStack.popFromStack2());
// console.log(firstStack.popFromStack1());

// console.log(firstStack.printStack);
// console.log(secondStack.printStack);
// console.log('Data: ' + data);


// secondStack.pushToStack2(7);
// firstStack.pushToStack1(1);
// secondStack.pushToStack2(8);
// firstStack.pushToStack1(2);
// firstStack.pushToStack1(3);
// secondStack.pushToStack2(9);

// console.log(firstStack.printStack);
// console.log(secondStack.printStack);
// console.log('Data: ' + data);


// firstStack.popFromStack1();
// firstStack.popFromStack1();
// secondStack.popFromStack2();
// firstStack.popFromStack1();
// firstStack.popFromStack1();
// firstStack.popFromStack1();
// firstStack.popFromStack1();
// firstStack.pushToStack1(3);
// console.log(firstStack.printStack);
// console.log(secondStack.printStack);
// console.log('Data: ' + data);