const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')

const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

const conteiner = document.querySelector('.container')
const height = conteiner.clientHeight

const slides = document.querySelectorAll('.slide')
let slider = []

let activeSlideIndex = 0
let createSlideIndex = 1

function initSlider() {
    for (let i = 0; i < slides.length; i++) {
        slider[i] = slides[i].style.backgroundImage
        slides[i].remove()
    }
    
    createSlide(slider.length - 1)
    createSlide(0)
    createSlide(1)
    
    mainSlide.style.top = `-${height}px`
}

initSlider()

function createSlide(index) {
    const slide = document.createElement('div')
    slide.classList.add('slide')
    slide.style.backgroundImage = slider[index]
    mainSlide.append(slide)
}

function removeSlide() {
    const sl = document.querySelectorAll('.slide')
    sl[0].remove()
    mainSlide.style.transform = `translateY(${activeSlideIndex*height}px)`
}

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {
    if (direction === "up") {
        activeSlideIndex++
        mainSlide.style.transform = `translateY(-${activeSlideIndex*height}px)`
        createSlideIndex++
        if (createSlideIndex > slider.length - 1) {
            createSlideIndex = 0
        } 
        createSlide(createSlideIndex)
    }
}