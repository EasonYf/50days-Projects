const container = document.querySelector('.container')

fetch('data.json').then(response => {
    return response.json();
}).then(data => {
    console.log(data);


    const projects = data.projects
    projects.forEach(item => {
        const div = document.createElement('div')
        div.classList.add('days')

        div.innerHTML = `
        <div><img src="${item.projectImage}" class="imageClass">
        <div>
        <p>Expanding-Cards</p>
        <a href="${item.projectUrl}">点击前往</a>
        </div></div>
        `
        console.log(1);
        container.appendChild(div)
    });
    console.log(projects);
}).catch(err => {
    return err;
});