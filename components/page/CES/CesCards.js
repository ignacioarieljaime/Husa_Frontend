import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const CesCards = ({ data }) => {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [data])

	return (
		<section>
			<div className='ces_cards'>
				<div
					className='title'
					dangerouslySetInnerHTML={{ __html: content?.title?.value }}></div>
				<div className='row justify-content-center align-items-center'>
					<div className='col-12 py-3'>
						<div
							className='tv-item full-size'
							style={{
								backgroundImage: `url(${content?.block1?.value?.backgroundImage?.src})`
							}}>
							<div className='content'>
								<div
									className={`title ${
										content?.block1?.value?.theme?.value === 'light'
											? 'text-white'
											: ''
									}`}
									dangerouslySetInnerHTML={{
										__html: content?.block1?.value?.title?.value
									}}></div>
								{content?.block1?.value?.link?.value ? (
									<Link href={content?.block1?.value?.link?.value}>
										<a
											className={`n-btn transparent d-block w-fit ${
												content?.block1?.value?.theme?.value === 'light'
													? 'outline-white'
													: 'outline-black'
											}`}>
											{content?.block1?.value?.link?.title}
										</a>
									</Link>
								) : null}
							</div>
						</div>
					</div>
					<div className='col-12 py-3'>
						<div
							className='tv-item full-size'
							style={{
								backgroundImage: `url(${content?.block2?.value?.backgroundImage?.src})`
							}}>
							<div className='content'>
								<img
									src={content?.block2?.value?.image1?.src}
									alt={content?.block2?.value?.image1?.alt}
									className='image'
								/>
								<img
									src={content?.block2?.value?.image2?.src}
									alt={content?.block2?.value?.image2?.alt}
									className='badge'
								/>
								<div
									className={`title ${
										content?.block2?.value?.theme?.value === 'light'
											? 'text-white'
											: ''
									}`}
									dangerouslySetInnerHTML={{
										__html: content?.block2?.value?.title?.value
									}}></div>
								{content?.block2?.value?.link?.value ? (
									<Link href={content?.block2?.value?.link?.value}>
										<a
											className={`n-btn transparent d-block w-fit ${
												content?.block2?.value?.theme?.value === 'light'
													? 'outline-white'
													: 'outline-black'
											}`}>
											{content?.block2?.value?.link?.title}
										</a>
									</Link>
								) : null}
							</div>
						</div>
					</div>
					<div
						className={`box flex-column justify-content-between d-flex col-12 col-md-6`}>
						<div className='box-background'>
							<CustomImage
								src={content?.block3?.value?.backgroundImage?.src}
								alt={content?.block3?.value?.backgroundImage?.alt}
								wrapperHeight='100%'
								wrapperWidth='100%'
							/>
							<div className='box-background-shade'></div>
						</div>
						<div className='box-content'>
							<div>
								{content?.block3?.value?.image?.src && (
									<img
										src={content?.block3?.value?.image?.src}
										alt={content?.block3?.value?.image?.alt}
										width='100%'
										className='mb-5 mb-md-7'
									/>
								)}
								<h3 className='mb-3 mb-md-6 fs-4 fs-md-2'>
									{content?.block3?.value?.title?.value}
								</h3>
								{content?.block3?.value?.link?.title &&
								content?.block3?.value?.link?.value ? (
									<Link
										href={
											content?.block3?.value?.link?.value
												? content?.block3?.value?.link?.value
												: '/'
										}>
										<a className='n-btn outline-white transparent d-block w-fit'>
											{content?.block3?.value?.link?.title}
										</a>
									</Link>
								) : null}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CesCards
