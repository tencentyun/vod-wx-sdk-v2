module.exports = {
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  rules: {
    "object-shorthand": "off",
    "func-names": "off",
    "prefer-destructuring": "off",
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "never"
      }
    ],
    "func-style": ["warn", "expression"]
  },
  globals: { wx: true }
};
