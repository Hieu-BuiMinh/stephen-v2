import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import tanstackQuery from '@tanstack/eslint-plugin-query'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import react from 'eslint-plugin-react'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
})

const ESLINT_CONFIG = [
	{
		ignores: [],
	},
	...compat.extends(
		'plugin:@typescript-eslint/recommended',
		'plugin:@tanstack/query/recommended',
		'plugin:eslint-plugin-prettier/recommended'
	),
	{
		plugins: {
			'simple-import-sort': simpleImportSort,
		},
		rules: {
			// import rules
			'simple-import-sort/imports': 'warn', // Import configuration for `eslint-plugin-simple-import-sort`
			'simple-import-sort/exports': 'warn', // Export configuration for `eslint-plugin-simple-import-sort`
			'import/order': 'off', // Avoid conflict rule between `eslint-plugin-import` and `eslint-plugin-simple-import-sort`
			'import/extensions': 'off', // Avoid missing file extension errors, TypeScript already provides a similar feature
			'unused-imports/no-unused-imports': 'off',
			'react-hooks/rules-of-hooks': 'off',

			'unused-imports/no-unused-vars': [
				'off',
				{
					argsIgnorePattern: '^_',
				},
			],
		},
	},
	{
		plugins: {
			react,
			typescriptEslint,
			tanstackQuery,
			eslintPluginPrettierRecommended,
		},
		languageOptions: {},

		settings: {
			tailwindcss: {
				callees: ['cn', 'clsx', 'classnames'],
			},
		},
		rules: {
			//react
			'react/jsx-uses-react': 'error',
			'react/jsx-uses-vars': 'error',

			//typescriptEslint
			'@typescript-eslint/no-unused-vars': 'warn',
			'@typescript-eslint/consistent-type-imports': 'error',

			//tanstackQuery
			'@tanstack/query/exhaustive-deps': 'error',

			'prettier/prettier': [
				'error',
				{
					singleQuote: true,
					endOfLine: 'auto',
				},
			],
			semi: 'off',
		},
	},
]

export default ESLINT_CONFIG
