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