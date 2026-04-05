# مستندات بخش Blog و Devlog

اين بخش براي نمايش محتواي Medium در سايت طراحي شده و دو سطح دارد:

1. خلاصه در Homepage (`FeaturedBlogs`)
2. صفحه کامل در `/blog` (`BlogPage`)

## کامپوننت ها و فايل هاي درگير

### `src/pages/BlogPage.tsx`

**نقش:**
- دريافت پست ها از Medium
- تفکيک Blog و Devlog
- رندر کارت هاي محتوا
- تنظيم meta/og/canonical
- تزريق structured data براي SEO

**قابل شخصي سازي:**
- متن خطا و skeleton loading
- الگوي کارت ها (`BlogPostCard`)
- عنوان هاي صفحه و تيتر سکشن ها

---

### `src/components/portfolio/FeaturedBlogs.tsx`

**نقش:** نمايش 3 پست منتخب در صفحه اصلي

**قابل شخصي سازي:**
- متن سکشن
- رفتار fallback
- استايل کارت

---

### `src/lib/medium.ts`

**نقش:**
- typeها (`MediumPost`)
- fetch از RSS feed Medium
- پاکسازي HTML
- تشخيص پست هاي devlog
- انتخاب پست هاي featured

**قابل شخصي سازي:**
- `MEDIUM_CONFIG.devlogTags`
- `MEDIUM_CONFIG.featuredCount`
- featured links از طريق env

**متغيرهاي env مرتبط:**
- `VITE_MEDIUM_USERNAME`
- `VITE_MEDIUM_FEATURED_POST_1`
- `VITE_MEDIUM_FEATURED_POST_2`
- `VITE_MEDIUM_FEATURED_POST_3`

---

## منطق تفکيک Blog vs Devlog

در حال حاضر اگر:

- عنوان شامل `devlog` باشد
- يا يکي از tagهاي تعريف شده در `devlogTags` را داشته باشد

پست در گروه Devlog قرار مي گيرد.

## اگر Blog بالا نيامد چه کنيم؟

1. `.env` را چک کن که `VITE_MEDIUM_USERNAME` درست باشد
2. يوزرنيم Medium را بدون `@` قرار بده
3. صفحه `/blog` را باز کن و متن خطا را ببين
4. فايل `docs/SEO_MEDIUM_FAQ.md` را هم چک کن

## پيشنهاد براي آينده

- اگر خواستي بلاگ پايدارتر شود:
  - کش server-side يا edge cache اضافه کن
  - در صورت محدوديت RSS provider يک fallback endpoint سمت بک اند بگذار
