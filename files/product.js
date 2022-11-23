export async function getProducts() {
    let options = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }
    var url = "http://localhost:5154/product/GetProducts"
    const response = await fetch(url, options)
    .then(res => res.json())
    return response
}

export async function RemoveProduct(id) {
    let options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let params = {
        id: id
    }
    var url = "http://localhost:5154/product/RemoveProduct"
    url += '?' + ( new URLSearchParams( params ) ).toString()
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
        code: code,
        name: name,
        price: price,
        unitId: unitId,
    }
    var url = "http://localhost:5154/product/AddProduct"
    url += '?' + ( new URLSearchParams( params ) ).toString()
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
        id: id,
        code: code,
        name: name,
        price: price,
        unitId: unitId,
    }
    var url = "http://localhost:5154/product/updateProduct"
    url += '?' + ( new URLSearchParams( params ) ).toString()
    const response = await fetch(url, options)
    .then(res => res.json())
    return response
}