import React from 'react'

import Link from 'next/link'
import {
	useParallax,
	useParallaxController,
	ParallaxProvider
} from 'react-scroll-parallax'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
const BlogListSoundBardItem = ({ data }) => {
	return (
		<ParallaxProvider>
			<BlogListSoundBardItemContainer data={data} />
		</ParallaxProvider>
	)
}
function BlogListSoundBardItemContainer({ data }) {
	const parallaxController = useParallaxController()

	const imageRef = useParallax({
		speed: 10,
		translateY: [0, -5]
	})

	return (
		<div className='row align-items-center py-8 border-bottom mx-0 blog-article-box-row'>
			<figure className='col-12 col-md-9 mb-0 px-0'>
				<div className='row justify-content-between align-items-center'>
					<div className='col-12 col-md-4 col-lg-3 mb-5 mb-md-0'>
						<div className='image-box'>
							<Link
								target={data?.image?.target ? data?.image?.target : '_self'}
								href={data?.link?.value ? data?.link?.value : '/'}>
								<a
									target={data?.image?.target ? data?.image?.target : '_self'}
									className='d-block'>
									<img
										src={data?.image?.src}
										alt={data?.image?.alt}
										style={{ objectFit: 'cover' }}
										width='100%'
										height='110%'
										ref={imageRef.ref}
										onLoad={() => parallaxController.update()}
									/>
								</a>
							</Link>
						</div>
					</div>
					<figcaption className='col-12 col-md-8'>
						<div className='text-start mb-3'>
							{data?.tag?.value?.map(item => (
								<>
									{/* <Link href={data?.tagLink?.value ? data?.tagLink?.value : '/'}> */}
									<a
										style={{ marginRight: '20px' }}
										className='text-primary-dark text-decoration-none'>
										{item}
									</a>
									{/* </Link> */}
								</>
							))}
						</div>
						<div className='mb-8 mb-md-0'>
							<h3 className='fs-3 mb-0'>{data?.title?.value}</h3>
						</div>
					</figcaption>
				</div>
			</figure>
			<div className='col-12 col-md-3 px-0'>
				<div className='text-start text-md-end'>
					<Link
						target={data?.link?.target ? data?.link?.target : '_self'}
						href={data?.link?.value ? data?.link?.value : '/'}>
						<a
							target={data?.link?.target ? data?.link?.target : '_self'}
							className='n-btn blog-primary px-6 py-3 rounded-5 text-uppercase'>
							{data?.link?.title}
							{data?.link?.target === '_blank' && (
								<img
									style={{ marginLeft: '10px', objectFit: 'cover' }}
									src={OpenPageOnNewTab.src}
								/>
							)}
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default BlogListSoundBardItem
