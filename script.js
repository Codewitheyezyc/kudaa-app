import accounts from "./data.js";

// transaction function
const makeTransaction = (allAccounts, userAccountNumber, receiverAccountNumber, transactiontype, amount) => {
    if (allAccounts, userAccountNumber, receiverAccountNumber == 'null' && amount) {
        // find user and receiver
        const userAccount = allAccounts.find(acc => acc.accountNumber === userAccountNumber);
        // calculate user balance
        const userbalance = userAccount.moneyMovements.reduce((acc, mov) => acc + mov, 0);
        console.log(userbalance);
        // check transaction type. .eg ['withdraw', 'send', 'deposit']
        if (transactiontype == 'withdraw') {
            const newUserbalance = userbalance - amount
            return newUserbalance
        }else if (transactiontype == 'deposit'){
            const newUserbalance = userbalance + amount
            return newUserbalance
        }
    } else {
        const userAccount = allAccounts.find(acc => acc.accountNumber === userAccountNumber);
        const receiverAccount = allAccounts.find(acc => acc.accountNumber === receiverAccountNumber);
        // calculate receiver balance
        const userbalance = userAccount.moneyMovements.reduce((acc, mov) => acc + mov, 0);
        const receiverbalance = receiverAccount.moneyMovements.reduce((acc, mov) => acc + mov, 0);
        if (transactiontype == 'send' && receiverAccount != null){
            const newreceiverbalance = receiverbalance + amount
            const newUserbalance = userbalance - amount
            return { 'sender': newUserbalance, 'receiver': newreceiverbalance }
        }
    }
}

console.log(accounts);

// console.log(makeTransaction(accounts, accounts[0].accountNumber, accounts[2].accountNumber, "send", 2000));
// console.log(makeTransaction(accounts, accounts[0].accountNumber, 'null', "deposit", 5000));
let x = makeTransaction(accounts, accounts[0].accountNumber, 'null', "deposit", 5000)
console.log(x);