#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.9,
    YEN: 113,
    CAD: 1.3,
    AUD: 1.65,
    PKR: 280,
};
let user_answer = await inquirer.prompt([{
        name: "from_currency",
        type: "list",
        message: "select a currency to convert from:",
        choices: ["USD", "EUR", "YEN", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "select the currency to convert into:",
        choices: ["USD", "EUR", "YEN", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "enter the amount to convert:",
    }
]);
let fromAmount = currency[user_answer.from_currency];
let toAmount = currency[user_answer.to_currency];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
