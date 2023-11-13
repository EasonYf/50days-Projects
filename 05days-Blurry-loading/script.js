const bg = document.querySelector('.bg')
const bg_text = document.querySelector('.bg-text')
let index = 0

const time = setInterval(bluring,30)

function bluring()
{
    index++
    if(index > 99)
    {
        clearInterval(time)
    }
    bg_text.innerHTML = `${index}%`
    bg.style.filter = `blur(${scle(index,0,100,30,0)}px)`
    bg_text.style.opacity = `${scle(index,0,100,1,0)}`
}

function scle(num,in_min,in_max,out_min,out_max){
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}