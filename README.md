# YouTalk Blog

Адаптивный блог и страница статьи по макету Figma. Проект создан на HTML, CSS и обычном JavaScript без сборщика, фреймворков и сторонних библиотек.

Стили разделены по назначению:

- `fonts.css` — локальные шрифты;
- `common.css` — переменные, базовые правила, шапка, подвал и общие компоненты;
- `pages/blog.css` — главная страница блога;
- `pages/article.css` — страница статьи.

## Учебные комментарии

В этом проекте пробуем единый стиль пояснений для HTML, CSS и JavaScript:

- В начале файла — его назначение и связь с другими файлами.
- Перед смысловым блоком — что он делает и зачем нужен.
- Рядом со свойством CSS — понятное объяснение его действия. Например, `object-fit: cover` заполняет область без искажения пропорций, обрезая края изображения.
- В JavaScript — последовательность действий, смысл непривычных операторов и связь классов и атрибутов с HTML и CSS.
- Повторяющийся шаблон подробно объясняется один раз; отличия отмечаются рядом с ними. Пояснения БЭМ сохраняют связь между блоком, элементом и модификатором.
- `TODO` обозначает конкретную будущую работу. Готовое поведение описывается обычным комментарием; функции, которых ещё нет, прямо отмечаются как нереализованные.

Комментарии пишутся по-русски короткими фразами. Их задача — помочь понять работающий код. При изменении поведения пояснения рядом с ним тоже нужно обновлять.

## Соответствие критериям оценки

### 1. Семантическая вёрстка — 2 балла

В проекте используются семантические HTML-элементы:

- `header` — шапка сайта;
- `nav` — основная навигация и хлебные крошки;
- `main` — основное содержимое страницы;
- `section` — тематические разделы;
- `article` — статьи и карточки блога;
- `aside` — боковая панель статьи;
- `footer` — подвал сайта.

Для переходов используются ссылки `a`, а для действий — элементы `button`. На каждой странице присутствует один основной заголовок `h1`, остальные заголовки расположены в логичном порядке.

### 2. Псевдоэлементы и псевдоклассы — 1 балл

В CSS используются псевдоклассы:

- `:hover` — изменение элемента при наведении;
- `:focus-visible` — отображение фокуса при управлении клавиатурой;
- `:first-child`, `:last-child` и `:nth-child()` — выбор нужных элементов;
- `:empty` — скрытие пустого сообщения;
- `:not()` — исключение элементов из выборки.

Также используются псевдоэлементы:

- `.main::before` — декоративный фон главной страницы;
- `.header__link--dropdown::after` — стрелка выпадающего пункта;
- `.article-quote::before` — декоративная кавычка;
- `.social__links a::before` — увеличение доступной области ссылки.

### 3. Accessibility — 1 балл

В проекте реализованы основные требования доступности:

- ссылка пропуска навигации;
- управление ссылками, кнопками и меню с клавиатуры;
- заметный стиль `:focus-visible`;
- атрибуты `alt` у всех изображений;
- пустой `alt=""` у декоративных изображений;
- `aria-label` для элементов без понятной текстовой подписи;
- `aria-expanded` и `aria-controls` для мобильного меню;
- `aria-current="page"` в хлебных крошках;
- скрытые подписи `.visually-hidden` для экранных дикторов;
- поддержка `prefers-reduced-motion`;
- поддержка повышенного контраста и системных цветов.

### 4. Методология БЭМ — 1 балл

Названия CSS-классов построены по методологии БЭМ.

```text
card                   — блок
card__title            — элемент блока
card--featured         — модификатор блока

header                 — блок
header__nav            — элемент блока
header__link--dropdown — модификатор элемента
```

Такой подход делает стили понятными, предсказуемыми и удобными для дальнейшего расширения.

### 5. Адаптивная вёрстка — 2 балла

Сайт адаптирован для компьютеров, планшетов и телефонов. Для построения макета используются:

- Flexbox — меню, кнопки, группы ссылок и небольшие компоненты;
- Grid — карточки, боковая панель и основные сетки страниц;
- `minmax()`, `min()`, проценты и относительные размеры;
- медиазапросы для перестроения макета;
- адаптивные изображения.

Проверены ширины 320, 375, 768, 1024 и 1440 пикселей. На этих разрешениях отсутствует горизонтальная прокрутка, карточки перестраиваются, текст не выходит за пределы экрана, а основное меню заменяется функциональной кнопкой.

### 6. Форматы иконок и изображений — 1 балл

Ресурсы разделены по назначению:

- SVG используется для логотипа, социальных и декоративных иконок;
- PNG используется для иллюстраций с прозрачностью;
- JPEG используется для фотографий;
- WOFF2 используется для локальных шрифтов.

Изображения статьи и блога находятся в отдельных папках. Для изображений указаны понятные альтернативные описания.

### 7. Структура документа — 2 балла

HTML-разметка имеет правильную вложенность и аккуратные отступы. Содержимое разделено на логические блоки, отсутствует чрезмерное количество бессмысленных контейнеров.

Общие стили не дублируются, а стили главной страницы и статьи находятся в отдельных файлах. JavaScript содержит только необходимую логику.

### GitHub

Размещение проекта на GitHub является дополнительным и не влияет на оценку. Если проект будет отправлен через GitHub, перед передачей ссылки необходимо установить для репозитория статус `Public`.

По перечисленным техническим критериям проект соответствует требованиям на максимальные 10 баллов. Окончательную оценку выставляет ментор после проверки.

## 📁 Дополнительные файлы

- `assets/fonts/Montserrat-Italic.woff2` — Файл шрифта для оформления текста. Упоминается в `css/fonts.css`.
- `assets/fonts/Montserrat-SemiBold.woff2` — Файл шрифта для оформления текста. Упоминается в `css/fonts.css`.
- `assets/fonts/Montserrat-Medium.woff2` — Файл шрифта для оформления текста. Упоминается в `css/fonts.css`.
- `assets/fonts/Montserrat-Bold.woff2` — Файл шрифта для оформления текста. Упоминается в `css/fonts.css`.
- `assets/fonts/OpenSans-Regular.woff2` — Файл шрифта для оформления текста. Упоминается в `css/fonts.css`.
- `assets/fonts/Montserrat-Regular.woff2` — Файл шрифта для оформления текста. Упоминается в `css/fonts.css`.
- `assets/images/article/price-card-gifts.png` — Графический ресурс страницы или учебного материала. Упоминается в `posts/article-layout/article-layout.html`.
- `assets/images/article/article-hero.png` — Графический ресурс страницы или учебного материала. Упоминается в `posts/article-layout/article-layout.html`.
- `assets/images/article/article-hands.jpeg` — Графический ресурс страницы или учебного материала. Упоминается в `posts/article-layout/article-layout.html`.
- `assets/images/article/article-sunset.jpeg` — Графический ресурс страницы или учебного материала. Упоминается в `posts/article-layout/article-layout.html`.
- `assets/images/article/cta-people.png` — Графический ресурс страницы или учебного материала. Упоминается в `posts/article-layout/article-layout.html`.
- `assets/images/article/sidebar-people.png` — Графический ресурс страницы или учебного материала. Упоминается в `posts/article-layout/article-layout.html`.
- `assets/images/article/article-anger.png` — Графический ресурс страницы или учебного материала. Упоминается в `posts/article-layout/article-layout.html`.
- `assets/images/article/article-people.jpeg` — Графический ресурс страницы или учебного материала. Упоминается в `posts/article-layout/article-layout.html`.
- `assets/images/article/gift-banner-tablet-wide.png` — Графический ресурс страницы или учебного материала. Упоминается в `posts/article-layout/article-layout.html`.
- `assets/images/article/gift-banner-desktop.png` — Графический ресурс страницы или учебного материала. Упоминается в `posts/article-layout/article-layout.html`.
- `assets/images/article/gift-banner-tablet-narrow.png` — Графический ресурс страницы или учебного материала. Упоминается в `posts/article-layout/article-layout.html`.
- `assets/images/article/cta-side-decoration.svg` — Графический ресурс страницы или учебного материала. Упоминается в `posts/article-layout/article-layout.html`.
- `assets/images/article/gift-banner-mobile.png` — Графический ресурс страницы или учебного материала. Упоминается в `posts/article-layout/article-layout.html`.
- `assets/images/article/psychologist.png` — Графический ресурс страницы или учебного материала. Упоминается в `posts/article-layout/article-layout.html`.
- `assets/images/article/article-side-circle.svg` — Графический ресурс страницы или учебного материала. Упоминается в `posts/article-layout/article-layout.html`.
- `assets/images/article/gift-banner-phone-wide.png` — Графический ресурс страницы или учебного материала. Упоминается в `posts/article-layout/article-layout.html`.
- `assets/images/article/article-separator.png` — Графический ресурс страницы или учебного материала. Упоминается в `posts/article-layout/article-layout.html`.
- `assets/images/article/article-woman.jpeg` — Графический ресурс страницы или учебного материала. Упоминается в `posts/article-layout/article-layout.html`.
- `assets/images/icons/smile.png` — Графический ресурс страницы или учебного материала. Упоминается в `index.html`.
- `assets/images/icons/logo.svg` — Графический ресурс страницы или учебного материала. Упоминается в `posts/article-layout/article-layout.html`, `index.html`.
- `assets/images/icons/sk.svg` — Графический ресурс страницы или учебного материала. Упоминается в `posts/article-layout/article-layout.html`, `index.html`.
- `assets/images/icons/twitter.svg` — Графический ресурс страницы или учебного материала. Упоминается в `posts/article-layout/article-layout.html`, `index.html`.
- `assets/images/icons/dzen.svg` — Графический ресурс страницы или учебного материала. Упоминается в `posts/article-layout/article-layout.html`, `index.html`.
- `assets/images/icons/send.svg` — Графический ресурс страницы или учебного материала. Упоминается в `posts/article-layout/article-layout.html`, `index.html`.
- `assets/images/icons/telegram.svg` — Графический ресурс страницы или учебного материала. Упоминается в `posts/article-layout/article-layout.html`, `index.html`.
- `assets/images/icons/breadcrumb-arrow.svg` — Графический ресурс страницы или учебного материала. Прямое подключение по имени в исходниках этой папки не найдено; файл сохранён.
- `assets/images/icons/vk.svg` — Графический ресурс страницы или учебного материала. Упоминается в `posts/article-layout/article-layout.html`, `index.html`.
- `assets/images/icons/member.svg` — Графический ресурс страницы или учебного материала. Упоминается в `posts/article-layout/article-layout.html`, `index.html`.
- `assets/images/icons/unicorn.png` — Графический ресурс страницы или учебного материала. Упоминается в `index.html`.
- `assets/images/blog/blog-work-online.jpeg` — Графический ресурс страницы или учебного материала. Упоминается в `index.html`.
- `assets/images/blog/blog-anxiety.png` — Графический ресурс страницы или учебного материала. Упоминается в `index.html`.
- `assets/images/blog/blog-burnout.png` — Графический ресурс страницы или учебного материала. Упоминается в `index.html`.
- `assets/images/blog/blog-video-call.jpeg` — Графический ресурс страницы или учебного материала. Упоминается в `index.html`.
- `assets/images/blog/blog-running.png` — Графический ресурс страницы или учебного материала. Упоминается в `index.html`.
- `assets/images/blog/blog-people.jpeg` — Графический ресурс страницы или учебного материала. Упоминается в `index.html`.
- `assets/images/blog/blog-emotions.png` — Графический ресурс страницы или учебного материала. Упоминается в `index.html`.
- `assets/images/blog/blog-eggs.png` — Графический ресурс страницы или учебного материала. Упоминается в `index.html`.
- `.gitignore` — Пути, которые Git не должен добавлять как новые отслеживаемые файлы.
- `README.md` — Описание проекта, файлов и способа проверки.
- `js/main.js` — * Общее поведение страниц: раскрытие меню и показ дополнительных карточек блога.
- `css/pages/blog.css` — CSS-оформление: селекторы связывают правила с разметкой, свойства задают вид и расположение.
- `css/pages/article.css` — CSS-оформление: селекторы связывают правила с разметкой, свойства задают вид и расположение.
- `css/fonts.css` — CSS-оформление: селекторы связывают правила с разметкой, свойства задают вид и расположение.
- `css/common.css` — CSS-оформление: селекторы связывают правила с разметкой, свойства задают вид и расположение.
- `posts/article-layout/article-layout.html` — HTML-страница «Как не утонуть в тревоге — YouTalk». Разметка, подключения и встроенные примеры пояснены рядом с кодом.
- `index.html` — HTML-страница «Блог — YouTalk». Разметка, подключения и встроенные примеры пояснены рядом с кодом.

## 🎯 Псевдоклассы CSS — уточнение мест

- `:hover` — срабатывает при наведении указателя. `css/pages/blog.css`, селектор `.filters__button:hover`. Меняет `border-color`, `background`.
- `:hover` — срабатывает при наведении указателя. `css/pages/blog.css`, селектор `.card:hover`. Меняет `box-shadow`, `transform`.
- `:focus-visible` — показывает фокус, когда браузер считает его обозначение необходимым. `css/pages/blog.css`, селектор `.card__link:focus-visible`. Меняет `box-shadow`.
- `:nth-child` — выбирает дочерние элементы по номеру или формуле. `css/pages/blog.css`, селектор `.card:nth-child(1)`. Меняет `height`.
- `:nth-child` — выбирает дочерние элементы по номеру или формуле. `css/pages/blog.css`, селектор `.card:nth-child(2)`. Меняет `height`.
- `:not` — исключает элементы, совпавшие с селектором в скобках. `css/pages/blog.css`, селектор `.card:not(.card--featured)`. Меняет `height`.
- `:nth-child` — выбирает дочерние элементы по номеру или формуле. `css/pages/blog.css`, селектор `.card:nth-child(1), .card:nth-child(2)`. Меняет `height`.
- `:not` — исключает элементы, совпавшие с селектором в скобках. `css/pages/blog.css`, селектор `.card:not(.card--featured) .card__media`. Меняет `height`, `flex-basis`.
- `:hover` — срабатывает при наведении указателя. `css/pages/article.css`, селектор `.article-topics a:hover`. Меняет `text-decoration`.
- `:nth-of-type` — выбирает элементы одного тега по номеру или формуле. `css/pages/article.css`, селектор `.sidebar-card--profile h2, .sidebar-card--profile .sidebar-card__role, .sidebar-card--profile > p:nth-of-type(2)`. Меняет `text-align`.
- `:not` — исключает элементы, совпавшие с селектором в скобках. `css/pages/article.css`, селектор `.sidebar-card--price > :not(.sidebar-card__decoration)`. Меняет `position`, `z-index`.
- `:root` — выбирает корневой элемент; обычно хранит общие CSS-переменные. `css/common.css`, селектор `:root`. Меняет `--color-text`, `--color-text-secondary`, `--color-muted`, `--color-border`, `--color-border-strong`, `--color-accent`, `--color-accent-dark`, `--color-accent-pale`, `--color-footer`, `--container`, `--radius-card`, `--shadow-focus`.
- `:focus` — срабатывает, когда элемент получает фокус. `css/common.css`, селектор `.skip-link:focus`. Меняет `transform`.
- `:hover` — срабатывает при наведении указателя. `css/common.css`, селектор `.button:hover`. Меняет `transform`.
- `:hover` — срабатывает при наведении указателя. `css/common.css`, селектор `.button--pale:hover`. Меняет `background`.
- `:hover` — срабатывает при наведении указателя. `css/common.css`, селектор `.button--primary:hover`. Меняет `background`.
- `:hover` — срабатывает при наведении указателя. `css/common.css`, селектор `.header__link:hover, .header__link:focus-visible`. Меняет `color`.
- `:focus-visible` — показывает фокус, когда браузер считает его обозначение необходимым. `css/common.css`, селектор `.header__link:hover, .header__link:focus-visible`. Меняет `color`.
- `:hover` — срабатывает при наведении указателя. `css/common.css`, селектор `.breadcrumbs__link:hover`. Меняет `color`, `text-decoration`.
- `:hover` — срабатывает при наведении указателя. `css/common.css`, селектор `.footer a:hover`. Меняет `text-decoration`.
- `:hover` — срабатывает при наведении указателя. `css/common.css`, селектор `.subscribe__button:hover`. Меняет `background`.
- `:empty` — выбирает элемент без дочерних элементов и текста. `css/common.css`, селектор `.subscribe__error:empty`. Меняет `display`.
- `:first-child` — выбирает первый дочерний элемент. `css/common.css`, селектор `.social__member img:first-child`. Меняет `width`, `height`.
- `:last-child` — выбирает последний дочерний элемент. `css/common.css`, селектор `.social__member img:last-child`. Меняет `width`, `margin-left`.
- `:hover` — срабатывает при наведении указателя. `css/common.css`, селектор `.social__links a:hover`. Меняет `opacity`.
- `:focus-visible` — показывает фокус, когда браузер считает его обозначение необходимым. `css/common.css`, селектор `.social__links a:focus-visible`. Меняет `outline`, `outline-offset`.

## ✨ Псевдоэлементы CSS — уточнение мест

- `::-webkit-scrollbar` — оформляет полосу прокрутки в поддерживающих браузерах. `css/pages/blog.css`, селектор `.filters::-webkit-scrollbar`. Меняет `display`.
- `::before` — создаёт оформляемый фрагмент перед содержимым. `css/pages/article.css`, селектор `.article-toc__list li::before, .article-list li::before`. Меняет `position`, `top`, `left`, `width`, `height`, `border-radius`, `background`, `content`.
- `::before` — создаёт оформляемый фрагмент перед содержимым. `css/common.css`, селектор `*, *::before, *::after`. Меняет `box-sizing`.
- `::after` — создаёт оформляемый фрагмент после содержимого. `css/common.css`, селектор `*, *::before, *::after`. Меняет `box-sizing`.
- `::-webkit-scrollbar` — оформляет полосу прокрутки в поддерживающих браузерах. `css/common.css`, селектор `html::-webkit-scrollbar`. Меняет `display`.
- `::placeholder` — оформляет подсказку пустого поля. `css/common.css`, селектор `.subscribe__input::placeholder`. Меняет `color`.
- `::before` — создаёт оформляемый фрагмент перед содержимым. `css/common.css`, селектор `*, *::before, *::after`. Меняет `scroll-behavior`, `transition-duration`.
- `::after` — создаёт оформляемый фрагмент после содержимого. `css/common.css`, селектор `*, *::before, *::after`. Меняет `scroll-behavior`, `transition-duration`.

## ✅ Проверка пояснений

При проверке 12 сентября 2026 года сопоставлены структура локального HTML, CSS и JavaScript и неизменность значений в исходниках. Учебные фрагменты с исходными ошибками сохранены. Это проверка правки комментариев; она не заменяет запуск всех сценариев и проверку интерфейса в браузере.

## ↔️ Расположение комментариев

Пояснение отдельной строки находится справа от кода. Объяснение целого блока находится сверху. Один обычный комментарий записан одной физической строкой. Полезные пояснения сохранены; простые записи не разрываются ради ограничения в 80 символов. Служебные комментарии и примеры, где перенос имеет значение, сохраняют свой формат.
