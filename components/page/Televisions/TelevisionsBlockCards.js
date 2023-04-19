import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import TelevisionsBlockCardsItem from './TelevisionsBlockCardsItem'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
const TelevisionsBlockCards = ({ data }) => {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [])
	return (
		<section>
			<div className='televisions-cards'>
				<div className='container televisions_container'>
					<div
						className='title'
						dangerouslySetInnerHTML={{ __html: content?.title?.value }}></div>
					<div
						className='subtitle'
						dangerouslySetInnerHTML={{
							__html: content?.subtitle?.value
						}}></div>
					<div className='row justify-content-center'>
						{content?.list?.value.map((item, index) => (
							<TelevisionsBlockCardsItem data={item} key={index} />
						))}
						<div className='col-12 py-3'>
							<div
								className='hisense-support-card card-item'
								style={{
									backgroundImage: `url(${content?.supportBox?.value?.image?.src})`
								}}>
								<div className='box'>
									<div
										dangerouslySetInnerHTML={{
											__html: content?.supportBox?.value?.title?.value
										}}></div>
									{content?.supportBox?.value?.link?.value ? (
										<Link
											target={
												content?.supportBox?.value?.link?.target
													? content?.supportBox?.value?.link?.target
													: '_self'
											}
											href={content?.supportBox?.value?.link?.value}>
											<a className='n-btn outline-white transparent d-block w-fit'>
												{content?.supportBox?.value?.link?.title}
												{content?.supportBox?.value?.link?.target ===
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
