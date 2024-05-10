import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

function ProductSupportNavBarInfo({ pim, data }) {
	let { structure } = data
	const [fix, setFix] = useState(false)
	const menu = useRef()

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (menu?.current?.offsetTop <= window.scrollY + 72) {
				setFix(true)
			} else {
				setFix(false)
			}
		})
	}, [])
  console.log(structure)
	return (
		<div
			id={data.name + data.id}
			ref={menu}
			style={{
				zIndex: fix ? 100005 : 10,
				padding: fix ? '19px 0px' : '0.75rem 0px'
			}}
			className='catalog-navbar bg-black info-box'>
			<nav className='container'>
				<ul className='row justify-content-evenly justify-content-md-end align-items-center p-0 m-0'>
					<li className='me-md-auto'>
						<span className='text-secondary'>{pim?.model}</span>
					</li>
					{structure?.tags?.value.map((item, index) => (
						<li key={index}>
              <img src={item?.image?.src} style={{width:"50px"}} />
							<Link
								target={item?.target?.target ? item?.target?.target : '_self'}
								href={item?.target?.value ? item?.target?.value : '/'}>
								<a
									target={
										item?.target?.target ? item?.target?.target : '_self'
									}>
									<span className='underline-on-hover'>
										{item?.title?.value}
										{item?.target?.target === '_blank' && (
											<img
												style={{ marginLeft: '10px' }}
												src={OpenPageOnNewTab.src}
											/>
										)}
									</span>
								</a>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}

export default ProductSupportNavBarInfo
