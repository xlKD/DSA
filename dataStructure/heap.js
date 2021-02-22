const Heap = () => {
  this.array = [];
  this.isMaxHeap = true;
}

Heap.prototype.addNum = function(num) {
  this.array.push(num);
  this.bottomUpHeapify(this.array.length - 1);
}

Heap.prototype.bottomUpHeapify = index => {
  const parent = Math.floor((index - 1) / 2);

  if (parent > -1) {
    if (this.isMaxHeap && this.array[parent] < this.array[index]) {
      this.swap(parent, index);
      this.bottomUpHeapify(parent);
    }  
  }
}

Heap.prototype.deleteRoot = function() {
  this.swap(0, this.array.length - 1);
  this.array.pop();
  this.topDownHeapify(0);
}

Heap.protoype.topDownHeapify = index => {
  let parent = index;
  const leftChildIndex = index*2 + 1;
  const rightChildIndex = leftChildIndex + 1;

  if ((this.isMaxHeap && this.array[parent] < this.array[leftChildIndex]) || (!this.isMaxHeap && this.array[parent] > this.array[leftChildIndex])) {
    parent = leftChildIndex;
  }

  if ((this.isMaxHeap && this.array[parent] < this.array[rightChildIndex]) || (!this.isMaxHeap && this.array[parent] > this.array[rightChildIndex])) {
    parent = rightChildIndex;
  }

  if (parent !== index) {
    this.swap(parent, index);
    topDownHeapify(parent);
  }
}

Heap.prototype.swap = (a, b) => {
  const temp = this.array[a];
  this.array[a] = this.array[b];
  this.array[b] = temp;
}

//TODO: delete middle node
