# my-vue3-ts-bilibili

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

###初始化结构
1. assets下新增styles、images文件夹
    styles新增base.css iconfont
2. src下新增views文件夹、router、stores文件夹
   views文件夹下新增Home、Login、Search、Video文件夹
3. 下载router依赖, 在main.ts中引入并注入
    启动项目报很多(linebreak-style) Expected linebreaks to be ‘LF‘ but found ‘CRLF‘ eslint问题
    在.eslintrc.js中的rules加入 'linebreak-style': ["error", "windows"]解决
    报很多 Component name "index" should always be 问题，是因为eslint要求组件名使用驼峰命名
    在.eslintrc.js中的rules加入'vue/multi-word-component-names': 'off'关闭命名规则
    在App.vue中使用router-view展示路由页面
4. 项目中的ts文件引入了vue文件，会报'...不是模块'，是因为ts无法解析vue结尾的文件
    在src目录下，新建 vue.d.ts 引入以下代码
    ```
    declare module '*.vue' {
        import { DefineComponent } from 'vue'
        const Component: DefineComponent<{},{},any>
        export default Component
    }
    ```
5. 下载vant3ui框架， 使用按需进入组件样式方式
    在vue.config.js中配置插件，复制vant3文档的内容即可
