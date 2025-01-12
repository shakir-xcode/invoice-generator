
export const getProductAmount = (rate, amount) => {
    if (isNaN(rate) || isNaN(amount)) return 0;
    if (!(typeof rate === 'number' || typeof amount === 'number')) return 0;
    return parseFloat(rate * amount).toFixed(1);
    // return rate * amount;
};

export const getCurrencySymbol = cStr => cStr.split('_')[1];

export const getCurrencyLabel = cStr => cStr.split(' ')[0];

export const getSubtotal = items => items.reduce((acc, item) => {
    const sb = parseFloat(acc) + (parseFloat(item.amount)) || 0
    return sb.toFixed(2);
}, 0)


export const getTotal = (subtotal = 0, tax = 0, discount = 0, shipping = 0) => {
    const _discount = parseFloat(discount) || 0;
    const _shipping = parseFloat(shipping) || 0;
    const _subtotal = (parseFloat(subtotal) || 0) - _discount;
    let _tax = ((parseFloat(tax) || 0) * _subtotal) / 100;

    return [_tax, (_subtotal + _tax + _shipping)];
}

export const getBalanceDue = (total = 0, amountPaid = 0) => {
    const _total = parseFloat(total) || 0;
    const _amountPaid = parseFloat(amountPaid) || 0;

    return _total - _amountPaid;
}

export const formatDate = dateStr => new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
}).format(dateStr);

