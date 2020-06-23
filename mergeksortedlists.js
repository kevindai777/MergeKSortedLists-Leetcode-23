//Objective is to sort 'k' linked-lists and return a linked-list with sorted values.

class Node {
    constructor(val, next = null) { //if next is not given, assume it is empty
      this.val = val
      this.next = next
    }
}
  
class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let l1 = new Node(1)
l1.next = new Node(4)
l1.next.next = new Node(5)

let l2 = new Node(1)
l2.next = new Node(3)
l2.next.next = new Node(4)

let l3 = new Node(2)
l3.next = new Node(6)

let lists = [l1, l2, l3]


//O(nlogn) solution that combines all of the lists into one list, sorts
//them, then creates a new list with given sorted values.

let arr = []

for (let list of lists) {
    while (list) {
        arr.push(list.val)
        list = list.next
    }
}

//Sort them from greatest to least to pop out later
arr.sort((a,b) => {
    return b - a
})

let newNode = new Node(-1)
let temp = newNode 

while (arr.length) {
    let next = new Node(arr.pop())
    temp.next = next 
    temp = next
}

return newNode.next
