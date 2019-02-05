module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": true,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  extends: [
    "airbnb",
    "plugin:flowtype/recommended",
    "plugin:react/recommended",
    "prettier/flowtype",
    "plugin:prettier/recommended"
  ],
  plugins: ["flowtype", "flowtype-errors", "react", "prettier", "jest"],
  env: {
    "es6": true,
    "browser": true,
    "node": true,
    "jest/globals": true
  },
  rules: {
    "space-before-function-paren": 0,
    "new-cap": 0,
    "class-methods-use-this": 1,
    "consistent-return": 1,
    "import/no-extraneous-dependencies": 1,
    "import/no-unresolved": 1,
    "import/prefer-default-export": 1,
    "no-undef": 1,
    "no-unused-vars": 1,
    "no-underscore-dangle": 0,
    "react/jsx-filename-extension": 0,
    "react/prop-types": 1,
    "react/jsx-no-bind": 2,
    "react/display-name": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/destructuring-assignment": 1,
    "flowtype-errors/show-errors": 2,
    "flowtype-errors/show-warnings": 1,
    "object-shorthand": [
      1,
      "always",
      {
        "avoidQuotes": false
      }
    ]
  },
  overrides: [
    {
      files: ['./src/**/*.test.js', './src/**/*.spec.js'],
      globals: {
        React: true,
      },
      rules: {
        'no-console': 0,
        'global-require': 0,
      },
    },
  ],
};
