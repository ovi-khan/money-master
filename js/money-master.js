function getTotalExpense(expenseId) {
    const expenseInput =  document.getElementById(expenseId)
    const expenseString  = expenseInput.value
    expenseInput.value = ''
    const expenseValue = parseFloat(expenseString)
    // if(expenseValue < 0 ) {
    //     alert('please provid valid number')
    // }
    return expenseValue
}

document.getElementById('expense-calculate').addEventListener('click', function() {
    
    const foodExpense =  getTotalExpense('food-expense')

    
    const rentExpense = getTotalExpense('rent-expense')
    
    const clothesExpense = getTotalExpense('clothes-expense')
    
    const totalExpense = foodExpense + rentExpense + clothesExpense
    const totalExpenseValue =  document.getElementById('total-expense-value')
    totalExpenseValue.innerText = totalExpense
    const totalIncome  = getTotalExpense('total-income')
    
    if(isNaN(foodExpense) || isNaN(rentExpense) || isNaN(clothesExpense) || isNaN(totalIncome)) {
        alert('your field are not defiend')
    }
    const netIncome = totalIncome - totalExpense
    const netBalanceElement = document.getElementById('net-balance')
    // netBalanceElement.innerText = netIncome
    if(netIncome < totalExpense) {
        alert('your income is too low!!')
    } else {
        
        netBalanceElement.innerText = netIncome
    }
    
    



    document.getElementById('saving-btn').addEventListener('click', function() {
        const savingInput = getTotalExpense('saving-input')
        
        const saving = savingInput * totalIncome / 100
        const savingAmountElement = document.getElementById('saving-amount')
        // savingAmountElement.innerText = saving

        const remainingBalance = netIncome - saving
        const remainingBalanceElement = document.getElementById('remaining-balance')
        remainingBalanceElement.innerText= remainingBalance
        if(isNaN(savingInput)) {
            alert('please provide a valid input for saving')
        } else {
            savingAmountElement.innerText = saving
        }



         // function validInputCheck(userInput) {
    //     if(isNaN(userInput)) {
    //         return userInput
    //     }
    // }
    // validInputCheck(foodExpense)
    })
    
    
})

