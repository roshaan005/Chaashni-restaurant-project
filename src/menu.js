import { homePageContents } from "./home";
import entree from "./images/entree.jpg"
import sweets from "./images/sweets.jpg"
import drinks from "./images/drinks.jpg"

const menu = (function(){
    const content = document.getElementById("content")
    const menuPage = document.createElement("div")
    const menuBox = document.createElement("div")
    const menutxt = document.createElement("div")
    const menutxtmeta = document.createElement("p")
    const lbr = document.createElement("br")
    const mainmenu = document.createElement("div")
    const firstOption = document.createElement("div")
    const secondOption = document.createElement("div")
    const thirdOption = document.createElement("div")
    const firstCard = document.createElement("div")
    const secondCard = document.createElement("div")
    const thirdCard = document.createElement("div")
    const entreePic = new Image()
    const entreelbr = document.createElement("br")
    const entreeTxt = document.createElement("div")
    entreePic.src = entree
    const drinksPic = new Image()
    drinksPic.src = drinks 
    const sweetsPic = new Image()
    sweetsPic.src = sweets
    const sweetslbr = document.createElement("br")
    const drinklbr = document.createElement("br")
    const sweetsTxt = document.createElement("div")
    const drinksTxt = document.createElement("div")
     
    sweetsTxt.classList.add("desserts")
    drinksTxt.classList.add("drinks")
    sweetsPic.classList.add("im1")
    drinksPic.classList.add("im1")
    mainmenu.classList.add("mainmenu")
    entreeTxt.classList.add("entree")
    entreePic.classList.add("im1")
    firstCard.classList.add("card1")
    secondCard.classList.add("card2")
    thirdCard.classList.add("card3")
    firstOption.classList.add("op1")
    secondOption.classList.add("op1")
    thirdOption.classList.add("op1")
    menutxtmeta.classList.add("tagline")
    menutxt.classList.add("menu")
    menuBox.classList.add("block1")
    sweetsTxt.textContent= "Desserts"
    drinksTxt.textContent= "bevrages"
    entreeTxt.textContent = "entree"
    menutxt.textContent =  "Menu"
    menutxtmeta.textContent = "a wide range to choose from"

    const loadMenuPage = function(){
        homePageContents.homeContent.classList.remove("home")
        thirdCard.appendChild(sweetsPic)
        thirdCard.appendChild(sweetslbr)
        thirdCard.appendChild(sweetsTxt)
        secondCard.appendChild(entreePic)
        secondCard.appendChild(entreelbr)
        secondCard.appendChild(entreeTxt)
        firstCard.appendChild(drinksPic)
        firstCard.appendChild(drinklbr)
        firstCard.appendChild(drinksTxt)
        firstOption.appendChild(firstCard)
        secondOption.appendChild(secondCard)
        thirdOption.appendChild(thirdCard)
        mainmenu.appendChild(firstOption)
        mainmenu.appendChild(secondOption)
        mainmenu.appendChild(thirdOption)
        menuBox.appendChild(menutxt)
        menuBox.appendChild(menutxtmeta)
        homePageContents.homeContent.appendChild(menuBox)
        content.appendChild(homePageContents.homeContent)
        homePageContents.homeContent.appendChild(lbr)
        homePageContents.homeContent.appendChild(mainmenu)


    }
   
    return { loadMenuPage}
})()

export {menu}