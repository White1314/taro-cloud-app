import Taro, { useState, useRouter, useEffect } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import LeftDrawer from '../../components/layout/LeftDrawer'
import Head from '../../components/layout/Head'
import Bubble from '../../components/layout/Bubble'
import Markdown from '../../components/common/Markdown'
import Begin from '../../components/index/Begin'
import MenuSwitch from '../../components/index/MenuSwitch'
import Menu from '../../components/index/Menu'
import './index.scss'

const Index = () => {
    const router = useRouter()
    const { key, name } = router.params;

    const [showMenu, setShowMenu] = useState(false)
    const [value, setValue] = useState('')
    const [content, setContent] = useState('')
    const [height, setHeight] = useState(0)

    useEffect(() => {
      const { screenHeight } = Taro.getSystemInfoSync()
      setHeight(screenHeight - 100)
    }, [])

    const onShowMenu = () => {
        setShowMenu(value => true)
    }

    const onCloseMenu = () => {
        setShowMenu(value => false)
    }

    const onInput = (value) => {
        setValue(value)
    }

    const onBlur = () => {
        setValue('')
    }

    return (
        <View>
            <Head onShowMenu={onShowMenu} pathname={key} onInput={onInput} onBlur={onBlur} value={value} />
            <LeftDrawer show={showMenu} onClose={onCloseMenu} pathname={key} />
            {
              key === 'index' ? 
                  <View className='content'>
                      <View className='content-left'>
                          <ScrollView scrollY style={{height: height + 'px'}}>
                              <Menu name={name} />
                          </ScrollView>
                      </View>
                      <View className='content-right'>
                          <ScrollView scrollY style={{height: height + 'px'}}>
                              <View className='md'><Markdown name={name} /></View>
                          </ScrollView>
                      </View>
                      <MenuSwitch name={name} />
                </View>
                : 
                <Begin />
            } 
            <Bubble value={value} />
        </View>
    )
}
