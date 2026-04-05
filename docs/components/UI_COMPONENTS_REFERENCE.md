# رفرنس کامپوننت هاي UI

اين پروژه مجموعه کامل UI primitives را در `src/components/ui` نگه مي دارد.

هدف اين کار:
- توسعه سريع فيچرهاي بعدي
- يکدست بودن ظاهر و الگوهاي تعامل
- جلوگيري از ساخت UI تکراري

## کامپوننت هاي استفاده شده به صورت مستقيم در پروژه فعلي

- `button.tsx`
- `tooltip.tsx`
- `toaster.tsx`
- `sonner.tsx`
- `card.tsx`
- `skeleton.tsx`
- `toast.tsx` (از طريق `hooks/use-toast.ts`)

بقيه کامپوننت ها آماده هستند و هر زمان لازم بود مي تواني وارد featureهاي جديد کني.

---

## 1) Actions و Inputs

- `button.tsx` - دکمه با variantهاي مختلف
- `input.tsx` - input استاندارد
- `textarea.tsx` - textarea
- `label.tsx` - label فرم
- `checkbox.tsx` - checkbox
- `radio-group.tsx` - radio group
- `select.tsx` - select/dropdown
- `switch.tsx` - toggle switch
- `slider.tsx` - بازه مقداري (range)
- `input-otp.tsx` - ورودي OTP
- `toggle.tsx` - toggle single
- `toggle-group.tsx` - toggle چندتايي

## 2) Overlay, Dialog, Navigation Layers

- `dialog.tsx` - modal dialog
- `alert-dialog.tsx` - dialog تاييدي
- `sheet.tsx` - پنل کشويي
- `drawer.tsx` - drawer
- `popover.tsx` - popup مرتبط با عنصر
- `hover-card.tsx` - کارت hover
- `tooltip.tsx` - tooltip
- `dropdown-menu.tsx` - منوي dropdown
- `context-menu.tsx` - منوي راست کليک
- `menubar.tsx` - menubar
- `navigation-menu.tsx` - navigation menu structured
- `command.tsx` - command palette

## 3) Layout و Structure

- `accordion.tsx` - accordion
- `collapsible.tsx` - collapse container
- `separator.tsx` - خط جداکننده
- `resizable.tsx` - layout resizable
- `scroll-area.tsx` - اسکرول سفارشي
- `aspect-ratio.tsx` - کنترل نسبت تصوير
- `sidebar.tsx` - سيستم کامل sidebar

## 4) Data Display

- `card.tsx` - کارت محتوا
- `badge.tsx` - badge/tag
- `avatar.tsx` - آواتار
- `table.tsx` - جدول
- `chart.tsx` - نمودار
- `carousel.tsx` - اسلايدر/کاروسل
- `calendar.tsx` - تقويم
- `pagination.tsx` - صفحه بندي
- `breadcrumb.tsx` - مسير ناوبري
- `progress.tsx` - progress
- `tabs.tsx` - تب ها

## 5) Feedback و Notifications

- `alert.tsx` - پيام هشدار
- `toast.tsx` - primitive toast
- `toaster.tsx` - renderer براي toast
- `sonner.tsx` - toast provider مبتني بر sonner
- `skeleton.tsx` - اسکلت loading

## 6) Form Abstractions

- `form.tsx` - abstraction براي فرم و validation

## 7) هوک مربوط به UI

- `use-toast.ts` - مديريت toast state

---

## نکته هاي شخصي سازي UI

1. اگر خواستي لحن سايت را حفظ کني:
   - اول `button.tsx`, `card.tsx`, `badge.tsx` را customize کن

2. اگر feature جديد مي سازي:
   - اول از primitive آماده استفاده کن، بعد اگر نياز بود کامپوننت سفارشي بساز

3. استايل global:
   - `src/index.css`
