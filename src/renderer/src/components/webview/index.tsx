import cs from 'classnames'

import styles from './styles/index.module.less'
interface WebviewProps {
  src: string
  className?: string
  useragent?: string
}
function Webview(props: WebviewProps) {
  const { src, className, useragent } = props
  // Invalid allowpopups attribute
  return <webview src={src} className={cs(styles.webview, className)} allowpopups="true" useragent={useragent}></webview>
}
export default Webview
