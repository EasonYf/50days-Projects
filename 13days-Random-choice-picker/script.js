const textarea = document.querySelector('#textarea')
const tags = document.querySelector('#tags')

textarea.focus()

textarea.addEventListener('keyup', (e) => {

    if (e.key === 'Enter') {
        setTimeout(() => {
            createSpan(e.target.value)
            e.target.value = ''
            randomSelect()
        }, 10)
    }
})


function createSpan(value) {
    const newArry = value.split(',').filter(tag => tag.trim() != '').map(tag => tag.trim())
    const frgment = document.createDocumentFragment()
    tags.innerHTML = ''
    newArry.forEach((item) => {
        const span = document.createElement('span')
        span.innerText = item
        span.classList.add('tag')
        frgment.appendChild(span)
    })
    tags.appendChild(frgment)
}

function randomSelect() {
    let times = 30
    const interval = setInterval(() => {
        setRandomTag()
    }, 100)

    setTimeout(() => {
        clearInterval(interval)
        const randomtag = pickRandomTag()
        if (randomtag !== undefined) randomtag.classList.add('highlight')
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function setRandomTag() {
    const randomtag = pickRandomTag()
    if (randomtag !== undefined) {
        randomtag.classList.add('highlight')
        setTimeout(() => {
            randomtag.classList.remove('highlight')
        }, 100)
    }
}