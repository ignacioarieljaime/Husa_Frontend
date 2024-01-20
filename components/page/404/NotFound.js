import React, { useEffect, useState } from 'react'
import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

const NotFound = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])

	return (
		<section>
			<div className='not_found'>
				<div className='background'>
					<CustomImage
						src={structure?.image?.src}
						alt={structure?.image?.alt}
						className={'image'}
						wrapperWidth={'100%'}
						wrapperHeight={'100%'}
					/>
				</div>
				<div className='content'>
					<h1 className='title'>{structure?.title?.value}</h1>
					<article className='article'>
						<div
							className='mb-12'
							dangerouslySetInnerHTML={{
								__html: structure?.text?.value
							}}></div>
						<div className='button_group'>
							{structure?.link1?.value ? (
								<Link href={structure?.link1?.value}>
									<a
										target={
											structure?.link1?.target
												? structure?.link1?.target
												: '_self'
										}
										className='link'>
										{structure?.link1?.title}
										{structure?.link1?.target === '_blank' && (
											<img
												style={{ marginLeft: '10px' }}
												src={OpenPageOnNewTab.src}
											/>
										)}
									</a>
								</Link>
							) : null}{' '}
							<p className='mx-6 mb-0'>OR</p>
							{structure?.link2?.value ? (
								<Link href={structure?.link2?.value}>
									<a
										target={
											structure?.link2?.target
												? structure?.link2?.target
												: '_self'
										}
										className='link'>
										{structure?.link2?.title}
										{structure?.link2?.target === '_blank' && (
											<img
												style={{ marginLeft: '10px' }}
												src={OpenPageOnNewTab.src}
											/>
										)}
									</a>
								</Link>
							) : null}
						</div>
					</article>
				</div>
			</div>
		</section>
	)
}

export default NotFound
