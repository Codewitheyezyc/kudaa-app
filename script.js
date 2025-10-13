import accounts from "./data.js";

// transaction function
const makeTransaction = (allAccounts, userAccountNumber) => {
    if (allAccounts, userAccountNumber) {

        const transactionsDashboard = document.querySelector(".dashboard__transactions");
        const H2 = document.createElement('h2')
        const moneyMovements = document.createElement('div')
 
        H2.className = 'transaction__title'
        H2.innerText = 'Transactions'

        moneyMovements.className = 'money__movements'

        // find user
        const userAccount = allAccounts.find(acc => acc.accountNumber === userAccountNumber);
        const moneyMovementsList = userAccount.moneyMovements

        moneyMovementsList.forEach(movement => {
            const movementDiv = document.createElement('div')
            const movementType =  document.createElement('div')
            const movementAmount =  document.createElement('div')

            movementDiv.className = 'movement__div'
            movementType.className = 'movement__type'
            movementAmount.className = 'movement__amount'
            if (movement < 0) {
                movementType.classList.add('withdraw')
                movementType.innerText = 'Withdraw'
                movementAmount.innerText = movement
            } else {
                movementType.classList.add('deposit')
                movementType.innerText = 'Deposit'
                movementAmount.innerText = movement
            }
            movementDiv.append(movementType, movementAmount)

            moneyMovements.append(movementDiv)
        });
        transactionsDashboard.append(H2, moneyMovements)
    }
}
makeTransaction(accounts, accounts[1].accountNumber)
