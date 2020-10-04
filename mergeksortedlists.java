//Java Solution

class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        if (lists.length == 0) {
            return null;
        }
        
        int interval = 1;
        
        while (interval < lists.length) {
            for (int i = 0; i < lists.length - interval; i += interval * 2) {
                lists[i] = mergeTwoLists(lists[i], lists[i + interval]);
            }
            
            interval *= 2;
        }
        
        return lists[0];
    }
    
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode newNode = new ListNode(-1);
        ListNode temp = newNode;
        
        while (list1 != null && list2 != null) {
            if (list1.val <= list2.val) {
                temp.next = list1;
                list1 = list1.next;
            } else {
                temp.next = list2;
                list2 = list2.next;
            }
            
            temp = temp.next;
        }
        if (list1 != null) {
            temp.next = list1;
        }
        
        if (list2 != null) {
            temp.next = list2;
        }
        
        return newNode.next;
    }
}