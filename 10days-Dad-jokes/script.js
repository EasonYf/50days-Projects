const jokes = document.querySelector('.joke')
const btn = document.querySelector('.btn')

btn.addEventListener('click', getJoke)

getJoke()
async function getJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    const result = await fetch('https://icanhazdadjoke.com',config);
    const data = await result.json()

    jokes.innerHTML = data.joke
}