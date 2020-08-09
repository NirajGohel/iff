//Input Fields
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirm_password = document.getElementById("confirm_password")
const club = document.getElementById("club")

const btnSubmit = document.getElementById("submit") //Submit Button
const dataInfo = document.getElementById("data-info") //Div Element To Display Output

let data 

btnSubmit.addEventListener("click", (event) => {
    event.preventDefault()

    if(password.value === confirm_password.value){
        document.getElementsByTagName("header")[0].style.display = "none"
        document.getElementsByClassName("container")[0].style.display = "none"

        data = "Username : " + username.value 
        let p1Node = document.createElement("p")
        let textNode1 = document.createTextNode(data)
        p1Node.appendChild(textNode1)

        data = "Email : " + email.value 
        let p2Node = document.createElement("p")
        let textNode2 = document.createTextNode(data) 
        p2Node.appendChild(textNode2)
        
        data = "Password : " + password.value 
        let p3Node = document.createElement("p")
        let textNode3 = document.createTextNode(data) 
        p3Node.appendChild(textNode3)

        data = "Confirm Password : " + confirm_password.value 
        let p4Node = document.createElement("p")
        let textNode4 = document.createTextNode(data) 
        p4Node.appendChild(textNode4)

        data = "Club : " + club.value 
        let p5Node = document.createElement("p")
        let textNode5 = document.createTextNode(data) 
        p5Node.appendChild(textNode5)

        let link = document.createElement("a")
        let linkText = document.createTextNode("Home")
        link.setAttribute("href", "index.html")
        link.style.color = "blue"
        link.appendChild(linkText)

        document.body.insertBefore(p1Node, dataInfo)
        document.body.insertBefore(p2Node, dataInfo)
        document.body.insertBefore(p3Node, dataInfo)
        document.body.insertBefore(p4Node, dataInfo)
        document.body.insertBefore(p5Node, dataInfo)
        document.body.insertBefore(link, dataInfo)
    }
    else{
        alert("Password And Confirm Password Must Be Same!!")
    }
})
