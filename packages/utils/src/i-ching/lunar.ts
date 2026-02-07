/* eslint-disable @typescript-eslint/no-unused-vars */
// ====================================================
// 1) HẰNG SỐ & KIỂU DỮ LIỆU CÔNG KHAI
// ====================================================
export const CAN = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'] as const
export const CHI = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'] as const

export const CHI_MONTH = [
	'',
	'Dần',
	'Mão',
	'Thìn',
	'Tỵ',
	'Ngọ',
	'Mùi',
	'Thân',
	'Dậu',
	'Tuất',
	'Hợi',
	'Tý',
	'Sửu',
] as const

export const TIETKHI = [
	'Xuân phân',
	'Thanh minh',
	'Cốc vũ',
	'Lập hạ',
	'Tiểu mãn',
	'Mang chủng',
	'Hạ chí',
	'Tiểu thử',
	'Đại thử',
	'Lập thu',
	'Xử thử',
	'Bạch lộ',
	'Thu phân',
	'Hàn lộ',
	'Sương giáng',
	'Lập đông',
	'Tiểu tuyết',
	'Đại tuyết',
	'Đông chí',
	'Tiểu hàn',
	'Đại hàn',
	'Lập xuân',
	'Vũ thủy',
	'Kinh trập',
] as const

// 24 tiết khí → Nguyệt lệnh địa chi (theo bảng tháng Dần…Sửu)
export const TIETKHI_MONTH_CHI = [
	// 0  Xuân phân
	'Mão',
	// 1  Thanh minh
	'Thìn',
	// 2  Cốc vũ
	'Thìn',
	// 3  Lập hạ
	'Tỵ',
	// 4  Tiểu mãn
	'Tỵ',
	// 5  Mang chủng
	'Ngọ',
	// 6  Hạ chí
	'Ngọ',
	// 7  Tiểu thử
	'Mùi',
	// 8  Đại thử
	'Mùi',
	// 9  Lập thu
	'Thân',
	// 10 Xử thử
	'Thân',
	// 11 Bạch lộ
	'Dậu',
	// 12 Thu phân
	'Dậu',
	// 13 Hàn lộ
	'Tuất',
	// 14 Sương giáng
	'Tuất',
	// 15 Lập đông
	'Hợi',
	// 16 Tiểu tuyết
	'Hợi',
	// 17 Đại tuyết
	'Tý',
	// 18 Đông chí
	'Tý',
	// 19 Tiểu hàn
	'Sửu',
	// 20 Đại hàn
	'Sửu',
	// 21 Lập xuân
	'Dần',
	// 22 Vũ thủy
	'Dần',
	// 23 Kinh trập
	'Mão',
] as const

// Kinh độ tham chiếu (độ Đông dương)
export const LONGITUDE_HANOI = 105.85
export const LONGITUDE_HCM = 106.7

export type HolidayItem = { d: number; m: number; i: string }
export const LE: { solar: HolidayItem[]; lunar: HolidayItem[] } = {
	solar: [
		{ d: 1, m: 1, i: 'Tết Dương lịch' },
		{ d: 9, m: 1, i: 'Ngày Học sinh - Sinh viên Việt Nam' },
		{ d: 3, m: 2, i: 'Ngày thành lập Đảng Cộng sản Việt Nam' },
		{ d: 27, m: 2, i: 'Ngày Thầy thuốc Việt Nam' },
		{ d: 8, m: 3, i: 'Ngày Quốc tế Phụ Nữ' },
		{ d: 26, m: 3, i: 'Ngày thành lập Đoàn Thanh niên Cộng sản Hồ Chí Minh' },
		{ d: 21, m: 4, i: 'Ngày Sách Việt Nam' },
		{ d: 30, m: 4, i: 'Ngày Thống nhất đất nước' },
		{ d: 1, m: 5, i: 'Ngày Quốc tế Lao động' },
		{ d: 15, m: 5, i: 'Ngày thành lập Đội Thiếu niên Tiền phong Hồ Chí Minh' },
		{ d: 19, m: 5, i: 'Ngày sinh của Chủ tịch Hồ Chí Minh' },
		{ d: 1, m: 6, i: 'Ngày Quốc tế Thiếu nhi' },
		{ d: 5, m: 6, i: 'Ngày Bác Hồ ra đi tìm đường cứu nước' },
		{ d: 27, m: 7, i: 'Ngày Thương binh Liệt sĩ' },
		{ d: 19, m: 8, i: 'Ngày Cách mạng tháng Tám thành công' },
		{ d: 2, m: 9, i: 'Ngày Quốc khánh' },
		{ d: 13, m: 10, i: 'Ngày Doanh nhân Việt Nam' },
		{ d: 20, m: 10, i: 'Ngày thành lập Hội Phụ Nữ Việt Nam' },
		{ d: 20, m: 11, i: 'Ngày Nhà giáo Việt Nam' },
		{ d: 22, m: 12, i: 'Ngày thành lập Quân đội Nhân dân Việt Nam' },
		{ d: 24, m: 12, i: 'Ngày Lễ Giáng Sinh' },
	],
	lunar: [
		{ d: 1, m: 1, i: 'Tết Nguyên Đán' },
		{ d: 2, m: 1, i: 'Mồng 2 Tết Nguyên Đán' },
		{ d: 3, m: 1, i: 'Mồng 3 Tết Nguyên Đán' },
		{ d: 15, m: 1, i: 'Tết Nguyên tiêu' },
		{ d: 3, m: 3, i: 'Tết Hàn thực' },
		{ d: 10, m: 3, i: 'Giỗ Tổ Hùng Vương' },
		{ d: 15, m: 4, i: 'Lễ Phật Đản' },
		{ d: 5, m: 5, i: 'Tết Đoan ngọ' },
		{ d: 15, m: 7, i: 'Vu Lan' },
		{ d: 15, m: 8, i: 'Tết Trung thu' },
		{ d: 23, m: 12, i: 'Ông Táo chầu trời' },
	],
}

export type LunarDate = { day: number; month: number; year: number; leap: 0 | 1 }

export type HourSlot = {
	chi: string // Tý, Sửu, ...
	canChi: string // ví dụ "Bính Tý"
	start: string // "HH:MM GMT+7"
	end: string // "HH:MM GMT+7" (điểm đầu giờ kế tiếp)
	rangeMinutes: [number, number] // phút từ 00:00 local
}

// Meta object cho 1 tiết khí + nguyệt lệnh
export type TietKhiMeta = {
	index: number // 0..23
	name: (typeof TIETKHI)[number]
	nguyetLenh: string // Địa chi tháng: Dần, Mão, Thìn...
	nguyetLenhIndex: number // index trong CHI (0..11)
	solarLongitudeDeg: number // kinh độ mặt trời (bội 15°)
}

export type LunarBundle = {
	lunar: LunarDate
	zodiacYear: string
	zodiacMonth: string
	zodiacDay: string
	tietKhi: TietKhiMeta
	holiday: string
	phatLich: number
}

export type LunarSnapshot = {
	lunar: { day: number; month: number; year: number; yearIndex: number; hour: number; leap: 0 | 1 }
	zodiacYear: string
	zodiacMonth: string
	zodiacDay: string
	zodiacHour: string
	tietKhi: TietKhiMeta
	holiday: string
	phatLich: number
	solarNoon: { minutes: number; time: string }
	hours: HourSlot[]
	week: { name: string; none: string[]; todayIsNone: boolean; zodiacDay: string }
}

// ====================================================
// 2) TIỆN ÍCH SỐ HỌC & THỜI GIAN
// ====================================================
const toInt = (x: number) => Math.floor(x)
const deg2rad = (deg: number) => (Math.PI / 180) * deg
const norm2pi = (x: number) => x - Math.PI * 2 * Math.floor(x / (Math.PI * 2))
const wrapMins = (m: number) => ((Math.round(m) % 1440) + 1440) % 1440

/** Format HH:MM từ phút */
export function formatMinutesHHMM(mins: number): string {
	const m = ((mins % 1440) + 1440) % 1440
	const hh = Math.floor(m / 60)
		.toString()
		.padStart(2, '0')
	const mm = (m % 60).toString().padStart(2, '0')
	return `${hh}:${mm}`
}

/** Lấy time local (theo timeZone) & parts (dd/mm/yy) từ Date bất kỳ */
function localParts(date: Date, timeZone = 7) {
	const utc = date.getTime() + date.getTimezoneOffset() * 60_000
	const local = new Date(utc + timeZone * 3_600_000)
	return {
		local,
		dd: local.getDate(),
		mm: local.getMonth() + 1,
		yy: local.getFullYear(),
		minutesOfDay: local.getHours() * 60 + local.getMinutes(),
		tzLabel: timeZone >= 0 ? `GMT+${timeZone}` : `GMT${timeZone}`,
	}
}

/** Số thứ tự ngày trong năm theo giờ địa phương */
function dayOfYearLocal(date: Date, timeZone = 7): number {
	const { local } = localParts(date, timeZone)
	const start = new Date(local.getFullYear(), 0, 1)
	// chuẩn hóa start sang "local" theo timeZone
	const startUTC = start.getTime() - start.getTimezoneOffset() * 60_000
	const startLocal = new Date(startUTC + timeZone * 3_600_000)
	const diffMs = local.getTime() - startLocal.getTime()
	return Math.floor(diffMs / 86_400_000) + 1
}

/**
 * Lấy index của Địa chi năm (0=Tý, 1=Sửu, ..., 11=Hợi)
 */
export function getYearChiIndex(dd: number, mm: number, yy: number, timeZone = 7): number {
	const currentJd = julianDayFromDate(dd, mm, yy)
	const lapXuanJd = findLapXuanDate(yy)
	const actualYear = currentJd < lapXuanJd ? yy - 1 : yy
	return (actualYear + 8) % 12
}

// ====================================================
// 3) THIÊN VĂN MẶT TRỜI & MẶT TRĂNG (NOAA approximation)
// ====================================================
/** Phương trình thời gian (Equation of Time) xấp xỉ theo NOAA, phút. */
function equationOfTimeMinutes(n: number): number {
	const B = (2 * Math.PI * (n - 81)) / 364
	return 9.87 * Math.sin(2 * B) - 7.53 * Math.cos(B) - 1.5 * Math.sin(B)
}

export function sunLongitude(jdn: number): number {
	const T = (jdn - 2451545.0) / 36525.0
	const T2 = T * T
	const M = 357.5291 + 35999.0503 * T - 0.0001559 * T2 - 0.00000048 * T * T2
	const L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2
	const DL =
		(1.9146 - 0.004817 * T - 0.000014 * T2) * Math.sin(deg2rad(M)) +
		(0.019993 - 0.000101 * T) * Math.sin(deg2rad(2 * M)) +
		0.00029 * Math.sin(deg2rad(3 * M))
	let L = L0 + DL
	L = deg2rad(L)
	return norm2pi(L)
}

export function getSunLongitude(dayNumber: number, timeZone: number): number {
	return toInt((sunLongitude(dayNumber - 0.5 - timeZone / 24) / Math.PI) * 6)
}

export function newMoon(k: number): number {
	const T = k / 1236.85
	const T2 = T * T
	const T3 = T2 * T
	let Jd1 = 2415020.75933 + 29.53058868 * k + 0.0001178 * T2 - 0.000000155 * T3
	Jd1 += 0.00033 * Math.sin(deg2rad(166.56 + 132.87 * T - 0.009173 * T2))
	const M = 359.2242 + 29.10535608 * k - 0.0000333 * T2 - 0.00000347 * T3
	const Mprime = 306.0253 + 385.81691806 * k + 0.0107306 * T2 + 0.00001236 * T3
	const F = 21.2964 + 390.67050646 * k - 0.0016528 * T2 - 0.00000239 * T3
	const C =
		(0.1734 - 0.000393 * T) * Math.sin(deg2rad(M)) +
		0.0021 * Math.sin(deg2rad(2 * M)) -
		0.4068 * Math.sin(deg2rad(Mprime)) +
		0.0161 * Math.sin(deg2rad(2 * Mprime)) -
		0.0004 * Math.sin(deg2rad(3 * Mprime)) +
		0.0104 * Math.sin(deg2rad(2 * F)) -
		0.0051 * Math.sin(deg2rad(M + Mprime)) -
		0.0074 * Math.sin(deg2rad(M - Mprime)) +
		0.0004 * Math.sin(deg2rad(2 * F + M)) -
		0.0004 * Math.sin(deg2rad(2 * F - M)) -
		0.0006 * Math.sin(deg2rad(2 * F + Mprime)) +
		0.001 * Math.sin(deg2rad(2 * F - Mprime)) +
		0.0005 * Math.sin(deg2rad(2 * M + M))
	const deltaT =
		T < -11
			? 0.001 + 0.000839 * T + 0.0002261 * T2 - 0.00000845 * T3 - 0.000000081 * T * T3
			: -0.000278 + 0.000265 * T + 0.000262 * T2
	return Jd1 + C - deltaT
}

// ====================================================
// 4) ĐỔI DƯƠNG → ÂM (Julian day & Âm lịch Việt Nam)
// ====================================================
export function julianDayFromDate(dd: number, mm: number, yy: number): number {
	const tempA = toInt((14 - mm) / 12)
	const tempYear = yy + 4800 - tempA
	const tempMonth = mm + 12 * tempA - 3
	let jd =
		dd +
		toInt((153 * tempMonth + 2) / 5) +
		365 * tempYear +
		toInt(tempYear / 4) -
		toInt(tempYear / 100) +
		toInt(tempYear / 400) -
		32045
	if (jd < 2299161) jd = dd + toInt((153 * tempMonth + 2) / 5) + 365 * tempYear + toInt(tempYear / 4) - 32083
	return jd
}

export function julianDayToDate(jd: number): [day: number, month: number, year: number] {
	let a: number, b: number, c: number
	if (jd > 2299160) {
		a = jd + 32044
		b = toInt((4 * a + 3) / 146097)
		c = a - toInt((b * 146097) / 4)
	} else {
		b = 0
		c = jd + 32082
	}
	const d = toInt((4 * c + 3) / 1461)
	const e = c - toInt((1461 * d) / 4)
	const m = toInt((5 * e + 2) / 153)
	const day = e - toInt((153 * m + 2) / 5) + 1
	const month = m + 3 - 12 * toInt(m / 10)
	const year = b * 100 + d - 4800 + toInt(m / 10)
	return [day, month, year]
}

export function getNewMoonDay(k: number, timeZone: number): number {
	return toInt(newMoon(k) + 0.5 + timeZone / 24.0)
}

export function getLunarMonth11(yy: number, timeZone: number): number {
	const off = julianDayFromDate(31, 12, yy) - 2415021.0
	const k = toInt(off / 29.530588853)
	let nm = getNewMoonDay(k, timeZone)
	if (getSunLongitude(nm, timeZone) >= 9) nm = getNewMoonDay(k - 1, timeZone)
	return nm
}

export function getLeapMonthOffset(a11: number, timeZone: number): number {
	const k = toInt((a11 - 2415021.076998695) / 29.530588853 + 0.5)
	let last = 0
	let i = 1
	let arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone)
	while (true) {
		last = arc
		i += 1
		arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone)
		if (!(arc !== last && i < 14)) break
	}
	return i - 1
}

export function solarToLunar(solarDay: number, solarMonth: number, solarYear: number, timeZone = 7): LunarDate {
	const dayNumber = julianDayFromDate(solarDay, solarMonth, solarYear)
	const k = toInt((dayNumber - 2415021.076998695) / 29.530588853)
	let monthStart = getNewMoonDay(k + 1, timeZone)
	if (monthStart > dayNumber) monthStart = getNewMoonDay(k, timeZone)

	let a11 = getLunarMonth11(solarYear, timeZone)
	let b11 = a11
	let lunarYear: number

	if (a11 >= monthStart) {
		lunarYear = solarYear
		a11 = getLunarMonth11(solarYear - 1, timeZone)
	} else {
		lunarYear = solarYear + 1
		b11 = getLunarMonth11(solarYear + 1, timeZone)
	}

	const lunarDay = dayNumber - monthStart + 1
	const diff = toInt((monthStart - a11) / 29.0)
	let lunarLeap: 0 | 1 = 0
	let lunarMonth = diff + 11

	if (b11 - a11 > 365) {
		const leapMonthDiff = getLeapMonthOffset(a11, timeZone)
		if (diff >= leapMonthDiff) lunarMonth = diff + 10
		if (diff === leapMonthDiff) lunarLeap = 1
	}

	if (lunarMonth > 12) lunarMonth -= 12
	if (lunarMonth >= 11 && diff < 4) lunarYear -= 1

	return { day: lunarDay, month: lunarMonth, year: lunarYear, leap: lunarLeap }
}

// ====================================================
// 5) CAN–CHI & TIẾT KHÍ
// ====================================================

/**
 * Tìm ngày Lập Xuân chính xác của năm dương lịch
 * Lập xuân có index = 21 trong TIETKHI (kinh độ mặt trời 315°)
 */
function findLapXuanDate(year: number): number {
	// Lập xuân thường rơi vào 3-5 tháng 2
	for (let day = 1; day <= 28; day++) {
		const jd = julianDayFromDate(day, 2, year)
		const longRad = sunLongitude(jd + 1)
		const index = toInt(longRad / (Math.PI / 12))
		if (index === 21) {
			return jd
		}
	}
	// Nếu không tìm thấy trong tháng 2, thử đầu tháng 3
	for (let day = 1; day <= 10; day++) {
		const jd = julianDayFromDate(day, 3, year)
		const longRad = sunLongitude(jd + 1)
		const index = toInt(longRad / (Math.PI / 12))
		if (index === 21) {
			return jd
		}
	}
	// Fallback: Lập xuân khoảng 4/2
	return julianDayFromDate(4, 2, year)
}

export function zodiacYear(dd: number, mm: number, yy: number, timeZone = 7): string {
	const currentJd = julianDayFromDate(dd, mm, yy)

	// Tìm ngày Lập Xuân của năm hiện tại
	const lapXuanJd = findLapXuanDate(yy)

	// Nếu chưa qua Lập xuân, dùng năm trước
	const actualYear = currentJd < lapXuanJd ? yy - 1 : yy

	const canIndex = (actualYear + 6) % 10
	const chiIndex = (actualYear + 8) % 12
	return `${CAN[canIndex]} ${CHI[chiIndex]}`
}

export function zodiacDay(dd: number, mm: number, yy: number): string {
	const jd = julianDayFromDate(dd, mm, yy)
	const canIndex = (jd + 9) % 10
	const chiIndex = (jd + 1) % 12
	return `${CAN[canIndex]} ${CHI[chiIndex]}`
}

export function zodiacMonth(month: number, year: number): string {
	const canIndex = (year * 12 + month + 3) % 10
	return `${CAN[canIndex]} ${CHI_MONTH[month]}`
}

export function lunarLeap(year: number): 0 | 1 {
	return ([0, 3, 6, 9, 11, 14, 17].includes(year % 19) ? 1 : 0) as 0 | 1
}

/** Lấy meta Tiết khí + Nguyệt lệnh thành 1 object */
// export function getTietKhiInfo(dd: number, mm: number, yy: number, timeZone = 7): TietKhiMeta {
// 	const jd = julianDayFromDate(dd, mm, yy)
// 	const longRad = sunLongitude(jd + 1)
// 	const index = toInt(longRad / (Math.PI / 12)) // 0..23
// 	const solarLongitudeDeg = index * 15

// 	const nguyetLenh = TIETKHI_MONTH_CHI[index]
// 	const nguyetLenhIndex = CHI.indexOf(nguyetLenh as (typeof CHI)[number])

// 	return {
// 		index,
// 		name: TIETKHI[index],
// 		nguyetLenh,
// 		nguyetLenhIndex,
// 		solarLongitudeDeg,
// 	}
// }
/** Lấy meta Tiết khí + Nguyệt lệnh thành 1 object */
export function getTietKhiInfo(dd: number, mm: number, yy: number, timeZone = 7): TietKhiMeta {
	const jd = julianDayFromDate(dd, mm, yy)
	const longRad = sunLongitude(jd + 1)
	const index = toInt(longRad / (Math.PI / 12)) % 24 // Đảm bảo index trong khoảng 0-23
	const solarLongitudeDeg = index * 15

	const nguyetLenh = TIETKHI_MONTH_CHI[index]!
	const nguyetLenhIndex = CHI.indexOf(nguyetLenh as (typeof CHI)[number])

	return {
		index,
		name: TIETKHI[index]!,
		nguyetLenh,
		nguyetLenhIndex,
		solarLongitudeDeg,
	}
}

// Hàm tiện: giữ API cũ, chỉ trả tên tiết khí (nếu ở đâu đó còn dùng)
export function tietKhi(dd: number, mm: number, yy: number, timeZone = 7): string {
	return getTietKhiInfo(dd, mm, yy, timeZone).name
}

export function dayStemIndex(dd: number, mm: number, yy: number): number {
	const jd = julianDayFromDate(dd, mm, yy)
	return (jd + 9) % 10
}

// ====================================================
// 5.1) TUẦN ÂM LỊCH "GIÁP …" & KHÔNG VONG THEO TUẦN
// ====================================================

// 6 neo chi của chu kỳ tuần "Giáp …" theo quy ước bạn đưa
const WEEK_ANCHOR_CHI = ['Tý', 'Tuất', 'Thân', 'Ngọ', 'Thìn', 'Dần'] as const

// Bản đồ "Tuần Giáp X" → cặp Không Vong
const KHONG_VONG_BY_WEEK_NAME: Record<string, string[]> = {
	'Giáp Tý': ['Tuất', 'Hợi'],
	'Giáp Tuất': ['Thân', 'Dậu'],
	'Giáp Thân': ['Ngọ', 'Mùi'],
	'Giáp Ngọ': ['Thìn', 'Tỵ'],
	'Giáp Thìn': ['Dần', 'Mão'],
	'Giáp Dần': ['Tý', 'Sửu'],
}

/**
 * Tính "Tuần Giáp …" theo quy ước 6 tuần.
 * Ý tưởng:
 *  - Lùi từ hôm nay về quá khứ tới ngày có Thiên Can = "Giáp".
 *  - Lấy Địa Chi của ngày đó để đặt tên tuần: "Giáp <Chi>".
 *  - (Bảo vệ) Nếu Chi không thuộc 6 neo, dời theo bước -2 chi (10 ngày) để khớp neo gần nhất.
 * Trả về thêm: todayIsNone (hôm nay có thuộc 2 Chi "Không Vong" không).
 */
// export function getLunarWeekInfo(
// 	dd: number,
// 	mm: number,
// 	yy: number
// ): { name: string; none: string[]; todayIsNone: boolean } {
// 	const jd = julianDayFromDate(dd, mm, yy)

// 	let j = jd
// 	while (CAN[(j + 9) % 10] !== 'Giáp') j--

// 	const chi = CHI[(j + 1) % 12]
// 	let weekName = `Giáp ${chi}`

// 	if (!WEEK_ANCHOR_CHI.includes(chi as (typeof WEEK_ANCHOR_CHI)[number])) {
// 		let idx = CHI.indexOf(chi)
// 		for (let k = 0; k < 12; k++) {
// 			idx = (idx - 2 + 12) % 12
// 			const candidate = `Giáp ${CHI[idx]}`
// 			if (candidate in KHONG_VONG_BY_WEEK_NAME) {
// 				weekName = candidate
// 				break
// 			}
// 		}
// 	}

// 	const none = KHONG_VONG_BY_WEEK_NAME[weekName] ?? []
// 	const todayChi = CHI[(jd + 1) % 12]
// 	const todayIsNone = none.includes(todayChi)

// 	return { name: weekName, none, todayIsNone }
// }
export function getLunarWeekInfo(
	dd: number,
	mm: number,
	yy: number
): { name: string; none: string[]; todayIsNone: boolean } {
	const jd = julianDayFromDate(dd, mm, yy)

	let j = jd
	while (CAN[(j + 9) % 10] !== 'Giáp') j--

	const chi = CHI[(j + 1) % 12]!
	let weekName = `Giáp ${chi}`

	if (!WEEK_ANCHOR_CHI.includes(chi as (typeof WEEK_ANCHOR_CHI)[number])) {
		let idx = CHI.indexOf(chi)
		for (let k = 0; k < 12; k++) {
			idx = (idx - 2 + 12) % 12
			const candidate = `Giáp ${CHI[idx]!}`
			if (candidate in KHONG_VONG_BY_WEEK_NAME) {
				weekName = candidate
				break
			}
		}
	}

	const none = KHONG_VONG_BY_WEEK_NAME[weekName] ?? []
	const todayChi = CHI[(jd + 1) % 12]!
	const todayIsNone = none.includes(todayChi)

	return { name: weekName, none, todayIsNone }
}

/** Hôm nay có rơi vào 2 chi "Không Vong" của tuần không? (tiện ích) */
export function isKhongVongTodayByWeek(dd: number, mm: number, yy: number): boolean {
	return getLunarWeekInfo(dd, mm, yy).todayIsNone
}

// ====================================================
// 6) THIÊN ĐỈNH (SOLAR NOON) & GIỜ ÂM THEO THIÊN ĐỈNH
// ====================================================
/** Offset phút giữa "đồng hồ thiên văn" & đồng hồ địa phương */
function solarOffsetMinutes(date: Date, timeZone = 7, longitudeDeg: number = LONGITUDE_HCM): number {
	const n = dayOfYearLocal(date, timeZone)
	const eot = equationOfTimeMinutes(n)
	const LSTM = 15 * timeZone
	return eot + 4 * (longitudeDeg - LSTM)
}

/** Thời điểm thiên đỉnh (phút từ 00:00 local) */
export function solarNoonMinutesLocal(date: Date, timeZone = 7, longitudeDeg: number = LONGITUDE_HCM): number {
	const noon = 12 * 60 - solarOffsetMinutes(date, timeZone, longitudeDeg)
	return wrapMins(noon)
}

/** Chỉ số khung giờ Chi (0..11; 0=Tý,...,6=Ngọ) theo thiên đỉnh. */
export function hourBranchIndexSolar(date: Date, timeZone = 7, longitudeDeg: number = LONGITUDE_HCM): number {
	const { minutesOfDay } = localParts(date, timeZone)
	const shifted = (((minutesOfDay - solarOffsetMinutes(date, timeZone, longitudeDeg)) % 1440) + 1440) % 1440
	const startRef = 23 * 60 // mốc đầu giờ Tý danh nghĩa
	return Math.floor(((shifted - startRef + 1440) % 1440) / 120)
}

/** Khoảng giờ Chi hiện tại (đã hiệu chỉnh theo thiên đỉnh) */
// export function hourBranchInfoSolar(
// 	date: Date,
// 	timeZone = 7,
// 	longitudeDeg: number = LONGITUDE_HCM
// ): { chiIndex: number; chi: string; rangeLocal: string; solarNoon: string } {
// 	const idx = hourBranchIndexSolar(date, timeZone, longitudeDeg)
// 	const offset = solarOffsetMinutes(date, timeZone, longitudeDeg)
// 	const { tzLabel } = localParts(date, timeZone)

// 	const startNominal = (23 * 60 + idx * 120) % 1440
// 	const endNominal = (startNominal + 120 - 1) % 1440 // kết thúc inclusive cho chuỗi hiển thị

// 	const startLocal = wrapMins(startNominal + offset)
// 	const endLocal = wrapMins(endNominal + offset)

// 	const rangeLocal =
// 		startLocal <= endLocal
// 			? `${formatMinutesHHMM(startLocal)}–${formatMinutesHHMM(endLocal)} ${tzLabel}`
// 			: `${formatMinutesHHMM(startLocal)}–24:00 ${tzLabel} / 00:00–${formatMinutesHHMM(endLocal)} ${tzLabel}`

// 	const solarNoon = `${formatMinutesHHMM(solarNoonMinutesLocal(date, timeZone, longitudeDeg))} ${tzLabel}`

// 	return { chiIndex: idx, chi: CHI[idx], rangeLocal, solarNoon }
// }
export function hourBranchInfoSolar(
	date: Date,
	timeZone = 7,
	longitudeDeg: number = LONGITUDE_HCM
): { chiIndex: number; chi: string; rangeLocal: string; solarNoon: string } {
	const idx = hourBranchIndexSolar(date, timeZone, longitudeDeg)
	const offset = solarOffsetMinutes(date, timeZone, longitudeDeg)
	const { tzLabel } = localParts(date, timeZone)

	const startNominal = (23 * 60 + idx * 120) % 1440
	const endNominal = (startNominal + 120 - 1) % 1440

	const startLocal = wrapMins(startNominal + offset)
	const endLocal = wrapMins(endNominal + offset)

	const rangeLocal =
		startLocal <= endLocal
			? `${formatMinutesHHMM(startLocal)}–${formatMinutesHHMM(endLocal)} ${tzLabel}`
			: `${formatMinutesHHMM(startLocal)}–24:00 ${tzLabel} / 00:00–${formatMinutesHHMM(endLocal)} ${tzLabel}`

	const solarNoon = `${formatMinutesHHMM(solarNoonMinutesLocal(date, timeZone, longitudeDeg))} ${tzLabel}`

	return { chiIndex: idx, chi: CHI[idx]!, rangeLocal, solarNoon }
}

/** Can–Chi của GIỜ theo thiên đỉnh */
export function zodiacHourSolar(
	date: Date,
	timeZone = 7,
	longitudeDeg: number = LONGITUDE_HCM
): { canIndex: number; chiIndex: number; canChi: string; rangeLocal: string; solarNoon: string } {
	const { dd, mm, yy } = localParts(date, timeZone)
	const canDay = dayStemIndex(dd, mm, yy)
	const { chiIndex, chi, rangeLocal, solarNoon } = hourBranchInfoSolar(date, timeZone, longitudeDeg)
	const canHour = (canDay * 2 + chiIndex) % 10
	return { canIndex: canHour, chiIndex, canChi: `${CAN[canHour]} ${chi}`, rangeLocal, solarNoon }
}

/** Danh sách 12 khung giờ hôm nay (theo thiên đỉnh) */
// export function getTodayLunarHours(
// 	date: Date = new Date(),
// 	timeZone = 7,
// 	longitudeDeg: number = LONGITUDE_HCM
// ): HourSlot[] {
// 	const { dd, mm, yy, tzLabel } = localParts(date, timeZone)
// 	const canDay = dayStemIndex(dd, mm, yy)
// 	const offset = solarOffsetMinutes(date, timeZone, longitudeDeg)

// 	const hours: HourSlot[] = []
// 	for (let i = 0; i < 12; i++) {
// 		const startNominal = (23 * 60 + i * 120) % 1440
// 		const endNominal = (startNominal + 120) % 1440 // exclusive
// 		const startLocal = wrapMins(startNominal + offset)
// 		const endLocal = wrapMins(endNominal + offset)
// 		const canHour = (canDay * 2 + i) % 10
// 		hours.push({
// 			chi: CHI[i],
// 			canChi: `${CAN[canHour]} ${CHI[i]}`,
// 			start: `${formatMinutesHHMM(startLocal)} ${tzLabel}`,
// 			end: `${formatMinutesHHMM(endLocal)} ${tzLabel}`,
// 			rangeMinutes: [startLocal, endLocal],
// 		})
// 	}
// 	return hours
// }
export function getTodayLunarHours(
	date: Date = new Date(),
	timeZone = 7,
	longitudeDeg: number = LONGITUDE_HCM
): HourSlot[] {
	const { dd, mm, yy, tzLabel } = localParts(date, timeZone)
	const canDay = dayStemIndex(dd, mm, yy)
	const offset = solarOffsetMinutes(date, timeZone, longitudeDeg)

	const hours: HourSlot[] = []
	for (let i = 0; i < 12; i++) {
		const startNominal = (23 * 60 + i * 120) % 1440
		const endNominal = (startNominal + 120) % 1440
		const startLocal = wrapMins(startNominal + offset)
		const endLocal = wrapMins(endNominal + offset)
		const canHour = (canDay * 2 + i) % 10
		hours.push({
			chi: CHI[i]!,
			canChi: `${CAN[canHour]!} ${CHI[i]!}`,
			start: `${formatMinutesHHMM(startLocal)} ${tzLabel}`,
			end: `${formatMinutesHHMM(endLocal)} ${tzLabel}`,
			rangeMinutes: [startLocal, endLocal],
		})
	}
	return hours
}

// ====================================================
// 7) LỄ HỘI
// ====================================================
export function checkHolidaySolar(dd: number, mm: number, holidays = LE): string {
	for (const item of holidays.solar) if (item.d === dd && item.m === mm) return `${item.i} (${item.d}/${item.m} DL)`
	return ''
}
export function checkHolidayLunar(dd: number, mm: number, holidays = LE): string {
	for (const item of holidays.lunar) if (item.d === dd && item.m === mm) return `${item.i} (${item.d}/${item.m} ÂL)`
	return ''
}
export function getHolidayString(
	solarDay: number,
	solarMonth: number,
	lunarDay: number,
	lunarMonth: number,
	holidays = LE
): string {
	const lunarStr = checkHolidayLunar(lunarDay, lunarMonth, holidays)
	const solarStr = checkHolidaySolar(solarDay, solarMonth, holidays)
	if (solarStr && lunarStr) return `${lunarStr}, ${solarStr}`
	return solarStr || lunarStr || ''
}

/**
 * Snapshot dựa trên thiên đỉnh:
 * - lunar.hour: 0..11 (0=Tý, 11=Hợi)
 * - zodiacHour: Can–Chi giờ hiện tại (theo thiên đỉnh)
 * - tietKhi: object meta (tên, nguyệt lệnh, kinh độ mặt trời,…)
 * - solarNoon: phút từ 00:00 và chuỗi "HH:MM GMT±X"
 * - hours: danh sách 12 khung giờ hôm nay (theo thiên đỉnh)
 * - week: Tuần "Giáp …" & cặp Không Vong của tuần + todayIsNone
 * - longitude mặc định: TP.HCM (106.7°E)
 */
export function getLunarSnapshotSolar(
	date: Date = new Date(),
	timeZone = 7,
	longitudeDeg: number = LONGITUDE_HCM
): LunarSnapshot {
	const { local, dd, mm, yy, tzLabel } = localParts(date, timeZone)

	const lunar = solarToLunar(dd, mm, yy, timeZone)
	const hourIdx = hourBranchIndexSolar(local, timeZone, longitudeDeg)
	const yearIdx = getYearChiIndex(dd, mm, yy, timeZone)

	const zYear = zodiacYear(dd, mm, yy, timeZone)
	const zMonth = zodiacMonth(lunar.month, lunar.year)
	const zDay = zodiacDay(dd, mm, yy)
	const { canChi: zHour } = zodiacHourSolar(local, timeZone, longitudeDeg)

	const tkInfo = getTietKhiInfo(dd, mm, yy, timeZone)
	const holiday = getHolidayString(dd, mm, lunar.day, lunar.month, LE)
	const phatLich = lunar.month > 4 || (lunar.month === 4 && lunar.day >= 15) ? lunar.leap + 544 : lunar.year + 543

	const noonMinutes = solarNoonMinutesLocal(local, timeZone, longitudeDeg)
	const noonTime = `${formatMinutesHHMM(noonMinutes)} ${tzLabel}`

	// Danh sách 12 giờ hôm nay
	const hours = getTodayLunarHours(local, timeZone, longitudeDeg)

	// Tuần & cặp Không Vong theo tuần (kèm todayIsNone)
	const week = { ...getLunarWeekInfo(dd, mm, yy), zodiacDay: zDay }

	return {
		lunar: {
			day: lunar.day,
			month: lunar.month,
			year: lunar.year,
			yearIndex: yearIdx, // ← THÊM DÒNG NÀY
			hour: hourIdx,
			leap: lunar.leap,
		},
		zodiacYear: zYear,
		zodiacMonth: zMonth,
		zodiacDay: zDay,
		zodiacHour: zHour,
		tietKhi: tkInfo,
		holiday,
		phatLich,
		solarNoon: { minutes: noonMinutes, time: noonTime },
		hours,
		week,
	}
}
