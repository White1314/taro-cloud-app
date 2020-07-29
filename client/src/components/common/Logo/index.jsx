import { View, Text } from '@tarojs/components'
import logoImgUrl from '../../../images/logo.jpg'
import './index.scss';

const Logo = ({ nowarp }) => (
	<View className='logo'>
		<Image src={logoImgUrl} alt='' className='logo-img' />
		<View className='logo-text'>
			{
				nowarp ? 
					<Text>White1314</Text> : 
					<View className='text-warp'><Text>White</Text><Text>1314</Text></View>
			}
		</View>
	</View>
)

export default Logo;