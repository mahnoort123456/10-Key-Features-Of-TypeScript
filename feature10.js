"use strict";
/** 10). Decorators:
 Decorators are a way to add metadata to classes and their members.
 They allow you to add additional functionality to your code without modifying the original code.
 Decorators are often used in frameworks like Angular to add functionality to components and services.*/
function log(target, key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Calling ${key} with arguments: ${args}`);
        const result = originalMethod.apply(this, args);
        console.log(`Result: ${result}`);
        return result;
    };
}
