import React, { useState } from 'react'

// image
import TvIconImage from 'public/assets/images/tvIconImage.png'
import SoundBarIconImage from 'public/assets/images/soundBarIconImage.png'
import RefregaroterIconImage from 'public/assets/images/refregaroterIconImage.png'
import AirIconImage from 'public/assets/images/airIconImage.png'
import DishWasherIconImage from 'public/assets/images/diswasherIconImage.png'
import MicrowaveIconImage from 'public/assets/images/microwaveIconImage.png'

function ProductsCategoriesWithSearch({ data }) {
	let { structure } = data
	const [searchInput, setSearchInput] = useState(false)
	const [searchList, setSearchList] = useState(false)
	console.log(data)
	return (
		<section>
			<div className='product-category support-product-category-new text-center container my-15 mt-10 px-6'>
				<h2 className='mb-10 fs-4'>{structure?.title?.value}</h2>
				<div className='products row mb-8'>
					{structure?.list?.value.map((item, index) => (
						<div
							key={'category' + index}
							onClick={() => {
								setSearchList(false)
								setSearchInput(status => !status)
							}}
							id={item?.title?.value}
							className='p-type col-12 col-sm-6 col-md-4 col-lg-2 cursor-pointer'>
							<div className='img_box'>
								<img width={"100%"} src={item?.image?.src} alt={item?.image?.alt} />
							</div>
							<p>{item?.title?.value}</p>
						</div>
					))}
				</div>
				{searchInput && (
					<div
						className='row justify-content-center align-items-center '
						id='product-support-search'>
						<div className='custom-select-support custom-select-support-new'>
							<button
								className='search-products-btn'
								onClick={() => setSearchList(status => !status)}>
								<i className='fa-solid fa-lg fa-magnifying-glass me-3'></i>
								Please Select Your Product
							</button>
							{searchList && (
								<div className='search-products-list '>
									<input type='text' className='search' />
									<ul className='list'>
										<li>
											<a href='#'>
												Hisense Desktop Air Purifier, 376 Sq. Ft. Coverage
												(KJ120)
											</a>
										</li>
										<li>
											<a href='#'>
												Hisense Desktop Air Purifier, 376 Sq. Ft. Coverage
												(KJ120)
											</a>
										</li>
										<li>
											<a href='#'>
												Hisense Desktop Air Purifier, 376 Sq. Ft. Coverage
												(KJ120)
											</a>
										</li>
										<li>
											<a href='#'>
												Hisense Desktop Air Purifier, 376 Sq. Ft. Coverage
												(KJ120)
											</a>
										</li>
										<li>
											<a href='#'>
												Hisense Desktop Air Purifier, 376 Sq. Ft. Coverage
												(KJ120)
											</a>
										</li>
									</ul>
								</div>
							)}
						</div>
					</div>
				)}
			</div>
		</section>
	)
}

export default ProductsCategoriesWithSearch
