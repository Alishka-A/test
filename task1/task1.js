let a = "hello world"
console.log(typeof(a))
let b = 5
console.log(typeof(b))
let c = true
console.log(typeof(c))
let d
console.log(typeof(d))
let e = null
console.log(typeof(e))
let f = Symbol(10)
console.log(typeof(f))
let g = BigInt(2 ^ 999)
console.log(typeof(g))



let apple = 10 // let is the new way of declaring variables starting ES6(ES2015). | let is bloked scoped 

const apple_pie = 50 // the const keyword was also introduced in the ES6(2015) version to create constants | 
    // Once a constant is initialized, we cannot change its value 

var pineapple = 20 // var is used in the older versions of javascript | var is function scoped 


let firstname = "Jason"
let Lastname = "Anderson"
let age = 50
let country = "USA"
let hobby = "playing Piano"
let occupationa = "none"

console.log(`My name is ${firstname} and surname is ${Lastname}, My age is ${age} i live in ${country} my hobby is ${hobby} and my occupation at the moment is $`)
    // console.log({ Firstname: `Jason`, Lastname: `Anderson`, age: 50, country: `USA`, hobby: `playing piano`, occupation: `None` })







let address = 'Yasamal'
let num = 11

console.log(`My address is ${address} street, building number is ${num}.`)


console.log(5 + 7, 5 - 2, 5 * 5, 15 / 3, 20 % 3)

console.log(2 == '2', 2 == 5) // true , false 
console.log(2 === 2, 2 === '2') // true , false
console.log(5 > 2, 5 > 5) // true ,false 
console.log(4 < 6, 5 < 4) //true , false
console.log(3 != 2) // true
console.log(2 !== 2, 2 !== '2') //false,true
console.log(5 >= 5, 5 >= 4) // true,true
console.log(4 <= 3, 3 <= 3) //false true



console.log(true && true) //true
console.log(true && false) //false

console.log(true || false) //true

console.log(!true) //false