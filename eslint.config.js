import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'

export default [
	{
		ignores: [
			'node_modules/**',
			'dist/**',
			'src/services/**',
			'vite.config.ts'
		],
		plugins: {
			'@typescript-eslint': typescript
		},
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true
				}
			}
		},
		rules: {}
	}
]
