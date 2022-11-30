import { endpoint } from "./constant.js"
export async function getUnits() {
    const options = {
        method: "GET",
    }
    const url = `${endpoint}/unit/GetUnits`
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
    const params = {
        UnitName: name
    }
    const url = `${endpoint}/unit/AddUnit`
    options.body = JSON.stringify(params)
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
    const params = {
        Uid: id,
        UnitName: name
    }
    options.body = JSON.stringify(params)
    const url = `${endpoint}/unit/UpdateUnit`
    const response = await fetch(url, options)
    .then(res => res.json())
    return response
}

export async function removeUnit(id) {
    const options = {
        method: "DELETE"
    }
    const url = `${endpoint}/unit/RemoveUnitById/${id}`
    const response = await fetch(url, options)
    .then(res => res.json())
    return response
}

export async function getUnitById(id) {
    const options = {
        method: "GET"
    }
    const params = {
        id: id,
    }
    const queryString = ( new URLSearchParams( params ) ).toString()
    const url = `${endpoint}/unit/GetUnitById?${queryString}`
    const response = await fetch(url, options)
    .then(res => res.json())
    return response
}