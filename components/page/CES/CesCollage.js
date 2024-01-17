import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import CesCollageItem from './CesCollageItem'

const CesCollage = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	const router = useRouter()
	const ref = useRef()
	useEffect(() => {
		// setContent(structure)
		if (router.asPath.includes(data?.name + data?.id)) {
			setTimeout(() => {
				ref.current.scrollIntoView()
			}, 1000)
		}
	}, [])
	return (
		<section>
			<div id={data?.name + data?.id} ref={ref} className='ces_collage'>
				<h2
					className='ces_collage___title'
					dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></h2>
				{structure?.list?.value.map((item, index) => (
					<CesCollageItem key={index} data={item} wrapperRef={ref} />
				))}
			</div>
		</section>
	)
}

export default CesCollage
