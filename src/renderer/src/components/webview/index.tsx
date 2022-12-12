import React, { useEffect, useRef } from 'react'

import cs from 'classnames'
import { v4 } from 'uuid'

import styles from './styles/index.module.less'
interface WebviewProps {
  src: string
  className?: string
  useragent?: string
}
function Webview(props: WebviewProps) {
  const { src, className, useragent } = props
  const webviewRef = useRef<WebviewTag>(null)
  useEffect(() => {
    const { current } = webviewRef
    if (current) {
      current.addEventListener('dom-ready', () => {
        const uuid = v4()
        console.log(`window['debug${uuid}']() to open devtool for webview`)
        window[`debug${uuid}`] = () => {
          current && current.openDevTools()
        }
      })
    }
    return () => {
      current && current.removeEventListener('dom-ready', () => {})
    }
  }, [])
  // allowpopups是字符串的true，用boolean不起作用
  // return <webview src={src} className={cs(styles.webview, className)} useragent={useragent} ref={webviewRef} allowpopups></webview>
  return React.createElement('webview', {
    ref: webviewRef,
    className: cs(styles.webview, className),
    src,
    useragent,
    allowpopups: 'true'
  })
}
export default Webview
