### How to use Dayjs util

```ts
import {
	d, // configured dayjs instance
	setLocale, // switch runtime locale
	formatDate, // quick formatter
	parseAndFormat, // parse by a format, then format out
	fromNow, // humanized distance
	toISO, // to ISO string (UTC)
	clampTo, // get start/end of unit
	parse, // parse into Dayjs (or null)
} from '@/utils/dayjs'

// Demo datetime
const sample = '2025-08-11 08:30' // interpreted in Asia/Ho_Chi_Minh (default tz)

// 1) d: dùng trực tiếp dayjs đã cấu hình (plugins, locale, tz)
console.log(d().format('YYYY-MM-DD HH:mm')) // -> current time in HCM
console.log(d(sample).add(2, 'day').format('L')) // -> "08/13/2025" (locale-aware L)
console.log(d(sample).tz('UTC').format('HH:mm')) // -> time converted to UTC

// 2) setLocale: đổi locale tức thời
setLocale('en')
console.log(d(sample).format('LL')) // -> "August 11, 2025"
setLocale('vi')
console.log(d(sample).format('LL')) // -> "11 tháng 8, 2025"

// 3) formatDate: format nhanh, mặc định 'MM/DD/YYYY'
console.log(formatDate(sample)) // -> "08/11/2025"
console.log(formatDate(sample, 'DD/MM/YYYY')) // -> "11/08/2025"
console.log(formatDate(sample, 'HH:mm, DD/MM', 'UTC')) // -> "01:30, 11/08" (convert to UTC first)
console.log(formatDate(null)) // -> "" (guard cho null/undefined)

// 4) parseAndFormat: parse theo input format (strict) rồi format lại
console.log(parseAndFormat('11-08-2025', 'DD-MM-YYYY', 'YYYY/MM/DD')) // -> "2025/08/11"
console.log(parseAndFormat('08/11/25 08:30', 'MM/DD/YY HH:mm', 'HH:mm [on] LLL'))
// -> ví dụ "08:30 on 11 August 2025" (nếu locale=en)

// 5) fromNow: khoảng cách thời gian có ngôn ngữ
console.log(fromNow('2025-08-10')) // -> "một ngày trước" (vi) / "a day ago" (en)

// 6) toISO: về ISO string (UTC)
console.log(toISO(sample)) // -> "2025-08-11T01:30:00.000Z"

// 7) clampTo: lấy đầu/cuối của đơn vị
console.log(clampTo(sample, 'day', 'start')?.format()) // -> "2025-08-11T00:00:00+07:00"
console.log(clampTo(sample, 'month', 'end')?.format('YYYY-MM-DD HH:mm'))
// -> "2025-08-31 23:59" (tùy lib có ms; format để xem rõ)

// 8) parse: trả về Dayjs (hoặc null), optional parseFmt & tz
const inst1 = parse('2025-08-11') // auto-parse
console.log(inst1?.format('YYYY/MM/DD')) // -> "2025/08/11"

const inst2 = parse('11-08-2025 08:30', 'DD-MM-YYYY HH:mm', 'UTC') // parse strict + convert tz
console.log(inst2?.format()) // -> "2025-08-11T08:30:00Z"

const bad = parse('31-02-2025', 'DD-MM-YYYY') // invalid date
console.log(bad) // -> null
```
