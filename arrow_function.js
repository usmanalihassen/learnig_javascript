//Arrow functions are just a shorter way to write a function

//1, Single Parameter (No Parentheses Required)
const greet = name => `Hello, ${name}!`;
console.log(greet("Usman")); // Output: Hello, Usman!

//2, No Parameters (Empty Parentheses Required)
const sayHello = () => "Hello, World!";
console.log(sayHello()); // Output: Hello, World!

//3, Multiline Function Body
const multiply = (a, b) => {
    const result = a * b;
    return result;
};
console.log(multiply(4, 5)); // Output: 20

//4, Arrow Function as a Callback
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);
console.log(squared); // Output: [1, 4, 9, 16]

//5, Arrow Function Without this Binding Arrow functions don't have their own this and inherit it from the enclosing scope:
function Person(name) {
    this.name = name;
    this.sayName = () => console.log(`My name is ${this.name}`);
}
const person = new Person("Usman");
person.sayName(); // Output: My name is Usman