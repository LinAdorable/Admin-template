/*
 * @Author: Mr.Lin
 * @Date: 2024-03-22 17:04:05
 * @LastEditTime: 2024-03-22 17:04:11
 * @LastEditors: Mr.Lin
 * @Description: 
 * @FilePath: \technical-drill\.eslintrc.cjs
 */
module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
          jsx: true
      }
  },
 
  extends: [
      'plugin:vue/vue3-recommended',
      'plugin:@typescript-eslint/recommended',
  ],
 
  rules: {
       // eslint（https://eslint.bootcss.com/docs/rules/）
       'quotes': ['error', 'single'],  //  使用单引号
       'no-var': 'error', // 要求使用 let 或 const 而不是 var
       'no-multiple-empty-lines': ['error', { max: 1 }], // 不允许多个空行
       // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
       // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
       'no-unexpected-multiline': 'error', // 禁止空余的多行
       'no-useless-escape': 'off', // 禁止不必要的转义字符
       'no-dupe-args': 'error', // 禁止 function 定义中出现重名参数
       'no-mixed-spaces-and-tabs': 'error',// 不允许空格和 tab 混合缩进
       'eqeqeq': ['warn', 'always', { null: 'ignore' }], // 使用类型安全的 === 和 !== 操作符代替 == 和 != 除null以外
       'arrow-spacing': ['error', { before: true, after: true }],// 强制箭头函数的箭头前后使用一致的空格
       'block-spacing': ['error', 'always'],  // 禁止或强制在单行代码块中使用空格
       'brace-style': ['error', '1tbs', { allowSingleLine: true }], // 强制在代码块中使用一致的大括号风格
       'camelcase': ['off', { properties: 'always' }], // 强制使用骆驼拼写法命名约定

       // typeScript (https://typescript-eslint.io/rules)
       '@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
       '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
       '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
       '@typescript-eslint/no-unsafe-argument': 'off',
       '@typescript-eslint/no-non-null-assertion': 'off',
       '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
       '@typescript-eslint/semi': 'off',

       // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
       'vue/multi-word-component-names': 'off', // 要求组件名称始终为 “-” 链接的单词
       'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用
       'vue/no-mutating-props': 'off', // 不允许组件 prop的改变
       'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
       'vue/max-attributes-per-line': [ // 设置每行最大属性数
           'error',
           {
               singleline: 10, // 标签为单行时，每行最大属性数值为 10，默认值为 1
               multiline: {
                   max: 10 // 标签为多行时，每行最大属性数字为 1，默认值为 1
               }
           }
       ],

  }
};