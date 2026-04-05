# معماري پروژه و ساختار فولدرها

اين پروژه از نظر معماري عمدا ساده نگه داشته شده تا هم توسعه اش سريع باشد، هم نگهداري اش راحت.

## نماي کلي جريان برنامه

1. `src/main.tsx`
   - استارت اپ، لود cssها، mount ريشه React

2. `src/App.tsx`
   - Providerها (React Query, Tooltip, Toaster)
   - routeها (`/`, `/blog`, `*`)
   - مديريت smooth scroll (Lenis)
   - مديريت pause animation وقتي تب غيرفعال است

3. `src/pages/Index.tsx`
   - صفحه اصلي سايت
   - سرهم بندي سکشن هاي portfolio

4. `src/pages/BlogPage.tsx`
   - صفحه Blog/Devlog
   - دريافت داده Medium و رندر کارت ها

## ساختار فولدرها

```text
src/
  components/
    portfolio/   # سکشن هاي اصلي صفحه (Hero, Projects, About, ...)
    blog/        # (فعلا بخش blog داخل pages/BlogPage.tsx + portfolio components است)
    common/      # کامپوننت هاي reusable عمومي
    ui/          # UI primitives (shadcn/radix)
  hooks/         # هوک هاي reusable
  integrations/  # اتصال سرويس هاي خارجي (Supabase)
  lib/           # utilityها، helperها و typeها
  pages/         # صفحات route محور
  index.css      # سبک هاي global و animationها
  App.tsx        # shell اصلي اپ
  main.tsx       # ورودي اپ
```

## تقسيم مسئوليت ها

- `components/portfolio`:
  - فقط نمايش و تعاملات UI صفحه اصلي

- `pages`:
  - منطق route level و orchestration

- `lib`:
  - منطق قابل reuse خارج از UI
  - مثال: `src/lib/medium.ts`, `src/lib/scroll.ts`

- `components/ui`:
  - primitive هاي عمومي (Button, Dialog, Toast, ...)

## نقاط سفارشي سازي اصلي

- متن و هويت: `Hero`, `About`, `Contact`, `Footer`
- پروژه ها: `Projects`
- مسير يادگيري: `LearningJourney`
- بلاگ: `src/lib/medium.ts` + `BlogPage` + `FeaturedBlogs`
- انيميشن/استايل: `src/index.css`

## قراردادهاي مهم پروژه

1. Anchor navigation با ID
   - لينک هاي navbar و footer به ID سکشن ها وصل هستند

2. داده blog از Medium
   - از `rss2json` براي مصرف feed استفاده مي شود

3. انيميشن ها
   - بخشي با CSS و بخشي با `requestAnimationFrame`
   - وقتي تب inactive شود، animationها pause مي شوند

4. UI system
   - پروژه از primitiveهاي آماده `components/ui` استفاده مي کند تا توسعه featureهاي بعدي سريع باشد

## پيشنهاد براي توسعه تميز در ادامه

- اگر يک بخش جديد به homepage اضافه مي شود:
  1. کامپوننت را در `components/portfolio` بساز
  2. در `pages/Index.tsx` قرار بده
  3. اگر لازم بود آيتم nav به `Navigation.tsx` و `Footer.tsx` اضافه کن

- اگر feature data-driven اضافه مي شود:
  - منطق fetch/transform را به `lib` يا `hooks` ببر
  - UI را تا حد ممکن dumb نگه دار
