# TODO

## High Priority

- [ ] تنظیم `MEDIUM_CONFIG.username` در `src/lib/medium.ts`
- [ ] جایگذاری ۳ لینک پست منتخب در `MEDIUM_CONFIG.featuredPostLinks`
- [ ] تست کامل مسیر `/blog` و `#Devlog` در دسکتاپ و موبایل
- [ ] بازبینی محتوای Hero/Projects/About/Contact با متن نهایی

## Cursor Hover Preview

- [x] بهبود موقعیت Preview نزدیک لبه‌های صفحه (جلوگیری از خروج از viewport)
- [x] اضافه‌کردن انیمیشن ورود/خروج نرم‌تر برای Preview
- [x] تعریف `data-cursor-preview` برای لینک‌های مهم (CTAها و Navbar)
- [x] تنظیم اندازه فونت/پدینگ Preview برای موبایل‌های بزرگ و تبلت

## UI / UX Polish

- [x] یکدست‌سازی hover state کارت‌ها در همه سکشن‌ها
- [x] بازبینی فاصله‌ها (spacing) بین سکشن‌های صفحه اصلی
- [x] بررسی نهایی کنتراست رنگ متن‌ها برای خوانایی بهتر
- [ ] افزودن steam profile به بخش social (وقتی از بن در اومد😭)

## Blog / Devlog

- [ ] دیدن محیط کلودفلر پیجس و چک کردن بخش فانکشنس برای سئو SSR/SSG
- [x] تعیین دقیق دسته‌بندی Devlog در Medium (مثلاً tag ثابت: `devlog`)
- [x] بهبود پیام خطا هنگام لود نشدن Medium feed
- [x] بررسی نمایش تصویر شاخص پست (thumbnail) در کارت‌ها

## Documentation

- [ ] مرور و تکمیل `docs/PROJECT_DOCUMENTATION.md`
- [ ] مرور `docs/SEO_MEDIUM_FAQ.md` و `docs/SSR_HOSTING_FAQ.md`
- [ ] اضافه کردن راهنمای انتشار نهایی (deploy checklist)
- [x] داکیومنت برای تمام کامپوننت هایی که تو ساخت این سایت به کار برده شدن رو با استفاده از کتگوری های مشخص (ui, blog و...) بنویس که مثلا هر کدوم چیکار میکنن و برای کدوم بخش هستن چیزاییش که قابل شخصی سازی هست رو بگو ساختار فولدر ها رو توضیح بده و... . چیزایی که نباید باشه: تموم اطلاعات رو توی یک فایل نوشتن. پس چند تا فایل مشخص برای داکیومنشن قوی سایت بزار. متن های داکیومنت ها هم بسیار روان و هیومنایزد باشن. نحوه ستاپ و چیزای کلی و ساختار سایت رو هم بگو.

## Validation

- [ ] اجرای `npm run typecheck`
- [ ] اجرای `npm run lint`
- [ ] اجرای `npm run build`
- [ ] تست نهایی در مرورگر بعد از `Hard Refresh`
- [x] Cloudflare Email Routing
