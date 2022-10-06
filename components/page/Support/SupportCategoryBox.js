import React from 'react'

// image
import ImageOne from 'public/assets/svgs/support-televisions.svg'
import ImageTwo from 'public/assets/svgs/support-refrigerators.svg'
import ImageThree from 'public/assets/svgs/support-air-products.svg'
import ImageFour from 'public/assets/svgs/support-soundbars.svg'
import ImageFive from 'public/assets/svgs/support-dishwasher.svg'
import ImageSix from 'public/assets/svgs/support-microwave-oven.svg'

function SupportCategoryBox() {
	return (
		<section>
			<div className='product-category text-center container-fluid my-19 px-6'>
				<h2 className='mb-10 fs-4'>
					Click a product category below to get started.
				</h2>
				<div className='products row mb-8'>
					<div
						className='col-12 col-sm-6 col-md-4 col-lg-2 cursor-pointer'
						onclick='showProductsSearch()'>
						<img src={ImageOne.src} alt='featured image' />
						<p>TELEVISIONS</p>
					</div>
					<div
						className='col-12 col-sm-6 col-md-4 col-lg-2 cursor-pointer'
						onclick='showProductsSearch()'>
						<img src={ImageTwo.src} alt='featured image' />
						<p>REFRIGERATORS</p>
					</div>
					<div
						className='col-12 col-sm-6 col-md-4 col-lg-2 cursor-pointer'
						onclick='showProductsSearch()'>
						<img src={ImageThree.src} alt='featured image' />
						<p>AIR PRODUCTS</p>
					</div>
					<div className='col-12 col-sm-6 col-md-4 col-lg-2 cursor-pointer'>
						<img src={ImageFour.src} alt='featured image' />
						<p>SOUNDBARS</p>
					</div>
					<div className='col-12 col-sm-6 col-md-4 col-lg-2 cursor-pointer'>
						<img src={ImageFive.src} alt='featured image' />
						<p>DISHWASHERS</p>
					</div>
					<div
						className='col-12 col-sm-6 col-md-4 col-lg-2 cursor-pointer'
						onclick='showProductsSearch()'>
						<img src={ImageSix.src} alt='featured image' />
						<p>OVER THE RANGE MICROWAVES</p>
					</div>
				</div>
				<div
					className='row justify-content-center align-items-center d-none'
					id='product-support-search'>
					<div className='custom-select'>
						<button className='search-products-btn'>
							Please Select Your Product
							<i className='fa-solid fa-sm fa-chevron-down'></i>
						</button>
						<div className='search-products-list d-none'>
							<input type='text' className='search' />
							<ul className='list'>
								<li>
									<a href='#'>
										Hisense Desktop Air Purifier, 376 Sq. Ft. Coverage (KJ120)
									</a>
								</li>
								<li>
									<a href='#'>
										Hisense Desktop Air Purifier, 376 Sq. Ft. Coverage (KJ120)
									</a>
								</li>
								<li>
									<a href='#'>
										Hisense Desktop Air Purifier, 376 Sq. Ft. Coverage (KJ120)
									</a>
								</li>
								<li>
									<a href='#'>
										Hisense Desktop Air Purifier, 376 Sq. Ft. Coverage (KJ120)
									</a>
								</li>
								<li>
									<a href='#'>
										Hisense Desktop Air Purifier, 376 Sq. Ft. Coverage (KJ120)
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SupportCategoryBox
