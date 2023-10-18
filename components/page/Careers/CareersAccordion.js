import React from 'react'
import CareersAccordionItem from './CareersAccordionItem'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useRef } from 'react'

const CareersAccordion = ({ data }) => {
	const { structure } = data
	const router = useRouter()
	const ref = useRef()

	useEffect(() => {
		if (router.asPath.includes(data?.name + data?.id)) {
			setTimeout(() => {
				ref.current.scrollIntoView()
			}, 1000)
		}
	}, [])
	return (
		<section ref={ref} id={data?.name + data?.id}>
			<div
				className={`extended-warranty-faq container careers_accordion ${
					structure?.singleItem?.value ? 'version_2' : ''
				}`}>
				<div className='faq-accordion-container'>
					{structure?.list?.value.map((item, index) => (
						<CareersAccordionItem
							key={index}
							data={item}
							singleItem={structure?.singleItem?.value}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default CareersAccordion
