module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:flowtype/recommended",
    "@nsn",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": ["node_modules", "./src"]
      }
    }
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "flowtype",
    "jest",
    "import",
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "no-unused-vars": ["warn"],
    "flowtype/use-flow-type": 1,
    "flowtype/define-flow-type": 1,
    "no-underscore-dangle": ["error", { "allow": ["__get__"] }],
  }
};
