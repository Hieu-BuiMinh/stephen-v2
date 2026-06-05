import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import onlyWarn from 'eslint-plugin-only-warn'
import turboPlugin from 'eslint-plugin-turbo'
import tseslint from 'typescript-eslint'

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const config = [
	js.configs.recommended,
	eslintConfigPrettier,
	eslintPluginPrettierRecommended,
	...tseslint.configs.recommended,
	{
		plugins: {
			turbo: turboPlugin,
			'simple-import-sort': simpleImportSort,
		},
		rules: {
			'turbo/no-undeclared-env-vars': 'warn',

			// simple-import-sort
			'simple-import-sort/imports': 'warn',
			'simple-import-sort/exports': 'warn',

			// typescript-eslint
			'@typescript-eslint/no-unused-vars': 'warn',

			// prettier overrides
			'prettier/prettier': [
				'error',
				{
					singleQuote: true,
					endOfLine: 'auto',
				},
			],
		},
	},
	{
		plugins: {
			onlyWarn,
		},
	},
	{
		ignores: ['dist/**'],
	},
]
