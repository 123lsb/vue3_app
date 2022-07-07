1. vue-cli脚手架初始化项目
2. node+webpack +npm

node_modules :项目依赖文件
public： 存放静态资源的文件夹 需要注意，存放在public的静态资源会被webpack原封不动的打包到dist文件夹里面
 src文件夹：
  assets也是存放静态资源 需要注意的是在打包的时候webpack会把静态资源当做一个完整的模块进行打包
  components 是存放公共模板的地方 一般放置的是非路由组件
  app.vue :唯一的根组件 vue当中的组件
  main.js :程序文件的入口文件，也是整个项目最先执行的文件
3. 项目的其他配置
4.  运行时自动打开浏览器
    找到package.json下的
      "scripts": {
        "serve": "vue-cli-service serve --open",
         "build": "vue-cli-service build",
         "lint": "vue-cli-service lint"
       },
    添加 --open
5. eslint校验工具的关闭
   在跟目录下创建一个vue.config.js
   module.exports={
    lintOnSave:false
}
6. src文件夹配置别名
7. {
    "compilerOptions":{
        "baseUrl": "./",
        "paths": {
            "@/*":["src/"]
        }
    },
    "exclude": ["node_modules","dist"]

}