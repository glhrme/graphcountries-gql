module.exports = {
  env: {
    browser: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/typescript'
  ],
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [
          ".ts",
          ".tsx"
        ],
        "moduleDirectory": ["node_modules", "src"],
        "paths": ["src"]
      }
    },
    "import/parsers": {
      "@typescript-eslint/parser": ['.ts', '.tsx']
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "no-use-before-define": 0,
    "quotes": ["error", "single"],
    "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],
    "comma-dangle": 0,
    "semi": ["error", "never"],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
   ],
   "linebreak-style": 0
  }
};
