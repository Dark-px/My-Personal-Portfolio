# راه اندازي پروژه (Setup)

اين پروژه با `Vite + React + TypeScript` ساخته شده و براي توسعه سريع شخصي کاملا مناسب است.

## پيش نيازها

- Node.js نسخه 18 يا بالاتر (ترجيحا 20+)
- npm نسخه 9 يا بالاتر

## نصب و اجرا

```bash
npm install
npm run dev
```

خروجي پيش فرض در حالت توسعه:

- `http://localhost:8080`

## دستورات مهم

```bash
npm run dev        # اجراي محيط توسعه
npm run typecheck  # بررسي TypeScript
npm run lint       # بررسي کيفيت کد
npm run build      # ساخت نسخه production
npm run preview    # پيش نمايش build
```

## متغيرهاي محيطي

فايل نمونه:

- `.env.example`

فايل واقعي:

- `.env` (خودت مي سازي)

```bash
cp .env.example .env
```

### متغيرهاي اصلي

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_API_URL`
- `VITE_PROJECT_ID`

### متغيرهاي مربوط به Medium

- `VITE_MEDIUM_USERNAME`
- `VITE_MEDIUM_FEATURED_POST_1`
- `VITE_MEDIUM_FEATURED_POST_2`
- `VITE_MEDIUM_FEATURED_POST_3`

اگر `VITE_MEDIUM_USERNAME` تنظيم نشود، بخش Blog/Featured Posts خطا نشان مي دهد (رفتار فعلي کد به همين شکل طراحي شده).

## ديپلوي (Cloudflare Pages)

تنظيمات استاندارد براي اين پروژه:

- Build command: `npm run build`
- Output directory: `dist`

دامنه فعلي پروژه:

- `https://parsaghaei.dev`

## عيب يابي سريع

### صفحه سفيد يا متن ها لود نمي شوند

1. `npm run dev` را دوباره اجرا کن
2. در مرورگر Hard Refresh بزن (`Ctrl + Shift + R`)
3. console را چک کن
4. اگر تازه `.env` را عوض کرده اي، dev server را restart کن

### خطاي مربوط به Medium

- اول `VITE_MEDIUM_USERNAME` را در `.env` تنظيم کن
- سپس صفحه `/blog` را چک کن

### خطاي مربوط به Supabase

- اگر متغيرهاي Supabase تنظيم نشده باشند، در dev فقط هشدار مي بيني
- تا زماني که از قابليت هاي Supabase استفاده نکني، سايت اصلي بالا مي آيد
