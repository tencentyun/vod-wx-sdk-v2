module.exports = {
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  rules: {
    "object-shorthand": "off",
    "func-names": "off",
    "prefer-destructuring": "off"
  },
  globals: { wx: true }
};
