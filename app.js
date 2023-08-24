var bodyvar = document.body

var consumptionvar = document.getElementById("consumption")

var climatevar = document.getElementById("climate")

var resourcesvar = document.getElementById("resources")

var peoplevar = document.getElementById("people")

console.log(consumptionvar)
console.log(climatevar)
console.log(resourcesvar)
console.log(peoplevar)

var savetext = document.getElementById("save")
var frame = document.getElementById("frame")

consumptionvar.onclick=()=>{
    bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize= "100% 100%"
    frame.src = "https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    savetext.innerHTML = "Do your bit! Shop only what you need,eat only what you need and always save the leftovers"
    consumptionvar.style.background= "#2EC455"
}

climatevar.onclick=()=>{
    bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize= "100% 100%"
    frame.src = "https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    savetext.innerHTML = "Do your bit! Save trees, use renewable energy sources and prefer to travel green"
    climatevar.style.background= "#3880FB"
}
resourcesvar.onclick=()=>{
    bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize= "100% 100%"
    frame.src = "https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    savetext.innerHTML = "Do your bit! Save trees, use renewable energy sources and prefer to travel green"
    climatevar.style.background= "#3880FB"
}