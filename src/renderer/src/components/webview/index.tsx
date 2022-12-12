import { useEffect, useRef } from 'react'

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
  return <webview src={src} className={cs(styles.webview, className)} useragent={useragent} ref={webviewRef}></webview>
}
export default Webview
