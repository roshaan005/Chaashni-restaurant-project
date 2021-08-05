
import "./styles.css"
import { menu } from "./menu"
import { homePageContents } from "./home"



const content = document.getElementById("content")
const mainNav = document.createElement("div")
const navBar = document.createElement("div")
const navBarConatiner = document.createElement("ul")
const homeTab = document.createElement("li")
const menuTab = document.createElement("li")
const AboutTab = document.createElement("li")
const contactTab = document.createElement("li")
navBar.setAttribute("id","nav")
AboutTab.classList.add("tabs")
homeTab.classList.add("tabs")
menuTab.classList.add("tabs")
contactTab.classList.add("tabs")
navBarConatiner.classList.add("container")
mainNav.classList.add("contain")
homeTab.textContent = "Home"
AboutTab.textContent = "About"
contactTab.textContent ="Contact"
menuTab.textContent = "Menu"
navBarConatiner.appendChild(homeTab)
navBarConatiner.appendChild(menuTab)
navBarConatiner.appendChild(AboutTab)
navBarConatiner.appendChild(contactTab)
navBar.appendChild(navBarConatiner)
mainNav.appendChild(navBar)
content.appendChild(mainNav)



homePageContents.loadHomepage()
homeTab.addEventListener("click",loadHomePage1)
function loadHomePage1(){
    if(homePageContents.homeContent.classList.contains("home")){
        return
    }else{
        homePageContents.homeContent.classList.add("home")
    }
    homePageContents.homeContent.innerHTML = ""
    homePageContents.loadHomepage()
    
    

}



menuTab.addEventListener("click",function(){
    homePageContents.homeContent.innerHTML = "";
    menu.loadMenuPage()

})


