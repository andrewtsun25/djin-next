module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["simple-import-sort", "@typescript-eslint", "prettier"],
  root: true,
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/no-unused-vars":
      process.env.NODE_ENV === "development" ? "warn" : "error",
    "no-console": process.env.NODE_ENV === "development" ? "warn" : "error",
  },
};
