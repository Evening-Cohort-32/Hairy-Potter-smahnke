// Imports go first
import {makePottery} from './PotteryWheel.js';
import {firePottery} from './Kiln.js';
import { toSellOrNotToSell } from './PotteryCatalog.js';
import { potteryList } from './PotteryList.js';


// Make 5 pieces of pottery at the wheel
let mug = makePottery("round", 3, 3, "Mug")
console.log(mug)

let plate = makePottery("square", 5, 1, "Plate")
console.log(plate)

let vase = makePottery("cylinder", 4, 8, "Vase")
console.log(vase)

let bowl = makePottery("round", 4, 4, "Bowl")
console.log(bowl)

let planter = makePottery("rectangle", 6, 9, "Planter")
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
let pricedMug = toSellOrNotToSell(firedMug);
let pricedPlate = toSellOrNotToSell(firedPlate);
let pricedVase = toSellOrNotToSell(firedVase);
let pricedBowl = toSellOrNotToSell(firedBowl);
let pricedPlanter = toSellOrNotToSell(firedPlanter);

// Invoke the component function that renders the HTML list

const renderPotteryToDOM = potteryList()
document.getElementById('potteryList').innerHTML = renderPotteryToDOM