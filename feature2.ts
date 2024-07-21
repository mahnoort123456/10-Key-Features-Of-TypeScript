/**                2). Interfaces:
Interfaces define the structure of an object,but they don’t provide an implementation. 
They’re a way to describe the expected shape of an object, which can help ensure that your code works as expected.
Interfaces define the shape of an object and can be used to ensure that an object adheres to a certain structure.*/

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

let person: Person = {
  firstName: 'MAHNOOR',
  lastName: 'TAHIR',
  age: 29,
};
