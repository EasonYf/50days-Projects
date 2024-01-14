addEventListener('load',()=>{
    const toggles = document.querySelectorAll('.fag_toggle')
    console.log(toggles);
    toggles.forEach((item)=>{
       item.addEventListener('click',()=>{
        item.parentNode.classList.toggle('active')
       })
    })
})