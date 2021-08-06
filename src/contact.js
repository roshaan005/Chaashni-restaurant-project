import { homePageContents } from "./home";
import Mapp from "./images/map.jpeg"

const contact = (function(){
    const mainParent = document.createElement("div")
    const firstParent = document.createElement("div")
    const secondParent = document.createElement("div")
    const Map = document.createElement("div")
    const mapPic = new Image()
    mapPic.src = Mapp
    const textBl = document.createElement("div")
    const contactBlock = document.createElement("div")
    const emailBlock = document.createElement("div")
    const noBlock = document.createElement("div")
    const heading = document.createElement("div")
    const maintxt = document.createElement("div")
    const emailtxt = document.createElement("div")
    const emailAd = document.createElement("div")
    const number = document.createElement("div")
    const no = document.createElement("div")


    firstParent.classList.add("parentCont")
    secondParent.classList.add("maincont")
    Map.classList.add("map")
    mapPic.classList.add("mapPic")
    textBl.classList.add("text")
    contactBlock.classList.add("contblock")
    heading.classList.add("mainheading")
    maintxt.classList.add("maintext")
    emailBlock.classList.add("emailblock")
    emailtxt.classList.add("emailus")
    emailAd.classList.add("email")
    noBlock.classList.add("noblock")
    number.classList.add("number")
    no.classList.add("no")


    heading.textContent = "Contact us!"
    maintxt.textContent = "too lazy to cook huh?"
    emailtxt.textContent = "Email us at:"
    emailAd.textContent = "chaashni@gmail.com"
    number.textContent = "try our toll-free fake number"
    no.textContent = "567-567-000"
    const loadContactPage = function(){
        contactBlock.appendChild(heading)
        contactBlock.appendChild(maintxt)
        emailBlock.appendChild(emailtxt)
        emailBlock.appendChild(emailAd)
        noBlock.appendChild(number)
        noBlock.appendChild(no)
        textBl.appendChild(contactBlock)
        textBl.appendChild(emailBlock)
        textBl.appendChild(noBlock)
        Map.append(mapPic)
        secondParent.appendChild(Map)
        secondParent.appendChild(textBl)
        firstParent.appendChild(secondParent)
        homePageContents.homeContent.appendChild(firstParent)
        content.appendChild(homePageContents.homeContent)



    }
  return {loadContactPage}

})()

export {contact}