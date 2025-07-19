import { cva, VariantProps } from 'class-variance-authority'
import './style.css'

const bookvariants = cva({
	variants: {
		variant: {
			default: {
				container: '',
				book: '',
				'book-bind': '',
				'book-front': '',
				'content-text': '',
				'book-paper': '',
				'book-back': '',
			},
			simple: {
				container: '',
				book: '',
				'book-bind': '',
				'book-front': '',
				'content-text': '',
				'book-paper': '',
				'book-back': '',
			},
			stripe: {
				container: '',
				book: '',
				'book-bind': '',
				'book-front': '',
				'content-text': '',
				'book-paper': '',
				'book-back': '',
			},
		},
	},
	defaultVariants: {
		variant: 'default',
	},
})

export interface BookProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, 'disabled'>,
		VariantProps<typeof bookvariants> {}

function Book({ className }: BookProps) {
	return (
		<div className="container">
			<div className="book">
				<div className="book-bind"></div>
				<div className="book-front">
					<div className="content-text">
						<h3>How Vercel improves your website's search engine ranking</h3>
						<p>Strategies to optimize your Core Web Vitals.</p>
					</div>
				</div>
			</div>
			<div className="book-paper"></div>
			<div className="book-back"></div>
		</div>
	)
}

export { Book }
