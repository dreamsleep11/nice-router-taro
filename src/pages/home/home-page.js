import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import EleCarousel from '@/genericpage/elements/ele-carousel'
import ActionFloor from '@/components/common/action-floor'

import Listof from '../../listof/listof'
import './home.scss'
import SectionBar from '../service-center/section-bar'
import ServiceCenterTools from '../../schema-data/service-center-tools'

const defaultImageUrl = 'http://www.eastphoto.cn/indexImages/ep-012136603.jpg'

const defaultServices = ServiceCenterTools.getServices('home')

@connect(({ home }) => ({ ...home }))
class HomePage extends Taro.PureComponent {
  componentDidMount() {
    // NavigationService.view(Config.api.FooterHome)
  }

  // carousel,
  // change request
  // icon list
  // 展开 list个
  render() {
    const { slideList = defaultSlideList, actionList = defaultServices, sectionList = defaultSectionList } = this.props

    console.log('actionsLIst', actionList)

    return (
      <View className='home-page'>
        <EleCarousel items={slideList} height={220} />
        <View className='home-page-action-floor'>
          <ActionFloor actions={actionList} />
        </View>
        {sectionList.map((section) => {
          const { id, title, linkToUrl, brief, list } = section
          return (
            <View key={`${id}_${title}`} className='home-page-section'>
              <SectionBar title={title} brief={brief} linkToUrl={linkToUrl} />
              <Listof list={list} />
            </View>
          )
        })}
      </View>
    )
  }
}

export default HomePage
const defaultSlideList = [{ videoUrl: defaultImageUrl, imageUrl: defaultImageUrl }, { imageUrl: defaultImageUrl }]
const defaultSectionList = [{ title: '业务列表', brief: 'EnglishName', linkToUrl: './', list: [] }]
// const defaultActionList = [
//   {
//     title: '中华',
//     brief: '牛逼',
//     imageUrl: defaultImageUrl,
//   },
//   {
//     title: '玉溪',
//     brief: '也很牛逼',
//   },
//   3,
//   4,
//   5,
// ]
