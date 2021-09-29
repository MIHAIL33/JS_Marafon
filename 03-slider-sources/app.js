const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')

const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

const conteiner = document.querySelector('.container')
const sides = document.querySelectorAll('.side')

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount-1)*100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        changeSlide('up')
    } else if (event.key ==='ArrowDown') {
        changeSlide('down')
    }
})

function clearActive() {
    sides.forEach((side) => {
        side.classList.remove('active')
    })
}

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
         if (activeSlideIndex === slidesCount) {
             activeSlideIndex = 0
         }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1 
        }
    }

    const height = conteiner.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex*height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex*height}px)`
    console.log(activeSlideIndex)
    clearActive()
    sides[sides.length - 1 - activeSlideIndex].classList.add('active')
}