import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import BlackFridayProductsItem from './BlackFridayProductsItem'

const BlackFridayProductsBlock = ({ data }) => {
	const [content, setContent] = useState(null)
	const router = useRouter()
	const ref = useRef()
	useEffect(() => {
		setContent(data?.structure)
		if (router.asPath.includes(data?.name + data?.id)) {
			setTimeout(() => {
				ref.current.scrollIntoView()
			}, 1000)
		}
	}, [])

	return (
		<section id={data?.name + data?.id} ref={ref}>
			<div className='black_friday_products'>
				<div className='products_grid'>
					{content?.list?.value.map((item, index) => (
						<BlackFridayProductsItem key={index} data={item} />
					))}
				</div>
				{content?.text?.value ? (
					<div
						className='note'
						dangerouslySetInnerHTML={{ __html: content?.text?.value }}></div>
				) : null}
			</div>
		</section>
	)
}

export default BlackFridayProductsBlock
