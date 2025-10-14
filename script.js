'use strict'

const balance = document.querySelector('.dashboard__balance');
const welcome = document.querySelector('.dashboard__welcome');
const accountNumber = document.querySelector('.dashboard__account-number');
const form = document.querySelector('.hero__form');
const username = document.getElementById('input__username');
const pin = document.getElementById('input__pin');

function login(e) {
    e.preventDefault();

    const userName = String(username.value);
    const pinValue = Number(pin.value)
    const account = accounts.find((acc) => acc.owner === userName && acc.pin === pinValue)

    if (!account) {
    welcome.textContent = 'Account not found';
    balance.textContent = '';
    accountNumber.textContent = '';
    return;
    }
    
    //account balance 
    let balanceValue = account.moneyMovements.reduce((sum, movement) => 
    sum + movement, 0);
    balance.textContent = Number(balanceValue);

    const firstName = username.value.split(" ")[0];
    welcome.textContent = `Welcome ${firstName}`;
    accountNumber.textContent = `Naira Account: ${account.accountNumber}`;


    //interest
    let interest;
    if (balanceValue > 50000) interest = 0;
    else if (balanceValue >= 50000 && balanceValue < 75000 ) interest = 0.5;
    else if (balanceValue >= 75000 && balanceValue < 100000) interest = 1;
    else if (balanceValue >= 200000) {interest = 2}

    let int = (interest * balanceValue) / 100;   
    
}

form.addEventListener('submit', login);
