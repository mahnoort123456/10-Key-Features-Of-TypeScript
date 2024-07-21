"use strict";
/** 9). Optional Chaining:
Optional chaining allows you to safely access nested properties without worrying about null or undefined values.
 This can help prevent runtime errors when working with data that may be incomplete.*/
var _a;
let men = {
    name: 'MAHNOOR'
};
console.log((_a = person.lastName) === null || _a === void 0 ? void 0 : _a.toUpperCase()); // Output: undefined
