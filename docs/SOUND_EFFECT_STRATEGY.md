# Sound Effects Strategy (Portfolio)

## هدف

اضافه‌کردن ساند افکت‌های خیلی ظریف برای افزایش حس زنده‌بودن سایت، بدون آزار کاربر و بدون آسیب به Performance.

---

## پیشنهاد کلی (Minimal + حرفه‌ای)

برای پروژه شما بهترین رویکرد:

1. افکت‌های کوتاه و مینیمال
2. صدای کم (Low Volume)
3. فقط روی تعامل‌های مهم
4. امکان خاموش/روشن‌کردن صدا

---

## چه صداهایی مناسب این سایت هستند؟

### 1) Hover UI Tick (خیلی ضعیف)
- استفاده: Hover روی CTAهای اصلی و لینک‌های مهم
- جنس صدا: Click نرم / Tick دیجیتال
- مدت: `30ms` تا `80ms`
- ولوم پیشنهادی: `0.06` تا `0.12`

### 2) Navigation Click
- استفاده: کلیک روی آیتم‌های Navbar
- جنس صدا: Tap کوتاه و تمیز
- مدت: `50ms` تا `120ms`
- ولوم پیشنهادی: `0.10` تا `0.16`

### 3) Section Enter Soft Cue (اختیاری)
- استفاده: وقتی کاربر به سکشن جدید می‌رسد (با throttle)
- جنس صدا: Whoosh خیلی کوتاه و ملایم
- مدت: `120ms` تا `250ms`
- ولوم پیشنهادی: `0.05` تا `0.10`

### 4) CTA Confirm
- استفاده: کلیک روی دکمه‌های مهم مثل `GO TO BLOG PAGE` یا `Send Message`
- جنس صدا: Confirm click کوتاه
- مدت: `80ms` تا `160ms`
- ولوم پیشنهادی: `0.12` تا `0.20`

> برای شروع، همین 2 مورد اول (Hover + Nav Click) کافی و امن هستند.

---

## چه چیزهایی نذاریم؟

- موسیقی پس‌زمینه Auto-play
- صدا روی هر hover ریز (باعث خستگی می‌شود)
- صداهای بلند یا با فرکانس تیز
- صداهای زیاد روی موبایل

---

## UX Rules (خیلی مهم)

1. **Default: خاموش یا خیلی ضعیف**
2. **اولین تعامل کاربر** بعد صدا فعال شود (قانون مرورگر)
3. **Toggle صدا** در Navbar یا Footer داشته باشیم (`SOUND ON/OFF`)
4. تنظیمات صدا در `localStorage` ذخیره شود
5. اگر `prefers-reduced-motion` یا Data Saver فعال بود، صدا محدودتر شود

---

## پیاده‌سازی پیشنهادی فنی

## گزینه A (پیشنهادی): Web Audio API ساده
- وابستگی اضافه نمی‌خواهد
- کنترل دقیق روی latency و volume
- مناسب برای افکت‌های کوتاه

### ساختار پیشنهادی

- `src/lib/sound.ts`
  - `initAudioContext()`
  - `playHoverTick()`
  - `playNavClick()`
  - `playCtaConfirm()`
  - `setSoundEnabled(boolean)`
  - `setMasterVolume(number)`

- `src/components/portfolio/SoundToggle.tsx`
  - دکمه ON/OFF
  - sync با localStorage

---

## کیفیت فایل صوتی

- فرمت: `mp3` یا `ogg`
- حجم هر افکت: زیر `20KB`
- Sample rate: `44.1kHz`
- تعداد فایل: حداکثر 3 تا 5 افکت

---

## فایل افکت صدا را از کجا تهیه کنم؟

برای پروژه شخصی/پورتفولیو، این منابع خوب هستند:

### 1) Pixabay Sound Effects
- لینک: `https://pixabay.com/sound-effects/`
- مزیت: رایگان، تنوع بالا، دانلود سریع
- نکته: قبل استفاده، لایسنس هر فایل را چک کن (ممکن است attribution توصیه شود)

### 2) Mixkit
- لینک: `https://mixkit.co/free-sound-effects/`
- مزیت: افکت‌های کوتاه مناسب UI
- نکته: شرایط استفاده هر دسته را بررسی کن

### 3) Freesound
- لینک: `https://freesound.org/`
- مزیت: آرشیو بسیار بزرگ
- نکته مهم: لایسنس‌ها متفاوت‌اند (CC0 / Attribution / Non-Commercial)

### 4) Kenney (Game/UI assets)
- لینک: `https://kenney.nl/assets?q=audio`
- مزیت: مناسب تم گیم/دیجیتال
- نکته: سبک صداها با فضای سایت شما هم‌خوان است

### 5) ZapSplat
- لینک: `https://www.zapsplat.com/`
- مزیت: کتابخانه بزرگ حرفه‌ای
- نکته: در پلن رایگان معمولاً نیاز به attribution دارد

---

## چه کلیدواژه‌ای سرچ کنم؟

برای تم سایت شما این keywordها خوب جواب می‌دهند:

- `ui click soft`
- `digital tick`
- `minimal tap`
- `interface hover`
- `subtle whoosh short`

---

## چطور سریع آماده استفاده‌شان کنم؟

1. فایل خام را دانلود کن (`wav/mp3`).
2. در Audacity یا هر ادیتور ساده:
   - Trim کوتاه (کمتر از `200ms`)
   - Fade-in/Fade-out خیلی کم
   - Normalize ملایم (بدون بلند شدن زیاد)
3. خروجی بگیر با:
   - `mp3` (عمومی)
   - یا `ogg` (حجم کمتر)
4. در مسیر پروژه بگذار:
   - `public/sounds/ui-click.mp3`
   - `public/sounds/nav-tap.mp3`
   - `public/sounds/cta-confirm.mp3`

---

## نکته حقوقی (خیلی مهم)

- هر فایل را با لایسنس خودش نگه دار (اسکرین‌شات/لینک منبع).
- اگر attribution لازم است، در `README` یا `docs` اضافه کن.
- از افکت‌های بدون لایسنس مشخص در پروژه عمومی استفاده نکن.

---

## Performance / SEO / Accessibility

- Lazy load فایل‌های صوتی بعد از اولین interaction
- عدم پخش خودکار
- عدم تداخل با screen reader (صدا purely decorative)
- throttle برای افکت‌های تکراری

---

## Roadmap اجرا

### فاز 1 (پیشنهادی برای همین پروژه)
1. Sound manager ساده (`sound.ts`)
2. افکت برای Navbar click
3. افکت برای CTA click
4. Toggle خاموش/روشن + localStorage

### فاز 2
1. Hover tick برای لینک‌های مهم (نه همه عناصر)
2. شدت صدا adaptive برای موبایل

### فاز 3
1. افکت subtle برای تغییر سکشن‌ها (اختیاری)
2. تست A/B روی UX

---

## جمع‌بندی

برای تم فعلی سایت شما (dark/minimal/modern)، بهترین نتیجه از:
- **click/tick کوتاه**
- **ولوم پایین**
- **کنترل کاربر (on/off)**
به دست میاد.

اگر بخوای، قدم بعدی من می‌تونه پیاده‌سازی واقعی **فاز 1** باشه (با کد تمیز و بدون کتابخانه اضافی).
