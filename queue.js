function Queue(){
    this.head = 0;
    this.data = []
}

Queue.prototype.enqueue = function (param) {
    this.data.push(param)
};

Queue.prototype.dequeue = function () {
    if (this.head >= this.data.length) {
        return null;
    }

   
    const dequeuedItem = this.data[this.head];
    this.data.shift(); //Removes from starting unlike removing last item of array but calling shift at every dequeue this is expensive.
    this.head++;

     /* Removing item from front of the array is expensive,
    and if dont remove it then after dequeue operations the items before the item at head position are garbage, we dont need them,
    so we can add some threshold so after threshold we will remove those items from array.
    
    if (this.head === 5) {
        this.data.splice(0,5);
        this.head = 0;
    } */

    return dequeuedItem;
};

Queue.prototype.peek = function () {
    if (this.head >= this.data.length) {
        return null;
    }

    return this.data[this.head];
}

const queue = new Queue();

queue.enqueue('john');
queue.enqueue('mark');
console.log('Peek: ', queue.peek());
console.log('dequeue: ', queue.dequeue());
console.log('Peek: ', queue.peek());







