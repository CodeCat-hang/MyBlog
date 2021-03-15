module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-trailing-spaces': 'off',
        'semi': 'off',
        'indent': 'off',
        'space-before-function-paren': 'off',
        'eol-last': 'off',
        'comma-dangle': 'off',
        'no-multiple-empty-lines': 'off',
        'key-spacing': 'off',
        'space-before-blocks': 'off',
        'comma-spacing': 'off',
        'no-unused-vars': 'off',
        'keyword-spacing': 'off',
        'quotes': 'off',
        'array-bracket-spacing': 'off',
        'no-array-constructor': 'off',
        'camelcase': 'off',
        'no-unneeded-ternary': 'off',
        'vue/no-unused-components': 'off',
        'prefer-const': 'off',
        'eqeqeq': 'off',
        'func-call-spacing': 'off',
        'no-tabs': 'off'
    }
}