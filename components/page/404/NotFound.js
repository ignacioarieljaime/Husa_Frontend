import React, { useEffect, useState } from 'react'
import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

const NotFound = ({ data: { structure } }) => {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(structure?.text?.value)
	}, [])

	return (
		<section>
			<div className='not_found'>
				<div className='background'>
					<CustomImage
						src={content?.image?.src}
						alt={content?.image?.alt}
						className={'image'}
						wrapperWidth={'100%'}
						wrapperHeight={'100%'}
					/>
				</div>
				<div className='content'>
					<h1 className='title'>{content?.title?.value}</h1>
					<article className='article'>
						<div
							className='mb-12'
							dangerouslySetInnerHTML={{ __html: content?.text?.value }}></div>
						<div className='button_group'>
							{content?.link1?.value ? (
								<Link href={content?.link1?.value}>
									<a
										target={
											content?.link1?.target ? content?.link1?.target : '_self'
										}
										className='link'>
										{content?.link1?.title}
										{content?.link1?.target === '_blank' && (
											<img
												style={{ marginLeft: '10px' }}
												src={OpenPageOnNewTab.src}
											/>
										)}
									</a>
								</Link>
							) : null}{' '}
							<p className='mx-6 mb-0'>OR</p>
							{content?.link2?.value ? (
								<Link href={content?.link2?.value}>
									<a
										target={
											content?.link2?.target ? content?.link2?.target : '_self'
										}
										className='link'>
										{content?.link2?.title}
										{content?.link2?.target === '_blank' && (
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
