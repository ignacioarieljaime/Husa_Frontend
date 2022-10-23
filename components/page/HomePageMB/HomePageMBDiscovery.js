import React from 'react'
import HomePageMBDiscoveryItem from './HomePageMBDiscoveryItem'

const HomePageMBDiscovery = ({ data }) => {
	let structure = {
		list: {
			value: [
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/867b78c83f/download_ScaleMaxWidthWzMwNDhd__ScaleMaxWidthWzMwNDhd.png-akouj4.png-xl6sfw.png'
					},
					title: {
						value: '100 Days. $100 Reward.No Regrets.'
					},
					paragraph: {
						value: '*compared to the 1 year industry standard.'
					},
					link: {
						value: '/',
						title: 'View Products'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/867b78c83f/download_ScaleMaxWidthWzMwNDhd__ScaleMaxWidthWzMwNDhd.png-akouj4.png-xl6sfw.png'
					},
					title: {
						value: '100 Days. $100 Reward.No Regrets.'
					},
					paragraph: {
						value: '*compared to the 1 year industry standard.'
					},
					link: {
						value: '/',
						title: 'View Products'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/867b78c83f/download_ScaleMaxWidthWzMwNDhd__ScaleMaxWidthWzMwNDhd.png-akouj4.png-xl6sfw.png'
					},
					title: {
						value: '100 Days. $100 Reward.No Regrets.'
					},
					paragraph: {
						value: '*compared to the 1 year industry standard.'
					},
					link: {
						value: '/',
						title: 'View Products'
					}
				}
			]
		},
		title: {
			value: 'There’s More to Discover at Hisense'
		}
	}
	return (
		<section>
			<div className='home-page-mb-discovery py-20'>
				<h2 className='fs-2qx mb-17'>{structure.title.value}</h2>
				<div className='row justify-content-evenly align-items-center mx-0'>
					{structure.list.value.map((item, index) => (
						<HomePageMBDiscoveryItem
							key={index}
							image={item.image}
							link={item.link}
							title={item.title.value}
							paragraph={item.paragraph.value}
							width={100 / structure.list.value.length}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default HomePageMBDiscovery
