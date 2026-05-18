import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginReact from 'eslint-plugin-react'
import globals from 'globals'
import tanstackQuery from '@tanstack/eslint-plugin-query'

import { config as baseConfig } from './base.js'

/**
 * A custom ESLint configuration for libraries that use React.
 *
 * @type {import("eslint").Linter.Config[]} */
export const config = [
	...baseConfig,
	js.configs.recommended,
	eslintConfigPrettier,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		languageOptions: {
			...pluginReact.configs.flat.recommended.languageOptions,
			globals: {
				...globals.serviceworker,
				...globals.browser,
			},
		},
	},
	{
		plugins: {
			'react-hooks': pluginReactHooks,
			'@tanstack/query': tanstackQuery,
		},
		settings: {
			react: { version: 'detect' },
			tailwindcss: {
				callees: ['cn', 'clsx', 'classnames'],
			},
		},
		rules: {
			...pluginReactHooks.configs.recommended.rules,
			'react/react-in-jsx-scope': 'off',
			'react/jsx-uses-react': 'error',
			'react/jsx-uses-vars': 'error',
			'@typescript-eslint/consistent-type-imports': 'error',
			'@tanstack/query/exhaustive-deps': 'error',
		},
	},
]
