/** 7). Type Guards:
Type guards are a way to narrow down the type of a variable within a block of code.
 They allow you to write code that works with variables of different types in a type-safe way.*/

function printName(name: string | string[]): void {
  if (typeof name === 'string') {
    console.log(name.toUpperCase());
  } else {
    console.log(name.join(', '));
  }
}

printName('MAHNOOR'); // Output: MAHNOOR
printName(['MAHNOOR', 'MAK2914']); // Output: MAHNOOR, MAK2914