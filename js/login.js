//Input Fields
const email = document.getElementById("email")
const password = document.getElementById("password")

const btnSubmit = document.getElementById("submit") //Submit Button
const dataInfo = document.getElementById("data-info") //Div Element To Display Output

let data 

btnSubmit.addEventListener("click", (event) => {
    event.preventDefault()

    document.getElementsByTagName("header")[0].style.display = "none"
    document.getElementsByClassName("container")[0].style.display = "none"

    data = "Email : " + email.value 
    let p1Node = document.createElement("p")
    let textNode1 = document.createTextNode(data)
    p1Node.appendChild(textNode1)

    data = "Password : " + password.value 
    let p2Node = document.createElement("p")
    let textNode2 = document.createTextNode(data) 
    p2Node.appendChild(textNode2)

    let link = document.createElement("a")
    let linkText = document.createTextNode("Home")
    link.setAttribute("href", "index.html")
    link.style.color = "blue"
    link.appendChild(linkText)

    document.body.insertBefore(p1Node, dataInfo)
    document.body.insertBefore(p2Node, dataInfo)
    document.body.insertBefore(link, dataInfo)        
})