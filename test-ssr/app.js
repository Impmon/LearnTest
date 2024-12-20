// app.js (在服务器和客户端之间共享)
/**
 * 要支持在浏览器中使用 import * from "vue"
 * 需要在HTML上添加 Import Maps
 * <script type="importmap">
    {
      "imports": {
        "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
      }
    }
  </script>
 */
import { createSSRApp } from 'vue'

export function createApp() {
  return createSSRApp({
    data: () => ({ count: 1 }),
    template: `<button @click="count++">{{ count }}</button>`
  })
}