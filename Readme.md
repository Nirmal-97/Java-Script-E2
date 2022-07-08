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

const arr = [2, 4, 6, 8, 10];
function double(x) {
    return x * 3;
}
const output = arr.map(double);
console.log(output)

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

THIS INSIDE FUNCTION

this

A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.

In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called. ES5 introduced the bind() method to set the value of a function's this regardless of how it's called, and ES2015 introduced arrow functions which don't provide their own this binding (it retains the this value of the enclosing lexical context.

Eg:

const test = {
  prop: 42,
  func: function() {
    return this.prop;
  },
};

console.log(test.func());
// expected output: 42

////////////////////////////////////////////////////////////////////////////////////////////////////////////

Arity Definitions

In programming circles where function arity is explicitly discussed, there is a set of related labels which are used to describe different kinds of function arity based on the number of arguments expected by a given function. They are:

Nullary: zero arguments
Unary: one argument
Binary: two arguments
Ternary: three arguments
N-ary: having N arguments
Variadic: having a variable number of arguments
While it is possible that you may encounter specific names for a set of 4 or more arguments, it is uncommon. See the Wikipedia article on the topic for a more elaborate list of names available: Function arity.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

Currying
Currying is an advanced technique of working with functions. It’s used not only in JavaScript, but in other languages as well.

Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

Currying doesn’t call a function. It just transforms it.

Let’s see an example first, to better understand what we’re talking about, and then practical applications.

We’ll create a helper function curry(f) that performs currying for a two-argument f. In other words, curry(f) for two-argument f(a, b) translates it into a function that runs as f(a)(b)

Eg:

function curry(f) { // curry(f) does the currying transform
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}

// usage
function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

alert( curriedSum(1)(2) ); // 3

////////////////////////////////////////////////////////////////////////////////////////////////////////////

NAMED FUNCTION

Named Functions: In JavaScript, named functions are simply a way of referring to a function that employs the function keyword followed by a name that can be used as a callback to that function. Normal functions with a name or identifier are known as named functions.

Function Assignment in JavaScript

Used to call and/or provide the context (object) for a function that is dependant on an object. Often, functions are assigned to objects and access object members using the 'this' keyword.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

Safeguarding Function Parameters

The solution is to safeguard the value by checking its type. JavaScript has a
built-in directive typeof that we can use before calling the function:

The function Fun(array) was called. The function expects a function name as
an argument but an array was sent. The typeof test failed and nothing happened
but at least our program didn’t break.
You can do the same with other types if it becomes imperative that a particular
value must be in absolute compliance with a particular type.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////