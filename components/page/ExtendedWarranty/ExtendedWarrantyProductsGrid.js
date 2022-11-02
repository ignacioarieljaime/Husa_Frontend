import React from 'react'
import ExtendedWarrantyProduct from './ExtendedWarrantyProduct'
import Spinner from 'components/common/Spinner'

const ExtendedWarrantyProductsGrid = ({ product, description, products }) => {
	const products1 = [
		{
			media: {
				url: 'https://assets.hisense-usa.com/assets/GalleryImages/Product/463/cbf5a253da/a4gv___ScaleMaxHeightWzc1MF0.png'
			},
			name: 'HISENSE 55" MINI-LED ULED 4K SMART GOOGLE TV',
			model: 'U8H',
			id: '2',
			series: 'U8H'
		},
		{
			media: {
				url: 'https://assets.hisense-usa.com/assets/GalleryImages/Product/463/cbf5a253da/a4gv___ScaleMaxHeightWzc1MF0.png'
			},
			name: 'HISENSE 55" MINI-LED ULED 4K SMART GOOGLE TV',
			model: 'U8H',
			id: '2',
			series: 'U8H'
		},
		{
			media: {
				url: 'https://assets.hisense-usa.com/assets/GalleryImages/Product/463/cbf5a253da/a4gv___ScaleMaxHeightWzc1MF0.png'
			},
			name: 'HISENSE 55" MINI-LED ULED 4K SMART GOOGLE TV',
			model: 'U8H',
			id: '2',
			series: 'U8H'
		},
		{
			media: {
				url: 'https://assets.hisense-usa.com/assets/GalleryImages/Product/463/cbf5a253da/a4gv___ScaleMaxHeightWzc1MF0.png'
			},
			name: 'HISENSE 55" MINI-LED ULED 4K SMART GOOGLE TV',
			model: 'U8H',
			id: '2',
			series: 'U8H'
		},
		{
			media: {
				url: 'https://assets.hisense-usa.com/assets/GalleryImages/Product/463/cbf5a253da/a4gv___ScaleMaxHeightWzc1MF0.png'
			},
			name: 'HISENSE 55" MINI-LED ULED 4K SMART GOOGLE TV',
			model: 'U8H',
			id: '2',
			series: 'U8H'
		},
		{
			media: {
				url: 'https://assets.hisense-usa.com/assets/GalleryImages/Product/463/cbf5a253da/a4gv___ScaleMaxHeightWzc1MF0.png'
			},
			name: 'HISENSE 55" MINI-LED ULED 4K SMART GOOGLE TV',
			model: 'U8H',
			id: '2',
			series: 'U8H'
		},
		{
			media: {
				url: 'https://assets.hisense-usa.com/assets/GalleryImages/Product/463/cbf5a253da/a4gv___ScaleMaxHeightWzc1MF0.png'
			},
			name: 'HISENSE 55" MINI-LED ULED 4K SMART GOOGLE TV',
			model: 'U8H',
			id: '2',
			series: 'U8H'
		},
		{
			media: {
				url: 'https://assets.hisense-usa.com/assets/GalleryImages/Product/463/cbf5a253da/a4gv___ScaleMaxHeightWzc1MF0.png'
			},
			name: 'HISENSE 55" MINI-LED ULED 4K SMART GOOGLE TV',
			model: 'U8H',
			id: '2',
			series: 'U8H'
		}
	]

	return (
		<div className='extended-warranty-model-selection'>
			<section className='products-v2'>
				<div className='container mb-8 mb-md-20'>
					<h2 className='title fs-2hx'>
						Protect Your <span className='text-primary'>Televisions</span>
					</h2>
					<p className='description'>Find your television model to continue.</p>
				</div>
				<div className='extended-warranty-products-grid  products-grid'>
					{!Array.isArray(products1) ? (
						<div className='w-100 d-flex justify-content-center'>
							<Spinner className={'mt-5'} size={80} />
						</div>
					) : (
						<div className='products'>
							{products1.map((item, index) => (
								<ExtendedWarrantyProduct key={index} data={item} />
							))}
						</div>
					)}
				</div>
			</section>
		</div>
	)
}

export default ExtendedWarrantyProductsGrid
