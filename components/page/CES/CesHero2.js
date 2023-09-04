import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const CesHero2 = ({ data }) => {
	const { structure } = data
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(structure)
	}, [])
	return (
		<section>
			{content?.template?.value === 'v2' ? (
				<div className='ces_hero type_2 version_2'>
					<div className='custom_container'>
						<img
							src={content?.backgroundImage?.src}
							alt={'background'}
							className={'background'}
						/>
						<div className='content'>
							<img
								src={content?.image?.src}
								alt={'background'}
								className={'img'}
							/>
							<h3 className='title'>{content?.title?.value}</h3>
							<div
								className='text'
								dangerouslySetInnerHTML={{
									__html: content?.text?.value
								}}></div>
							{content?.link?.value && (
								<Link
									target={
										content?.link?.target ? content?.link?.target : '_self'
									}
									href={content?.link?.value}>
									<a
										target={
											content?.link?.target ? content?.link?.target : '_self'
										}
										className='n-btn outline-white'>
										{content?.link?.title}
									</a>
								</Link>
							)}
						</div>
					</div>
				</div>
			) : (
				<div className='ces_hero type_2'>
					<div className='custom_container'>
						<img
							src={content?.backgroundImage?.src}
							alt={'background'}
							className={'background'}
						/>
					</div>
				</div>
			)}
		</section>
	)
}

export default CesHero2
