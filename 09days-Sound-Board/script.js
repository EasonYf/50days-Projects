const sounds = ['applause','boo','gasp','tada','victory','wrong']

sounds.forEach(item => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerHTML = item
    btn.addEventListener('click',()=>{
        stopSong()
        document.getElementById(item).play();
    })
    const btns = document.querySelector('.btns')
    btns.appendChild(btn)
})

function stopSong(){
    sounds.forEach(item => {
        const sound = document.getElementById(item)
        sound.pause()
        sound.currenTime = 0
    })
}