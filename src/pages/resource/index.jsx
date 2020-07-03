import Taro, { useState, useRouter, useEffect } from '@tarojs/taro'
import LeftDrawer from '../../components/layout/LeftDrawer'
import Head from '../../components/layout/Head'
import Bubble from '../../components/layout/Bubble'
import nullUrl from '../../images/null.png'
import './index.scss'

const Resource = () => {
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
            <View className='content'><Image src={nullUrl} alt='' className='null' /></View>
        </View>
    )
}
