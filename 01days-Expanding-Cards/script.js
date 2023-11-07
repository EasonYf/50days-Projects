let panel = document.querySelectorAll('.panel')

panel.forEach(item => {
    item.addEventListener('click',()=>{
        removeClassActive()
        item.classList.add('active')
    })
})

function removeClassActive(){
    panel.forEach(item => {
        item.classList.remove('active')
    })
}
