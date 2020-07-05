module.exports = {
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module"
  },
  "extends": ["plugin:vue/recommended"],
  "plugins": [
    "vue",
    'html',
    'vuetify'
  ],
  'rules': {
    'vue/max-attributes-per-line': 0,
  }
}