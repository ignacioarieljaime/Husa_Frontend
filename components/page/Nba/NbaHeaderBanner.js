import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const NbaHeaderBanner = ({ data }) => {
	let { structure } = data
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.text?.value)
	}, [])
	return (
		<>
			<section className='day-100  position-relative'>
				<div className='header-secondary'>
					<img
						src={structure?.desktop?.src}
						alt={structure?.desktop?.alt}
						width='100%'
						height='100%'
						className='d-none d-md-block'
					/>
					<img
						src={structure?.mobile?.src}
						alt={structure?.mobile?.alt}
						width='100%'
						height='100%'
						className='d-block d-md-none'
					/>
				</div>
			</section>
			<section
				className={`google-tv-text-box ${
					structure?.theme?.value === 'light' ? 'light' : 'dark'
				}`}>
				<article className='article'>
					<div dangerouslySetInnerHTML={{ __html: text }}></div>
				</article>
			</section>
		</>
	)
}

export default NbaHeaderBanner
