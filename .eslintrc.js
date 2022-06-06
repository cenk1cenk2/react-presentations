/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [ '@cenk1cenk2/eslint-config', '@cenk1cenk2/eslint-config/typescript', '@cenk1cenk2/eslint-config/react-typescript' ],
  overrides: [ ...require('@cenk1cenk2/eslint-config/utils').generateImportGroupsWithOverride({ tsconfigDir: __dirname, tsconfig: 'tsconfig.json' }) ],
  rules: {
    'import/no-extraneous-dependencies': 'off'
  }
}
