'use client'

import type { ReactNode } from 'react'
import React, { createContext, useContext } from 'react'

import { docCollections } from '@/constants/doc'
import type { ITableOfContent } from '@/types/doc/doc-collection'

interface IDocDetailLayoutContext {
	docId: string
	collectionName: string
	type: string
	tableOfContent?: ITableOfContent[] | undefined
}

const DocDetailLayoutContext = createContext<IDocDetailLayoutContext | undefined>(undefined)

export function useDocDetailContext() {
	const context = useContext(DocDetailLayoutContext)
	if (!context) {
		throw new Error('useDocDetailContext must be used within a DocDetailLayoutProvider')
	}
	return context
}

interface DocDetailLayoutProviderProps {
	children: ReactNode
	docId: string
	collectionName: string
	type: string
}

export function DocDetailLayoutProvider({ children, docId, collectionName, type }: DocDetailLayoutProviderProps) {
	const collection = docCollections.find((c) => c.collectionName === collectionName)
	const tableOfContent = collection?.collections?.find((c) => c.slug === type)?.tableOfContent

	const value: IDocDetailLayoutContext = {
		docId,
		collectionName,
		type,
		tableOfContent,
	}

	return <DocDetailLayoutContext.Provider value={value}>{children}</DocDetailLayoutContext.Provider>
}

export default DocDetailLayoutProvider
