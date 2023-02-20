import React from 'react'
import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'

const LandingStaticBanner = ({ data }) => {
	const { structure } = data
	return (
		<section>
			<div className='landing_new_banner'>
				<div className='background'>
					<CustomImage
						src={structure?.image?.src}
						alt={structure?.image?.alt}
						wrapperHeight='100%'
						wrapperWidth='100%'
						wrapperClass='image'
					/>
				</div>
				<div className='content'>
					{structure?.link?.value ? (
						<Link href={structure?.link?.value}>
							<a
								className={`n-btn py-3 px-6 ${
									structure?.theme?.value === 'dark'
										? 'outline-black'
										: 'outline-white'
								}`}>
								{structure?.link?.title}
							</a>
						</Link>
					) : null}
				</div>
			</div>
		</section>
	)
}

export default LandingStaticBanner
