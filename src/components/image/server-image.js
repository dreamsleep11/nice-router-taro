import Taro from '@tarojs/taro'
import { Image } from '@tarojs/components'
import classNames from 'classnames'
import ImageTools from '@/components/image/image-tools'
import './styles.scss'

class ServerImage extends Taro.PureComponent {
  static options = {
    addGlobalClass: true,
  }
  static externalClasses = ['my-class']

  render() {
    const { mode = 'scaleToFill', className, src, uri, size, customStyle = {} } = this.props
    const rootCls = classNames('server-image', 'my-class', className)
    // const style = { width: '100%', height: '100%', ...customStyle }
    const remotePath = ImageTools.getServerImagUrl(src || uri, size)
    return <Image className={rootCls} src={remotePath} mode={mode} style={customStyle} />
  }
}

export default ServerImage
