/**
 * Theme transition
 * primitives (MIT License)
 * Copyright (c) zephinax: https://github.com/zephinax
 * Source:
 *  - https://github.dev/zephinax/personal-website
 *
 * Modified by: Stephen
 */

// Thanks https://www.kibo-ui.com/components/contribution-graph

'use client'

import type { Dayjs } from '@repo/stephen-v2-utils'
import { cn, d } from '@repo/stephen-v2-utils'
import {
	createContext,
	type CSSProperties,
	Fragment,
	type HTMLAttributes,
	type ReactNode,
	useContext,
	useMemo,
} from 'react'

export type Activity = {
	date: string
	count: number
	level: number
}

type Week = Array<Activity | undefined>

// 0 = Sunday, 1 = Monday, ... 6 = Saturday
type WeekDay = 0 | 1 | 2 | 3 | 4 | 5 | 6

export type Labels = {
	months?: string[]
	weekdays?: string[]
	totalCount?: string
	legend?: {
		less?: string
		more?: string
	}
}

type MonthLabel = {
	weekIndex: number
	label: string
}

const DEFAULT_MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const DEFAULT_LABELS: Labels = {
	months: DEFAULT_MONTH_LABELS,
	weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	totalCount: '{{count}} activities in {{year}}',
	legend: {
		less: 'Less',
		more: 'More',
	},
}

const THEME = cn(
	// 'data-[level="0"]:fill-muted-foreground/5',
	// 'data-[level="1"]:fill-muted-foreground/20',
	// 'data-[level="2"]:fill-muted-foreground/40',
	// 'data-[level="3"]:fill-muted-foreground/60',
	// 'data-[level="4"]:fill-muted-foreground/80'
	'data-[level="0"]:fill-[#ebedf0] dark:data-[level="0"]:fill-[#161b22]',
	'data-[level="1"]:fill-[#9be9a8] dark:data-[level="1"]:fill-[#0e4429]',
	'data-[level="2"]:fill-[#40c463] dark:data-[level="2"]:fill-[#006d32]',
	'data-[level="3"]:fill-[#30a14e] dark:data-[level="3"]:fill-[#26a641]',
	'data-[level="4"]:fill-[#216e39] dark:data-[level="4"]:fill-[#39d353]'
)

function parseISO(date: string): Dayjs {
	return d(date)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function formatISO(date: Dayjs, _options?: { representation: 'date' }): string {
	// representation: 'date' => YYYY-MM-DD
	return date.format('YYYY-MM-DD')
}

function getDay(date: Dayjs): WeekDay {
	return date.day() as WeekDay
}

function getMonth(date: Dayjs): number {
	return date.month() // 0-11
}

function getYear(date: Dayjs): number {
	return date.year()
}

function subWeeks(date: Dayjs, amount: number): Dayjs {
	return date.subtract(amount, 'week')
}

function differenceInCalendarDays(dateLeft: Dayjs, dateRight: Dayjs): number {
	return dateLeft.startOf('day').diff(dateRight.startOf('day'), 'day')
}

/**
 * Giống date-fns/nextDay:
 * Trả về ngày "day" tiếp theo SAU date (nếu cùng thứ -> +7 ngày).
 */
function nextDay(date: Dayjs, day: WeekDay): Dayjs {
	const current = date.day() as WeekDay
	const delta = (day + 7 - current) % 7 || 7
	return date.add(delta, 'day')
}

/**
 * Giống date-fns/eachDayOfInterval
 */
function eachDayOfInterval(args: { start: Dayjs; end: Dayjs }): Dayjs[] {
	const { start, end } = args
	const days: Dayjs[] = []

	let current = start.startOf('day')
	const last = end.startOf('day')

	while (current.isBefore(last, 'day') || current.isSame(last, 'day')) {
		days.push(current)
		current = current.add(1, 'day')
	}

	return days
}

// --------------------------------------------

type ContributionGraphContextType = {
	data: Activity[]
	weeks: Week[]
	blockMargin: number
	blockRadius: number
	blockSize: number
	fontSize: number
	labels: Labels
	labelHeight: number
	maxLevel: number
	totalCount: number
	weekStart: WeekDay
	year: number
	width: number
	height: number
}

const ContributionGraphContext = createContext<ContributionGraphContextType | null>(null)

const useContributionGraph = () => {
	const context = useContext(ContributionGraphContext)

	if (!context) {
		throw new Error('ContributionGraph components must be used within a ContributionGraph')
	}

	return context
}

const fillHoles = (activities: Activity[]): Activity[] => {
	if (activities.length === 0) {
		return []
	}

	// Sort activities by date to ensure correct date range
	const sortedActivities = [...activities].sort((a, b) => a.date.localeCompare(b.date))

	const calendar = new Map<string, Activity>(activities.map((a) => [a.date, a]))

	const firstActivity = sortedActivities[0] as Activity
	const lastActivity = sortedActivities.at(-1)

	if (!lastActivity) {
		return []
	}

	return eachDayOfInterval({
		start: parseISO(firstActivity.date),
		end: parseISO(lastActivity.date),
	}).map((day) => {
		const date = formatISO(day, { representation: 'date' })

		if (calendar.has(date)) {
			return calendar.get(date) as Activity
		}

		return {
			date,
			count: 0,
			level: 0,
		}
	})
}

const groupByWeeks = (activities: Activity[], weekStart: WeekDay = 0): Week[] => {
	if (activities.length === 0) {
		return []
	}

	const normalizedActivities = fillHoles(activities)
	const firstActivity = normalizedActivities[0] as Activity
	const firstDate = parseISO(firstActivity.date)

	const firstCalendarDate = getDay(firstDate) === weekStart ? firstDate : subWeeks(nextDay(firstDate, weekStart), 1)

	const paddedActivities: Week = [
		...(new Array(differenceInCalendarDays(firstDate, firstCalendarDate)).fill(undefined) as Week),
		...normalizedActivities,
	]

	const remainder = paddedActivities.length % 7
	if (remainder !== 0) {
		paddedActivities.push(...new Array(7 - remainder).fill(undefined))
	}

	const numberOfWeeks = Math.ceil(paddedActivities.length / 7)

	return new Array(numberOfWeeks)
		.fill(undefined)
		.map((_, weekIndex) => paddedActivities.slice(weekIndex * 7, weekIndex * 7 + 7))
}

const getMonthLabels = (weeks: Week[], monthNames: string[] = DEFAULT_MONTH_LABELS): MonthLabel[] => {
	return weeks
		.reduce<MonthLabel[]>((labels, week, weekIndex) => {
			const firstActivity = week.find((activity) => activity !== undefined)

			if (!firstActivity) {
				throw new Error(`Unexpected error: Week ${weekIndex + 1} is empty: [${week}].`)
			}

			const month = monthNames[getMonth(parseISO(firstActivity.date))]

			if (!month) {
				const monthName = new Date(firstActivity.date).toLocaleString('en-US', {
					month: 'short',
				})
				throw new Error(`Unexpected error: undefined month label for ${monthName}.`)
			}

			const prevLabel = labels.at(-1)

			if (weekIndex === 0 || !prevLabel || prevLabel.label !== month) {
				return labels.concat({ weekIndex, label: month })
			}

			return labels
		}, [])
		.filter(({ weekIndex }, index, labels) => {
			const minWeeks = 3

			if (index === 0) {
				return labels[1] && labels[1].weekIndex - weekIndex >= minWeeks
			}

			if (index === labels.length - 1) {
				return weeks.slice(weekIndex).length >= minWeeks
			}

			return true
		})
}

export type ContributionGraphProps = HTMLAttributes<HTMLDivElement> & {
	data: Activity[]
	blockMargin?: number
	blockRadius?: number
	blockSize?: number
	fontSize?: number
	labels?: Labels
	maxLevel?: number
	style?: CSSProperties
	totalCount?: number
	weekStart?: WeekDay
	children: ReactNode
	className?: string
}

export const ContributionGraph = ({
	data,
	blockMargin = 4,
	blockRadius = 2,
	blockSize = 12,
	fontSize = 14,
	labels: labelsProp = undefined,
	maxLevel: maxLevelProp = 4,
	style = {},
	totalCount: totalCountProp = undefined,
	weekStart = 0,
	className,
	...props
}: ContributionGraphProps) => {
	const maxLevel = Math.max(1, maxLevelProp)
	const weeks = useMemo(() => groupByWeeks(data, weekStart), [data, weekStart])
	const LABEL_MARGIN = 8

	const labels = { ...DEFAULT_LABELS, ...labelsProp }
	const labelHeight = fontSize + LABEL_MARGIN

	const year = data.length > 0 ? getYear(parseISO(data[0].date)) : d().year()

	const totalCount =
		typeof totalCountProp === 'number' ? totalCountProp : data.reduce((sum, activity) => sum + activity.count, 0)

	const width = weeks.length * (blockSize + blockMargin) - blockMargin
	const height = labelHeight + (blockSize + blockMargin) * 7 - blockMargin

	if (data.length === 0) {
		return null
	}

	return (
		<ContributionGraphContext.Provider
			value={{
				data,
				weeks,
				blockMargin,
				blockRadius,
				blockSize,
				fontSize,
				labels,
				labelHeight,
				maxLevel,
				totalCount,
				weekStart,
				year,
				width,
				height,
			}}
		>
			<div
				className={cn('flex w-max max-w-full flex-col gap-2', className)}
				style={{ fontSize, ...style }}
				{...props}
			/>
		</ContributionGraphContext.Provider>
	)
}

export type ContributionGraphBlockProps = HTMLAttributes<SVGRectElement> & {
	activity?: Activity
	dayIndex: number
	weekIndex: number
}

export const ContributionGraphBlock = ({
	activity,
	dayIndex,
	weekIndex,
	className,
	...props
}: ContributionGraphBlockProps) => {
	const { blockSize, blockMargin, blockRadius, labelHeight, maxLevel } = useContributionGraph()

	if ((activity?.level || 0) < 0 || (activity?.level || 0) > maxLevel) {
		throw new RangeError(
			`Provided activity level ${activity?.level || 0} for ${activity?.date || '-'} is out of range. It must be between 0 and ${maxLevel}.`
		)
	}

	return (
		<rect
			className={cn(THEME, className)}
			data-count={activity?.count}
			data-date={activity?.date}
			data-level={activity?.level}
			height={blockSize}
			rx={blockRadius || 2}
			ry={blockRadius || 2}
			width={blockSize}
			x={(blockSize + blockMargin) * weekIndex}
			y={labelHeight + (blockSize + blockMargin) * dayIndex}
			{...props}
		/>
	)
}

export type ContributionGraphCalendarProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
	hideMonthLabels?: boolean
	className?: string
	children: (props: { activity?: Activity; dayIndex: number; weekIndex: number }) => ReactNode
}

export const ContributionGraphCalendar = ({
	title = 'Contribution Graph',
	hideMonthLabels = false,
	className,
	children,
	...props
}: ContributionGraphCalendarProps) => {
	const { weeks, width, height, blockSize, blockMargin, labels } = useContributionGraph()

	const monthLabels = useMemo(() => getMonthLabels(weeks, labels.months), [weeks, labels.months])

	return (
		<div className={cn('max-w-full h-auto', className)} {...props}>
			<svg className="block overflow-visible" height={height} viewBox={`0 0 ${width} ${height}`} width={width}>
				<title>{title}</title>
				{!hideMonthLabels && (
					<g className="fill-current selection:fill-selection-foreground">
						{monthLabels.map(({ label, weekIndex }) => (
							<text dominantBaseline="hanging" key={weekIndex} x={(blockSize + blockMargin) * weekIndex}>
								{label}
							</text>
						))}
					</g>
				)}

				{weeks.map((week, weekIndex) =>
					week.map((activity, dayIndex) => {
						return (
							<Fragment key={`${weekIndex}-${dayIndex}`}>
								{children({ activity, dayIndex, weekIndex })}
							</Fragment>
						)
					})
				)}
			</svg>
		</div>
	)
}

export type ContributionGraphFooterProps = HTMLAttributes<HTMLDivElement>

export const ContributionGraphFooter = ({ className, ...props }: ContributionGraphFooterProps) => (
	<div className={cn('flex flex-wrap gap-1 whitespace-nowrap sm:gap-x-4', className)} {...props} />
)

export type ContributionGraphTotalCountProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
	children?: (props: { totalCount: number; year: number }) => ReactNode
}

export const ContributionGraphTotalCount = ({ className, children, ...props }: ContributionGraphTotalCountProps) => {
	const { totalCount, year, labels } = useContributionGraph()

	if (children) {
		return <>{children({ totalCount, year })}</>
	}

	return (
		<div className={cn('text-muted-foreground', className)} {...props}>
			{labels.totalCount
				? labels.totalCount.replace('{{count}}', String(totalCount)).replace('{{year}}', String(year))
				: `${totalCount} activities in ${year}`}
		</div>
	)
}

export type ContributionGraphLegendProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
	children?: (props: { level: number }) => ReactNode
}

export const ContributionGraphLegend = ({ className, children, ...props }: ContributionGraphLegendProps) => {
	const { labels, maxLevel, blockSize, blockRadius } = useContributionGraph()

	return (
		<div className={cn('ml-auto flex items-center gap-[3px]', className)} {...props}>
			<span className="mr-1 text-muted-foreground">{labels.legend?.less || 'Less'}</span>
			{new Array(maxLevel + 1).fill(undefined).map((_, level) =>
				children ? (
					<Fragment key={level}>{children({ level })}</Fragment>
				) : (
					<svg height={blockSize} key={level} width={blockSize}>
						<title>{`${level} contributions`}</title>
						<rect
							className={cn(THEME)}
							data-level={level}
							height={blockSize}
							rx={blockRadius}
							ry={blockRadius}
							width={blockSize}
						/>
					</svg>
				)
			)}
			<span className="ml-1 text-muted-foreground">{labels.legend?.more || 'More'}</span>
		</div>
	)
}
