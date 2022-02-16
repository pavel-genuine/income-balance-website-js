


document.getElementById('calc-btn').addEventListener('click', function () {


    const foodValue = document.getElementById('food').value
    const rentValue = document.getElementById('rent').value
    const clothValue = document.getElementById('cloth').value

    const totalExpense = document.getElementById('total-expense').innerText = parseFloat(foodValue) + parseFloat(rentValue) + parseFloat(clothValue)

    const income = document.getElementById('income').value

    if (income > totalExpense) {

        document.getElementById('balance').innerText = parseFloat(income) - parseFloat(totalExpense)
    }

    else {

        document.getElementById('balance').innerText = 'expense is higher!'
    }




})




// function expnse(food, rent, cloth) {

//     const foodValue = document.getElementById('food').value = food
//     const rentValue = document.getElementById('rent').value = rent
//     const clothValue = document.getElementById('cloth').value = cloth

//     document.getElementById('total-expense').innerText = parseFloat(foodValue) + parseFloat(rentValue) + parseFloat(clothValue)


// }