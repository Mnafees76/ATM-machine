#! /usr/bin/env node
import inquirer from "inquirer";

let mybalance = 10000; 
let mypin = 9991;

let pinanswer = await inquirer.prompt(
   [  
        {
            name: "pin",
            message: "enter your pin code",
            type: "number",
        }
   ]  
);

if (pinanswer.pin ===mypin){
    console.log("correct pin code!!!");

    let operationans = await inquirer.prompt(
        [
            {
               name: "operation",
               message:"please select one option",
               type: "list",
               choices:["withdraw","check balance"]
            }      
        ]
    );
 
    if (operationans.operation ==="withdraw") {
      let amountans = await inquirer.prompt(
        [
             {
                 name: "amount",
                 message: "select amount",
                 type: "list",
                choices :[1000,2000,3000,5000,7000,9000 ,12000],
             }
        ] 
    );
   
         mybalance -= amountans.amount;
         console.log("your balance is:" + mybalance);
         if (mybalance >= amountans.amount) {
    }

    else {
        console.log("your balance is insufficient");
    }
    }
    else if (operationans.operation === "check balance") {
             console.log("your balance is:"+mybalance)
    }
}
else {
console.log("Incorrect pin code");
}
