
function balanceAmount(id, firstAmount, secondAmount) {

    const balance = document.getElementById(id).innerText = parseFloat(firstAmount) - parseFloat(secondAmount)
    return balance
}


document.getElementById('calc-btn').addEventListener('click', function () {

    document.getElementById('total-expense').innerText = expense()
    document.getElementById('balance').innerText = balance()

})

function expense() {

    const foodValue = document.getElementById('food').value
    const rentValue = document.getElementById('rent').value
    const clothValue = document.getElementById('cloth').value

    if (foodValue >= 0 && rentValue >= 0 && clothValue >= 0) {

        const totalExpense = document.getElementById('total-expense').innerText = parseFloat(foodValue) + parseFloat(rentValue) + parseFloat(clothValue)

        return totalExpense;

    }

    else {

        const totalExpense = document.getElementById('total-expense').innerText = 'please enter valid input!'
        return totalExpense;
    }
}

function balance() {

    const income = document.getElementById('income').value

    const totalExpense = expense()

    if (income > totalExpense) {

        const balance = balanceAmount('balance', income, totalExpense)
        return balance
    }
    else {

        const balance = document.getElementById('balance').innerText = 'expense is higher!'
        return balance
    }
}

document.getElementById('save-btn').addEventListener('click', function () {

    const income = document.getElementById('income').value
    const savePercentage = document.getElementById('save-percentage').value

    const balanceValue = balance()

    if (savePercentage >= 0) {

        const savingAmount = document.getElementById('saving-amount').innerText = parseFloat(income) * parseFloat(savePercentage) / 100

        if (balanceValue >= savingAmount) {

            balanceAmount('remain-balance', balanceValue, savingAmount)

        }
        else {

            document.getElementById('remain-balance').innerTex = 'Saving is higher than Balance!'

        }
    }
    else {
        savingAmount.innerText = 'error'
    }
})