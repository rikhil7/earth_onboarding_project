var bodyvar = document.body

var consumptionVar = document.getElementById("consumption")

var climateVar = document.getElementById("climate")

var resourcesVar = document.getElementById("resources")

var peopleVar = document.getElementById("people")

console.log(peopleVar);
console.log(resourcesVar);
console.log(climateVar);
console.log(consumptionVar);

var saveText = document.getElementById("save")

var frame = document.getElementById("frame")

consumptionVar.onclick=()=>{
    bodyvar.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png	')"
    bodyvar.style.backgroundSize="100% 100%"
    frame.src="https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    saveText.innerHTML="Do your bit! Shop only what you need,eat only what you need and always save the leftovers."
    consumptionVar.style.background="#37C658"
    climateVar.style.background="transparent"
    resourcesVar.style.background="transparent"
    peopleVar.style.background="transparent"
}

climateVar.onclick=()=>{
    bodyvar.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize="100% 100%"
    saveText.innerHTML="Do your bit! Save trees, use renewable energy sources and prefer to travel green"
    climateVar.style.background="#3B83C8"
    consumptionVar.style.background="transparent"
    resourcesVar.style.background="transparent"
    peopleVar.style.background="transparent"
    frame.src= "https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
}

resourcesVar.onclick=()=>{
    bodyvar.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize="100% 100%"
    saveText.innerHTML="Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle"
    resourcesVar.style.background="#E89F51"
    climateVar.style.background="transparent"
    consumptionVar.style.background="transparent"
    peopleVar.style.background="transparent"
    frame.src= "https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
}

peopleVar.onclick=()=>{
    bodyvar.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize="100% 100%"
    saveText.innerHTML="Do your bit! Never waste  food.Rather offer it to people or animals who are in need."
    peopleVar.style.background="#D94854"
    climateVar.style.background="transparent"
    resourcesVar.style.background="transparent"
    resourcesVar.style.background="transparent"
    frame.src= "https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
}