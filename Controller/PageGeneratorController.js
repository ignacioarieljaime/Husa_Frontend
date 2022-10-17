const { ComponentList } = require('../utils/ComponentList')

const PageGeneratorController = _page => {
	return `
const axios = require('axios')
import Layout from 'components/common/Layout/Layout';
import {  useEffect,useState } from 'react'
import dynamic from 'next/dynamic'

${ComponentList.map(
	item => `const ${item.name} = dynamic(() => import('${item.path}'))`
).join(';')}


function Index({data}) {
	const [components, setComponents] = useState([])
	useEffect(() => {
		let componentName = data ? data.widgets.map(item => item.name) : []
		setComponents(componentName)
	}, [])


	return (

		<Layout>
		<section> ${ComponentList.map(
			componentItem =>
				`{components.includes('${componentItem.name}') && <${componentItem.name} data={data.widgets.find(item => item.name === '${componentItem.name}')}/>}`
		).join('')}</section>
		</Layout>
			
	)
}
	
export async function getServerSideProps(context) {
	console.log(context?.query?.param)
	console.log('send ssr request')
	${
		_page.model_id === 0 && _page.model_type
			? `	let data = await axios
		.get(
			'https://imcxm.dev-api.hisenseportal.com/api/husa/getPageInfo/${_page.id}'
		)
		.then(response => {
			console.log('get ssr data')
			return response.data
		})
		.catch(error => {
			console.error('Error:', error)
			return null
		})
		return { props: { data } }
		`
			: `let data = await axios.get(
			'https://imcxm.dev-api.hisenseportal.com/api/husa/getDynamicPages/${_page.model_id}'
		)
		.then(response => {
			console.log('get ssr data')
			return response.data.data[0]
		})
		.catch(error => {
			console.error('Error:', error)
			return null
		});
		return { props: { data } }
		
		
		`
	}


	
}
export default Index`
}

module.exports = {
	PageGeneratorController
}
