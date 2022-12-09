import React from 'react'

function IFrame({ data }) {
	let { structure } = data
	console.log(structure)
	return (
		<iframe
			style={{
				width: structure?.width?.value ? structure?.width?.value : '100%',
                height: structure?.height?.value ? structure?.height?.value : 'fit-content'
			}}
			src={structure?.src?.value}></iframe>
	)
}

export default IFrame
