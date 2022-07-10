const taxCal = (income) => {
    let tax;
    let taxableIncome;
    if(income <= 250000){
        tax = 0;
    }
    else if (income > 250000 && income <= 500000){
        taxableIncome = income - 250000;
        tax = (taxableIncome * 10)/100;
    }
    else if (income > 500000 && income <= 1000000){
        taxableIncome = income - 500000;
        tax = 25000 + (taxableIncome * 20)/100;
    }
    else if (income > 1000000){
        taxableIncome = income - 1000000;
        tax = 25000 + 100000 + (taxableIncome * 30)/100;
    }
    return tax;
}

module.exports = taxCal;
