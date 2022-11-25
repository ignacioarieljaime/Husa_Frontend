import React from 'react'
import Image from 'next/image'

function CustomImage({ alt, src, className, layout = 'fill', wrapperWidth, wrapperHeight }) {
	return (<div style={{ height: wrapperHeight, width: wrapperWidth, position: 'relative' }}>
		<Image
			layout={layout}
			src={src}
			alt={alt}
			style={{ position: 'relative' }}
			className={className}
		/>
	</div>)
}

export default CustomImage