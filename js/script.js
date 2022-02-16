
function balanceAmount(id, firstAmount, secondAmount) {

    document.getElementById(id).innerText = parseFloat(firstAmount) - parseFloat(secondAmount)

}

document.getElementById('calc-btn').addEventListener('click', function () {


    const foodValue = parseFloat(document.getElementById('food').value)
    const rentValue = parseFloat(document.getElementById('rent').value)
    const clothValue = parseFloat(document.getElementById('cloth').value)

    // if (typeof foodValue != 'number' && typeof rentValue != 'number' && typeof clothValue != 'number') {

    //     document.getElementById('total-expense').innerText = 'please enter number!'


    // }

    // else {

    const totalExpense = document.getElementById('total-expense').innerText = foodValue + rentValue + clothValue

    // }



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

    if (savePercentage >= 0) {
        const savingAmount = document.getElementById('saving-amount').innerText = parseFloat(income) * parseFloat(savePercentage) / 100

    }
    // else {

    // }



    const balance = document.getElementById('balance').innerText

    // document.getElementById('remain-balance').innerText = parseFloat(balance) - parseFloat(savingAmount)

    if (balance > savingAmount) {
        balanceAmount('remain-balance', balance, savingAmount)

    }
    else {

        document.getElementById('remain-balance').innerTex = 'Saving is higher than Balance!'

    }
})