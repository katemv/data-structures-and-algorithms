import LinkedList from "./data-structures/linked_lists/linkedList";

const list = new LinkedList(0);
list.append(1);
list.append(2);
list.reverse();
console.log(list.print());

