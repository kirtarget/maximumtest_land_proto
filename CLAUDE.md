# CLAUDE.md — MAXIMUM Education Landing

## Проект
Лендинг для онлайн-школы MAXIMUM Education. Подготовка к ЕГЭ/ОГЭ.
Позиционирование: снятие стресса, а не просто баллы.

---

## Деплой
- Автодеплой через GitHub: push в `main` → Vercel подхватывает автоматически
- `vercel link` / `vercel --prod` не нужны — достаточно `git push`
- Проект: https://github.com/kirtarget/maximumtest_land_proto

---

## Стек
- **Framework:** Next.js 14+ (App Router)
- **Styles:** Tailwind CSS
- **Animations:** Framer Motion (лёгкие, не тяжёлые)
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React (или Heroicons)
- **Carousel:** embla-carousel-react
- **Accordion:** @radix-ui/react-accordion
- **Analytics:** Яндекс.Метрика + Яндекс.Директ пиксель через GTM
- **Hosting:** Vercel (SSR-ready)

---

## Цветовые токены (использовать везде)
```
--color-accent:  #D62B2B  (красный — CTA-кнопки)
--color-dark:    #1A1A2E  (фон, заголовки, тёмные секции)
--color-dark2:   #16213E  (градиент Hero)
--color-mid:     #555555  (основной текст)
--color-light:   #F5F5F5  (фоны карточек)
--color-white:   #FFFFFF
--color-success: #22C55E  (блок «после» в отзывах)
--color-border:  #DDDDDD
```

---

## Типографика
```
H1:         48px / Bold  (мобиле: 32px)
H2:         36px / Bold  (мобиле: 24px)
H3:         24px / SemiBold
Body large: 18px / Regular
Body:       16px / Regular
Caption:    14px / Regular
Button:     16px / SemiBold, uppercase: off
```
Шрифт: **Inter** (Google Fonts)

---

## Структура файлов
```
app/
  page.tsx                  ← все секции страницы
  layout.tsx                ← GTM, Inter font, metadata, scroll depth tracker
  not-found.tsx             ← кастомная 404
  sitemap.ts
  api/
    quiz-lead/route.ts      ← POST endpoint квиза → CRM webhook

components/
  layout/
    Navbar.tsx
    Footer.tsx
  sections/
    Hero.tsx
    StatStrip.tsx
    ProblemBlock.tsx
    Mechanism.tsx
    Teachers.tsx
    Results.tsx
    ComparisonTable.tsx
    Guarantee.tsx
    Quiz.tsx
    FAQ.tsx
    FinalCTA.tsx
  ui/
    Button.tsx
    Card.tsx
    AccordionItem.tsx
    StatCard.tsx
    TeacherCard.tsx
    ResultCard.tsx
    QuizStep.tsx

lib/
  analytics.ts              ← обёртка над dataLayer.push
  api.ts                    ← CRM интеграция (webhook)

public/
  robots.txt
  og-image.jpg              ← 1200×630px
  offer.pdf                 ← от клиента
```

---

## ID якорей (навбар + CTA скролл)
```
#mechanism  → Блок «Как это работает»
#teachers   → Блок «Преподаватели»
#results    → Блок «Результаты / Отзывы»
#quiz       → Блок «Квиз / лид-форма»
```

---

## Аналитика — события GTM / dataLayer
```ts
// lib/analytics.ts
cta_click        — клик по любой CTA-кнопке
form_submit      — отправка квиза (поле: subject)
scroll_depth_25  — прокрутка 25%
scroll_depth_50
scroll_depth_75
scroll_depth_90
```
Scroll depth: Intersection Observer в layout.tsx.

---

## UTM параметры
- Читать из `useSearchParams()` на клиенте
- Прокидывать в POST /api/quiz-lead
- Все CTA-кнопки сохраняют utm_source, utm_medium, utm_campaign в href

---

## Квиз — API endpoint
`POST /api/quiz-lead`
```ts
{
  name: string,
  phone: string,
  class: '9' | '10' | '11' | '5-8',
  exam_type: 'ЕГЭ' | 'ОГЭ' | 'school',
  subjects: string[],
  format: 'online' | 'offline' | 'any',
  utm_source?: string,
  utm_medium?: string,
  utm_campaign?: string,
}
```
Проксирует на webhook CRM (URL получить у клиента).
Валидация через Zod перед отправкой.

---

## Navbar — технические детали
- `position: sticky; top: 0; z-index: 50`
- При скролле >80px: `backdrop-blur-md` + `box-shadow`
- Мобиле (<768px): скрыть ссылки, показать гамбургер
- Телефон 8 (800) 707-25-62 — только `hidden md:block`

---

## Производительность
- Все изображения через `next/image` с `lazy` loading
- Lighthouse ≥ 85 (Performance, Accessibility, SEO, Best Practices)
- LCP < 2.5s, CLS < 0.1, INP < 200ms
- Mobile-first: брейкпоинты sm/md/lg/xl

---

## SEO — metadata (layout.tsx)
```
title:       Подготовка к ЕГЭ и ОГЭ онлайн | MAXIMUM Education — 93% доходимость
description: Онлайн-школа подготовки к ЕГЭ и ОГЭ. 2000 преподавателей, 65 городов, гарантия результата в договоре.
og:title:    MAXIMUM Education — подготовка к ЕГЭ без стресса
og:image:    /og-image.jpg (1200×630)
canonical:   https://maximumtest.ru/
robots:      index, follow
```
JSON-LD: `Organization` + `FAQPage` (валидировать в Google Rich Results Test)

---

## Hero — варианты H1 (A/B тест)
```
Вариант A (рекомендуемый):
  H1: «Подготовка к ЕГЭ и ОГЭ — без паники»

Вариант B:
  H1: «80+ баллов на ЕГЭ — или мы вернём деньги»
```
Управление через переменную окружения или cookie-сплит.

---

## Контент — ждём от клиента
1. Фото 3–6 преподавателей (400×400px+, квадрат, не стоковые)
2. Логотип SVG + PNG (два варианта: светлый фон и тёмный)
3. Логотип ФИПИ
4. PDF договора оферты (`public/offer.pdf`)
5. Фото выпускников для Hero (не стоковые)
6. Webhook URL CRM (AmoCRM / Bitrix24)
7. Номер счётчика Яндекс.Метрики
8. Ссылки на VK и Telegram
9. GTM Container ID

---

## Юридические данные (хардкод в Footer)
```
Телефон: 8 (800) 707-25-62 (звонок бесплатный)
Юрлицо: ООО «Юмакс», ИНН 7730681080
Дисклеймер: «Реклама: ООО «Юмакс», ИНН 7730681080»
```

---

## HTML-блоки для конструктора сайта

Папка `html-blocks/` — автономные блоки для вставки в конструктор maximumtest.ru.
Каждый файл содержит только компонент (без `<html>/<head>/<body>`): `<link>` на шрифт + `<style>` + разметка + `<script>`.

**Правила оформления:**
- Все фоны **белые** (`#fff`) — конструктор ограничивает ширину, цветной фон выглядит как плавающий прямоугольник
- Карточки внутри блоков: `background: #F5F5F5; border: 1px solid #E8E8E8`
- Шрифт: **Golos Text** (Google Fonts) — фирменный шрифт для конструктора
- Все CSS-классы с префиксом `mx-` во избежание конфликтов со стилями конструктора
- Акцент: `#FD7E14` (оранжевый), заголовки: `#2E2E2E`, текст: `#555555`, мутный: `#8F96A1`

**Список блоков:**

| Файл | Что делает |
|---|---|
| `block-hero.html` | Главный экран: заголовок, форма захвата лида (имя + телефон + класс), карточка отзыва справа, теги-доверия |
| `block-statstrip.html` | Полоса с цифрами: 13 лет, 93%, 450 000+, 80+, 90+ баллов |
| `block-problem-solution.html` | 4 карточки «проблема → решение»: посещаемость, отвлечение, непонимание тем, контроль родителей |
| `block-mechanism.html` | «Почему 93% учеников проходят курс до конца» — 3 карточки: отбор учителей, каждый работает на уроке, маленькие группы. Анимация появления через IntersectionObserver |
| `block-teachers.html` | Карточки преподавателей: фото-плейсхолдер, предмет, достижения, цитата. Сетка на десктопе, горизонтальный скролл на мобиле |
| `block-results.html` | Карусель отзывов в формате «До / После». Автопрокрутка 4 сек, точки-индикаторы, стрелки |
| `block-comparison.html` | Таблица сравнения: MAXIMUM vs репетитор vs другие курсы. Десктоп — таблица, мобиле — карточки |
| `block-guarantee.html` | Гарантия результата: 4 карточки + кнопка «Посмотреть договор» → модальное окно с PDF договора оферты (iframe + кнопка скачать). PDF: Яндекс Object Storage |
| `block-pricing.html` | 3 тарифных карточки с фичами и ценами |
| `block-free-lesson.html` | «Что происходит на пробном уроке» — 4 карточки + полоса с чеклистом и CTA «Записаться на бесплатный урок» |
| `block-quiz.html` | 5-шаговый квиз-лид: тип экзамена → класс → формат → предметы → контакты. Отправляет POST на `/api/quiz-lead` |
| `block-faq.html` | Аккордеон с частыми вопросами |
| `block-cities.html` | «Нас можно найти в 65 городах» — чипы городов + 3 карточки преимуществ |
| `block-navbar.html` | Навбар (если конструктор позволяет вставить в шапку) |

---

## Чеклист перед запуском
- [ ] Lighthouse ≥ 85 по всем категориям
- [ ] Форма квиза → заявка реально приходит в CRM
- [ ] Мобиле: 375px, 390px, 414px
- [ ] Open Graph: ogp.me
- [ ] Schema.org FAQPage: Google Rich Results Test
- [ ] HTTPS + редиректы www и http
- [ ] robots.txt и sitemap.xml
- [ ] GTM опубликован, события проверены
- [ ] Цели Метрики настроены
- [ ] 404 страница создана
- [ ] JivoChat подключён через next/script
