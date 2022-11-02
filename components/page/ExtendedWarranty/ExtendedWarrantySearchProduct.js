import React, { useState, useEffect, useRef } from 'react'
import {
	faMagnifyingGlass,
	faCircleInfo,
	faChevronDown
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DropDownSelectBox from 'components/common/DropDownSelectBox'
import { useWindowSize } from '../../../hooks/useWindowSize'
import ExtendedWarrantyModelNumberDialog from './ExtendedWarrantyModelNumberDialog'

const ExtendedWarrantySearchProduct = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [showMore, setShowMore] = useState(false)
	const [dialogOpen, setDialogOpen] = useState(false)
	const [productCategory, setProductCategory] = useState()
	const [ModelNumber, setModelNumber] = useState()

	const filterAccordion = useRef()
	const windowSize = useWindowSize()

	const structure = {
		image: {
			src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/2b3d1d5b30/Television-Hero__ScaleMaxWidthWzMwNDhd.jpg-kqo0zn.jpg'
		},
		title: {
			value: 'Hisense Extended Service Plan'
		}
	}

	useEffect(() => {
		if (windowSize[0] < 768) {
			if (showMore) {
				filterAccordion.current.style.maxHeight =
					filterAccordion.current.scrollHeight + 'px'
				filterAccordion.current.style.overflowY = 'unset'
			} else {
				filterAccordion.current.style.maxHeight = '0px'
				filterAccordion.current.style.overflowY = 'hidden'
			}
		} else {
			filterAccordion.current.style.maxHeight = 'unset'
			filterAccordion.current.style.overflowY = 'unset'
		}
	}, [showMore, windowSize])

	const options = [
		[
			{
				title: 'All',
				value: 'all'
			},
			{
				title: 'Televisions',
				value: 'tv'
			},
			{
				title: 'Dishwasher',
				value: 'dishwasher'
			},
			{
				title: 'Refrigirator',
				value: 'refrigirator'
			}
		],
		[
			{
				title: 'All',
				value: 'all'
			},
			{
				title: 'U8',
				value: 'u8'
			},
			{
				title: 'U6',
				value: 'u6'
			},
			{
				title: 'laser',
				value: 'laser'
			},
			{
				title: 'L9G',
				value: 'L9G'
			}
		]
	]

	useEffect(() => {
		setProductCategory(options[0][0])
		setModelNumber(options[1][0])
	}, [])

	const clear = () => {
		setProductCategory(options[0][0])
		setModelNumber(options[1][0])
		setSearchTerm('')
	}

	return (
		<section>
			<div className='extended-warranty-model-selection'>
				<div className='heading extended-warrant-banner'>
					<img
						src={structure?.image?.src}
						alt={structure?.image?.alt}
						width={'100%'}
						style={{ height: '100%' }}
						className={'img-fluid'}
					/>
					<div className='heading-text'>
						<h1 className='fs-1 fs-md-3x fw-normal text-white mb-4 mb-md-10'>
							{structure?.title?.value}
						</h1>
						<p className='fs-8 fs-md-base fw-normal text-white mb-12 mb-md-16'>
							Enjoy a longer warranty on the Hisense products you love.
						</p>
					</div>
				</div>
				<div className='extended-warranty-search-product px-md-2 px-lg-7'>
					<div>
						<form ref={filterAccordion}>
							<div className='row mx-0 pe-0 pe-md-3 w-100'>
								<div className='col-12 col-md-4 text-center'>
									<label className='label'>Model number</label>
									<div className='support-products-searchbox'>
										<input
											type='text'
											placeholder='start typing your model number'
											value={searchTerm}
											onChange={e => setSearchTerm(e.target.value)}
										/>
										<button>
											<FontAwesomeIcon icon={faMagnifyingGlass} />
										</button>
									</div>
								</div>
								<div className='col-12 col-md-4 text-center'>
									<label className='label'>Product category</label>
									<DropDownSelectBox
										options={options[0]}
										value={productCategory}
										onChange={setProductCategory}
									/>
								</div>
								<div className='col-12 col-md-4 text-center'>
									<label className='label'>Model number</label>
									<DropDownSelectBox
										options={options[1]}
										value={ModelNumber}
										onChange={setModelNumber}
									/>
								</div>
							</div>
							<button
								className='n-btn outline-white transparent'
								type='reset'
								onClick={clear}>
								Reset
							</button>
						</form>
						<button
							className='n-btn white-text d-block d-md-none uppercase mx-auto  mt-8 mt-md-0'
							onClick={() => setShowMore(showMore => !showMore)}>
							Filter
							<FontAwesomeIcon
								icon={faChevronDown}
								className={`ms-2 ${showMore ? 'close' : ''}`}
							/>
						</button>
						<button
							className='n-btn mt-6 mt-md-8'
							onClick={() => setDialogOpen(true)}>
							<FontAwesomeIcon icon={faCircleInfo} className='me-2' size='xl' />
							Where do i find my model number?
						</button>
					</div>
				</div>
				{dialogOpen && (
					<ExtendedWarrantyModelNumberDialog
						product='Tv'
						onClose={() => setDialogOpen(false)}
					/>
				)}
			</div>
		</section>
	)
}

export default ExtendedWarrantySearchProduct
