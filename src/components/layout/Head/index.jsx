import { View, Text } from '@tarojs/components'
import Logo from '../../common/Logo'
import Search from '../../common/Search'
import { menuList } from '../../../utils/data'
import './index.scss'

const Head = ({ onShowMenu, pathname, onInput, onBlur, value }) => {

	const onToPage = (key) => {
		if(key === pathname || key=== '') {
			return;
		}

		let url = `/pages/${key}/index?key=${key}`
		if(key === 'index') {
			url += `&name=上下文`
		}
		
		Taro.navigateTo({
			url
		}) 
	}

	const onToIndex = () => {
		if(!pathname) {
			return;
		}
		Taro.redirectTo({
			url: `/pages/index/index`
		}) 
	}

	return (
		<View className='head'>
			<View className='menu-scale' onClick={onShowMenu}>
				<Text className='at-icon at-icon-menu'></Text>
			</View>
			<View onClick={onToIndex}><Logo /></View>
			<View className='menu'>
				{
					menuList.map(item => (
						<View key={item.key} onClick={() => onToPage(item.key)} className='menu-text'>
							<Text className={item.key === pathname ? 'active' : null}>{item.title}</Text>
						</View>
					)) 
				}
			</View>
			<View style={{flex: 1}}></View>
			<View className='search'><Search onInput={onInput} onBlur={onBlur} value={value} /></View>
		</View>
	)
}

export default Head;