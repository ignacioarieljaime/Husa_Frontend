import React from 'react'

function ListImageBox({ data }) {
	let { structure } = data
	return (
		<div
			className='d-flex justify-content-between'
			style={{ padding: '60px 0' }}>
			{structure?.list?.value.map(item => (
				<img
					style={{
						width: `calc(${100 / structure?.list?.value.length}% - 25px)`
					}}
					src={item?.image?.src}
					alt={item?.image?.alt}
				/>
			))}
		</div>
	)
}

export default ListImageBox
