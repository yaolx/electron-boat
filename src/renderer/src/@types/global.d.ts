interface Categories {
  name: string
  children: Menu[]
}

interface Menu {
  title: string
  id: string
  url?: string
  icon: string
}

import 'react'
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      webview: WebviewTag
    }
  }
}
