import React from 'react'
import TelevisionsBlockSpotlightItem from './TelevisionsBlockSpotlightItem'

const TelevisionsBlockSpotlight = ({ data: { structure } }) => {
	structure = {
		text: {
			value:
				'<h3>Find the perfect Hisense TV just for you.</h3><br /><p>You deserve high-end performance, quality, and immersive features — and Hisense brings <br /> all of this to the table with a versatile lineup of TVs that are hard not to fall in love with. <br /> Whether you’re into movies, video games, or just catching the big game,<br /> Hisense has a TV that’s right for you.</p>'
		},
		list: {
			value: [
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/4c7d9f2bd6/U6H-Reward_ScaleMaxWidthWzY0MF0__ScaleMaxWidthWzMwNDhd.png-xc4uq9.png',
						alt: 'laser tv'
					},
					title: {
						value: 'Smart 4K UHD TVs'
					},
					link: {
						title: 'See products',
						value: '/'
					},
					productLink: {
						title: 'Shop now',
						value: '/'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/GalleryImages/Product/365/b550c64ae2/u800__ScaleMaxWidthWzY0MF0.png',
						alt: 'laser tv'
					},
					title: {
						value: 'Smart 4K UHD TVs'
					},
					link: {
						title: 'See products',
						value: '/'
					},
					productLink: {
						title: 'Shop now',
						value: '/'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/dcbd61174f/u6h-infill__ScaleMaxWidthWzMwNDhd.png-rdv98j.png',
						alt: 'laser tv'
					},
					title: {
						value: 'Smart 4K UHD TVs'
					},
					link: {
						title: 'See products',
						value: '/'
					},
					productLink: {
						title: 'Shop now',
						value: '/'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/02f59535b5/U7H-main__ScaleMaxWidthWzMwNDhd.png-kztgtc.png',
						alt: 'laser tv'
					},
					title: {
						value: 'Smart 4K UHD TVs'
					},
					link: {
						title: 'See products',
						value: '/'
					},
					productLink: {
						title: 'Shop now',
						value: '/'
					}
				}
			]
		}
	}

	return (
		<section>
			<div className='televisions-spotlight '>
				<div className='container'>
					<div
						className='text-content'
						dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
					<div className='row justify-content-center align-content-stretch items'>
						{structure?.list?.value.map((item, index) => (
							<TelevisionsBlockSpotlightItem data={item} key={index} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default TelevisionsBlockSpotlight
