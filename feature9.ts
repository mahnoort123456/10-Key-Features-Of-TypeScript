/** 9). Optional Chaining:
Optional chaining allows you to safely access nested properties without worrying about null or undefined values.
 This can help prevent runtime errors when working with data that may be incomplete.*/

interface People {
  name: string;
  lastName?: string;
}

let men: People = {
  name: 'MAHNOOR'
};

console.log(person.lastName?.toUpperCase()); // Output: undefined