const sildes = document.querySelectorAll(".slide")
var counter = 0;
console.log(sildes)
sildes.forEach(
    (slide,index) =>{
     slide.style.left = ` ${index * 100}% `
    }
)
const goPrev = () => {
    counter--
    slideImage()
    
}

const goNext = () => {
    counter++
    slideImage()
    
}

const slideImage = () =>{
    sildes.forEach(
        (slide) => {
            slide.style.transform =`translateX(-${counter * 100}%)`
        }
    )
}