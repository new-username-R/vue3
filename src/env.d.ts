// 因为ts只能解析 .ts 文件，无法解析 .vue文件
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

