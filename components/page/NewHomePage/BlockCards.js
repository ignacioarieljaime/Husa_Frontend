import Link from 'next/link'
import React from 'react'
import BlockCardsItem from './BlockCardsItem'

const BlockCards = ({ data }) => {
	// let { structure } = data

	const structure = {
		link: { id: 1, title: 'Link URL', type: 'url', value: '/' },
		linkTitle: {
			id: 0,
			title: 'Link Title',
			type: 'url',
			value: '"See More Hisense"'
		},
		list: {
			id: 3,
			type: 'list',
			title: 'Items',
			value: [
				{
					link: {
						id: 1,
						type: 'url',
						title: 'Link Url',
						value: '/'
					},
					image: {
						id: 3,
						alt: 'some note about this asset',
						src: 'http://assets.dev-api.hisenseportal.com/storage/hisense/asset/images/66355af9c41352.webp',
						type: 'image',
						title: 'Upload Image'
					},
					title: {
						id: 4,
						type: 'string',
						title: 'Title',
						value: 'Win a trip to the World Cup finals.'
					},
					linkTitle: {
						id: 2,
						type: 'string',
						title: 'Link Title',
						value: 'Learn More'
					},
					backgroundImage: {
						id: 5,
						alt: 'some note about this asset',
						src: 'http://assets.dev-api.hisenseportal.com/storage/hisense/asset/images/66355af8cdb941.webp',
						type: 'image',
						title: 'Background Image'
					}
				},
				{
					link: {
						id: 1,
						type: 'url',
						title: 'Link Url',
						value: '/'
					},
					image: {
						id: 3,
						alt: 'some note about this asset',
						src: 'http://assets.dev-api.hisenseportal.com/storage/hisense/asset/images/66355af628917b.webp',
						type: 'image',
						title: 'Upload Image'
					},
					title: {
						id: 4,
						type: 'string',
						title: 'Title',
						value: 'Big. Bold. Beautiful.'
					},
					linkTitle: {
						id: 2,
						type: 'string',
						title: 'Link Title',
						value: 'View Our Laser TVs'
					},
					backgroundImage: {
						id: 5,
						alt: 'some note about this asset',
						src: 'http://assets.dev-api.hisenseportal.com/storage/hisense/asset/images/66355a61b1b5c2.webp',
						type: 'image',
						title: 'Background Image'
					}
				},
				{
					link: {
						id: 1,
						type: 'url',
						title: 'Link Url',
						value: '/'
					},
					image: {
						id: 3,
						alt: 'some note about this asset',
						src: null,
						type: 'image',
						title: 'Upload Image'
					},
					title: {
						id: 4,
						type: 'string',
						title: 'Title',
						value: 'Big. Bold. Beautiful.'
					},
					linkTitle: {
						id: 2,
						type: 'string',
						title: 'Link Title',
						value: 'View Our Soundbars'
					},
					backgroundImage: {
						id: 5,
						alt: 'some note about this asset',
						src: 'http://assets.dev-api.hisenseportal.com/storage/hisense/asset/images/66355affe35215.webp',
						type: 'image',
						title: 'Background Image'
					}
				},
				{
					link: {
						id: 1,
						type: 'url',
						title: 'Link Url',
						value: '/'
					},
					image: {
						id: 3,
						alt: 'some note about this asset',
						src: null,
						type: 'image',
						title: 'Upload Image'
					},
					title: {
						id: 4,
						type: 'string',
						title: 'Title',
						value: 'Big. Bold. Beautiful.'
					},
					linkTitle: {
						id: 2,
						type: 'string',
						title: 'Link Title',
						value: 'Learn More'
					},
					backgroundImage: {
						id: 5,
						alt: 'some note about this asset',
						src: 'http://assets.dev-api.hisenseportal.com/storage/hisense/asset/images/66355b01fd4758.webp',
						type: 'image',
						title: 'Background Image'
					}
				},
				{
					link: {
						id: 1,
						type: 'url',
						title: 'Link Url',
						value: '/'
					},
					image: {
						id: 3,
						alt: 'some note about this asset',
						src: null,
						type: 'image',
						title: 'Upload Image'
					},
					title: {
						id: 4,
						type: 'string',
						title: 'Title',
						value: 'Big. Bold. Beautiful.'
					},
					linkTitle: {
						id: 2,
						type: 'string',
						title: 'Link Title',
						value: 'Learn More'
					},
					backgroundImage: {
						id: 5,
						alt: 'some note about this asset',
						src: 'http://assets.dev-api.hisenseportal.com/storage/hisense/asset/images/66355b01fd4758.webp',
						type: 'image',
						title: 'Background Image'
					},
					fullSize: {
						value: true
					}
				}
			]
		},
		title: {
			id: 2,
			type: 'string',
			title: 'Title',
			value: 'With a lot more to love.'
		}
	}

	return (
		<section>
			<div className='px-3 px-md-9 my-20'>
				<div className='new-home-page-boxes mb-13'>
					<h2 className='fs-3qx mb-10 header'>{structure?.title?.value}</h2>
					{structure?.list?.value.map((item, index) => (
						<BlockCardsItem
							key={index}
							background={item?.backgroundImage}
							image={item?.image}
							littleTitle={item?.littleTitle?.value}
							title={item?.title?.value}
							link={item?.link}
							fullSize={item?.fullSize?.value}
						/>
					))}
				</div>
				{structure?.link?.value && (
					<div className='text-center'>
						<Link href={structure?.link?.value}>
							<a className='n-btn outline-black'>{structure?.link?.title}</a>
						</Link>
					</div>
				)}
			</div>
		</section>
	)
}

export default BlockCards
