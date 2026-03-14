// Imports go first
import {makePottery} from './PotteryWheel.js';
import {firePottery} from './Kiln.js';


// Make 5 pieces of pottery at the wheel
let mug = makePottery("round", 3, 3)
console.log(mug)

let plate = makePottery("square", 5, 1)
console.log(plate)

let vase = makePottery("cylinder", 4, 8)
console.log(vase)

let bowl = makePottery("round", 4, 4)
console.log(bowl)

let planter = makePottery("rectangle", 6, 9)
console.log(planter)


// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2000)
console.log(firedMug)

let firedPlate = firePottery(plate, 2100)
console.log(firedPlate)

let firedVase = firePottery(vase, 2200)
console.log(firedVase)

let firedBowl = firePottery(bowl, 2300)
console.log(firedBowl)

let firedPlanter = firePottery(planter, 2150)
console.log(firedPlanter)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

