/* Общее поведение страниц: раскрытие меню и показ дополнительных карточек блога. HTML подключает этот файл с defer: код выполняется после разбора разметки. JS переключает классы и атрибуты, а внешний вид задают common.css и pages/blog.css. */

// Находим элементы по CSS-классам. querySelector возвращает первый элемент или null.
// const сохраняет ссылку на элемент; свойства самого элемента при этом можно менять.
// Кнопка «Ещё» и список карточек есть только на странице блога.
const menuButton = document.querySelector(".header__menu-button"); // Кнопка меню в шапке.
const navigation = document.querySelector(".header__nav"); // Ссылки основного меню.
const moreButton = document.querySelector(".main__more"); // Кнопка «Ещё» под карточками.
const articles = document.querySelector(".articles"); // Сетка карточек блога.

// Нажатие кнопки открывает или закрывает меню на узких экранах.
// ?. пропускает обращение, если элемента нет: общий файл подходит для обеих страниц.
// addEventListener связывает нажатие click с функцией () => { ... } ниже.
menuButton?.addEventListener("click", () => {
  // toggle добавляет is-open или убирает его и возвращает true, если класс теперь есть.
  // Если навигация не найдена, ?? подставляет false — состояние «закрыто».
  const isOpen = navigation?.classList.toggle("is-open") ?? false;

  menuButton.setAttribute("aria-expanded", String(isOpen)); // Сообщаем экранному диктору состояние меню: атрибуту нужна строка "true" или "false".
  menuButton.setAttribute( "aria-label", isOpen ? "Закрыть меню" : "Открыть меню",); // Подпись описывает следующее действие: ? выбирает текст при true, : — при false.
});

// «Ещё» раскрывает карточки, уже находящиеся в HTML; новые статьи не загружаются.
moreButton?.addEventListener("click", () => {
  articles?.classList.add("is-expanded"); // В pages/blog.css класс is-expanded показывает скрытые карточки на ширине до 600px.
  moreButton.hidden = true; // После нажатия кнопка больше не нужна. Правило [hidden] в common.css скрывает её.
});
