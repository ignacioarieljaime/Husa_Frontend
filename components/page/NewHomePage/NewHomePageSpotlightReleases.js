import React, { useState, useEffect } from 'react'
import NewHomePageSpotlightReleasesItem from './NewHomePageSpotlightReleasesItem'

const NewHomePageSpotlightReleases = ({ data }) => {
	const [activeProduct, setActiveProduct] = useState()

	const structure = {
		productsTypes: {
			value: [
				{
					type: {
						value: 'tv',
						title: 'TELEVISIONS'
					}
				},
				{
					type: {
						value: 'laser',
						title: 'LASER TVS'
					}
				},
				{
					type: {
						value: 'refrigerator',
						title: 'Refrigerators'
					}
				},
				{
					type: {
						value: 'air-product',
						title: 'Air Products'
					}
				}
			]
		},
		list: {
			value: [
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/GalleryImages/Product/488/8e357f4b93/roku__ScaleMaxWidthWzY0MF0.png',
						alt: ''
					},
					title: {
						value: 'U6HF Series'
					},
					description: {
						value: 'All New 2022'
					},
					link: {
						title: 'Explore the U6HF',
						value: '/'
					},
					models: {
						value: [
							{
								value: '50"'
							},
							{
								value: '55"'
							},
							{
								value: '60"'
							},
							{
								value: '70"'
							}
						]
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/GalleryImages/Product/488/8e357f4b93/roku__ScaleMaxWidthWzY0MF0.png',
						alt: ''
					},
					title: {
						value: 'U6HF Series'
					},
					description: {
						value: 'All New 2022'
					},
					link: {
						title: 'Explore the U6HF',
						value: '/'
					},
					models: {
						value: [
							{
								value: '50"'
							},
							{
								value: '55"'
							},
							{
								value: '60"'
							},
							{
								value: '70"'
							}
						]
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/GalleryImages/Product/488/8e357f4b93/roku__ScaleMaxWidthWzY0MF0.png',
						alt: ''
					},
					title: {
						value: 'U6HF Series'
					},
					description: {
						value: 'All New 2022'
					},
					link: {
						title: 'Explore the U6HF',
						value: '/'
					},
					models: {
						value: [
							{
								value: '50"'
							},
							{
								value: '55"'
							},
							{
								value: '60"'
							},
							{
								value: '70"'
							}
						]
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/GalleryImages/Product/488/8e357f4b93/roku__ScaleMaxWidthWzY0MF0.png',
						alt: ''
					},
					title: {
						value: 'U6HF Series'
					},
					description: {
						value: 'All New 2022'
					},
					link: {
						title: 'Explore the U6HF',
						value: '/'
					},
					models: {
						value: [
							{
								value: '50"'
							},
							{
								value: '55"'
							},
							{
								value: '60"'
							},
							{
								value: '70"'
							}
						]
					}
				}
			]
		}
	}

	useEffect(() => {
		setActiveProduct(structure.productsTypes.value[0].type.value)
	}, [])

	return (
		<section>
			<div className='container spotlight-releases'>
				<h2 className='title'>Spotlight Releases</h2>
				<div className='product-select'>
					{structure?.productsTypes?.value.map((item, index) => (
						<button
							key={index}
							onClick={() => setActiveProduct(item?.type?.value)}
							className={activeProduct === item?.type?.value ? 'active' : ''}>
							{item?.type?.title}
						</button>
					))}
				</div>
				<div className='product-list'>
					{structure?.list?.value.map((item, index) => (
						<NewHomePageSpotlightReleasesItem
							key={index}
							title={item?.title?.value}
							description={item?.description?.value}
							models={item?.models?.value}
							link={item?.link}
							image={item?.image}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default NewHomePageSpotlightReleases
