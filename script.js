// Login Area 

const loginBtn = document.getElementById('login');
const loginArea = document.getElementById('login_area');
const transaction = document.getElementById('transaction-area');

loginBtn.addEventListener('click', function () {
    loginArea.style.display = "none";
    // loginArea.remove()
    transaction.style.display = "block"
})



function updateSpanText(id,deposit){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total= currentNumber + deposit;
    document.getElementById(id).innerText = total
}




//  Deposit Area

const depositBtn = document.getElementById('addDeposit');

depositBtn.addEventListener('click', function () {
    const depositAmount = document.getElementById('depositAmount').value;
    const depositNumber = parseFloat(depositAmount);

    updateSpanText("currentDeposit", depositNumber)
    updateSpanText("currentBalance", depositNumber)
    
    document.getElementById('depositAmount').value = null

})

// Withdraw Area

const withdrawBtn = document.getElementById('withdrawBtn');

withdrawBtn.addEventListener('click', function(){
    const withdrawAmount = document.getElementById('withdrawAmount').value;
    const withdrawAmountNumber = parseFloat(withdrawAmount);

    const currentBalance = document.getElementById('currentBalance').innerText;
    const currentBalanceNumber = parseFloat(currentBalance);

    const totalBalance = currentBalanceNumber - withdrawAmountNumber;

    updateSpanText("withdraw", withdrawAmountNumber)

    document.getElementById('currentBalance').innerText = totalBalance;
    document.getElementById('withdrawAmount').value = null
})













// Deposit Condition


function checkInput(value) {
    var onTimeDepositValue = value;
    if (onTimeDepositValue < 0) {
        depositBtn.classList.add("disabled")
    }else{
        depositBtn.classList.remove("disabled")
    }
}



function checkWithdraw(value){
    var onTimeWithdraw = value;
    if(onTimeWithdraw < 0){
        withdrawBtn.classList.add("disabled")
    }else{
        withdrawBtn.classList.remove("disabled")
    }
}

