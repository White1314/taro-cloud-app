const cloud = require('wx-server-sdk')

cloud.init({
	env: 'white1314-blogs-xxsl2'
})

const db = cloud.database()
const mdCollection = db.collection('md')

exports.main = async event => {
  const { value } = event
 
  try {
  	const mdList = (await mdCollection.where({ name : { $regex: '.*' + value, $options: 'i' }}).get()).data
  	return {
    	data: mdList
  	}
  } catch(e) {
  	console.log('cloud error: ' + e)
  }
  
  return data
}


