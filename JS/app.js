let mark = document.querySelector('.marker')
let item = document.querySelectorAll('ul li a')
let toggle = document.querySelector('.toggle')
let navbar = document.querySelector('.navbar')
let brand = document.querySelector('main')

function indicator(e)
{
    mark.style.top = e.offsetTop + "px"
    mark.style.width = e.offsetWidth + "px"
}
item.forEach(link => {
    link.addEventListener('click', (e)=>{
        indicator(e.target)
    })
})
function indicator2(e)
{
    mark.style.left = e.offsetLeft + "px"
    mark.style.width = e.offsetWidth + "px"
}
item.forEach(link => {
    link.addEventListener('click', (e)=>{
        indicator2(e.target)
    })
})


// Menu Toggle
toggle.addEventListener('click', ()=>{
    toggle.classList.toggle('active')
    navbar.classList.toggle('active')
    brand.classList.toggle('active')
})