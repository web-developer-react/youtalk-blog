/* TODO Header button deactivation */
document.querySelectorAll('.header__button').forEach(button => {
  button.addEventListener('click', () => {
    setTimeout(() => button.blur(), 100);
  });
});