import Taro, { View, Text } from '@tarojs/components'
import { AtDrawer } from 'taro-ui'
import Logo from '../../common/Logo'
import { menuList } from '../../../utils/data'
import './index.scss';


const LeftDrawer = ({show, onClose, pathname}) => {

	const onToPage = (key) => {
		if(key === pathname) {
			onClose();
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
	
	return (
		<AtDrawer 
	  		show={show} 
	  		mask 
	  		onClose={onClose} 
		>
			<View className='drawer-head'>
				<Logo nowarp={true} />
			</View>
			<View className='drawer-menu'>
				{
					menuList.map(item => (
						<Text key={item.key} onClick={() => onToPage(item.key)} className='menu'>{item.title}</Text>
					))
				}
			</View>
		</AtDrawer>
	)
}

export default LeftDrawer;