import Taro, { useState, useRouter, useEffect } from '@tarojs/taro'
import LeftDrawer from '../../components/layout/LeftDrawer'
import Head from '../../components/layout/Head'
import Bubble from '../../components/layout/Bubble'
import Markdown from '../../components/common/Markdown'
import './index.scss'

const About = () => {
    const router = useRouter()
    const { key } = router.params;

    const [showMenu, setShowMenu] = useState(false)
    const [value, setValue] = useState('')

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
            <Bubble value={value} />
            <View className='content'>
                <Markdown name='关于' />
            </View>
        </View>
    )
}
