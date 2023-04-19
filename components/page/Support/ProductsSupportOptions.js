import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
function ProductsSupportOptions({ data }) {
	let { structure } = data
	const [list, setList] = useState([])
	useEffect(() => {
		setList(structure?.list?.value)
	}, [])
	return (
		<section className='border-top border-dark'>
			<div className='supports supports-new row justify-content-center align-items-stretch mx-0'>
				{list.map((item, index) => (
					<div
						key={'support-item' + index}
						className='col-12 col-sm-6 col-md-4 d-flex flex-column justify-content-between align-items-center px-13 py-18'>
						<div className='bg-black p-4 px-6 mb-10'>
							<img src={item?.image?.src} width={35} alt='' />
						</div>
						<div className='text-center'>
							<h4 className='mb-4'>{item?.title?.value}</h4>
							<div
								className='fw-light fs-8 mb-6'
								dangerouslySetInnerHTML={{
									__html: item?.paragraph?.value
								}}></div>
						</div>
						<Link
							target={item?.link?.target ? item?.link?.target : '_self'}
							href={item?.link?.value}>
							<a className='btn btn-outline-dark px-4 py-3 rounded-5'>
								{item?.linkTitle?.value}
								{item?.link?.target === '_blank' && (
									<img
										style={{ marginLeft: '10px' }}
										src={OpenPageOnNewTab.src}
									/>
								)}
							</a>
						</Link>
					</div>
				))}
			</div>
		</section>
	)
}

export default ProductsSupportOptions
