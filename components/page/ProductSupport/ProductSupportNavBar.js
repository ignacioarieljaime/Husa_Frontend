import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
import ellipsisMenu from 'public/assets/images/icon-ellipsis-vertical.png'
import { useWindowSize } from 'hooks/useWindowSize'
import NavbarExit from 'components/icons/NavbarExit'

function ProductSupportNavBar({ pim, data }) {
	let { structure } = data
	const [fix, setFix] = useState(false)
	const menu = useRef()
	const [openList, setOpenList] = useState(false)
	const windowSize = useWindowSize()

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (menu?.current?.offsetTop <= window.scrollY + 72) {
				setFix(true)
			} else {
				setFix(false)
			}
		})
	}, [])
	return (
		<section
			id={data.name + data.id}
			ref={menu}
			className='product_support_nav_container'>
			<div className='product_support_nav'>
				<nav className='container_nav'>
					<ul className={`items mb-md-0 ${openList ? 'mb-9' : 'mb-0'}`}>
						<li className='me-auto'>
							<span className='model'>{pim?.model}</span>
						</li>

						{windowSize[0] > 768
							? structure?.tags?.value.map((item, index) => (
									<li>
										<Link
											target={
												item?.target?.target ? item?.target?.target : '_self'
											}
											href={item?.target?.value ? item?.target?.value : '/'}>
											<a
												className='link'
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
							  ))
							: null}
						{windowSize[0] <= 768 && (
							<li>
								<button
									className='menu_btn'
									onClick={() => setOpenList(prevState => !prevState)}>
									{!openList ? <img src={ellipsisMenu.src} /> : <NavbarExit />}
								</button>
							</li>
						)}
					</ul>
					{windowSize[0] <= 768 && openList && (
						<ul className='items vertical'>
							{structure?.tags?.value.map((item, index) => (
								<li onClick={() => setOpenList(false)}>
									<Link
										target={
											item?.target?.target ? item?.target?.target : '_self'
										}
										href={item?.target?.value ? item?.target?.value : '/'}>
										<a
											className='link'
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
					)}
				</nav>
			</div>
		</section>
	)
}

export default ProductSupportNavBar
