export async function addReceipt( fullTotal, discountTotal, subTotal, tradeDiscount, grandTotal, receiptDetail) {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }
    let data = {
        FullTotal: fullTotal,
        DiscountTotal: discountTotal,
        SubTotal: subTotal,
        TradeDiscount: tradeDiscount,
        GrandTotal: grandTotal,
        ReceiptDetail: receiptDetail
    }
    options.body = JSON.stringify(data)
    var url = "http://localhost:5154/receipt/AddReceipt"
    const response = await fetch(url, options)
        .then(res => res.json())
    return response
}

export async function getReceipts() {
    let options = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }
    var url = "http://localhost:5154/receipt/GetReceipts"
    const response = await fetch(url, options)
    .then(res => res.json())
    return response
}