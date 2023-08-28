// https://github.com/nuxt/eslint-config/tree/main/packages/eslint-config
module.exports = {
  plugins: [
    "regexp"
  ],
  extends: [
    "@nuxt/eslint-config",
    "plugin:regexp/recommended"
  ],
  root: true,
  rules: {
    // https://eslint.vuejs.org/rules/
    "no-useless-escape": "off", // duplicated rules
    "vue/singleline-html-element-content-newline": "off",
    "vue/no-multiple-template-root": "off",
    "vue/no-deprecated-slot-attribute": "off",
    "vue/multi-word-component-names": "off",
    "vue/valid-template-root": "off",
    "vue/require-v-for-key": "off",
    "vue/valid-v-for": "off",
    'vue/max-attributes-per-line': ["off", {
      "singleline": {
        "max": 7
      },
      "multiline": {
        "max": 4
      }
    }]
  }
}