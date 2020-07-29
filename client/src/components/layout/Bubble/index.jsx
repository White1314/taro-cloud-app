import { useEffect, useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { searchMd } from '../../../utils/cloud'
import './index.scss';

const Bubble = ({ value }) => {

	const [items, setItems] = useState([])

	useEffect(async() => {
		const data = await searchMd(value)
		setItems(data)
	})

	const toPage = (name) => {
		Taro.navigateTo({
			url: `/pages/index/index?key=index&name=${name}`
		}) 
	}

	return (
		value ? 		
			<View className='bubble'>
	 	       <View className='bubble-triangle'><View className='triangle'></View></View>
	 	       <View className='bubble-content'>
	 	       	 	<View className='bubble-head'>{items.length ? '搜索结果' : '无搜索结果'}</View>
	 	         	{
	 	         		items.map((item, index) => 
							<View 
								key={item.id} 
								className={index === 0 ? 'bubble-item bg-active' : 'bubble-item'}
								onClick={() => {toPage(item.name)}}
								>
	 	           				<View className='bubble-item-left'>{item.type}</View>
	 	           				<View className='bubble-item-right'>{item.name}</View>
	 	         			</View>
	 	         		)
	 	         	}
	 	         	<View className='bubble-bottom'></View>
	 	       </View>
	 	    </View> : null
	)
}
	

export default Bubble;