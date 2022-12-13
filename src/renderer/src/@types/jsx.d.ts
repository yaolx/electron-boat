// 尝试覆盖 react中的ts，不起作用
import 'react'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      webview: WebviewTag
      Sss: WebviewTag
    }
  }
}
