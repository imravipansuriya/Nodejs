const app = require('./app')

console.log(app.x)
console.log(app.z())



const arr = [2,3,4,5,6,7,8,3,9]

let result = arr.filter((item)=>{
    return item >= 4
})

console.log(result)

