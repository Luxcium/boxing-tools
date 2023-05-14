// This is a workaround for https://github.com/eslint/eslint/issues/3458
// require('@rushstack/eslint-config/patch/modern-module-resolution');
// /** @type { import("eslint").Linter.FlatConfig[] } */
module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // '@rushstack/eslint-config/profile/node',
  ],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  root: true,
  plugins: [
    'unicorn',
    'prettier',
    'simple-import-sort',
    'import',
    'jsdoc',
    '@rushstack/eslint-plugin',
    '@typescript-eslint',
  ],
  rules: {
    // ―――――――― eslint-config-prettier ―――――――――――――――――――――――――――――――
    // // +++ eslint-config-prettier +++
    'prettier/prettier': ['warn'],
    'quotes': ['off', 'single'],
    'indent': ['off', 2],
    'semi': ['off', 'always'],
    'unicorn/no-nested-ternary': 'off',
    'unicorn/number-literal-case': 'off',
    // // +++ eslint-config-prettier +++
    '@typescript-eslint/indent': ['off', 2],
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/object-curly-spacing': 'off',
    '@typescript-eslint/brace-style': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/comma-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/keyword-spacing': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-extra-parens': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/space-infix-ops': 'off',
    '@typescript-eslint/type-annotation-spacing': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    //―― Supported Rules
    /*
    @typescript-eslint/eslint-plugin includes over 100 rules that detect best practice violations, bugs, and/or stylistic issues specifically for TypeScript code. See Configs for how to enable recommended rules using configs.
    */
    '@typescript-eslint/array-type': 'warn',
    '@typescript-eslint/ban-tslint-comment': 'warn',
    '@typescript-eslint/class-literal-property-style': 'warn',
    '@typescript-eslint/consistent-generic-constructors': 'warn',
    '@typescript-eslint/consistent-indexed-object-style': 'warn',
    '@typescript-eslint/consistent-type-assertions': 'warn',
    '@typescript-eslint/consistent-type-exports': 'warn',
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/method-signature-style': 'warn',
    '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
    '@typescript-eslint/no-confusing-void-expression': 'warn',
    '@typescript-eslint/no-duplicate-type-constituents': 'warn',
    '@typescript-eslint/no-dynamic-delete': 'warn',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-extra-non-null-assertion': 'warn',
    '@typescript-eslint/no-import-type-side-effects': 'warn',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/no-meaningless-void-operator': 'warn',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
    '@typescript-eslint/no-useless-empty-export': 'warn',
    '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
    '@typescript-eslint/prefer-as-const': 'warn',
    '@typescript-eslint/prefer-function-type': 'warn',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/prefer-namespace-keyword': 'warn',
    '@typescript-eslint/prefer-readonly': 'warn',
    '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
    '@typescript-eslint/prefer-regexp-exec': 'warn',
    '@typescript-eslint/prefer-return-this-type': 'warn',
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
    '@typescript-eslint/prefer-ts-expect-error': 'warn',
    '@typescript-eslint/promise-function-async': 'warn',
    '@typescript-eslint/sort-type-constituents': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    '@typescript-eslint/parameter-properties': 'off',
    '@typescript-eslint/adjacent-overload-signatures': 'off',
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-base-to-string': 'off',
    '@typescript-eslint/no-duplicate-enum-values': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-for-in-array': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/no-misused-new': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-mixed-enums': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-redundant-type-constituents': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-declaration-merging': 'off',
    '@typescript-eslint/no-unsafe-enum-comparison': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-enum-initializers': 'off',
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/prefer-literal-enum-member': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/prefer-optional-chain': 'off',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/require-array-sort-compare': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/switch-exhaustiveness-check': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/typedef': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/unified-signatures': 'off',
    //―― Extension Rules
    /*
    In some cases, ESLint provides a rule itself, but it doesn't support TypeScript syntax; either it crashes, or it ignores the syntax, or it falsely reports against it. In these cases, we create what we call an extension rule; a rule within our plugin that has the same functionality, but also supports TypeScript.
    */
    '@typescript-eslint/block-spacing': 'warn',
    '@typescript-eslint/dot-notation': 'warn',
    '@typescript-eslint/key-spacing': 'warn',
    '@typescript-eslint/lines-around-comment': 'warn',
    '@typescript-eslint/lines-between-class-members': 'warn',
    '@typescript-eslint/no-array-constructor': 'warn',
    '@typescript-eslint/padding-line-between-statements': 'warn',
    '@typescript-eslint/return-await': 'warn',
    '@typescript-eslint/space-before-blocks': 'warn',
    '@typescript-eslint/default-param-last': 'off',
    '@typescript-eslint/init-declarations': 'off',
    '@typescript-eslint/no-dupe-class-members': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-implied-eval': 'off',
    '@typescript-eslint/no-invalid-this': 'off',
    '@typescript-eslint/no-loop-func': 'off',
    '@typescript-eslint/no-loss-of-precision': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/no-restricted-imports': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    'constructor-super': 'error',
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-ex-assign': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-new-symbol': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-self-assign': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-this-before-super': 'error',
    'no-undef': 'off',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-vars': [
      'off',
      {
        ignoreRestSiblings: true,
      },
    ],
    'no-useless-backreference': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    'no-case-declarations': 'error',
    'no-delete-var': 'error',
    'no-empty': 'error',
    'no-global-assign': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-octal': 'error',
    'no-redeclare': 'off',
    'no-shadow-restricted-names': 'error',
    'no-useless-catch': 'error',
    'no-useless-escape': 'error',
    'no-with': 'error',
    'require-yield': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-extra-boolean-cast': 'warn',
    'no-extra-semi': 'warn',
    'no-regex-spaces': 'warn',
    'no-unused-labels': 'warn',
    'arrow-body-style': 'off',
    'capitalized-comments': 'off',
    'curly': 'warn',
    'eqeqeq': 'off',
    'dot-notation': 'off',
    'logical-assignment-operators': 'off',
    'multiline-comment-style': 'off',
    'no-confusing-arrow': 'off',
    'no-div-regex': 'off',
    'no-else-return': 'off',
    'no-extra-bind': 'off',
    'no-extra-label': 'off',
    'no-floating-decimal': 'warn',
    'no-implicit-coercion': 'off',
    'no-lonely-if': 'off',
    'no-undef-init': 'off',
    'no-unneeded-ternary': 'off',
    'no-useless-computed-key': 'off',
    'no-useless-rename': 'off',
    'no-useless-return': 'off',
    'no-var': 'warn',
    'object-shorthand': 'off',
    'one-var': 'off',
    'one-var-declaration-per-line': 'warn',
    'operator-assignment': 'off',
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'warn',
    'prefer-destructuring': 'off',
    'prefer-exponentiation-operator': 'warn',
    'prefer-numeric-literals': 'off',
    'prefer-object-has-own': 'off',
    'prefer-object-spread': 'off',
    'prefer-template': 'warn',
    'quote-props': ['error', 'consistent-as-needed'],
    'sort-vars': 'off',
    'spaced-comment': 'off',
    'strict': 'off',
    'yoda': ['warn', 'always', { onlyEquality: true }],
    'array-bracket-newline': 'off',
    'array-bracket-spacing': 'off',
    'array-element-newline': 'off',
    'arrow-parens': 'off',
    'arrow-spacing': 'off',
    'block-spacing': 'off',
    'brace-style': 'off',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'comma-style': 'off',
    'computed-property-spacing': 'off',
    'dot-location': 'off',
    'eol-last': 'off',
    'func-call-spacing': 'off',
    'function-call-argument-newline': 'off',
    'function-paren-newline': 'off',
    'generator-star-spacing': 'off',
    'implicit-arrow-linebreak': 'off',
    'jsx-quotes': 'off',
    'key-spacing': 'off',
    'keyword-spacing': 'off',
    'linebreak-style': 'off',
    'lines-around-comment': 'off',
    'lines-between-class-members': 'off',
    'multiline-ternary': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-extra-parens': 'off',
    'no-multi-spaces': 'off',
    'no-multiple-empty-lines': 'off',
    'no-trailing-spaces': 'off',
    'no-whitespace-before-property': 'off',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': 'off',
    'object-property-newline': 'off',
    'operator-linebreak': 'off',
    'padded-blocks': 'off',
    'padding-line-between-statements': 'off',
    'rest-spread-spacing': 'off',
    'semi-spacing': 'off',
    'semi-style': ['warn', 'last'],
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'space-in-parens': 'off',
    'space-infix-ops': 'off',
    'space-unary-ops': 'off',
    'switch-colon-spacing': 'off',
    'template-curly-spacing': 'off',
    'template-tag-spacing': 'off',
    'unicode-bom': 'off',
    'wrap-iife': 'off',
    'wrap-regex': 'off',
    'yield-star-spacing': 'off',
    'array-callback-return': 'off',
    'no-await-in-loop': 'off',
    'no-constant-binary-expression': 'off',
    'no-constructor-return': 'off',
    'no-duplicate-imports': 'off',
    'no-new-native-nonconstructor': 'off',
    'no-promise-executor-return': 'off',
    'no-self-compare': 'off',
    'no-template-curly-in-string': 'off',
    'no-unmodified-loop-condition': 'off',
    'no-unreachable-loop': 'off',
    'no-unused-private-class-members': 'off',
    'no-use-before-define': 'off',
    'require-atomic-updates': 'off',
    'accessor-pairs': 'off',
    'block-scoped-var': 'off',
    'camelcase': 'off',
    'class-methods-use-this': 'off',
    'complexity': 'off',
    'consistent-return': 'off',
    'consistent-this': 'off',
    'default-case': 'off',
    'default-case-last': 'off',
    'default-param-last': 'off',
    'func-name-matching': 'off',
    'func-names': 'off',
    'func-style': 'off',
    'grouped-accessor-pairs': 'off',
    'guard-for-in': 'off',
    'id-denylist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'init-declarations': 'off',
    'max-classes-per-file': 'off',
    'max-depth': 'off',
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'new-cap': 'off',
    'no-alert': 'off',
    'no-array-constructor': 'off',
    'no-bitwise': 'off',
    'no-caller': 'off',
    'no-console': 'off',
    'no-continue': 'off',
    'no-empty-function': 'off',
    'no-empty-static-block': 'off',
    'no-eq-null': 'off',
    'no-eval': 'off',
    'no-extend-native': 'off',
    'no-implicit-globals': 'off',
    'no-implied-eval': 'off',
    'no-inline-comments': 'off',
    'no-invalid-this': 'off',
    'no-iterator': 'off',
    'no-label-var': 'off',
    'no-labels': 'off',
    'no-lone-blocks': 'off',
    'no-loop-func': 'off',
    'no-magic-numbers': 'off',
    'no-mixed-operators': 'off',
    'no-multi-assign': 'off',
    'no-multi-str': 'off',
    'no-negated-condition': 'off',
    'no-nested-ternary': 'off',
    'no-new': 'off',
    'no-new-func': 'off',
    'no-new-object': 'off',
    'no-new-wrappers': 'off',
    'no-octal-escape': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-proto': 'off',
    'no-restricted-exports': 'off',
    'no-restricted-globals': 'off',
    'no-restricted-imports': 'off',
    'no-restricted-properties': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'off',
    'no-return-await': 'off',
    'no-script-url': 'off',
    'no-sequences': 'off',
    'no-shadow': 'off',
    'no-ternary': 'off',
    'no-throw-literal': 'off',
    'no-undefined': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': 'off',
    'no-useless-call': 'off',
    'no-useless-concat': 'off',
    'no-useless-constructor': 'off',
    'no-void': 'off',
    'no-warning-comments': 'off',
    'prefer-named-capture-group': 'off',
    'prefer-promise-reject-errors': 'off',
    'prefer-regex-literals': 'off',
    'prefer-rest-params': 'off',
    'prefer-spread': 'off',
    'radix': 'off',
    'require-await': 'off',
    'require-unicode-regexp': 'off',
    'sort-keys': 'off',
    'symbol-description': 'off',
    'vars-on-top': 'off',
    'line-comment-position': 'off',
    'max-len': 'off',
    'max-statements-per-line': 'off',
    'no-tabs': 'off',

    // ―――――――― simple-import-sort ―――――――――――――――――――――――――――――――――――
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/naming-convention': 'off',
    // ―――――――― eslint-plugin-import ―――――――――――――――――――――――――――――――――
    // /* Static analysis*/
    'import/no-self-import': 'error',
    'import/namespace': 'error',
    'import/no-useless-path-segments': 'warn',
    'import/no-absolute-path': 'error',
    'import/no-unresolved': 'off',
    'import/named': 'off',
    'import/default': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-internal-modules': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'import/no-cycle': 'off',
    'import/no-relative-parent-imports': 'off',
    // /* Helpful warnings */
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unused-modules': 'error',
    // /* Style guide*/
    'import/first': 'warn',
    'import/newline-after-import': 'warn',
    'import/no-duplicates': 'warn',
    'import/no-namespace': 'off',
    //  "import/order": 'off', // ―3 managed with simple-import-sort
    'import/exports-last': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/max-dependencies': 'off',
    'import/no-unassigned-import': 'off',
    'import/no-named-default': 'off',
    'import/no-default-export': 'off',
    'import/no-named-export': 'off',
    'import/no-anonymous-default-export': 'off',
    'import/group-exports': 'off',
    'import/dynamic-import-chunkname': 'off',
    // /* Module systems*/
    'import/no-amd': 'off',
    'import/no-commonjs': 'off',
    'import/no-nodejs-modules': 'off',
    'import/unambiguous': 'off',
    // // ―――――――― unicorn ――――――――――――――――――――――――――――――――――――――――――――――
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/better-regex': 'warn',
    'unicorn/catch-error-name': 'warn',
    'unicorn/custom-error-definition': 'warn',
    'unicorn/escape-case': 'warn',
    'unicorn/explicit-length-check': 'warn',
    'unicorn/new-for-builtins': 'warn',
    'unicorn/no-console-spaces': 'warn',
    'unicorn/no-for-loop': 'warn',
    'unicorn/no-hex-escape': 'warn',
    'unicorn/no-new-buffer': 'warn',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/no-zero-fractions': 'warn',
    'unicorn/numeric-separators-style': 'warn',
    'unicorn/prefer-add-event-listener': 'warn',
    'unicorn/prefer-array-find': 'warn',
    'unicorn/prefer-includes': 'warn',
    'unicorn/prefer-math-trunc': 'warn',
    'unicorn/prefer-modern-dom-apis': 'warn',
    'unicorn/prefer-negative-index': 'warn',
    'unicorn/prefer-number-properties': 'warn',
    'unicorn/prefer-optional-catch-binding': 'warn',
    'unicorn/prefer-query-selector': 'warn',
    'unicorn/prefer-reflect-apply': 'warn',
    'unicorn/prefer-set-has': 'warn',
    'unicorn/prefer-spread': 'warn',
    'unicorn/prefer-string-slice': 'warn',
    'unicorn/prefer-ternary': 'warn',
    'unicorn/prefer-type-error': 'warn',
    'unicorn/string-content': 'warn',
    'unicorn/throw-new-error': 'warn',
    'unicorn/consistent-function-scoping': 'error',
    'unicorn/error-message': 'error',
    'unicorn/expiring-todo-comments': 'error',
    'unicorn/no-keyword-prefix': 'off',
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/no-unused-properties': 'error',
    'unicorn/no-null': 'off',
    'unicorn/no-process-exit': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/no-abusive-eslint-disable': 'off',
    'unicorn/no-object-as-default-parameter': 'off',
    // // 'unicorn/no-array-instanceof': 'warn',
    // // 'unicorn/no-fn-reference-in-iterator': 'off',
    // // 'unicorn/no-reduce': 'off',
    // // 'unicorn/prefer-dataset': 'warn',
    // // 'unicorn/prefer-event-key': 'warn',
    // // 'unicorn/prefer-flat-map': 'warn',
    // // 'unicorn/prefer-node-append': 'warn',
    // // 'unicorn/prefer-node-remove': 'warn',
    // // 'unicorn/prefer-replace-all': 'warn',
    // // 'unicorn/prefer-starts-ends-with': 'warn',
    // // 'unicorn/prefer-text-content': 'warn',
    // // 'unicorn/prefer-trim-start-end': 'warn',
    // // 'unicorn/regex-shorthand': 'warn',
    // //   // "comma-style": [
    // //   //   "warn",
    // //   //   "last"
    // //   // ],
    // //   // "comma-dangle": [
    // //   //   "warn",
    // //   //   "always-multiline"
    // //   // ],
    // //   /*
  },
};
