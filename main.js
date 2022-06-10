//Book 2 col2 num5
/*
In this exercise, you will define four functions. One will create a student object, 
and the other three will add a grade for a subject to the student object.*/

//createStudent() should return a new student object.  
//The returned object should have a name property and a grade property.//
//The name of the student, and which grade the student is in, must be passed to the function as arguments.
// const createStudent = (studentName, gradeLevel) => {
//     const student = {
//         name: `${studentName}`,
//         grade: `${gradeLevel}`
//     }
//     return student
// }

// const newStudent = createStudent("Brittany", 11) //works!!
// // console.log(newStudent)

// //addMathGrade() should add a new "math" property to the student with a value of "B".
// const addMathGrade = (letterGrade) => {
//     letterGrade.math = "B"
//     return letterGrade
// }
// const studentMathGrade = addMathGrade(newStudent) //works! Adds math: B to newStudent object
// //console.log(studentMathGrade)

// //addHistoryGrade() should add a new "history" property to the student with a value of "C".
// const addHistoryGrade = (letterGrade) => {
//     letterGrade.history = "C"
//     return letterGrade
// }
// const studentHistoryGrade = addHistoryGrade(newStudent) //works! adds history: C to newStudent obj
// //console.log(studentHistoryGrade)

// //addScienceGrade() should add a new "science" property to the student with a value of "A".
// const addScienceGrade = (letterGrade) => {
//     letterGrade.science = "A"
//     return letterGrade
// }
// const studentScienceGrade = addScienceGrade(newStudent) //works! adds science: A to newStudent obj
// console.log(studentScienceGrade)




//bk 2 col2 num 6
// Define a function named buyClay. 
// The function needs no parameters. 
// It should return an object with no properties on it yet.

const buyClay = () => {
    const object = {}
    return object
}
const clayPot = buyClay()
//console.log(clayPot)

// Define a function named makePottery. You need to pass it the empty object that buyClay produced,

const makePottery = (param) => { //single parameter
    param.shape = "bowl" //adding a new property named shape
    return param
}
const potWithBowl = makePottery(clayPot)
//console.log(potWithBowl) //works!

// Define a function named bisqueFire. 
// You need to give it the object that makePottery produced, 

const bisqueFire = (param) => { //single parameter
    param.readyForGlazing = true //adding a new property named readyForGlazing, value should be true
    return param
}
const potWithFire = bisqueFire(clayPot)
//console.log(potWithFire) //works!


// Define a function named glazePottery. 
// You need to give it the object that bisqueFire produced, 
const glazePottery = (param) => { //single parameter
    if (param.readyForGlazing === false) {
        console.log(`Make sure you bisque fire the pottery before you glaze it.`)
    }
    if (param.readyForGlazing === true) {
        param.glazing = "Midnight Blue"
    }
return param
}
const potWithGlaze = glazePottery(clayPot)
//console.log(potWithGlaze) //works!


// Define a function named finalFiring. 
// You need to give it the object that glazePottery produced

const finalFiring = (glazePotteryResult, tempOfKiln) => { //two parameters
    if (tempOfKiln > 1200) {
        glazePotteryResult.cracked = true //new property named cracked
    }
    if (tempOfKiln <= 1200) {
        glazePotteryResult.cracked = false
    }
 return glazePotteryResult   
}

// const firedPottery1400 = finalFiring(glazePottery, 1400) //test
// console.log(firedPottery1400) //works! shows cracked: true


// const firedPottery1200 = finalFiring(glazePottery, 1200)
// console.log(firedPottery1200) //works! show cracked: false

console.log(clayPot)
