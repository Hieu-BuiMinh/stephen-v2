# `@repo/stephen-v2-eslint-config`

Collection of internal eslint configurations for the monorepo.

---

## Why use `.js` instead of `.ts` for configuration files?

An excellent question! Even though the project uses 100% TypeScript, ESLint configuration files (as well as files like `tailwind.config.js`, `postcss.config.js`) are typically kept in `.js` or `.mjs` format for four main reasons:

### 1. Avoid Pre-Execution Compilation (Build Step)

The runtime environment for ESLint is **Node.js**. Node.js directly understands JavaScript (JS) but does not natively understand TypeScript (TS).
If you write config files in `.ts`, Node.js would need an intermediate compiler (like `ts-node` or `jiti`) to transpile them into JS every time you save or run `pnpm lint`. This significantly slows down the linter, which is especially problematic in large monorepos where thousands of files need to be linted.

### 2. Seamless Sharing Between Workspaces

In a Turborepo setup, the `@repo/stephen-v2-eslint-config` package is imported directly by other apps. If it were written in `.ts`, you would have to set up an additional build step (using `tsc` or `tsup`) to compile it to `.js` before `apps/me` could use it. By keeping it in `.js` format, other packages can consume it instantly without any complex build pipeline.

### 3. Full Type-Checking and Autocomplete!

Despite being a `.js` file, if you look at the top of the configs, you'll see this line:

```javascript
/** @type {import("eslint").Linter.Config[]} */
export const config = [ ... ]
```

This is **JSDoc**. Your code editor (VSCode / Cursor) reads this annotation and provides full autocomplete and type-checking for this `.js` file, making the developer experience virtually identical to a real `.ts` file.

### 4. ESLint 9 (Flat Config) Standard

The latest ESLint 9 version is highly optimized for Node's Native ES Modules. The default filenames it automatically looks for are `eslint.config.js` or `eslint.config.mjs`. While ESLint does support `eslint.config.ts`, their official documentation still recommends using `.js` for optimal performance.

**Summary:** Using `.js` combined with JSDoc for configuration files is the perfect middle ground: you get the **Type-checking of TypeScript** and the **blazing fast execution speed of pure JavaScript!**

---

## Tại sao các file cấu hình lại dùng đuôi `.js` thay vì `.ts`?

Một câu hỏi rất hay! Mặc dù dự án của bạn sử dụng TypeScript 100%, nhưng các file cấu hình ESLint (và cả những file như `tailwind.config.js`, `postcss.config.js`) thường được giữ nguyên ở định dạng `.js` hoặc `.mjs` vì 4 lý do chính sau đây:

### 1. Tránh việc phải "Build" (Compile) trước khi chạy

Môi trường chạy ESLint là **Node.js**. Node.js đọc hiểu trực tiếp JavaScript (JS), nhưng không hiểu TypeScript (TS).
Nếu bạn viết file config bằng `.ts`, Node.js sẽ cần phải dùng một công cụ biên dịch trung gian (như `ts-node` hoặc `jiti`) để dịch file đó sang JS mỗi lần bạn bấm lưu hoặc chạy lệnh `pnpm lint`. Điều này làm **giảm tốc độ linter đi rất nhiều**, đặc biệt là trong các monorepo lớn cần lint hàng nghìn file.

### 2. Dễ dàng chia sẻ (Share) giữa các Workspace

Trong mô hình Turborepo của bạn, package `@repo/stephen-v2-eslint-config` được các app khác import trực tiếp. Nếu nó được viết bằng `.ts`, bạn sẽ phải thiết lập thêm một bước build (bằng `tsc` hoặc `tsup`) để dịch nó ra `.js` trước khi `apps/me` có thể sử dụng được.
Bằng cách giữ nó ở định dạng `.js`, các package khác có thể sử dụng ngay lập tức mà không cần qua bất kỳ quy trình build phức tạp nào.

### 3. Vẫn được Type-check và Autocomplete đầy đủ!

Tuy là file `.js`, nhưng nếu bạn để ý, trong các file config tôi làm có dòng này ở ngay trên đầu:

```javascript
/** @type {import("eslint").Linter.Config[]} */
export const config = [ ... ]
```

Đây là **JSDoc**. Trình Editor (VSCode / Cursor) của bạn sẽ đọc dòng chú thích này và cung cấp tính năng tự động gợi ý (autocomplete), báo lỗi kiểu (type-checking) cho file `.js` này xuất sắc không khác gì một file `.ts` thực thụ.

### 4. Tiêu chuẩn của ESLint 9 (Flat Config)

Phiên bản ESLint 9 mới nhất được thiết kế tối ưu nhất cho Native ES Modules của Node. Tên file chuẩn mà nó tự động tìm kiếm là `eslint.config.js` hoặc `eslint.config.mjs`. Mặc dù ESLint có hỗ trợ `eslint.config.ts`, nhưng tài liệu chính thức của họ vẫn khuyên dùng `.js` để tối ưu hiệu năng.

**Tóm lại:** Dùng `.js` kết hợp với JSDoc cho các file cấu hình là sự lựa chọn hoàn hảo nhất: **vừa có Type-checking như TypeScript, lại vừa chạy nhanh như JavaScript thuần!**
