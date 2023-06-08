function calculateTax(basicSalary, taxRate, allowance){
    const netSalary =basicSalary-(basicSalary * taxRate) + allowance ;
    return netSalary;
}

console.log(calculateTax(30000, 0.3, 2000))