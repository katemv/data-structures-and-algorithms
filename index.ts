
import Stack from "./data-structures/stacks_and_queues/stack";


const myStack = new Stack("google");

myStack.push("udemy");
myStack.push("discord");
myStack.pop();
myStack.pop();
myStack.pop();

console.log("isEmpty", myStack.isEmpty());
console.log(myStack.print());

