# SSR Hosting FAQ

## سوال

برای SSR باید هاست بخرم یا بازم با GitHub Pages یا Cloudflare Pages کار در میاد؟

## جواب کوتاه

- **GitHub Pages**: برای SSR واقعی مناسب نیست (فقط Static/SSG).
- **Cloudflare Pages**:  
  - اگر فقط Pages استاتیک باشد → مثل GitHub Pages (SSR ندارد).  
  - اگر با **Pages Functions / Workers** استفاده شود → SSR قابل اجراست.

پس:

- اگر پروژه Static/SSG است → GitHub Pages یا Cloudflare Pages هر دو مناسب‌اند.
- اگر پروژه SSR است → باید runtime سمت سرور/edge داشته باشی (مثل Cloudflare Functions، Vercel، Netlify).

---

## GitHub Pages چه چیزی را پشتیبانی می‌کند؟

GitHub Pages فقط خروجی استاتیک را سرو می‌کند:

- مناسب برای: Vite static build، سایت‌های ساده، SSG export
- نامناسب برای: SSR request-time rendering، API runtime سمت سرور

---

## Cloudflare Pages چه چیزی را پشتیبانی می‌کند؟

### حالت 1: Static-only

- مثل GitHub Pages فقط فایل استاتیک سرو می‌شود.
- SSR واقعی نداری.

### حالت 2: Pages + Functions (Workers)

- کد سمت سرور/edge اجرا می‌شود.
- SSR قابل انجام است.
- برای پروژه‌هایی که SEO بهتر می‌خواهند، گزینه خوبی است.

---

## آیا حتماً باید هاست پولی بخری؟

نه، الزاماً نه.

- برای شروع، اکثر پلتفرم‌ها پلن رایگان دارند.
- اگر ترافیک یا مصرف بالا برود، ممکن است نیاز به پلن پولی پیدا کنی.

### دامنه اختصاصی

- دامنه شخصی (مثل `yourname.dev`) معمولاً باید جداگانه خریداری شود.
- اما خود هاست می‌تواند روی پلن رایگان شروع شود.

---

## پیشنهاد برای پروژه شما

با توجه به هدف SEO بهتر برای Blog/Devlog:

1. اگر ساده و کم‌هزینه می‌خواهی:
   - فعلاً Static بمان (GitHub Pages / Cloudflare Pages Static).

2. اگر SEO قوی‌تر می‌خواهی:
   - Blog/Devlog را SSR/SSG واقعی کن.
   - روی Cloudflare Pages + Functions یا Vercel/Netlify deploy کن.

---

## جمع‌بندی نهایی

- **SSR + GitHub Pages = خیر**
- **SSR + Cloudflare Pages (بدون Functions) = خیر**
- **SSR + Cloudflare Pages Functions = بله**
- **SSG/Static + GitHub Pages یا Cloudflare Pages = بله**
