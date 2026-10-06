import { Table as UITable, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../../shadcn'

type TableProps = {
	headers?: string[]
	rows?: string[][]
}

const Table = (props: TableProps) => {
	const { headers, rows } = props

	return (
		<UITable className="not-prose my-2">
			{headers && (
				<TableHeader>
					<TableRow>
						{headers.map((header, i) => (
							<TableHead className="border" key={`${i}`}>
								{header}
							</TableHead>
						))}
					</TableRow>
				</TableHeader>
			)}
			{rows && (
				<TableBody>
					{rows.map((row, i) => (
						// <TableRow className="odd:bg-muted/40" key={i}>
						<TableRow key={i}>
							{row.map((cell, j) => (
								<TableCell className="border" key={j}>
									{cell}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			)}
		</UITable>
	)
}

export { Table }
