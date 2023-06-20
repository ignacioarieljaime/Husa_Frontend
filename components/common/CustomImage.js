import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

function CustomImage({
	alt,
	src,
	className = '',
	style,
	title = '',
	layout = 'fill',
	wrapperWidth,
	wrapperHeight,
	wrapperClass,
	imageClass,
	WrapperMaxWidth,
	WrapperMaxHeight,
	onLoad = () => {}
}) {
	const image = useRef()
	useEffect(() => {
		if (src) {
			image.current.childNodes[0].childNodes[0].setAttribute(
				'style',
				'position: relative !important;width:100%;    height: 100%;'
			)
			image.current.childNodes[0].setAttribute(
				'style',
				'position: relative !important;height: fit-content;width: 100%;display: block;    height: 100%;'
			)
		}
	}, [])

	if (src) {
		return (
			<div
				className={`${className} ${wrapperClass}`}
				onLoad={() => onLoad()}
				ref={image}
				style={{
					...style,
					height: wrapperHeight,
					width: wrapperWidth,
					maxWidth: WrapperMaxWidth,
					maxHeight: WrapperMaxHeight,
					position: 'relative'
				}}>
				<Image
					layout={layout}
					src={src}
					alt={alt}
					title={title}
					style={{ position: 'relative' }}
					className={`${className} ${imageClass}`}
				/>
			</div>
		)
	}
}

export default CustomImage
