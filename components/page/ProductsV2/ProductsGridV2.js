import React, { useState } from 'react'
import DropDownSelectBox from 'components/common/DropDownSelectBox'
import BreadCrumb from '../../common/BreadCrumb'
import ProductItemV2 from './ProductItemV2'

const ProductsGridV2 = ({ data }) => {
	const [sortingMethod, setSortingMethod] = useState([
		{
			title: 'Newest',
			value: 'new'
		}
	])

	let structure = {
		breadCrumbList: {
			value: [
				{
					title: 'home',
					value: '/'
				},
				{
					title: 'all televisions',
					value: '/all-tvs'
				}
			]
		},
		title: {
			value: 'All',
			primaryText: 'Televisions'
		},
		products: {
			value: [
				{
					title: {
						value: 'U8H'
					},
					description: {
						value: 'HISENSE MINI-LED ULED 4K SMART GOOGLE TV'
					},
					image: {
						src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/ca24e975cc/U8H-Infill-Front-Review__ScaleMaxWidthWzMwNDhd.png-xdmsfe.png',
						alt: 'TV'
					},
					link: {
						title: 'View Product',
						value: '/'
					},
					types: {
						value: [
							{
								value: '50"'
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
					title: {
						value: 'U8H'
					},
					description: {
						value: 'HISENSE MINI-LED ULED 4K SMART GOOGLE TV'
					},
					image: {
						src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/ca24e975cc/U8H-Infill-Front-Review__ScaleMaxWidthWzMwNDhd.png-xdmsfe.png',
						alt: 'TV'
					},
					link: {
						title: 'View Product',
						value: '/'
					},
					types: {
						value: [
							{
								value: '50"'
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
					title: {
						value: 'U8H'
					},
					description: {
						value: 'HISENSE MINI-LED ULED 4K SMART GOOGLE TV'
					},
					image: {
						src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/ca24e975cc/U8H-Infill-Front-Review__ScaleMaxWidthWzMwNDhd.png-xdmsfe.png',
						alt: 'TV'
					},
					link: {
						title: 'View Product',
						value: '/'
					},
					types: {
						value: [
							{
								value: '50"'
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
					title: {
						value: 'U8H'
					},
					description: {
						value: 'HISENSE MINI-LED ULED 4K SMART GOOGLE TV'
					},
					image: {
						src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/ca24e975cc/U8H-Infill-Front-Review__ScaleMaxWidthWzMwNDhd.png-xdmsfe.png',
						alt: 'TV'
					},
					link: {
						title: 'View Product',
						value: '/'
					},
					types: {
						value: [
							{
								value: '50"'
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
					title: {
						value: 'U8H'
					},
					description: {
						value: 'HISENSE MINI-LED ULED 4K SMART GOOGLE TV'
					},
					image: {
						src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/ca24e975cc/U8H-Infill-Front-Review__ScaleMaxWidthWzMwNDhd.png-xdmsfe.png',
						alt: 'TV'
					},
					link: {
						title: 'View Product',
						value: '/'
					},
					types: {
						value: [
							{
								value: '50"'
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
					title: {
						value: 'U8H'
					},
					description: {
						value: 'HISENSE MINI-LED ULED 4K SMART GOOGLE TV'
					},
					image: {
						src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/ca24e975cc/U8H-Infill-Front-Review__ScaleMaxWidthWzMwNDhd.png-xdmsfe.png',
						alt: 'TV'
					},
					link: {
						title: 'View Product',
						value: '/'
					},
					types: {
						value: [
							{
								value: '50"'
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

	const options = [
		{
			title: 'Newest',
			value: 'new'
		},
		{
			title: 'Oldest',
			value: 'old'
		},
		{
			title: 'Popular',
			value: 'popular'
		},
		{
			title: 'Most Selling',
			value: 'most-selling'
		}
	]

	return (
		<section>
			<div className='container mt-7 mb-11'>
				<div className='row justify-content-start align-items-center px-3 mb-15'>
					<BreadCrumb list={structure.breadCrumbList} />
				</div>
				<div>
					<h2 className='fw-normal fs-2hx mb-4'>
						{structure.title.value}{' '}
						<span className='primary-text'>{structure.title.primaryText}</span>
					</h2>
					<h3 className='fw-normal fs-base black-text'>
						Find your next television.
					</h3>
				</div>
			</div>
			<div className='products-v2 mx-4 mx-md-13'>
				<div className='products-sorting'>
					<DropDownSelectBox
						options={options}
						value={sortingMethod}
						title='Sort by'
						onChange={setSortingMethod}
					/>
				</div>
				<div className='products-grid'>
					<div className='products-filtering'></div>
					<div className='products'>
						{structure.products.value.map((item, index) => (
							<ProductItemV2
								key={index}
								image={item.image}
								title={item.title.value}
								description={item.description.value}
								types={item.types.value}
								link={item.link}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProductsGridV2
