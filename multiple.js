const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

//Elements
const color1 = document.getElementById('color-1');
const color2 = document.getElementById('color-2');
const color3 = document.getElementById('color-3');
const color4 = document.getElementById('color-4');
const color5 = document.getElementById('color-5');
const color6 = document.getElementById('color-6');

const color1_h = document.querySelector('#color-1 h2');
const color2_h = document.querySelector('#color-2 h2');
const color3_h = document.querySelector('#color-3 h2');
const color4_h = document.querySelector('#color-4 h2');
const color5_h = document.querySelector('#color-5 h2');
const color6_h = document.querySelector('#color-6 h2');

const btn = document.querySelector('button');

const lock_1 = document.querySelector('#color-1 i');
const lock_2 = document.querySelector('#color-2 i');
const lock_3 = document.querySelector('#color-3 i');
const lock_4 = document.querySelector('#color-4 i');
const lock_5 = document.querySelector('#color-5 i');
const lock_6 = document.querySelector('#color-6 i');


// button eventListener
btn.addEventListener('click',()=>{
    setBackground(color1, color1_h, lock_1)
    setBackground(color2, color2_h, lock_2)
    setBackground(color3, color3_h, lock_3)
    setBackground(color4, color4_h, lock_4)
    setBackground(color5, color5_h, lock_5)
    setBackground(color6, color6_h, lock_6)
})


// lock eventListener function
const setLockEventListener = () => {
    const locks = document.querySelectorAll('i');
    locks.forEach((lock) => {
        lock.addEventListener('click', () => {
            if(lock.className === 'fas fa-lock-open') lock.className = 'fas fa-lock'
            else lock.className = 'fas fa-lock-open'
        })
    })
}

// lock eventListener
setLockEventListener()


// random index generator
const randomIndex = () => Math.floor(Math.random() * (hex.length-1) )

// random color generator
const randomColor = () => {
    let color = ''
    for(let i=0;i<6;i++){
        color += hex[randomIndex()]
    }
    return color
}

// backgroundcolor setter
const setBackground = (ref, colorh,lock) => {
    if(lock.className === 'fas fa-lock') return
    const color = `#${randomColor()}`
    ref.style.backgroundColor = color
    setColorText(colorh,color)
}

// color text setter
const setColorText = (ref,color) => {
    ref.innerText = color
}

