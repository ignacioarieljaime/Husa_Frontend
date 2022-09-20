const { ComponentList } = require('./../utils/ComponentList')

const FindComponent = _componentData => {
	const components = _componentData.map(item => {
		let pageComponents = ComponentList.find(
			pageComponent => pageComponent.name === item.name
		)
		return pageComponents
	})
	return components
}

const GenerateComponentStructure = (_page, _content) => {
	return `
  ${_content.map(item => `import ${item.name} from '${item.path}';`).join(' ')}
  
  function ${_page.name}() {
    return (
      <section className={'${_page.className}'}> ${_content
		.map(item => `<${item.name}/>`)
		.join(' ')}</section>
    )
  }
  
  export default ${_page.name}`
}

module.exports = {
	FindComponent,
	GenerateComponentStructure
}
