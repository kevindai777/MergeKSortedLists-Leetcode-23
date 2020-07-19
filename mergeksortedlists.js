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


//O(nlogk) where n is the length of the longest linked list and k is the number of lists
//Divide-And-Conquer solution that does continuous merges on the lists until it is one list

if (lists.length == 0) {
    return null
}

let interval = 1

//Keep growing the interval until it's past the list length
while (interval < lists.length) {

    //Make sure the iteration ends with enough space for the last interval
    //Each loop will go through the list and merge them into (lists / 2) size
    for (let i = 0; i < lists.length - interval; i += interval * 2) {
        lists[i] = mergeTwoLists(lists[i], lists[i + interval])
    }

    //increment the interval for next merge
    interval *= 2
}

function mergeTwoLists(l1, l2) {
    let newNode = new ListNode(-1)
    let temp = newNode

    while (l1 && l2) {
        if (l1.val < l2.val) {
            temp.next = l1
            temp = temp.next 
            l1 = l1.next
        } else {
            temp.next = l2
            temp = temp.next 
            l2 = l2.next
        }
    }

    if (l1) {
        temp.next = l1
    }

    if (l2) {
        temp.next = l2
    }

    return newNode.next
}

return lists[0]
