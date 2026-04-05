# راهنماي شخصي سازي سريع (Customization Playbook)

اگر مي خواهي سايت را با کمترين ريسک براي خودت شخصي سازي کني، اين چک ليست را به ترتيب برو.

## مرحله 1: هويت برند

فايل هاي اصلي:

- `src/components/portfolio/Hero.tsx`
- `src/components/portfolio/About.tsx`
- `src/components/portfolio/Footer.tsx`
- `src/components/portfolio/Contact.tsx`
- `index.html` (title, description, og tags)

کارها:
- نام و بيو
- لينک شبکه هاي اجتماعي
- ايميل تماس
- متن هاي معرفي

## مرحله 2: محتواي پروژه ها

فايل اصلي:

- `src/components/portfolio/Projects.tsx`

کارها:
- عنوان پروژه
- توصيف
- تکنولوژي
- لينک GitHub/Itch
- تصوير پروژه در `public/`

## مرحله 3: مسير يادگيري و داستان شخصي

فايل:

- `src/components/portfolio/LearningJourney.tsx`

کارها:
- WHAT I KNOW
- CURRENTLY LEARNING
- NEXT GOALS
- متن FUTURE VISION

## مرحله 4: بلاگ و Medium

فايل ها:

- `.env`
- `src/lib/medium.ts`
- `src/pages/BlogPage.tsx`

کارها:
- ست کردن `VITE_MEDIUM_USERNAME`
- (اختياري) لينک پست هاي featured
- تست صفحه `/blog`

## مرحله 5: استايل و انيميشن

فايل:

- `src/index.css`

کارها:
- تنظيم رنگ ها
- تنظيم شدت motion
- hover states
- فاصله سکشن ها

## مرحله 6: تست نهايي قبل ديپلوي

```bash
npm run typecheck
npm run lint
npm run build
```

سپس:
- تست desktop/mobile
- تست anchor navigation
- تست Blog/Devlog
- تست لينک هاي خارجي

## اشتباهات رايج که بهتر است پيشگيري شوند

1. عوض کردن ID سکشن بدون آپديت navbar/footer
2. گذاشتن placeholder link در production
3. فراموشي تنظيم env مربوط به Medium
4. تغيير CSS global بدون تست در موبايل

## پيشنهاد نگهداري ماهانه

- ماهي يک بار: بروزرسانی About/Projects/Journey
- ماهي يک بار: چک لينک هاي شبکه اجتماعي
- بعد از هر تغيیر بزرگ: يک `npm run build` کامل
