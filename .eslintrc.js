'use strict';

module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module'
	},
	extends: [
		'eslint-config-bbva'
	],
	env: {
		browser: false,
		node: true
	},
	overrides: [{
		files: [
			'tests/**/*.js'
		],
		env: {
			jest: true
		},
		plugins: ['jest']
	}],
	plugins: ['node'],
	rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
		'no-process-env': 0,
		'no-sync': 0
	})
};
