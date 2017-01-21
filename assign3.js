const myVal = process.argv;
 let myArr = [];
 let myTotal = (Number(myVal[2])) + (Number(myVal[3]));
 myArr.push(Number(myVal[2]), Number(myVal[3]));
 console.log(myArr);
 console.log(myTotal);
 
 
 if (myTotal<10){
 console.log("your number is less than 10");}
 
 else if (myTotal<100){
     console.log("your number is less than 100");}
    
else if (myTotal<1000){
     console.log("your number is greater than 100 but less than 1000");
}
  
