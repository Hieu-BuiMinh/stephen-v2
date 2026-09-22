import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MarkdownProps {
	children: string
}

function Markdown({ children }: MarkdownProps) {
	return (
		<div className="prose prose-sm max-w-none break-words dark:prose-invert">
			<ReactMarkdown remarkPlugins={[remarkGfm]} skipHtml>
				{children}
			</ReactMarkdown>
		</div>
	)
}

export default Markdown
