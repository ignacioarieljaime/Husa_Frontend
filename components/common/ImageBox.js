import { useAspectRatio } from 'hooks/useAspectRatio'
import React from 'react'
import { useEffect } from 'react'

function ImageBox({ data: { structure } }) {
	structure = {
		...structure,
		height: {
			value: 40
		}
	}
	const aspectRatio = useAspectRatio(structure?.image?.src)

	return (
		<section>
			<div
				className='header-secondary2'
				style={
					aspectRatio < 1
						? { paddingTop: (aspectRatio * 100).toFixed(2) + '%' }
						: {}
				}>
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
