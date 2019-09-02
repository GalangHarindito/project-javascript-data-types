
// STRING & NUMBER

let name = "john doe"
const money = 5000000
const tyre = 4500000


// console.log(`Hello ${name} your money ${money}`)
// console.log(name)
// console.log(money)

console.log(`Hello ${name} your money ${money}, you paying ${tyre} and your money left ${money - tyre}`)
console.log(2000)
console.log(100)
console.log(2.78958)

const age = 52

console.log(`His age is ${age}`)



// ARRAY

console.log([2, 1, 10])
console.log([[[45, 78, 2, 56],[56, 1000, 89]], [[67, 88,90], [12, 67, 67]]])
console.log(['Alpha', 100, true])

const person = ['Alpha', 100, true]
const number = [[[45, 78, 2, 56],[56, 1000, 89]], [[67, 88,90], [12, 67, 67]]]

console.log(person)
console.log(person[0])
console.log(person[1])
console.log(person[2])

console.log(number)
console.log(number[0])
console.log(number[0][0])
console.log(number[0][0][0])
console.log(number[0][0][1])
console.log(number[0][0][2])
console.log(number[0][1])
console.log(number[0][1][0])
console.log(number[0][1][1])
console.log(number[0][1][2])
console.log(number[1])
console.log(number[1][0])
console.log(number[1][0][0])
console.log(number[1][0][1])
console.log(number[1][0][2])
console.log(number[1][1])
console.log(number[1][1][0])
console.log(number[1][1][1])
console.log(number[1][1][2])

// alert(person)
// alert(person[0])
// alert(person[1])
// alert(person[2]

// OBJECT

var zubat = {
    name: 'Zubat',
    type: [
      'Poison',
      'Flying'
    ],
    level: 10,
    evolutionLine: [
      {
        name: 'Golbat',
        type: [
          'Poison',
          'Flying'
        ],
        level: 22
      },
      {
        name: 'Crobat',
        type: [
          'Poison',
          'Flying'
        ],
        level: 100
      }
    ]
  }

  
  console.log(zubat)
 console.log(JSON.stringify(zubat))

 console.log(zubat.name, zubat.type)




 // BOOLEAN


console.log(true)
console.log(false)
console.log(true, false)

const toggle = false

console.log(`The lamp's toggle is ${toggle}`)

// alert(`The lamp's toggle is ${toggle}`)
