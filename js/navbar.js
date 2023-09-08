// sidebar
let side = document.querySelector('.sidebar')
const links = document.querySelectorAll('.nav-link')


const openSide = () => {
    side.classList.add('openSide');
}

const closeSide = () => {
    side.classList.remove('openSide');
}

links.forEach(i => {
    i.addEventListener('click', closeSide)
})

// document.addEventListener('click', (event) => {
//     if (side.clas === event.target) {
//         side.classList.remove('openSide');
//     }
// });