const colors = ['aqua','green','red','blue','yellow','pink','orange','aquamarine','burlywood','steelblue','fuchsia']

//Elements
const btn = document.getElementById('color-picker-btn')
const color = document.getElementsByClassName('color')[0];
const colorName = document.querySelector('h1 span');
const nav = document.getElementsByTagName('nav')[0];
const navLinks = document.querySelectorAll('a');

btn.addEventListener('click',() => {
    const randomIndex = getRandomIndex(colors.length)
    const randomColor = colors[randomIndex]
    color.style.backgroundColor = randomColor
    nav.style.backgroundColor = randomColor
    navLinks.forEach((links) => links.style.color = '#fff')
    colorName.innerText = getColorName(randomIndex)
})

// functional implementation
const getRandomIndex = (size) => Math.floor(Math.random()*size % size)
const getColorName = (index) => colors[index]


