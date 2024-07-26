// let fruits = ['apple', 'banana', 'orange']
// console.log(fruits)
// console.log(fruits[0])
// fruits[1] = "Grape"
// console.log(fruits)

// for (var i = 0; i <fruits.length; i++)
// { console.log(fruits[i]) }

// fruits.push('kiwi')
// console.log(fruits)
// fruits.pop()
// console.log(fruits)
// fruits.unshift('mango')
// console.log(fruits)
// fruits.shift()
// console.log(fruits)




let number = [1, 3, 4, 2, 5, 6, 7, 8, 9, 10]
let even = []
for (let i = 0; i < number.length; i++)
{
    if (number[i] % 2 == 0) {
        even.push(number[i])
    }
}
console.log(even)