import React from 'react'

function UnauthorizedList({ data }) {
	let { structure } = data
	console.log(structure)
	return (
		<div className='unauthorized_list'>
			{structure?.list?.value.map((item, index) => (
				<div
					style={{ width: `${100 / structure?.count?.value}%` }}
					dangerouslySetInnerHTML={{ __html: item?.text?.value }}></div>
			))}
		</div>
	)
}

export default UnauthorizedList
