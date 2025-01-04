
export const getProductAmount = (rate, amount) => {
    if (isNaN(rate) || isNaN(amount)) return 0;
    if (!(typeof rate === 'number' || typeof amount === 'number')) return 0;
    return parseFloat(rate * amount).toFixed(1);
    // return rate * amount;
};

export const getCurrencySymbol = cStr => {
    const strArr = cStr.split(' ')
    if (strArr.length > 1) return strArr.pop().slice(1, -1);
    return strArr[0];
}

export const getCurrencyLabel = cStr => cStr.split(' ')[0];

export const getSubtotal = items => {
    let subtotal = 0;
    items.forEach(item => {
        subtotal += parseFloat(item.amount);
    });
    return parseFloat(subtotal).toFixed(1);
}

export const getTotal = (subtotal, tax, discount, shipping = 0) => {
    let _tax = parseFloat(tax.value || 0);
    let _discount = parseFloat(discount.value || 0);

    if (tax.percentageMode)
        _tax = (parseFloat(tax.value) / 100) * subtotal;
    if (discount.percentageMode)
        _discount = (parseFloat(discount.value) / 100) * subtotal;

    return (parseFloat(subtotal) + _tax + parseFloat(shipping)) - _discount;
}
