# Дорожная карта: MAXIMUM Education Landing

## Обзор проекта
Лендинг для онлайн-школы подготовки к ЕГЭ/ОГЭ. 12 блоков, Next.js 14 App Router, позиционирование через снятие стресса.

---

## Фаза 1 — Инициализация проекта
**Цель:** рабочий скелет с настроенным стеком

- [ ] `npx create-next-app@latest` с App Router, TypeScript, Tailwind
- [ ] Установить зависимости:
  - `framer-motion` — анимации
  - `react-hook-form` + `zod` — форма квиза
  - `lucide-react` — иконки
  - `@radix-ui/react-accordion` — FAQ аккордеон
  - `embla-carousel-react` — карусели (Teachers, Results)
- [ ] Настроить `tailwind.config.ts` — цветовые токены, шрифт Inter
- [ ] Настроить `app/layout.tsx` — GTM скрипт, Inter font, metadata base
- [ ] Создать структуру папок (`components/layout`, `components/sections`, `components/ui`, `lib`)

---

## Фаза 2 — UI-компоненты (атомарные)
**Цель:** переиспользуемые примитивы для всех секций

- [ ] `components/ui/Button.tsx` — варианты: primary (красный), outline; размеры; передаёт UTM в href
- [ ] `components/ui/Card.tsx` — базовая карточка с вариантами фона
- [ ] `components/ui/StatCard.tsx` — цифра + подпись + CountUp анимация
- [ ] `components/ui/AccordionItem.tsx` — вопрос/ответ, анимация высоты
- [ ] `components/ui/TeacherCard.tsx` — фото + имя + предмет + достижения + цитата
- [ ] `components/ui/ResultCard.tsx` — блок «до» (серый) + «после» (зелёный) + источник
- [ ] `components/ui/QuizStep.tsx` — шаг квиза с вариантами ответа и прогресс-баром

---

## Фаза 3 — Layout-компоненты
**Цель:** навбар и футер

- [ ] `components/layout/Navbar.tsx`
  - `position: sticky; top: 0; z-index: 50`
  - backdrop-blur + тень при скролле >80px
  - Гамбургер-меню на мобиле (<768px)
  - Якорные ссылки: `#mechanism`, `#teachers`, `#results`, `#quiz`
  - CTA: «Начать подготовку» → `#quiz`
  - Телефон 8 (800) 707-25-62 — только десктоп
- [ ] `components/layout/Footer.tsx`
  - Логотип, телефон, ссылки (privacy, offer.pdf, contacts)
  - ИНН / юрлицо: ООО «Юмакс», ИНН 7730681080
  - Дисклеймер рекламодателя
  - Соцсети: VK, Telegram (ссылки от клиента)

---

## Фаза 4 — Секции страницы (в порядке рендера)

### Блок 01 — Hero
- [ ] `components/sections/Hero.tsx`
  - H1 fade-in + slide-up (Framer Motion, 0.6s)
  - Вариант A (по умолчанию): «Подготовка к ЕГЭ и ОГЭ — без паники»
  - Вариант B (для A/B): «80+ баллов на ЕГЭ — или мы вернём деньги»
  - Фон: тёмно-синий градиент `#1A1A2E → #16213E`
  - Бейджи доверия под кнопками
  - Две кнопки: «Узнать стоимость» (→ #quiz) + «Позвонить бесплатно» (tel:)

### Блок 02 — Трастовая полоса
- [ ] `components/sections/StatStrip.tsx`
  - 5 карточек: 93%, 2000, 65, 260 000+, каждый 3-й
  - CountUp при попадании в viewport (Intersection Observer)
  - Горизонтальный скролл на мобиле (snap-scroll)

### Блок 03 — Проблемный блок
- [ ] `components/sections/ProblemBlock.tsx`
  - Заголовок «Знакомо?»
  - 3 карточки-цитаты из реальных отзывов
  - Переходный блок со стрелкой вниз

### Блок 04 — Механизм
- [ ] `components/sections/Mechanism.tsx`
  - ID: `mechanism`
  - 3 карточки: Преподаватели / Платформа / Структура
  - slide-in при скролле, задержка 0.1s между карточками

### Блок 05 — Преподаватели
- [ ] `components/sections/Teachers.tsx`
  - ID: `teachers`
  - 3–6 карточек (данные заполняет клиент — плейсхолдеры)
  - Карусель на мобиле (embla-carousel)
  - Счётчик: «+ ещё 1994 преподавателя»
  - lazy loading через next/image

### Блок 06 — Результаты / Отзывы
- [ ] `components/sections/Results.tsx`
  - ID: `results`
  - Карусель с автопрокруткой (pause on hover)
  - 5 готовых отзывов из ТЗ
  - Общий рейтинг: «4.7★ из 5 на основе 1200+ отзывов»

### Блок 07 — Сравнительная таблица
- [ ] `components/sections/ComparisonTable.tsx`
  - 3 колонки: Репетитор / Другой курс / MAXIMUM
  - Колонка MAXIMUM выделена красноватым фоном
  - Горизонтальный скролл на мобиле

### Блок 08 — Гарантия + ФИПИ
- [ ] `components/sections/Guarantee.tsx`
  - Тёмный фон `#1A1A2E`
  - ShieldCheckIcon (Lucide/Heroicons)
  - Логотип ФИПИ (плейсхолдер → клиент предоставит)
  - Кнопка «Посмотреть договор» → `/offer.pdf`

### Блок 09 — Квиз
- [ ] `components/sections/Quiz.tsx`
  - ID: `quiz`
  - 4 шага + финальный экран (Thank You)
  - Прогресс-бар (шаг X из 4)
  - slide-left анимация между шагами
  - React Hook Form + Zod для финальной формы
  - POST → `/api/quiz-lead` с UTM параметрами
  - Помещается на экране 375px без скролла

### Блок 10 — FAQ
- [ ] `components/sections/FAQ.tsx`
  - 8 вопросов из ТЗ
  - Radix UI Accordion (или самописный)
  - Первый вопрос открыт по умолчанию
  - Schema.org FAQPage JSON-LD (здесь или в layout)

### Блок 11 — Финальный CTA
- [ ] `components/sections/FinalCTA.tsx`
  - «Рассчитать стоимость» (красная, крупная) → `#quiz`
  - «Посмотреть программы» (outline) → `/courses`

---

## Фаза 5 — API и аналитика

- [ ] `app/api/quiz-lead/route.ts`
  - POST endpoint: принимает `{ name, phone, class, exam_type, subjects[], format, utm_* }`
  - Проксирует на webhook CRM (URL от клиента)
  - Валидация через Zod
- [ ] `lib/analytics.ts`
  - `pushEvent(name, params)` — обёртка над `window.dataLayer.push`
  - События: `cta_click`, `form_submit` (с полем `subject`), `scroll_depth_25/50/75/90`
- [ ] `lib/api.ts`
  - CRM интеграция (AmoCRM / Bitrix24 — уточнить webhook URL у клиента)
- [ ] Scroll depth трекинг через Intersection Observer в `layout.tsx`
- [ ] UTM параметры: читать из `searchParams`, прокидывать в форму и в аналитику

---

## Фаза 6 — SEO и метаданные

- [ ] `app/layout.tsx` — `metadata` объект:
  - title: «Подготовка к ЕГЭ и ОГЭ онлайн | MAXIMUM Education — 93% доходимость»
  - description, og:title, og:description, og:image (1200×630)
  - canonical, robots: index/follow
- [ ] `public/og-image.jpg` — плейсхолдер, финальный от клиента
- [ ] JSON-LD: `Organization` + `FAQPage` в `<script type="application/ld+json">`
- [ ] `public/robots.txt` и `app/sitemap.ts`
- [ ] `app/not-found.tsx` — кастомная 404 страница

---

## Фаза 7 — Качество и запуск

- [ ] Тест мобиле: 375px, 390px, 414px
- [ ] Lighthouse ≥ 85 по всем категориям (Performance, Accessibility, SEO, Best Practices)
- [ ] Проверка Open Graph: ogp.me
- [ ] Проверка Schema.org: Google Rich Results Test
- [ ] HTTPS + редиректы (www → non-www, http → https)
- [ ] GTM опубликован, все события проверены в Preview Mode
- [ ] Цели в Яндекс.Метрике настроены и фиксируют конверсии
- [ ] Тест заявки: форма → CRM (заявка реально приходит)
- [ ] JivoChat / онлайн-консультант через `next/script` в layout

---

## Фаза 8 — A/B тесты (после запуска)

| Тест | Вариант A | Вариант B |
|------|-----------|-----------|
| H1 Hero | «Без паники» | «80+ или вернём деньги» |
| CTA-кнопка | «Узнать стоимость» | «Начать бесплатно» |
| Лид-форма | Квиз (4 шага) | Простая форма (имя + телефон) |
| Позиция квиза | После Hero | После отзывов |

Инструмент: Яндекс.Метрика A/B или split по cookie.

---

## Контент от клиента (блокеры)

Без этого запуск невозможен:
- Фото 3–6 реальных преподавателей (400×400px+, квадрат)
- Логотип SVG + PNG (белый и тёмный фон)
- Логотип ФИПИ
- PDF договора оферты
- Фото выпускников для Hero (не стоковые)
- Webhook URL CRM
- Номер Яндекс.Метрики
- Ссылки на VK и Telegram
