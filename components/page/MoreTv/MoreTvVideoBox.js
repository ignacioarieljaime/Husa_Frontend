import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
function MoreTVVideoBox({ data }) {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [])
	return (
		<section id={data.name + data.id}>
			<div className='container-fluid py-9 text-center'>
				<h2 className='fs-1 fw-normal mb-9'>Watch the video</h2>
				<div className='video-container more-tv-video-container'>
					<div className='video-wrapper'>
						<iframe
							width='100%'
							height='100%'
							src={content?.video?.value}
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen></iframe>
					</div>
				</div>
				<h3
					className='fs-3hx fw-normal'
					dangerouslySetInnerHTML={{ __html: content?.title?.value }}></h3>
				<div
					dangerouslySetInnerHTML={{ __html: content?.paragraph?.value }}
					className='text-muted fw-normal mw-md-50 mx-auto mb-5'></div>
				<Link
					target={content?.link?.target ? content?.link?.target : '_self'}
					href={content?.link?.value ? content?.link?.value : '/'}>
					<a
						target={content?.link?.target ? content?.link?.target : '_self'}
						className='text-black text-uppercase fw-normal fs-8'>
						{content?.link?.title}
						{content?.link?.target === '_blank' && (
							<img style={{ marginLeft: '10px' }} src={OpenPageOnNewTab.src} />
						)}
					</a>
				</Link>
			</div>
		</section>
	)
}

export default MoreTVVideoBox
