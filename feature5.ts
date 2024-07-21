/** 5). Generics:
Generics allow you to write reusable code that works with a variety of types.
 They allow you to create functions, classes, and interfaces that can work with any type, rather than being tied to a specific type.*/

function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>('MAHNOOR');
console.log(output); // Output: MAHNOOR