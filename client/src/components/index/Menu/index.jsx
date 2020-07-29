import { useState, useEffect } from '@tarojs/taro'
import { getMenu } from '../../../utils/cloud'
import './index.scss'

const Menu = ({ name }) => {

	const [keys, setKeys] = useState([])
	const [items, setItems] = useState([])

	useEffect(async () => {
		const data = await getMenu()
		setKeys(Object.keys(data[0]))
		setItems(data[0])
	}, [])

	const onToPage = (value) => {
		if(name === value) {
			return
		}
		Taro.navigateTo({
			url: `/pages/index/index?key=index&name=${value}`
		}) 
	}

    return (
    	<View className='menu-list'>
			{
	    		keys.map((key, index) => index ? 
	    			<View key={key}>
	    				<View className='menu-title'>{key}</View>
	    				{
	    					items[key].map(item => 
	    						<View 
	    							key={item.id} 
	    							className={name === item.name ? 'menu-item active' : 'menu-item'}
	    							onClick={() => onToPage(item.name)}
	    						>
	    							{item.name}
	    						</View>						
	    					)
	    				}
	    			</View>
	    			: null
	    		)
	    	}
    	</View>
    )
}

export default Menu