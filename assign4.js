const mealCost = process.argv;
 const tipPercent = process.argv;
 
 
 let myTotal = [];
 myTotal.push(Number(mealCost[2])+ (Number(tipPercent[3]/100)* Number(mealCost[2])));
 console.log("I owe" +" " + "$" + myTotal);