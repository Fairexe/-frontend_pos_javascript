export async function getProducts() {
    let options = {
        method: "GET",
    }
    var url = "http://localhost:5154/product/GetProducts"
    const response = await fetch(url, options)
    .then(res => res.json())
    return response
}

export async function RemoveProduct(id) {
    let options = {
        method: "DELETE",
    }
    var url = "http://localhost:5154/product/RemoveProduct/" + id
    const response = await fetch(url, options)
    .then(res => res.json())
    return response
}

export async function addProduct(code, name, price, unitId) {
    let options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let params = {
        ProductCode: code,
        ProductName: name,
        ProductPrice: price,
        UnitId: unitId,
    }
    options.body = JSON.stringify(params)
    var url = "http://localhost:5154/product/AddProduct"
    const response = await fetch(url, options)
    .then(res => res.json())
    return response
}

export async function updateProduct(id, code, name, price, unitId) {
    let options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let params = {
        Pid: id,
        ProductCode: code,
        ProductName: name,
        ProductPrice: price,
        UnitId: unitId,
    }
    options.body = JSON.stringify(params)
    var url = "http://localhost:5154/product/updateProduct"
    // url += '?' + ( new URLSearchParams( params ) ).toString()
    const response = await fetch(url, options)
    .then(res => res.json())
    return response
}