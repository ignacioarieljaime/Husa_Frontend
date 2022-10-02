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


function ${_page.name}({data}) {
	const [components, setComponents] = useState([])
	useEffect(() => {
		let componentName = data.map(item => item.name)
		setComponents(componentName)
	}, [])


	return (

		<Layout>
		<section> ${ComponentList.map(
			componentItem =>
				`{components.includes('${componentItem.name}') && <${
					componentItem.name
				} data={data.find(item => item.name === '${componentItem.name}')}/>}`
		).join('')}</section>
		</Layout>
			
	)
}
	
export async function getServerSideProps() {
	let data = await axios
		.get(
			'https://imcxm.exodusapi.influencedev.com/api/husa/getBlocksByPageId/4'
		)
		.then(response => {
			return response.data
		})
		.catch(error => {
			console.error('Error:', error)
		})

	return { props: { data } }
}
export default ${_page.name}`
}

module.exports = {
	PageGeneratorController
}
