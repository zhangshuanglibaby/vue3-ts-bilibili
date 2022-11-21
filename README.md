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

## 初始化结构
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
    在src目录下，新建 env.d.ts 引入以下代码
    ```
    declare module '*.vue' {
        import { DefineComponent } from 'vue'
        const Component: DefineComponent<{},{},any>
        export default Component
    }
    ```
5. 下载vant3ui框架， 使用按需进入组件样式方式
    在vue.config.js中配置插件，复制vant3文档的内容即可
6. 下载postcss-px-to-viewport 插件将px单位转成视口单位
    增加postcss.config.js文件设置。注意exclude不要忽视node_modules文件，防止vant样式失效,由于开发时ui设计稿是按照750px来发开的，
    但是vant组件库的设计稿是按375来开发的，因此设置viewportWidth为750px时会出现转换问题
    因此需要动态的设置viewportWidth 要特别注意vue2 和 vue3的写法不同
    vue2 是解构webpack出来
    ```
    const designWidth =  webpack.resourcePath.includes(path.join('node_modules', 'vant')) ? 375 : 750
    ```
    vue3是解构file出来
    ```
    const designWidth = file.includes(path.join('node_modules', 'vant')) ? 375 : 750;
    ```

## 开发旅程
1. 在component文件下，新增一个app-header文件