import { useState } from '@tarojs/taro'
import Menu from '../Menu'
import './index.scss'

const MenuSwitch = ({ name }) => {

	const [spread, setSpread] = useState(false)

	const onSpread = () => {
		setSpread(spread => !spread)
	}

	return (
		<View className='menu'>
			<View className='menu-switch' onClick={onSpread}>
	        	{
	        		spread ? <Text className='at-icon at-icon-close' /> : <Text className='at-icon at-icon-menu' />
	        	}
	    	</View>
	    	{
	    		spread ? <Menu name={name} />: null
	    	}
    	</View>
    )
}

export default MenuSwitch