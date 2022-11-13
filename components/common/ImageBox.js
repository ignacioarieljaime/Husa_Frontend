import React from 'react'

function ImageBox({ data: { structure } }) {
	structure = {
		...structure,
		height: {
			value: 40
		}
	}
	return (
		<section>
			<div
				className='header-secondary2'
				style={{ paddingTop: structure?.height?.value + '%' }}>
				<img
					src={structure?.image?.src}
					alt={structure?.image?.alt}
					width='100%'
					height='100%'
				/>
			</div>
		</section>
	)
}

export default ImageBox
