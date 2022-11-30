import { endpoint } from "./constant.js"
export async function addReceipt(fullTotal, discountTotal, subTotal, tradeDiscount, grandTotal, receiptDetail) {
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
    var url = `${endpoint}/receipt/AddReceipt`
    const response = await fetch(url, options)
        .then(res => res.json())
    return response
}

export async function getReceipts() {
    let options = {
        method: "GET",
    }
    var url = `${endpoint}/receipt/GetReceipts`
    const response = await fetch(url, options)
        .then(res => res.json())
    return response
}

export async function getReceiptByDate(startDate, endDate) {
    let options = {
        method: "GET",
    }
    let params = {
        startDate: startDate,
        endDate: endDate
    }
    const queryString = (new URLSearchParams(params)).toString()
    var url = `${endpoint}/receipt/GetReceiptByDate?${queryString}`
    const response = await fetch(url, options)
        .then(res => res.json())
    return response
}

export async function getReceiptDetailById(id) {
    let options = {
        method: "GET",
    }
    let params = {
        id: id
    }
    const queryString = (new URLSearchParams(params)).toString()
    var url = `${endpoint}/receipt/GetReceiptDetailById?${queryString}`
    const response = await fetch(url, options)
        .then(res => res.json())
    return response
}

export async function getReceiptById(id) {
    let options = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let params = {
        id: id
    }
    const queryString = (new URLSearchParams(params)).toString()
    var url = `${endpoint}/receipt/GetReceiptById?${queryString}`
    const response = await fetch(url, options)
        .then(res => res.json())
    return response
}