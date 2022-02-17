
// common function for balanceAmount 
function balanceAmount(id, firstAmount, secondAmount) {

    const balance = document.getElementById(id).innerText = parseFloat(firstAmount) - parseFloat(secondAmount)
    return balance
}


// function for expense calculation 
function expense() {

    const foodValue = document.getElementById('food').value
    const rentValue = document.getElementById('rent').value
    const clothValue = document.getElementById('cloth').value

    if (foodValue >= 0 && rentValue >= 0 && clothValue >= 0) {

        const totalExpense = document.getElementById('total-expense').innerText = parseFloat(foodValue) + parseFloat(rentValue) + parseFloat(clothValue)

        return totalExpense;
    }

    else {

        const totalExpense = document.getElementById('total-expense').innerText = '❌ invalid input!'
        return totalExpense;
    }
}

// function for balance calculation
function balance() {

    const income = document.getElementById('income').value

    const totalExpense = expense()

    if (income > totalExpense && income > 0) {

        // calling balanceAmount() function - 1st time
        const balance = balanceAmount('balance', income, totalExpense)
        return balance
    }
    else {

        const balance = document.getElementById('balance').innerText = '❌ imbalanced!'
        return balance
    }
}

// calc-btn eventListener 
document.getElementById('calc-btn').addEventListener('click', function () {

    // calling expense() function
    document.getElementById('total-expense').innerText = expense()

    // calling balance() function - 1st time
    document.getElementById('balance').innerText = balance()

})

// save-btn eventListener 
document.getElementById('save-btn').addEventListener('click', function () {

    const income = document.getElementById('income').value
    const savePercentage = document.getElementById('save-percentage').value

    // calling balance() function -2nd time
    const balanceValue = document.getElementById('balance').innerText = balance()

    if (savePercentage >= 0 && savePercentage < 100) {

        const savingAmount = document.getElementById('saving-amount').innerText = parseFloat(income) * parseFloat(savePercentage) / 100

        if (savingAmount < balanceValue) {

            // calling balanceAmount() function - 2nd time
            balanceAmount('remain-balance', balanceValue, savingAmount)

        } else {

            document.getElementById('remain-balance').innerText = '❌ inappropriate'


        }

    }
    else {
        document.getElementById('saving-amount').innerText = 'error❌!'
        document.getElementById('remain-balance').innerText = '❌ inappropriate'
    }
})