const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
            clearActiveClasses()
            slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    });
}

const Rarrows = document.getElementsByClassName('arrow-right')
for (const arrow of Rarrows) {
    arrow.addEventListener('click', () => {
        if (arrow.parentElement.classList.contains('active')) {
            event.stopPropagation()
            clearActiveClasses()
            arrow.parentElement.nextElementSibling.classList.add('active')
        }
    })
}

const Larrows = document.getElementsByClassName('arrow-left')
for (const arrow of Larrows) {
    arrow.addEventListener('click', () => {
        if (arrow.parentElement.classList.contains('active')) {
            event.stopPropagation()
            clearActiveClasses()
            arrow.parentElement.previousElementSibling.classList.add('active')
        }
    })
}



