import './index.scss'

const Begin = () => {

	const onStart = () => {
        Taro.navigateTo({
            url: `/pages/index/index?key=index&name=上下文`
        })
    }

	return (
        <View className='begin'>
            <View className='title'>前端基础</View>
            <View className='tip'>涵盖了多个系列的前端文章</View>
            <View className='start' onClick={onStart}>现在开始</View>
        </View>
    )
}

export default Begin