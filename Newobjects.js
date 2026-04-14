let person = {
    'first name': 'chirag',
    age: 25,
    hobbies: ['cooking', 'sports'],
    greet: () =>{
        //alert('Hi There!!');
        console.log('hi There!!');
    },
    1.6: 'My name is Chirag'
};

console.log(person);
person.greet();


person.age = 30; //changes the value of the property
person.isAdmin = true; //will create the property oif it is not true

delete person.age // will deltye the proprty "age"

//dont use  --> person.age = undefined; (as it sends the wrong message)

//dont use  --> person.age = null; (if you want to delete the property, if you want to modify it later then its ok)

console.log(person["first name"]); // when there is a abnormal key in an object we can wrap that around in square bracket and quotes
console.log(person["1.6"]);
//console.log(person["hobbies"]);

person.hobbies.push('coding');
console.log(person);


// let a = 'this is key';

// const obj = {
//     ['a']: 'this is a value',
//     [a]: 'this is another value'
// };

// for (const [element, value] of Object.entries(obj)) {
//     console.log(value);
// }

let person3 = {...person, age: 26, hobbies: [...person.hobbies]}// the hobbies now have new address so once we change the value in person \
                                                                  // so it will not affect the value in person3
console.log(person);
person.hobbies.push('sleeping');
console.log(person);

console.log(person3);

const person2 = {
    name: 'mahajan',
    age: 12,
    hobbies: ['watching TV']
};

person3 = Object.assign(person3, person, person2);
console.log(person3);