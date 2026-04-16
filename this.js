/*1. Global Context
In the global scope, this refers to the global object.
*/
console.log(this); // window (browser) or global (Node.js)

//2. Inside a Regular Function
function show() {
  console.log(this);
}

show(); // window (browser) | undefined in strict mode

//3. Inside an Object Method ✅ Most common use
const person = {
  name: "Alice",
  greet() {
    console.log(this.name); // 'this' = person object
  }
};

person.greet(); // "Alice"

//4. Arrow Function — No own this
const person1 = {
  name: "Alice",
  greet: () => {
    console.log(this.name); // 'this' = outer scope (window)
  }
};

person1.greet(); // undefined

//5. Inside a Class
class Car {
  constructor(brand) {
    this.brand = brand; // 'this' = new object being created
  }

  show() {
    console.log(this.brand);
  }
}

const c = new Car("Toyota");
c.show(); // "Toyota"

//6. Event Listeners
button.addEventListener("click", function() {
  console.log(this); // 'this' = the button element
});

// With arrow function:
button.addEventListener("click", () => {
  console.log(this); // 'this' = outer scope, NOT the button
});

//7. Explicit Binding — call, apply, bind: You can manually set what this refers to:

function greet() {
  console.log("Hello, " + this.name);
}

const user = { name: "Bob" };

greet.call(user);          // "Hello, Bob" — calls immediately
greet.apply(user);         // "Hello, Bob" — calls immediately
const bound = greet.bind(user);
bound();                   // "Hello, Bob" — returns a new function


//Setters and Getters
const person = {
    names1: 'Alice',

    get name(){
        return this.names1;
    },

    set name(value){
        this.names1 = value;
    }
};

console.log(person.name);
person.name = 'chirag';
console.log(person.name);



