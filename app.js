const headerList = document.querySelector('.header__list')
const menu = document.getElementById('menu')

menu.addEventListener('click', () => {
  headerList.classList.toggle('toggle_menu')
})