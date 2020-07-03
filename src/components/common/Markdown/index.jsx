import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Base64 } from 'js-base64'
import { getMd } from '../../../utils/cloud'

export default class Markdown extends Component {

	config = {
    usingComponents: {
     		wemark: './wemark/wemark'
    }
  }

	async componentDidMount () {
    const { name } = this.props,
          content = await getMd(name),
          md = Base64.decode(content)
    this.setState({
      md
    })

  }

	render() {
		return (
			<View>
        <wemark md={this.state.md} highlight />
    	</View>
    )
  }
}
