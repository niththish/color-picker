const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

//Elements
const btn = document.getElementById('color-picker-btn')
const color = document.getElementsByClassName('color')[0];
const colorName = document.querySelector('h1 span');
const nav = document.getElementsByTagName('nav')[0];
const navLinks = document.querySelectorAll('a');

btn.addEventListener('click',() => {
    const randomColor = `#${getRandomColor()}`
    color.style.backgroundColor = randomColor
    colorName.innerText = randomColor
    nav.style.backgroundColor = randomColor
    navLinks.forEach(link => link.style.color = '#fff')
})

//Helper functions
const randomIndex = () => Math.floor((Math.random()*15)%15)
const getRandomColor = () => {
    let color = ''
    for(let i=0;i<6;i++){
        color += hex[randomIndex()]
    }
    return color
}