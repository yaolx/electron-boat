import Webview from '@/components/webview'

import styles from './styles/index.module.less'
const useragent = 'Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1'
function MyBlog() {
  return (
    <div className={styles.myBlog}>
      <Webview src={'https://yaolx.github.io/#/front'} useragent={useragent}></Webview>
    </div>
  )
}
export default MyBlog
