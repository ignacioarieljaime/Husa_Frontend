import React from 'react'

const PromoBanner = ({ data: { structure } }) => {
	structure = {
		image: {
			src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/ea97ded4de/ENDLESS-ENTERTAINMENT-copy-blackv2__ScaleMaxWidthWzMwNDhd.png-q9tu3j.png'
		},
		title: { value: 'HISENSE OFFER: GOOGLE PLAY CARD' },
		text: {
			value:
				"<p>Get a US $20 Google Play card with a purchase of either a Hisense Android TV 50H8F or 55H8F televisions from BJ's Wholesale Club.<br><br>Get a US $30 Google Play card with a purchase of a Hisense Android TV 65H8F television from &nbsp;BJ's Wholesale Club.<br><br>See Offer Claim Form below.</p>"
		}
	}

	return (
		<section>
			<div className='promo_banner'>
				<img
					src={structure?.image?.src}
					alt={structure?.image?.alt}
					className='background'
				/>
				<div className='text-container'>
					<h1 className='title'>{structure?.title?.value}</h1>
					<div
						className='description'
						dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
				</div>
			</div>
		</section>
	)
}

export default PromoBanner
