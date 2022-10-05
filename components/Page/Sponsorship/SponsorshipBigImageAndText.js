import React from 'react'

import Image from 'public/assets/images/sponsership/stadium.png'

function SponsorshipBigImageAndText() {
	return (
		<section>
			<div className='container mt-17'>
				<div className='header-secondary'>
					<img
						src={Image.src}
						alt='featured image'
						width='100%'
						height='100%'
					/>
				</div>
				<p className='fs-4 text-white mt-16'>
					“It gives me great pleasure to welcome Hisense on board as an Official
					Sponsor of the FIFA World Cup, and we are delighted to partner with
					this
					<span className='text-secondary'>internationally respected brand</span>,
					which also has a grown presence in the sports market. FIFA and Hisense
					are both focused on technology, innovation, and giving people the
					<span className='text-secondary'>best possible experience</span>. I am
					confident that this collaboration will support the global objectives
					of both organizations and contribute to the success of what is sure to
					be an amazing event next year.
				</p>
				<div className='fs-5 text-white'>
					- Fatma Samoura, FIFA Secretary General
				</div>
			</div>
		</section>
	)
}

export default SponsorshipBigImageAndText
