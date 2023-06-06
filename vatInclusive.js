function calculateInclusivePrice(exclusivePrice, taxRate){
    const milkPrice = exclusivePrice + (taxRate*exclusivePrice);
    return milkPrice;
}
console.log(calculateInclusivePrice(100, 0.16))


console.log(`The price of milk is Ksh. ${calculateInclusivePrice(100, 0.16)}`)