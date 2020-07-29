import { View, Text, Input } from '@tarojs/components'
import './index.scss';

const Search = ({ onInput, onBlur, value }) => (
	<View className='search'>
    	<Text className='at-icon at-icon-search'></Text>
    	<Input 
  	 		className='search-input'
        	type='text'
        	placeholder='search'
        	onInput={e => onInput(e.target.value)}
        	onBlur={onBlur}
        	value={value}
     	/>
    </View>
)

export default Search