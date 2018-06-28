
"use strict";

// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map


phoneNumbers.set("home", "510-867-5309");
phoneNumbers.set("mobile", "415-555-1212");
phoneNumbers.set("business", "415-123-4567");


// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 

function printAccountInfo(name, accountNumber, businessName){
    console.log(`Customer name is ${name}`);
    console.log(`Account Holder Number: ${accountNumber}`);
    console.log(`Business Name: ${businessName}`);
 }



// Add function to print all addresses, including a header

function printAddresses(addresses){
    console.log("Addresses:");    
    for (let address of addresses){
        console.log(`--> ${address}`);
    } 
}


// Add function to print phone types and numbers

function printPhoneNumber(phoneNumbers){
    console.log("Phone Numbers:");

    for(let number of phoneNumbers){
        console.log(number[0] + ":" + number[1]);
    }
}

// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions

let transactions = new Map();


// Add function to add transactions
function addTransaction(date, amount){
    transactions.set(date, amount);
}


// Use the function to add transactions

addTransaction("May-2", -500);
addTransaction("May-13", 1200);
addTransaction("May-15", -100);
addTransaction("May-21", -359);
addTransaction("May-29", 2200);


// Add function to show balance status


function showBalanceStatus(balance) {
    if (balance < 0) {
        console.log("YOU ARE OVERDRAWN");    
    } else if (balance > 0 && balance < 20){
        console.log("Warning: You are close to zero balance");
    } else {
        console.log("Thank you for your business");
    }
}

// Add function to show transactions

function showTransactions(transactions, beginningBalance){
    let total = beginningBalance
    let type = null

    console.log(`Your starting balace is ${total}`); 

    for (let transaction of transactions){
        total = total + transaction[1]; 

        if (total < 0){
            total = total - 25;
        }


        if (transaction[1] > 1){
            type = "deposit";
        }else{
            type = "withdrawl";
        }
        console.log(transaction[0], type, total)

    }

    console.log(total)
    showBalanceStatus(total)

    return total
}

let endingBalance = showTransactions(transactions, 26000)


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info

const customer = {
    "accountHolder": accountHolder,
    "accountNumber": accountNumber,
    "businessName": businessName,
    "addresses": addresses,
    "phoneNumbers": phoneNumbers,
    "transactions": transactions,
    "startingBalance": 26000,
};


// Function to add customer attributes

function addProperty(customer, favoriteMelon = "Cantaloupe", numPets = 0){
    customer.favoriteMelon = favoriteMelon
    customer.numPets= numPets
}



// Add attributes for this user

addProperty(customer, "Casaba", 2)

// ///////////////////////////////////////////////////////
// Getting a Business Loan
function getCustomerStatus(customer){

    if (customer.numPets > 5 || customer.favoriteMelon === "Casaba"){
        customer.status = "preferred";
    }
}

getCustomerStatus(customer)


// Function to return loan rate

function calculateInterest(customer, income){

    if (income < 100000 && customer.status !== "preferred"){
        customer.interestRate = 0.08;
    } else if (income < 100000 && customer.status === "preferred"){
        customer.interestRate = 0.05;
    } else if (income < 200000 && income > 100000 && customer.status !== "preferred"){
        customer.interestRate = 0.07;
    } else if (income < 200000 && income > 100000 && customer.status === "preferred"){
        customer.interestRate = 0.04;
    } else{
        customer.interestRate = 0.04;
    }

}
calculateInterest(customer, 26000)



// ///////////////////////////////////////////////////////
// Account Report

function printAccountReport(customer){

console.log(customer.accountHolder);
console.log(customer.phoneNumbers);
console.log(customer.startingBalance);
console.log(endingBalance);

if(customer.status === "preferred"){
    console.log("Congratulations on being a Premiere customer!")
}

}

// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




