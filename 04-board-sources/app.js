const board = document.querySelector('#board')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#ffff00', '#ff6bcd', '#0033cc']
const capcha = [52, 53, 54, 55, 80, 105, 130, 129, 128, 127, 155, 180, 205, 204, 203, 
    202, 183, 208, 233, 258, 283, 308, 333, 37, 38, 39, 40, 41, 65, 66, 90, 89, 114,
    113, 138, 137, 162, 167, 192, 217, 242, 267, 268, 269, 270, 245, 220, 295, 320, 345]
const capchaAnswer = '3174'

const SQUARES_NUMBER = 400

const cBtn = document.querySelector('.btn')
const cInp = document.querySelector('.inp')

cBtn.addEventListener('click', () => {
    if (cInp.value === capchaAnswer) {
        alert("Ok)")
    } else {
        alert("Not Ok(")
    }
})

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.indexColor = i

    square.addEventListener('mouseover', () => {
        if (!capcha.includes(square.indexColor)) {
            setColor(square)
        }
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}