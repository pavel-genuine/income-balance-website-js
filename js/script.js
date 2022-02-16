
function balanceAmount(id, firstAmount, secondAmount) {

    document.getElementById(id).innerText = parseFloat(firstAmount) - parseFloat(secondAmount)

}

document.getElementById('calc-btn').addEventListener('click', function () {


    const foodValue = document.getElementById('food').value
    const rentValue = document.getElementById('rent').value
    const clothValue = document.getElementById('cloth').value

    const totalExpense = document.getElementById('total-expense').innerText = parseFloat(foodValue) + parseFloat(rentValue) + parseFloat(clothValue)

    const income = document.getElementById('income').value

    if (income > totalExpense) {

        // document.getElementById('balance').innerText = parseFloat(income) - parseFloat(totalExpense)
        balanceAmount('balance', income, totalExpense)
    }
    else {

        document.getElementById('balance').innerText = 'expense is higher!'
    }
})

document.getElementById('save-btn').addEventListener('click', function () {

    const income = document.getElementById('income').value
    const savePercentage = document.getElementById('save-percentage').value
    const savingAmount = document.getElementById('saving-amount').innerText = parseFloat(income) * parseFloat(savePercentage) / 100


    const balance = document.getElementById('balance').innerText

    // document.getElementById('remain-balance').innerText = parseFloat(balance) - parseFloat(savingAmount)

    balanceAmount('remain-balance', balance, savingAmount)



})