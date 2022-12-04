const { ComponentList } = require('./../utils/ComponentList')
const fs = require('fs')

const generateContent = () => {
	return `
import React from 'react'
${ComponentList.map(item => `import ${item.name} from '${item.path}'`).join(
	`;
`
)}

const Components = {
    ${ComponentList.map(item => `${item.name}:${item.name}`).join(`,
`)}
}

export default (block, pim , notification) => {
    if (typeof Components[block.name] !== 'undefined') {
        return React.createElement(Components[block.name], {
            key: block.id,
            data: block,
            pim: pim,
            notification: notification
        })
    }
    // return React.createElement(
    // 	() => <div>The component {block.component} has not been created yet.</div>,
    // 	{ key: block._uid }
    // )
}     
`
}

if (!fs.existsSync('./hooks/componentGenerator.js')) {
	fs.writeFile(`./hooks/componentGenerator.js`, generateContent(), err => {
		if (err) {
			console.error(err)
		}
	})
}
