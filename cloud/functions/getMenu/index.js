const cloud = require('wx-server-sdk')

cloud.init({
	env: 'white1314-blogs-xxsl2'
})

const db = cloud.database()
const mdCollection = db.collection('menu')

exports.main = async event => {

  try {
  	const menuList = (await mdCollection.get()).data
  	return {
    	data: menuList
  	}
  } catch(e) {
  	console.log('cloud error: ' + e)
  }

}

