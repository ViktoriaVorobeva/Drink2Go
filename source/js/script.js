const headerNav = document.querySelector('.header-navigation');
const headerToggle = document.querySelector('.header-navigation__toggle');

headerNav.classList.remove('header-navigation--nojs');

function getNavList () {
  if(headerNav.classList.contains('header-navigation--opened')) {
    headerNav.classList.remove('header-navigation--opened');
    headerNav.classList.add('header-navigation--closed');
  } else {
    headerNav.classList.remove('header-navigation--closed');
    headerNav.classList.add('header-navigation--opened');
  }
}

headerToggle.addEventListener('click', getNavList);
