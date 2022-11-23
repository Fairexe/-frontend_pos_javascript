export async function addReceipt(code, fullTotal, discountTotal, subTotal, grandTotal, receiptDetail) {
    let options = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }
    let data = {
        ReceiptCode: code,
        FullTotal: fullTotal,
        DiscountTotal: discountTotal,
        SubTotal: subTotal,
        GrandTotal: grandTotal,
        ReceiptDetail: receiptDetail
    }
    options.body = JSON.stringify(data)
    var url = "http://localhost:5154/receipt/AddReceipt"
    const response = await fetch(url, options)
        .then(res => res.json())
    return response
}