import React from 'react'
import TelevisionsBlockCardsItem from './TelevisionsBlockCardsItem'

import img from 'public/assets/images/contact.png'
import Link from 'next/link'

const TelevisionsBlockCards = ({ data: { structure } }) => {
	return (
		<section>
			<div className='televisions-cards'>
				<div className='container'>
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
										<Link href={structure?.supportBox?.value?.link?.value}>
											<a className='n-btn outline-white transparent d-block w-fit'>
												{structure?.supportBox?.value?.link?.title}
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
