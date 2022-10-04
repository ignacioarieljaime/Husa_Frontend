import dynamic from 'next/dynamic'
import { ComponentList } from './ComponentList'

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

export const DynamicImporter = (_components) => console.log(FindComponent(_components))

// export const DynamicImporter = dynamic(() => console.log('object'), {
// 	suspense: true
// })
