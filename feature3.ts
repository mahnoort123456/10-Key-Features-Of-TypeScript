/**  3). Classes:
 Classes in TypeScript are similar to classes in other object-oriented programming languages like Java and C#.
They allow you to define properties and methods for a particular type of object, and they support inheritance and encapsulation.
TypeScript supports object-oriented programming features like classes and inheritance.*/

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  speak(): void {
    console.log(`${this.name} barks.`);
  }
}

let dog = new Dog('ZAK');
dog.speak();

