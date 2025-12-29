// Locales
import 'dayjs/locale/vi'
import 'dayjs/locale/en'

import dayjs, { type Dayjs, type OpUnitType } from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import duration from 'dayjs/plugin/duration'
import isBetween from 'dayjs/plugin/isBetween'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import relativeTime from 'dayjs/plugin/relativeTime'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import weekOfYear from 'dayjs/plugin/weekOfYear'

// Register plugins (safe to call multiple times)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(localizedFormat)
dayjs.extend(relativeTime)
dayjs.extend(customParseFormat)
dayjs.extend(advancedFormat)
dayjs.extend(isBetween)
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)
dayjs.extend(weekOfYear)
dayjs.extend(duration)

// Defaults for the whole app
dayjs.locale('en')
dayjs.tz.setDefault('Asia/Ho_Chi_Minh')

// Types
type DateInput = string | number | Date | Dayjs | null | undefined

// Short alias for the configured instance
const d = dayjs

// Switch runtime locale (e.g., 'en', 'vi')
const setLocale = (locale: string) => dayjs.locale(locale)

// Quick formatter (default MM/DD/YYYY). Optional tz converts before formatting.
const formatDate = (input: DateInput, fmt = 'MM/DD/YYYY', tz?: string): string => {
	if (input == null) return ''
	const inst = tz ? dayjs(input).tz(tz) : dayjs(input)
	return inst.isValid() ? inst.format(fmt) : ''
}

// Strict parse by input format, then format out. Optional tz converts before output.
const parseAndFormat = (input: string, parseFmt: string, outFmt = 'MM/DD/YYYY', tz?: string): string => {
	const base = dayjs(input, parseFmt, true)
	const inst = tz ? base.tz(tz) : base
	return inst.isValid() ? inst.format(outFmt) : ''
}

// Humanized distance: "a day ago", "in 2 hours"
const fromNow = (input: DateInput): string => {
	if (input == null) return ''
	const inst = dayjs(input)
	return inst.isValid() ? inst.fromNow() : ''
}

// ISO string (UTC)
const toISO = (input: DateInput): string => {
	if (input == null) return ''
	const inst = dayjs(input)
	return inst.isValid() ? inst.toDate().toISOString() : ''
}

// Start/end of a unit ('day', 'week', 'month', ...)
const clampTo = (input: DateInput, unit: OpUnitType, edge: 'start' | 'end' = 'start', tz?: string): Dayjs | null => {
	if (input == null) return null
	const base = tz ? dayjs(input).tz(tz) : dayjs(input)
	if (!base.isValid()) return null
	return edge === 'start' ? base.startOf(unit) : base.endOf(unit)
}

// Parse to Dayjs (or null). Optional parse format & tz.
const parse = (input: string, parseFmt?: string, tz?: string): Dayjs | null => {
	const base = parseFmt ? dayjs(input, parseFmt, true) : dayjs(input)
	if (!base.isValid()) return null
	return tz ? base.tz(tz) : base
}

// Barrel export
export { clampTo, d, formatDate, fromNow, parse, parseAndFormat, setLocale, toISO }
export type { DateInput }
export default dayjs
