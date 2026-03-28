module.exports = {
    root: true,
    env: {
        browser: true,
        es2022: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    ignorePatterns: ["dist"],
    rules: {
        "no-unused-vars": ["error", { varsIgnorePattern: "^React$" }],
        "react/prop-types": "off",
        "react/no-unescaped-entities": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
    },
};
