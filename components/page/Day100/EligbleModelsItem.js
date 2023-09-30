import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

const EligbleModelsItem = ({ data }) => {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(data?.specs?.value)
	}, [])

	return (
		<div className='item day-100'>
			<div className='d-flex flex-column h-100 justify-content-between align-items-start'>
				<div>
					<span className='text-primary fs-4 fw-bold d-flex w-100 justify-content-center'>
						{data?.title?.value}
					</span>
					<div className='text-center position-relative mb-10'>
						<img src={data?.image?.src} alt={data?.image?.alt} width='90%' />
						{/* <div className='infill-overlay'>Use current infills</div> */}
					</div>
					<div className='text-center'>
						<h5 className='item-size'>{data?.grayText?.value} </h5>
						<h4 className='item-series'>{data?.series?.value}</h4>
						<div
							className='item-features text-center'
							dangerouslySetInnerHTML={{ __html: text }}></div>
					</div>
				</div>
				<div className='text-left mt-8 d-flex justify-content-center align-items-center w-100'>
					<Link
						target={data?.shopNow?.target ? data?.shopNow?.target : '_self'}
						href={data?.shopNow?.value}>
						<a
							target={data?.shopNow?.target ? data?.shopNow?.target : '_self'}
							className='n-btn primary rounded-5 medium'>
							{data?.shopNow?.title}
							{data?.shopNow?.target === '_blank' && (
								<img
									style={{ marginLeft: '10px' }}
									src={OpenPageOnNewTab.src}
								/>
							)}
						</a>
					</Link>
					<Link
						target={data?.learnMore?.target ? data?.learnMore?.target : '_self'}
						href={data?.learnMore?.value}>
						<a
							target={
								data?.learnMore?.target ? data?.learnMore?.target : '_self'
							}
							className='text-purple ms-5'>
							{data?.learnMore?.title}
							{data?.learnMore?.target === '_blank' && (
								<img
									style={{ marginLeft: '10px' }}
									src={OpenPageOnNewTab.src}
								/>
							)}
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default EligbleModelsItem
