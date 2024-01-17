import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import TelevisionsBlockCardsItem from './TelevisionsBlockCardsItem'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
const TelevisionsBlockCards = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])
	return (
		<section>
			<div className='televisions-cards'>
				<div className='container televisions_container'>
					<div
						className='title'
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></div>
					<div
						className='subtitle'
						dangerouslySetInnerHTML={{
							__html: structure?.subtitle?.value
						}}></div>
					<div className='row justify-content-center'>
						{structure?.list?.value.map((item, index) => (
							<TelevisionsBlockCardsItem data={item} key={index} />
						))}
						<div className='col-12 py-3'>
							<div
								className='hisense-support-card card-item'
								style={{
									backgroundImage: `url(${structure?.supportBox?.value?.image?.src})`
								}}>
								<div className='box'>
									<div
										dangerouslySetInnerHTML={{
											__html: structure?.supportBox?.value?.title?.value
										}}></div>
									{structure?.supportBox?.value?.link?.value ? (
										<Link
											target={
												structure?.supportBox?.value?.link?.target
													? structure?.supportBox?.value?.link?.target
													: '_self'
											}
											href={structure?.supportBox?.value?.link?.value}>
											<a
												target={
													structure?.supportBox?.value?.link?.target
														? structure?.supportBox?.value?.link?.target
														: '_self'
												}
												className='n-btn outline-white transparent medium d-block w-fit'>
												{structure?.supportBox?.value?.link?.title}
												{structure?.supportBox?.value?.link?.target ===
													'_blank' && (
													<img
														style={{ marginLeft: '10px' }}
														src={OpenPageOnNewTab.src}
													/>
												)}
											</a>
										</Link>
									) : null}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TelevisionsBlockCards
