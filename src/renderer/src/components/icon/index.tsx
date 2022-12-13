import { createFromIconfontCN } from '@ant-design/icons'
import cs from 'classnames'

import styles from './styles/index.module.less'

const IconFont = createFromIconfontCN({
  scriptUrl: 'https://at.alicdn.com/t/c/font_3807038_8swdoue6cv5.js'
})

interface IconProps {
  type?: string
  className?: string
  onClick?: (e?) => void
}
function Icon(props: IconProps) {
  const { type = 'tools', className, onClick } = props
  return <IconFont type={`icon-${type}`} className={cs(styles.icon, className)} onClick={onClick} />
}

export default Icon
