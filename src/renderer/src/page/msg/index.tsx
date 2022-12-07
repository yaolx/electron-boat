import styles from './style/index.module.less'
const { mainView } = window.xElectron
function Msg() {
  const onClick = (text) => {
    mainView.onPlay(text)
  }
  return (
    <div className={styles.msg}>
      <div className={styles.header}>播放列表</div>
      <div className={styles.list}>
        <div className={styles.title}>中国人</div>
        <div className={styles.play} onClick={() => onClick('中国人')}>
          播放
        </div>
      </div>
      <div className={styles.list}>
        <div className={styles.title}>忘情水</div>
        <div className={styles.play} onClick={() => onClick('忘情水')}>
          播放
        </div>
      </div>
    </div>
  )
}
export default Msg
