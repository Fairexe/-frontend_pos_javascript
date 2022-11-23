export async function getUnits() {
    let options = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }
    var url = "http://localhost:5154/unit/GetUnits"
    const response = await fetch(url, options)
    .then(res => res.json())
    return response
}

export async function addUnit(name) {
    let options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let params = {
        name: name
    }
    var url = "http://localhost:5154/unit/AddUnit"
    url += '?' + ( new URLSearchParams( params ) ).toString()
    const response = await fetch(url, options)
    .then(res => res.json())
    return response
}

export async function updateUnit(id,name) {
    let options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let params = {
        id: id,
        name: name
    }
    var url = "http://localhost:5154/unit/UpdateUnit"
    url += '?' + ( new URLSearchParams( params ) ).toString()
    const response = await fetch(url, options)
    .then(res => res.json())
    return response
}

export async function removeUnit(id) {
    let options = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let params = {
        id: id
    }
    var url = "http://localhost:5154/unit/RemoveUnitById"
    url += '?' + ( new URLSearchParams( params ) ).toString()
    const response = await fetch(url, options)
    .then(res => res.json())
}

export async function getUnitById(id) {
    let options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let params = {
        id: id,
    }
    var url = "http://localhost:5154/unit/GetUnitById"
    url += '?' + ( new URLSearchParams( params ) ).toString()
    const response = await fetch(url, options)
    .then(res => res.json())
    return response
}