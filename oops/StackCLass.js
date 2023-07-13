// stack implementation using class weakmap

class Stack {
    constructor(){
        this.items = [];
        this.count = 0;
    }
    push(element){
        this.items[this.count]=element;
        console.log(`Added ${this.items[this.count]}`);
        this.count++;
    }
    pop(){
        if(this.count == 0) return undefined;
        let deleteItem = this.items[this.count-1];
        this.count--;
        console.log(`Removed ${deleteItem}`);
        return deleteItem;
    }
    peek(){
        console.log(`Top element is ${this.items[this.count-1]}`);
        return this.items[this.count-1];
    }
    countFunction(){
        console.log(`Total elements in stack ${this.count}`);
        return this.count;
    }
}

console.log("Stack implementation using class");

const stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);
stack.pop();
stack.peek();
console.log(stack.count);
stack.countFunction();
