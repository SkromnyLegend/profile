const carouselInner = document.querySelector(".carousel__inner")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
let index = 0
next.addEventListener("click", ()=>{
    if(carouselInner.childElementCount - 1 <= index){
        return null
    }
    index++
    carouselInner.style.transform = `translateX(-${index * 100}%)`
})

prev.addEventListener("click", ()=>{
    if(index === 0){
        return null
    }
    index--
    carouselInner.style.transform = `translateX(-${index * 100}%)`
})