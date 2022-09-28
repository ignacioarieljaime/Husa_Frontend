const { ComponentList } = require('./../utils/ComponentList')

const FindComponent = _componentData => {
	const components = _componentData.map(item => {
		let pageComponents = ComponentList.find(pageComponent => {
			if (pageComponent.name === item.name) {
				pageComponent.props = item?.props
				return pageComponent
			}
		})
		return pageComponents
	})
	return components
}

const GenerateComponentStructure = (_page, _content) => {
	let uniqueImport = [...new Set(_content)]
	return `
	import Layout from "components/common/Layout/Layout"
	  ${uniqueImport.map(item => `import ${item.name} from '${item.path}';`).join(' ')}

	  function ${_page.name}() {
	    return (
			<Layout>
	      <section className={'${_page.className}'}> ${_content
		.map(item => `<${item.name} />`)
		.join(' ')}</section>
		</Layout>
	    )
	  }

	  export default ${_page.name}`
}

module.exports = {
	FindComponent,
	GenerateComponentStructure
}
