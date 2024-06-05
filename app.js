const headerList = document.querySelector('.header__list')
const menu = document.getElementById('menu')
const header = document.querySelector('.header')
const menuOverlay = document.getElementById('menu_overlay')

menu.addEventListener('click', () => {
  headerList.classList.toggle('toggle_menu')
  menuOverlay.classList.toggle('overlay')
})

window.addEventListener('scroll', () => {
  if(window.scrollY > 10) {
    header.classList.add('header_shrink')
  }
  else {
    header.classList.remove('header_shrink')
  }
})