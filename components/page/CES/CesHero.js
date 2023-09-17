import React from 'react'
import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

const CesHero = ({ data: { structure } }) => {
	return (
		<section>
			<div className='ces_hero'>
				<div className='custom_container'>
					<CustomImage
						src={structure?.backgroundImage?.src}
						alt={'parallax background'}
						className={'img-fluid'}
						wrapperHeight={'100%'}
						wrapperWidth={'100%'}
					/>
					<div className='banner-content'>
						{structure?.title?.value ? (
							<h1
								className='title fs-3x'
								dangerouslySetInnerHTML={{
									__html: structure?.title?.value
								}}></h1>
						) : null}
						<div>
							{structure?.link1?.value ? (
								<Link
									target={
										structure?.link1?.target
											? structure?.link1?.target
											: '_self'
									}
									href={
										structure?.link1?.value ? structure?.link1?.value : '/'
									}>
									<a
										target={
											structure?.link1?.target
												? structure?.link1?.target
												: '_self'
										}
										className='n-btn outline-white medium transparent d-inline-block w-fit fs-md-4'>
										{structure?.link1?.title}
										{structure?.link1?.target === '_blank' && (
											<img
												style={{ marginLeft: '10px' }}
												src={OpenPageOnNewTab.src}
											/>
										)}
									</a>
								</Link>
							) : null}
							{structure?.link2?.value ? (
								<Link
									target={
										structure?.link2?.target
											? structure?.link2?.target
											: '_self'
									}
									href={
										structure?.link2?.value ? structure?.link2?.value : '/'
									}>
									<a
										target={
											structure?.link2?.target
												? structure?.link2?.target
												: '_self'
										}
										className='n-btn medium white-text ms-2 fs-8 fs-md-base'>
										{structure?.link2?.title} {'>'}
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
					</div>
				</div>
			</div>
		</section>
	)
}

export default CesHero
