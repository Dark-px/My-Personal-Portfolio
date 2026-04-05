# مستندات Core App و زيرساخت

اين فايل براي بخش هايي است که مستقيم UI سکشن نيستند، اما ستون فقرات پروژه را مي سازند.

## App Shell

### `src/main.tsx`

- نقطه ورود React
- لود `index.css` و `lenis.css`
- mount کردن `App`

### `src/App.tsx`

- providerها:
  - `QueryClientProvider`
  - `TooltipProvider`
  - `Toaster`
  - `Sonner`
- routeها:
  - `/` -> `Index`
  - `/blog` -> `BlogPage`
  - `*` -> `NotFound`
- منطق smooth scroll (`Lenis`)
- مديريت anchor scroll
- observer براي reveal animation کلاس هاي `.section-enter`

## Pages

### `src/pages/Index.tsx`

- صفحه اصلي
- orchestration سکشن هاي portfolio

### `src/pages/BlogPage.tsx`

- صفحه محتواي وبلاگ/دولوگ
- SEO meta + structured data

### `src/pages/NotFound.tsx`

- صفحه 404

## Hooks

### `src/hooks/use-mobile.tsx`

- تشخيص mobile based on breakpoint

### `src/hooks/use-toast.ts`

- مديريت toast state
- dispatch/update/dismiss

## Libraries

### `src/lib/scroll.ts`

- helper اسکرول به anchor با درنظر گرفتن ارتفاع nav
- سازگار با Lenis

### `src/lib/medium.ts`

- منطق fetch/transform مربوط به Medium

### `src/lib/utils.ts`

- `cn()` براي merge کلاس ها
- `toEnDigits()` براي تبديل ارقام فارسي/عربي به انگليسي

### `src/lib/types.ts`

- typeهاي عمومي API/User/Menu

## Integrations

### `src/integrations/supabase/client.ts`

- ساخت Supabase client
- هشدار در dev اگر env کامل نباشد

### `src/integrations/supabase/types.ts`

- typeهاي database

## فايل هاي استايل مهم

- `src/index.css` -> global styles + animations + utility classes
- `src/App.css` -> سبک هاي عمومي محدود
