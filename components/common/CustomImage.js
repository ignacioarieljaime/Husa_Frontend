import React from 'react'
import Image from 'next/image'

function CustomImage({
											 alt,
											 src,
											 className="",
											 style,
											 title = '',
											 layout = 'fill',
											 wrapperWidth,
											 wrapperHeight, wrapperClass,
											 onLoad = () => {
											 }
										 }) {
	return (
		<div className={`${className} ${wrapperClass}`} onLoad={() => onLoad()}
				 style={{ ...style, height: wrapperHeight, width: wrapperWidth, position: 'relative' }}>
			<Image
				layout={layout}
				src={src}
				alt={alt}
				title={title}
				style={{ position: 'relative' }}
				className={className}
			/>
		</div>)
}

export default CustomImage