let currentDragItem = ''
const add = document.querySelector('.add')
const placeholders = document.querySelectorAll('.placeholder')

for (placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

add.addEventListener('click', (event) => {
    let input = ''

    if (event.target.classList.contains('plus')) {
        input = event.target.parentElement.parentElement.querySelector('.input-text')
    } else {
        input = event.target.parentElement.querySelector('.input-text')
    }

    if (input.value !== '') {
        let newItem = createItems(input.value)
        add.parentElement.prepend(newItem)
        input.value = ''
    } else {
        alert("Input is empty!")
    }
})

function createItems(text) {
    const newItem = document.createElement('div')
    newItem.classList.add('item')
    newItem.draggable = true
    newItem.innerHTML = `${text}<div class="destroy">
                                    <div class="minus"></div>
                                </div>
                        `
    newItem.addEventListener('dragstart', dragstart)
    newItem.addEventListener('dragend', dragend)
    const destroy = newItem.querySelector('.destroy')
    destroy.addEventListener('click', destroyItem)
    return newItem
}

function destroyItem(event) {
    if (event.target.classList.contains('minus')) {
        event.target.parentElement.parentElement.remove()
    } else {
        event.target.parentElement.remove()
    }
}

function dragstart(event) {
    currentDragItem = event.target
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend(event) {
    event.target.classList.remove('hide', 'hold')
    currentDragItem = ''
}

function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add('hovered')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
}

function dragdrop(event) {
    event.target.classList.remove('hovered')
    if (event.target.classList.contains('placeholder')) {   
        event.target.prepend(currentDragItem)
    }
    if (event.target.classList.contains('item')) {
        event.target.parentElement.prepend(currentDragItem)
    }
}