import mainImg from "./main.jpg"



const homePageContents = (function(){
    const content = document.getElementById("content")
    const imageConatiner = document.createElement("div")
    const homeContent = document.createElement("div")
    const maindec = document.createElement("div")
    const mainBox = document.createElement("div")
    const mainText = document.createElement("div")
    const linebr = document.createElement("br")
    const para = document.createElement("p")
    const line = document.createElement("div")
    const linebr2 = document.createElement("br")
    const linebr3 = document.createElement("br")
    const explorebtn = document.createElement("div")
    const exploretxt = document.createElement("h1")
    const img = new Image()
    img.src = mainImg

    img.classList.add("fud")
    imageConatiner.classList.add("image")
    homeContent.classList.add("home")
    explorebtn.classList.add("explore")
    exploretxt.classList.add("exp")
    para.classList.add("para")
    maindec.classList.add("maindec")
    mainBox.classList.add("first")
    mainText.classList.add("ser")
    line.classList.add("line")
    mainText.textContent = "Chaashni"
    para.textContent = "where it feels like home"
    exploretxt.textContent = "Explore"

    const loadHomepage = function(){
        mainBox.appendChild(mainText)
        mainBox.appendChild(linebr)
        mainBox.appendChild(para)
        mainBox.appendChild(line)
        maindec.appendChild(mainBox)
        homeContent.appendChild(maindec)
        mainBox.appendChild(mainText)
        explorebtn.appendChild(exploretxt)
        maindec.appendChild(linebr2)
        maindec.appendChild(linebr3)
        maindec.appendChild(explorebtn)
        homeContent.appendChild(imageConatiner)
        imageConatiner.appendChild(img)
        content.appendChild(homeContent)

    }
    return {loadHomepage,homeContent}



})()

export {homePageContents}