import Taro, { useState, useEffect } from '@tarojs/taro'
import { AtTabs, AtTabsPane, AtPagination } from 'taro-ui'
import { cheatsList } from '../../../utils/data'
import logoUrl from '../../../images/logo.jpg'
import './index.scss'

const Tabs = () => {

  const [current, setCurrent] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const { screenHeight } = Taro.getSystemInfoSync()
    setHeight(screenHeight - 164)
  }, [])

  const onChangeTabs = (value) => {
    setCurrent(value)
  }

  const onLoadMore = () => {
    // 加载更多
  }

	return (
        <AtTabs scroll current={current} tabList={cheatsList} onClick={onChangeTabs}>
          <AtTabsPane current={current} index={0} >
            <ScrollView  scrollY style={{height: height + 'px'}} onScrollToLower={() => {onLoadMore}}>
              <View className='tab-content'>
                <View className='item'>
                  <View className='title'>你可能需要的前端面试题。</View>
                  <View className='content'>
                    <View className='content-left'>
                      <View className='author'>
                        <Image src={logoUrl} alt='' className='left-img' />
                        <View className='name'>White1314</View>
                      </View>
                      <View className='brief'>持续更新中持续更新中持续更新中持续更新中持续更新中持续更新中持续更新中持续更新中持续更新中持续更新中</View>
                    </View>
                    <View className='content-right'>
                      <Image src={logoUrl} alt='' className='right-img' />
                    </View>
                  </View>
                  <View className='bottom'>
                    <View className='bottom-count'>999 赞 · 999 评论</View>
                    <View className='bottom-share'>2020-08-01</View>
                  </View>
                </View>
                <View className='item'>
                  <View className='title'>你可能需要的前端面试题。</View>
                  <View className='content'>
                    <View className='content-left'>
                      <View className='author'>
                        <Image src={logoUrl} alt='' className='left-img' />
                        <View className='name'>White1314</View>
                      </View>
                      <View className='brief'>持续更新中持续更新中持续更新中持续更新中持续更新中持续更新中持续更新中持续更新中持续更新中持续更新中</View>
                    </View>
                    <View className='content-right'>
                      <Image src={logoUrl} alt='' className='right-img' />
                    </View>
                  </View>
                  <View className='bottom'>
                    <View className='bottom-count'>999 赞 · 999 评论</View>
                    <View className='bottom-share'>2020-08-01</View>
                  </View>
                </View>
                <View className='item'>
                  <View className='title'>你可能需要的前端面试题。</View>
                  <View className='content'>
                    <View className='content-left'>
                      <View className='author'>
                        <Image src={logoUrl} alt='' className='left-img' />
                        <View className='name'>White1314</View>
                      </View>
                      <View className='brief'>持续更新中持续更新中持续更新中持续更新中持续更新中持续更新中持续更新中持续更新中持续更新中持续更新中</View>
                    </View>
                    <View className='content-right'>
                      <Image src={logoUrl} alt='' className='right-img' />
                    </View>
                  </View>
                  <View className='bottom'>
                    <View className='bottom-count'>999 赞 · 999 评论</View>
                    <View className='bottom-share'>2020-08-01</View>
                  </View>
                </View>
                <View className='item'>
                  <View className='title'>你可能需要的前端面试题。</View>
                  <View className='content'>
                    <View className='content-left'>
                      <View className='author'>
                        <Image src={logoUrl} alt='' className='left-img' />
                        <View className='name'>White1314</View>
                      </View>
                      <View className='brief'>持续更新中持续更新中持续更新中持续更新中持续更新中持续更新中持续更新中持续更新中持续更新中持续更新中</View>
                    </View>
                    <View className='content-right'>
                      <Image src={logoUrl} alt='' className='right-img' />
                    </View>
                  </View>
                  <View className='bottom'>
                    <View className='bottom-count'>999 赞 · 999 评论</View>
                    <View className='bottom-share'>2020-08-01</View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </AtTabsPane>
        </AtTabs>
    )
}

export default Tabs