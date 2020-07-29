import Taro from '@tarojs/taro'

export const getMd = async(name) => {
	try {
		const res = await Taro.cloud.callFunction({ name: 'getMd', data: {name} })
		const data = res.result.data[0].base64
		return data
	} catch(e) {
		console.log(e)
	}
}

export const searchMd = async (value) => {
	let data;
	if(value === '') {
		data = []
	} else {
		try {
			const res = await Taro.cloud.callFunction({ name: 'searchMd', data: {value} })
			data = res.result.data
		} catch(e) {
			console.log(e)
		}
	}
	return data;
}

export const getMenu = async() => {
	try {
		const res = await Taro.cloud.callFunction({ name: 'getMenu' })
		const data = res.result.data
		return data
	} catch(e) {
		console.log(e)
	}
}