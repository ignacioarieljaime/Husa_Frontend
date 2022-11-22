import React from 'react'
import RelatedProductsItem from './RelatedProductsItem'

const RelatedProducts = ({ data: { structure } }) => {
	structure = {
		list: {
			value: [
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/GalleryImages/Product/341/78f69ec671/u9d6__ScaleMaxWidthWzY0MF0.png'
					},
					isNew: { value: true },
					link: { value: '/' },
					serie: { value: 'U7 Series' },
					title: { value: '55" 4K ULED™ Hisense Android Smart TV (2021)' },
					models: {
						value: [
							{
								link: {
									title: '55"',
									value: '/'
								}
							}
						]
					},
					types: {
						value: [
							{
								title: {
									value: '2020'
								},
								models: {
									value: [
										{
											title: 'U9DG',
											value: '/'
										}
									]
								}
							}
						]
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/GalleryImages/Product/341/78f69ec671/u9d6__ScaleMaxWidthWzY0MF0.png'
					},
					isNew: { value: true },
					serie: { value: 'U7 Series' },
					link: { value: '/' },
					title: { value: '55" 4K ULED™ Hisense Android Smart TV (2021)' },
					models: {
						value: [
							{
								link: {
									title: '55"',
									value: '/'
								}
							}
						]
					},
					types: {
						value: [
							{
								title: {
									value: '2020'
								},
								models: {
									value: [
										{
											title: 'U9DG',
											value: '/'
										}
									]
								}
							}
						]
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/GalleryImages/Product/341/78f69ec671/u9d6__ScaleMaxWidthWzY0MF0.png'
					},
					isNew: { value: true },
					link: { value: '/' },
					serie: { value: 'U7 Series' },
					title: { value: '55" 4K ULED™ Hisense Android Smart TV (2021)' },
					models: {
						value: [
							{
								link: {
									title: '55"',
									value: '/'
								}
							}
						]
					},
					types: {
						value: [
							{
								title: {
									value: '2020'
								},
								models: {
									value: [
										{
											title: 'U9DG',
											value: '/'
										}
									]
								}
							}
						]
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/GalleryImages/Product/341/78f69ec671/u9d6__ScaleMaxWidthWzY0MF0.png'
					},
					isNew: { value: true },
					link: { value: '/' },
					serie: { value: 'U7 Series' },
					title: { value: '55" 4K ULED™ Hisense Android Smart TV (2021)' },
					models: {
						value: [
							{
								link: {
									title: '55"',
									value: '/'
								}
							}
						]
					},
					types: {
						value: [
							{
								title: {
									value: '2020'
								},
								models: {
									value: [
										{
											title: 'U9DG',
											value: '/'
										}
									]
								}
							}
						]
					}
				}
			]
		}
	}

	return (
		<section>
			<div className='container p-12 d-none d-md-block'>
				<article
					className='article'
					dangerouslySetInnerHTML={{
						__html: structure?.title?.value
					}}></article>
			</div>
			<div className='related-items'>
				{structure?.list?.value.map((item, index) => (
					<RelatedProductsItem key={index} data={item} />
				))}
			</div>
		</section>
	)
}

export default RelatedProducts
