# مستندات کامپوننت هاي Portfolio

اين فايل مخصوص بخش هاي اصلي سايت است؛ يعني همان چيزي که کاربر در صفحه اصلي مي بيند.

## نقشه سريع صفحه اصلي

ترتيب رندر در `src/pages/Index.tsx`:

1. `CustomCursor`
2. `ScrollProgress`
3. `Navigation`
4. `Hero`
5. `Projects`
6. `LearningJourney`
7. `About`
8. `FeaturedBlogs`
9. `Contact`
10. `Footer`

---

## 1) `src/components/portfolio/Navigation.tsx`

**نقش:** ناوبري بالا (Desktop + Mobile menu)

**کجا استفاده مي شود:** صفحه اصلي

**قابل شخصي سازي:**
- آيتم هاي منو داخل `navItems`
- متن دکمه `GO TO BLOG PAGE`
- استايل حالت اسکرول شده (`isScrolled`)

**نکته:** anchorها به ID سکشن ها وابسته هستند؛ اگر ID سکشن را عوض کني، href منو هم بايد آپديت شود.

---

## 2) `src/components/portfolio/Hero.tsx`

**نقش:** هدر اصلي، معرفي سريع، CTAها

**کجا استفاده مي شود:** بالاي صفحه اصلي

**قابل شخصي سازي:**
- نام نمايشي (`fullName`)
- متن معرفي
- CTAها و مقصد اسکرول
- لينک GitHub

**نکته:** تايپ افکت با `setInterval` انجام مي شود و در تب inactive متوقف مي شود.

---

## 3) `src/components/portfolio/Projects.tsx`

**نقش:** نمايش پروژه ها به صورت کارت

**کجا استفاده مي شود:** سکشن `projects`

**قابل شخصي سازي:**
- آرايه `projects` (title, subtitle, description, technologies, media, links)
- تعداد پروژه ها
- متن CTA پايين سکشن

**نکته:** براي هر پروژه تصوير از `public/` مي آيد؛ مسير فايل ها را درست نگه دار.

---

## 4) `src/components/portfolio/LearningJourney.tsx`

**نقش:** نمايش مراحل يادگيري و چشم انداز

**کجا استفاده مي شود:** سکشن `journey`

**قابل شخصي سازي:**
- آرايه `stages`
- متن Future Vision (4 بلوک)
- عنوان ها و برچسب ها

**نکته:** اين بخش براي پرسونال برند خيلي مهم است؛ بهتر است هر 1-2 ماه آپديت شود.

---

## 5) `src/components/portfolio/About.tsx`

**نقش:** داستان شخصي، مسير و هدف ها

**کجا استفاده مي شود:** سکشن `about`

**قابل شخصي سازي:**
- پاراگراف هاي متن اصلي
- QUICK_FACTS (سن، تحصيل، تمرکز)
- TECH_STACK

---

## 6) `src/components/portfolio/FeaturedBlogs.tsx`

**نقش:** نمايش 3 پست منتخب از Medium

**کجا استفاده مي شود:** سکشن `featured_blogs`

**قابل شخصي سازي:**
- عنوان ها و متن سکشن
- تعداد/لینک پست هاي منتخب از `MEDIUM_CONFIG`
- رفتار fallback در صورت نبود پست

**وابستگي:** `src/lib/medium.ts`

---

## 7) `src/components/portfolio/Contact.tsx`

**نقش:** کارت هاي ارتباطي + دکمه ارسال ايميل

**کجا استفاده مي شود:** سکشن `contact`

**قابل شخصي سازي:**
- آرايه `contacts`
- ايميل (`mailto:contact@parsaghaei.dev`)
- متن CTA انتهاي سکشن

---

## 8) `src/components/portfolio/Footer.tsx`

**نقش:** لينک هاي سريع، لينک هاي اجتماعي، کپي رايت

**کجا استفاده مي شود:** انتهاي صفحه اصلي و صفحه blog

**قابل شخصي سازي:**
- `socialLinks`
- متن برند و کپي رايت
- Quick Links

**نکته:** چون در صفحه blog هم استفاده مي شود، لينک هاي سکشني با `pathname` هماهنگ شده اند.

---

## 9) `src/components/portfolio/CustomCursor.tsx`

**نقش:** کرسر سفارشي + tooltip preview روي لينک ها

**کجا استفاده مي شود:** صفحه اصلي

**قابل شخصي سازي:**
- اندازه کرسر
- استايل preview box
- شرط هاي interactive element

**نکته فني:** فقط براي دستگاه هاي `pointer: fine` فعال است.

---

## 10) `src/components/portfolio/ScrollProgress.tsx`

**نقش:** نوار پيشرفت اسکرول بالا

**کجا استفاده مي شود:** صفحه اصلي + صفحه blog

**قابل شخصي سازي:**
- ضخامت و رنگ progress bar
- threshold آپديت progress

---

## 11) `src/components/portfolio/Devlog.tsx`

**نقش:** کامپوننت مستقل براي نمايش Devlog/Blog در يک سکشن

**وضعيت فعلي:** در مسير اصلي صفحه استفاده نمي شود (صفحه اختصاصي blog جايگزين آن است)

**زمان استفاده:** اگر بخواهي Blog را دوباره داخل homepage ادغام کني.
