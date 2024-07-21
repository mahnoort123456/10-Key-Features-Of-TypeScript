"use strict";
/** 4). Enums:
Enums are a way to define a set of named constants.
 They make your code more readable by giving names to values that would otherwise be hard to understand.*/
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log(c);
// Output: 1
