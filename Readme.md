

Anonymous Function 

A function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.

Ex:
function() {
    // Function Body
 }

Function Assignment

Used to call and/or provide the context (object) for a function that is dependant on an object. Often, functions are assigned to objects and access object members using the 'this' keyword.

Ex:
functionName.call(assignedObject, passedParams);

///////////////////////////////////////////////////////////////////////////////////////////////////

ES 6

JavaScript ES6 (also known as ECMAScript 2015 or ECMAScript 6) is the newer version of JavaScript that was introduced in 2015.

ECMAScript is the standard that JavaScript programming language uses. ECMAScript provides the specification on how JavaScript programming language should work.

Features of ES6

Some of the very prominent features include classes. Arrow functions, string interpolation, enhanced object literals, default, destructuring, spread+object literals, rest, spread, const, let, for..of, Unicode, set, modules and module loaders, weakest., set, WeakMap, Map, Symbols, Proxies, New library, Inheritable built-ins, Binary and octal, reflect, promises, Tail call optimization, block-scoped constructs let and const, etc.

/////////////////////////////////////////////////////////////////////////////////////////////////////////

THIS

=>  In JavaScript, the this keyword refers to an object.
=>  Which object depends on how this is being invoked (used or called)
=>  In an object method, this refers to the object.
=>  Alone, this refers to the global object.
=>  In a function, this refers to the global object.
=>  In a function, in strict mode, this is undefined.
=>  In an event, this refers to the element that received the event.
=>  Methods like call(), apply(), and bind() can refer this to any object.

Eg:

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

///////////////////////////////////////////////////////////////////////////////////////////////////////

Map

The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.

Eg:
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]

Reduce

The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.

The reduce() method executes a reducer function for array element.

The reduce() method returns a single value: the function's accumulated result.

The reduce() method does not execute the function for empty array elements.

The reduce() method does not change the original array.

Eg:

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum); 

Filter

The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.

Eg:
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

Call by Value

Suppose there is a variable named “a”. Now, we store a primitive value(boolean, integer, float, etc) in the variable “a”.

Let us store an integer value in “a”, Let a=5. Now the variable “a” stores 5 and has an address location where that primitive value sits in memory.

Now, suppose we copy the value of “a” in “b” by assignment (a=b). Now, “b” points to a new location in memory, containing the same data as variable “a”.

Thus, a=b=5 but both points to separate locations in memory.

This approach is called call by value where 2 variables become the same by copying the value but in 2 separate spots in the memory.

Features of call by value:

=> Function arguments are always passed by value.
=> It copies the value of a variable passed in a function to a local variable.
=> Both these variables occupy separate locations in memory. Thus, if changes are made in a particular => => => variable it does not affect the other one.

Call by reference

Let’s say, we have an object stored in the variable “a”. The variable stores the location or the address where the object lives. Now we set b=a. Now that new variable “b” instead of pointing to a new location in the memory, points to the same location where “a” does. No new object is created, no copy is created. Both the variables point to the same object. This is like having 2 names.

This is call by reference. It behaves quite differently from by value. All objects interact by reference.

Features of By reference:

=> In JavaScript, all objects interact by reference.
=> If an object is stored in a variable and that variable is made equal to another variable then both of => => Them occupy the same location in memory.
=> Changes in one object variable affect the other object variable.

/////////////////////////////////////////////////////////////////////////////////////////////////////////



