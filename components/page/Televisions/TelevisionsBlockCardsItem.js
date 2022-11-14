import Link from 'next/link'
import React from 'react'

const TelevisionsBlockCardsItem = ({ data }) => {
	return (
		<div className='col-12 col-lg-6 py-3'>
			<div className='card-item'>
				{data?.backgroundImage?.src ? (
					<img
						src={data?.backgroundImage?.src}
						alt={data?.backgroundImage?.alt}
						className='background-image'
					/>
				) : null}
				<div className='content'>
					<div
						className='title'
						dangerouslySetInnerHTML={{ __html: data?.title?.value }}></div>
					{data?.image?.src ? (
						<img
							src={data?.image?.src}
							alt={data?.image?.alt}
							className='image'
						/>
					) : null}
					<div>
						<div
							className='subtitle'
							dangerouslySetInnerHTML={{ __html: data?.subtitle?.value }}></div>
						{data?.link?.value ? (
							<Link href={data?.link?.value}>
								<a className='n-btn outline-white transparent d-block w-fit mx-auto'>
									{data?.link?.title}
								</a>
							</Link>
						) : null}
					</div>
				</div>
			</div>
		</div>
	)
}

export default TelevisionsBlockCardsItem
