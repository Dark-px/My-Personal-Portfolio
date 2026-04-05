# مستندات کامپوننت هاي Common

اين دسته براي کامپوننت هايي است که به بخش خاصي از سايت وابسته نيستند و در چند جاي مختلف قابل استفاده اند.

## `src/components/common/EmptyState.tsx`

**کاربرد:** نمايش حالت خالي (وقتي داده اي وجود ندارد)

**قابل شخصي سازي:**
- آيکون
- عنوان و توضيح
- دکمه action

---

## `src/components/common/ErrorBoundary.tsx`

**کاربرد:** گرفتن خطاي runtime در subtree و جلوگيري از crash کامل UI

**قابل شخصي سازي:**
- UI fallback
- متن خطا
- دکمه retry

**نکته:** در حالت dev، `error.message` را نمايش مي دهد.

---

## `src/components/common/Loading.tsx`

شامل 3 ابزار سبک:

1. `Spinner`
2. `LoadingSkeleton`
3. `FullPageLoading`

**کاربرد:** نمايش loading state در سطح component يا page

---

## `src/components/common/ScrollIndicator.tsx`

**کاربرد:** نشانگر اسکرول ثابت در پايين صفحه

**وضعيت فعلي:** در رندر اصلي صفحه استفاده مستقيم ندارد، اما آماده استفاده است.

---

## `src/components/common/index.ts`

فايل barrel براي export کردن `common`ها از يک نقطه.
