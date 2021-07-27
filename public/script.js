const form = document.querySelector("#form")
const inputCode = document.querySelector("#input-code")
const inputName = document.querySelector("#input-name")
const inputDate = document.querySelector("#date")
const ul = document.querySelector("ul")
const list = document.querySelector("li")

//add produto
function addProduto() {
    const li = document.createElement("li")
    const trashX = document.createElement("span")
    const pText = document.createElement("p")
    const pCode = document.createElement("p")
    const code = document.createTextNode(inputCode.value)
    const text = document.createTextNode(inputName.value)
    trashX.innerHTML = "&#10006;"
    trashX.onclick = () => removeProduto(trashX)

    pCode.append(code)
    pText.append(text)
    li.append(pCode)
    li.append(pText)
    li.append(trashX)
    ul.appendChild(li)

}

//remove produto
function removeProduto(el){
    if(confirm("Deseja remover?")){
        el.parentNode.remove()
    }
}

//check submit
form.addEventListener("submit", function(event){
    event.preventDefault();

    if(inputCode.value === '' || isNaN(inputCode.value) || inputName.value === '' || inputDate.value == '')
        alert("Preencha todos os campos")
        else
        addProduto()

})