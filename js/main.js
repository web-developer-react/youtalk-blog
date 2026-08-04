const menuButton = document.querySelector('.header__menu-button');
const navigation = document.querySelector('.header__nav');
const moreButton = document.querySelector('.main__more');
const articles = document.querySelector('.articles');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation?.classList.toggle('is-open') ?? false;

  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
});

moreButton?.addEventListener('click', () => {
  articles?.classList.add('is-expanded');
  moreButton.hidden = true;
});
