// 此文件运行在 Node.js 服务器上
import { createSSRApp } from "vue";
// Vue 的服务端渲染API位于 `vue/server-render`路径下
import { renderToString } from "vue/server-renderer";

const app = createSSRApp({
  data: () => ({ count: 1}),
  template: `<button @click="count++">{{ count }}</button>`
})

/**
 * renderToString() 接收一个 Vue 应用实例作为参数，返回一个 
 * Promise，当 Promise resolve 时得到应用渲染的 HTML。
 */
renderToString(app).then(html => {
  console.log(html)
})