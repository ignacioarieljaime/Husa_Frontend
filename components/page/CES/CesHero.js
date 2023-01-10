import React from 'react'
import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'

const CesHero = ({ structure }) => {
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
									href={
										structure?.link1?.value ? structure?.link1?.value : '/'
									}>
									<a className='n-btn outline-white transparent fs-4'>
										{structure?.link1?.title}
									</a>
								</Link>
							) : null}
							{structure?.link2?.value ? (
								<Link
									href={
										structure?.link2?.value ? structure?.link2?.value : '/'
									}>
									<a className='n-btn white-text ms-2'>
										{structure?.link2?.title} {'>'}
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
