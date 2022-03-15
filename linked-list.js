class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.size = 0;
  }

  add(value) {
    let node = new ListNode(value);

    let currentNode;

    // If is the first element, make it the head
    if (this.head === null)
      this.head = node;
    else  {
      currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next
      }

      currentNode.next = node;
    }
    
    this.size++;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      return console.log('Please enter a valid index.');
    }
    
    let node = new ListNode(value);
    let currentNode, previousNode;

    currentNode = this.head;

    // To add a node to the beginning of the list
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      for (let i = 0; i < index; i++) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      node.next = currentNode;
      previousNode.next = node;
    }

  }

  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return console.log('Please enter a valid index.');
    }

    let currentNode, previousNode;
    
    currentNode = this.head;
    
    for (let i = 0; i < index; i++ ) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = currentNode.next;
    this.size--;

    return currentNode.value;
  }

  removeElement(value) {
    let currentNode, previousNode;
    currentNode = this.head;
    previousNode = null;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        if (previousNode === null) {
          this.head = currentNode.next;
        } else {
          previousNode.next = currentNode.next;
        }
        this.size--;
        return currentNode.value;
      }
      previousNode = currentNode;
      currentNode = currentNode.next
    }

    /*
    if (currentNode.value !== null) {
      if (currentNode.value === value) {
        this.head = currentNode.next;
        this.size--;
      } else {
        for (let i = 0; i < this.size -1; i++ ) {
          previousNode = currentNode;
          currentNode = currentNode.next;
          
          if (currentNode.value === value) {
            previousNode.next = currentNode.next
            this.size--;
          }
        }
      }
      if (currentNode === this.head) {
        return console.log('The value was not found...');
      }
      return console.log('The head now is: ' + currentNode.value);
    } */
  
    return console.log('The list is null or value does not exists!');
  }

  indexOf(element) {
    let index = 0;

    let currentNode = this.head;

    while(currentNode !== null) {
      if (currentNode.value === element)
        return index;
      currentNode = currentNode.next;
      index++;
    }
    return console.log('The value was not found, the list is empty.');
  }

  isEmpty() {
    return this.size === 0;
  }
  
  sizeOfList() {
    return this.size;
  }

  printList() {
    let currentNode = this.head;
    let str = "";

    while(currentNode) {
      str += currentNode.value + "->";
      currentNode = currentNode.next;
    }

    console.log(str);

  }

  // Empties out the list
  clear() {
    this.head = null;
  }

  // Returns the last node of the linked list
  getLast() {
    let lastNode = this.head;

    if (lastNode) {
      while(lastNode.next) {
        lastNode = lastNode.next;
      }
    }

    return lastNode;
  }

  // Returns first node of linked list
  getFirst() {
    return this.head;
  }

}

// First create two list nodes
// let node1 = new ListNode(1);
// let node2 = new ListNode(2);
// // Create a pointer from node1 to node2
// node1.next = node2;

// Create a linked list with the node1
//let list = new LinkedList(node1);

let ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(5);

console.log(ll.head.next.next.value);
console.log(ll);

// ll.insertAt(4, 3)
//ll.removeFrom(2);

console.log(ll.head.next.next.value);
console.log(ll);

//ll.removeElement(5);

//console.log(ll.head.next.next.value);
console.log(ll);

const indexOf = ll.indexOf(5);
console.log(indexOf);

ll.printList();