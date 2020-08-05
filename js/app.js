const menu = document.getElementById('menu')
const menu_icon = document.getElementById('menu-icon')
const mob_nav = document.getElementsByClassName('mob-nav')[0]

menu.addEventListener('click',() => {
    mob_nav.classList.toggle('mob-nav-show')

    if(mob_nav.classList.contains('mob-nav-show'))
        menu_icon.src = 'images/close.svg'
    else
        menu_icon.src = 'images/bars-solid.svg'
})