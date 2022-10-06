import React from 'react'

// image
import Banner from './../../../public/assets/images/sponsership/fnatic-banner.png'
function SponsorImageAndText() {
	return (
		<section>
			<div className='container mt-20'>
				<div className='row position-relative'>
					<div className='col-12 col-md-6'>
						<img src={Banner.src} alt='featured image' width='100%' />
					</div>
					<div className='col-12 col-md-6 mt-14 mt-md-0 position-relative'>
						<p className='fs-5 text-white mb-14'>
							Hisense, the global consumer electronics and home appliances
							market leader, today announced a multi-year partnership with
							esports organization, Fnatic. Through this partnership, the two
							companies will produce a variety of content, including product
							reviews, video collaborations and social engagement, each
							featuring Hisense appliances and Fnatic's prominent teams.
						</p>
						<div className='floating-text'>
							<p className='fs-4 text-white'>
								“We are proud to partner with Hisense, a
								<span className='text-secondary'>forward-thinking</span>, innovative
								company, that is committed to bringing happiness into the homes
								of millions of families. As a trusted partner, we are excited to
								share this
								<span className='text-secondary'>collaboration</span> with our fans,
								players and creators.”
							</p>
							<div className='fs-5 text-white'>
								- Sam Mathews, Founder & CEO of Fnatics
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SponsorImageAndText
