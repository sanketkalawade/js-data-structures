function Stack(){
    this.top = -1;
    this.values = [];
}

Stack.prototype.push = function(data){
    this.top++;
    this.values[this.top] = data;
};

Stack.prototype.pop = function(){
    // if there is no element in stack then return null
    if (this.top < 0) {
        return null;
    }
    const topElement = this.values[this.top];
    this.top--;

    /*I could have used array pop method here to remove
    the last array element but I haven't used it to
    avoid confusion with Stack's pop method e.g.:-
    this.values.pop()*/
    this.values.length--;
    return topElement;
};
//peeking the top element
Stack.prototype.peek = function () {
    return this.top < 0 ? null : this.values[this.top];
};

const dummyValues = ['john', 'mark', 'Jason', 'Madison', 'Gabriel', 'Lisa', 'Christine'];
const stack = new Stack();
for (const iterator of dummyValues) {
    stack.push(iterator);
}

console.log('element at top of stack: ', stack.peek());
console.log('pop the top element: ', stack.pop());
console.log('element at top of stack: ', stack.peek());
