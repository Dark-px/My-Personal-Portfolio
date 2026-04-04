# Project Documentation

## 1) معرفی پروژه

این پروژه یک پورتفولیو شخصی با `React + TypeScript + Vite + Tailwind CSS` است.

ساختار سایت به‌صورت تک‌صفحه‌ای (Landing) به‌علاوه یک صفحه جداگانه برای بلاگ طراحی شده است:

- صفحه اصلی: `/`
- صفحه بلاگ: `/blog`

---

## 2) اجرای پروژه

### پیش‌نیاز

- Node.js نسخه 18 یا بالاتر
- npm

### دستورات

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

### Type Check

```bash
npm run typecheck
```

---

## 3) ساختار فعلی صفحات و سکشن‌ها

### مسیرها (Routes)

- `/` → صفحه اصلی
- `/blog` → صفحه بلاگ + دولاگ
- `*` → `NotFound`

### ترتیب سکشن‌های صفحه اصلی

1. `PROJECTS`
2. `JOURNEY`
3. `ABOUT`
4. `FEATURED_BLOGS`
5. `CONTACT`

---

## 4) Navbar

ترتیب آیتم‌های نوبار (از چپ به راست):

- `HOME`
- `PROJECTS`
- `JOURNEY`
- `ABOUT`
- `FEATURED_BLOGS`
- `CONTACT`
- دکمه سفید: `GO TO BLOG PAGE` (لینک به `/blog`)

---

## 5) بلاگ و دولاگ (Medium Integration)

### منطق کلی

- هر دو بخش **Blog** و **Devlog** داخل یک صفحه هستند: `/blog`
- تفاوت آن‌ها در دسته‌بندی (Category Filter) است.

### لینک‌ها

- Blog: `/blog`
- Devlog: `/blog#Devlog`

### فایل‌های مرتبط

- `src/pages/BlogPage.tsx` → صفحه بلاگ/دولاگ
- `src/components/portfolio/FeaturedBlogs.tsx` → سه پست منتخب در هوم
- `src/lib/medium.ts` → دریافت فید Medium و فیلتر/انتخاب پست‌ها

### تنظیمات لازم Medium

در فایل `src/lib/medium.ts` این مقادیر را شخصی‌سازی کنید:

```ts
MEDIUM_CONFIG.username
MEDIUM_CONFIG.featuredPostLinks
```

- `username`: نام کاربری Medium شما
- `featuredPostLinks`: لینک مستقیم 3 پست منتخب شما

---

## 6) فیچرهای حذف‌شده

طبق نیاز پروژه، این موارد از مسیرها و ساختار حذف شده‌اند:

- فروشگاه (Shop / Product / Checkout / Order)
- دوره‌ها (Courses)
- رزرو آنلاین (Booking)
- احراز هویت (Login)
- داشبورد کاربر (Dashboard)
- پرداخت (Payment callback flow)

---

## 7) استایل و UX

### انیمیشن‌های نرم‌تر

کلاس‌های reusable برای motion در `src/index.css` اضافه شده‌اند:

- `.section-enter` → ورود نرم سکشن‌ها
- `.modern-card` → Hover مدرن کارت‌ها

### Cursor

- کرسر سفارشی در `src/components/portfolio/CustomCursor.tsx`
- فقط روی دستگاه‌های دارای `pointer: fine` فعال می‌شود.

### Scrollbar

- اسکرول‌بار سفارشی سفید در `src/index.css`

---

## 8) شخصی‌سازی سریع (Checklist)

قبل از انتشار، این موارد را تغییر دهید:

- [ ] لینک‌های شبکه اجتماعی در:
  - `src/components/portfolio/Contact.tsx`
  - `src/components/portfolio/Footer.tsx`
- [ ] محتوای پروژه‌ها در:
  - `src/components/portfolio/Projects.tsx`
- [ ] اطلاعات شخصی/معرفی در:
  - `src/components/portfolio/Hero.tsx`
  - `src/components/portfolio/About.tsx`
- [ ] تنظیمات Medium در:
  - `src/lib/medium.ts`

---

## 9) پیشنهاد توسعه بعدی

- اضافه‌کردن fallback برای دریافت پست‌ها اگر API سرویس RSS محدود شد
- اضافه‌کردن صفحه/پنل ساده برای مدیریت `featuredPostLinks`
- افزودن تست UI برای مسیر `/blog` و فیلتر Devlog
