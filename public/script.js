const form = document.querySelector("#form")
const inputCode = document.querySelector("#input-code")
const inputName = document.querySelector("#input-name")
const inputDate = document.querySelector("#date")
const ul = document.querySelector("ul")
const list = document.querySelector("li")

async function load(){
   const res = await fetch("http://localhost:3000/").then((data) => data.json())
   
   res.produtos.map(({codigo, nome, date}) => addProduto({codigo, nome, date}))
}

load()

//add produto
function addProduto({ codigo, nome, date }) {
    const li = document.createElement("li")
    const trashX = document.createElement("span")
    const pText = document.createElement("p")
    const pCode = document.createElement("p")
    const pDate = document.createElement("p")
    trashX.innerHTML = "&#10006;"
    trashX.onclick = () => removeProduto(trashX)

    pCode.append(codigo)
    pText.append(nome)
    pDate.append(date)
    li.append(pCode)
    li.append(pText)
    li.append(pDate)
    li.append(trashX)
    ul.appendChild(li)

}

//remove produto
function removeProduto(el){
    if(confirm("Deseja remover?")){
        el.parentNode.remove()

        const code = el.parentNode.childNodes[0].innerHTML
        const name = el.parentNode.childNodes[1].innerHTML
        const dataven = el.parentNode.childNodes[2].innerHTML
        console.log(dataven)

        res = fetch("http://localhost:3000/?codigo=" + code + "&nome=" + name + "&data=" + dataven + "&del=1")
    }
}

//check submit
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const codigo = inputCode.value
    const nome = inputName.value
    const date = inputDate.value

    if(codigo === '' || isNaN(codigo) || nome === '' || date == '')
        alert("Preencha todos os campos")
        else{
        addProduto({codigo, nome, date})
        res = fetch("http://localhost:3000/?codigo=" + codigo + "&nome=" + nome + "&data=" + date)
        inputCode.value = ''
        inputName.value = ''
        inputDate.value = ''
        inputCode.focus()
        inputCode.select()
        }
})