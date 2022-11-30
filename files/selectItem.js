const html = `
<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="editModalLabel"
        data-backdrop="false" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">เลือกสินค้า</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">select this item</button>
                </div>
            </div>
        </div>
    </div>
`

export function createSelectItemModal(element, products){
    element.innerHTML=html
    
    let selectedProduct = -1
    const lis = []
    const modalBody = element.querySelector(".modal-body")
    modalBody.innerHTML = "";
    const div = document.createElement("div")
    const hr = document.createElement("hr")
    const ul = document.createElement("ul")
    for (let i = 0; i < products.length; i++) {
        const index = i
        const li = document.createElement("li")
        li.innerText = products[i].productName
        li.addEventListener("click", () => selectProduct(index))
        ul.appendChild(li)
        lis.push(li)
        modalBody.appendChild(ul)
    }
    modalBody.appendChild(hr)
    div.classList.add("detail")
    modalBody.appendChild(div)

    element.querySelector('.btn-primary').addEventListener('click', () => {
        if (selectedProduct >= 0) {
            element.dispatchEvent(new CustomEvent('select', { detail: selectedProduct }))
            $(element.querySelector('.modal')).modal('hide')
        }
    })

    
    
    function removeTextPrimary() {
        const lis = modalBody.querySelectorAll("li")
        lis.forEach(li => {
            li.classList.remove("text-primary")
        })
    }

    function selectProduct(index) {
        selectedProduct = index
        const product = products[index]
        removeTextPrimary()
        const detail = element.querySelector(".detail")
        let html = ""
        if (index >= 0) {
            const li = lis[index]
            li.classList.add("text-primary")
            html += "<h3>Item detail</h3><b>รหัสสินค้า</b><br>" + product.productCode
            html += "<br><br><b>ชื่อสินค้า</b><br>" + product.productName
            html += "<br><br><b>ราคา</b><br>" + product.productPrice
        } else {
            html = "No Item Selected"
        }
        detail.innerHTML = html
    }

    return {
        show(index){
            selectProduct(index)
            $(element.querySelector('.modal')).modal('show')
        },
        eventTarget: element
    }
}