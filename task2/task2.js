//////////////// Task1 //////////////

//// 1 ////

// console.log(12 * 8);

// var x = 10 / 2
// console.log(x);

// var num1 = 20
// var num2 = 17
// console.log(num1 + num2);

// var name = 'James'
// var surname = 'Anderson'
// var year = 1985

// var info = [name,surname,year]

// console.log(info);

// console.log(17%12);

// cityName = 'Baku'
// cityName = 'Gence'
// console.log(cityName);

/////////////////////  TASK 2 ///////////////////

// console.log('test1', test); // undefined
// {
//     let test = "something"
//     console.log('test2', test); // return something
// }
// console.log('test3', test);  // out of scope return undefined

// console.log('test1', test);  // undefined
// {
//     var test = "something"
//     console.log('test2', test); // return same as 38th code
// }
// console.log('test3', test); // returns same as 45 because of var

///////////////////// TASK 3 //////////////////////

// let name = "Ulfat"
// let surname = Zakirli
// let year = 2000
// year = "2000"
// let city;
// let qualification = null
// let obj = { name: 'ulfat' }
// let arr = ['a', 'b', 'c']

// console.log('name',typeof names);
// console.log('surname',typeof undefined);
// console.log('year',typeof year);
// console.log('city',typeof city);
// console.log('qualification',typeof qualification);
// console.log('obj',typeof obj);
// console.log('arr',typeof arr);

////////////// TASK 4 //////////////
// const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8];
// let sum = 0
// for (let i = 0;i<arr1.length;i++){
//     sum += i
// }
// console.log(sum);
// arr1.push(10,88)
// console.log(arr1);

// arr1.splice(0,2)
// console.log(arr1);

// arr1.unshift(0,9,11)
// console.log(arr1);

// arr1.shift()
// arr1.shift()
// arr1.shift()
// arr1.shift()
// console.log(arr1);

////////////// TASK 5 //////////////

// var player = {
//     username:'alpha',
//     surname:'Alcatraz',
//     age:45,
// }
// player.username = 'Lian'
// player.surname = 'Alexander'
// console.log(player);

// const user = {
//     email: "ulfat@gmail.com",
//     info: {
//         gender: "Male",
//         loc: {
//             city: "Baku",
//             street: "Nizami 22",
//             education: {
//                 "uni name": "ADNSU",
//             },
//         },
//     },
// };
// console.log(user.email);
// console.log(user.info.gender);
// console.log(user.info.loc.city);
// console.log(user.info.loc.street);
// console.log(user.info.loc.education['uni name']);

const mixedObject = {
  name: "ulfat",
  age: 25,
  isStudent: false,
  hobbies: null,
  year: 2024,
  address: undefined,
  surname: "Zakirli",
  contactInfo: {
    email: "ulfat@example.com",
    phone: null,
  },
  scores: [98, 87, 92],
};



for (key in mixedObject) {
  if (typeof mixedObject[key] === "string") {
    console.log(key);
  }
}

for (key in mixedObject.contactInfo) {
  if (typeof mixedObject.contactInfo[key] === "string") {
    console.log(key);
  }
}

for (key in mixedObject) {
  if (typeof mixedObject[key] === "number") {
    console.log(key);
  }
}

for (key in mixedObject) {
  if (typeof mixedObject[key] === "boolean") {
    console.log(key);
  }
}

for (key in mixedObject) {
  if (typeof mixedObject[key] === "undefined") {
    console.log(key);
  }
}
for (key in mixedObject.contactInfo) {
  if (typeof mixedObject.contactInfo[key] === "undefined") {
    console.log(key);
  }
}

for (key in mixedObject) {
  if (typeof mixedObject[key] === "object") {
    console.log(key);
  }
}
for (key in mixedObject.contactInfo) {
  if (typeof mixedObject.contactInfo[key] === "object") {
    console.log(key);
  }
}

// 11.Repeat (6,7,8,9,10) tasks but now log 'values'

for (value in mixedObject) {
  if (typeof mixedObject[value] === "string") {
    console.log(mixedObject[value]);
  }
}
for (value in mixedObject.contactInfo) {
  if (typeof mixedObject.contactInfo[value] === "string") {
    console.log(mixedObject.contactInfo[value]);
  }
}

for (value in mixedObject) {
  if (typeof mixedObject[value] === "number") {
    console.log(mixedObject[value]);
  }
}
for (value in mixedObject.contactInfo) {
  if (typeof mixedObject.contactInfo[value] === "number") {
    console.log(mixedObject.contactInfo[value]);
  }
}

for (value in mixedObject) {
  if (typeof mixedObject[value] === "boolean") {
    console.log(mixedObject[value]);
  }
}
for (value in mixedObject.contactInfo) {
  if (typeof mixedObject.contactInfo[value] === "boolean") {
    console.log(mixedObject.contactInfo[value]);
  }
}

for (value in mixedObject) {
  if (typeof mixedObject[value] === "undefined") {
    console.log(mixedObject[value]);
  }
}
for (value in mixedObject.contactInfo) {
  if (typeof mixedObject.contactInfo[value] === "undefined") {
    console.log(mixedObject.contactInfo[value]);
  }
}
