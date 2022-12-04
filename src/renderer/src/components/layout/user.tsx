import styles from './styles/index.module.less'

function User() {
  return (
    <div className={styles.user}>
      <div className={styles.avatar}></div>
      <div className={styles.name}>千禮之行</div>
    </div>
  )
}

export default User
