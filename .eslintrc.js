/*
 * @Date: 2022-11-21 20:30:56
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-27 22:19:43
 * @Description: 这是****文件
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    semi: 0, // 去掉分号
    'comma-dangle': 0, // 去掉逗号
    'linebreak-style': 'off',
    'no-tabs':"off"
  },
};
