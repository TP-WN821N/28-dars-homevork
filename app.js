const headerList = document.querySelector('.header__list')
const menu = document.getElementById('menu')
const header = document.querySelector('.header')

menu.addEventListener('click', () => {
  headerList.classList.toggle('toggle_menu')
})

window.addEventListener('scroll', () => {
  if(window.scrollY > 10) {
    header.classList.add('header_shrink')
  }
  else {
    header.classList.remove('header_shrink')
  }
})