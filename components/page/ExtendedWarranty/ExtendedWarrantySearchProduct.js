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

const ExtendedWarrantySearchProduct = ({
	onSearchChange,
	searchTerm,
	category,
	onCategoryChange,
	modelNumber,
	onModelNumber,
	models,
	productCategories
}) => {
	const [showMore, setShowMore] = useState(false)
	const [dialogOpen, setDialogOpen] = useState(false)
	const filterAccordion = useRef()
	const windowSize = useWindowSize()

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

	const clear = () => {
		onSearchChange('')
		onModelNumber('Select')
		onCategoryChange({
			id: null,
			name: 'Select'
		})
	}

	return (
		<section>
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
										onChange={e => onSearchChange(e.target.value)}
									/>
									<button>
										<FontAwesomeIcon icon={faMagnifyingGlass} />
									</button>
								</div>
							</div>
							<div className='col-12 col-md-4 text-center'>
								<label className='label'>Product category</label>
								<DropDownSelectBox
									options={productCategories}
									value={category}
									onChange={onCategoryChange}
								/>
							</div>
							<div className='col-12 col-md-4 text-center'>
								<label className='label'>Model number</label>
								<DropDownSelectBox
									options={models}
									value={modelNumber}
									onChange={onModelNumber}
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
		</section>
	)
}

export default ExtendedWarrantySearchProduct
