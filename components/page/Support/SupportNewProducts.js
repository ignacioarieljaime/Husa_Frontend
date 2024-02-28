import React, { useEffect, useState, useRef } from 'react'
import {
	faAngleDown,
	faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import Link from 'next/link'
import axios from 'axios'
import Spinner from 'components/common/Spinner'
import CustomImage from '../../common/CustomImage'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
import SearchIcon from 'components/icons/SearchIcon'

const SupportNewProducts = ({ data }) => {
	const [categoryId, setCategoryId] = useState()
	const [activeSearchBox, setActiveSearchBox] = useState(false)
	const [searchProductsList, setSearchProductsList] = useState()
	const [searchBoxCondition, setSearchBoxCondition] = useState(false)
	const [searchValue, setSearchValue] = useState('')
	const [preLineText, setPreLineText] = useState(null)
	const [viewAllBtnOffset, setViewAllBtnOffset] = useState()

	const searchRef = useRef(null);
	const dropdownRef = useRef(null);

	let { structure } = data
	useEffect(() => {
		if (!searchBoxCondition) {
			return
		}
		const timer = setTimeout(() => {
			searchHandler()
		}, 700)

		return () => clearTimeout(timer)
	}, [searchValue])

	// Handles offset positioning of view all button for dropdown menu
	useEffect(() => {
		const resizeObserver = new ResizeObserver((entries) => {
		  entries.forEach((entry) => {
			if (entry.contentRect.height !== entry.target.previousHeight) {
			  handleHeightChange(entry.contentRect.height);
			}
	
			entry.target.previousHeight = entry.contentRect.height;
		  });
		});
	
		if (dropdownRef?.current) {
		  resizeObserver.observe(dropdownRef.current);
		}
	
		return () => {
		  if (dropdownRef?.current) {
			resizeObserver.unobserve(dropdownRef.current);
		  }
		};
	}, []);

	const handleHeightChange = (newHeight) => {
		setViewAllBtnOffset(newHeight + (54 + 20)) // 54px input height, 20px for padding room on top
	};

	const searchHandler = async () => {
		setSearchProductsList('loading')
		try {
			let response = await axios.get(
				`${process.env.NEXT_PUBLIC_CXM_API_ROUTE}/searchProduct?category_id=${categoryId}&string=${searchValue}&type=support&status[]=3&status[]=1&brand_id=${process.env.NEXT_PUBLIC_BRAND_ID}`,
				{
					headers: {
						BrandId: process.env.NEXT_PUBLIC_BRAND_ID
					}
				}
			)

			let data = response.data.data.map(item => ({
				route: item.route,
				model: item?.product?.model
			}))

			setSearchProductsList(
				data.sort((a, b) =>
					sortWorkHandler(a.model).localeCompare(sortWorkHandler(b.model))
				)
			)
		} catch (error) {
			setSearchProductsList([])
			console.log(error)
		}
	}

	const searchActiveHandler = async _categoryId => {
		setSearchProductsList('loading')

		if (_categoryId !== categoryId) {
			setActiveSearchBox(false)
			setCategoryId(_categoryId)
			setTimeout(() => {
				setActiveSearchBox(true)
			}, 200)

			try {
				let response = await axios.get(
					`${process.env.NEXT_PUBLIC_CXM_API_ROUTE}/searchProduct?category_id=${_categoryId}&type=support&status[]=3&status[]=1&brand_id=${process.env.NEXT_PUBLIC_BRAND_ID}`,
					{
						headers: {
							BrandId: process.env.NEXT_PUBLIC_BRAND_ID
						}
					}
				)
				let data = response.data.data.map(item => ({
					route: item.route,
					model: item?.product?.model
				}))
				// sortWorkHandler(data[0].model)
				setSearchProductsList(
					data.sort((a, b) =>
						sortWorkHandler(a.model).localeCompare(sortWorkHandler(b.model))
					)
				)
			} catch (error) {
				setSearchProductsList([])
				console.log(error)
			}
		}
	}
	const sortWorkHandler = _data => {
		let position = ''
		for (const word of _data.split('')) {
			if (/[a-zA-Z]/.test(word)) {
				position = _data.split('').indexOf(word)
				return _data.slice(position)
			}
		}
	}

	const handleSearchFocus = () => {
		if (searchRef?.current) {
			searchRef.current.focus();
		}
	};

	const renderBoldText = (model) => {
		const searchString = searchValue;
		const upperCaseModel = model.toUpperCase();
		const upperCaseSearchString = searchString.toUpperCase();

		const index = upperCaseModel.indexOf(upperCaseSearchString);

	
		if (index !== -1) {
		  return (
			<span className='support-dropdown-list-text'>
			  {model.substring(0, index)}
			  <strong>{upperCaseSearchString}</strong>
			  {model.substring(index + searchString.length)}
			</span>
		  );
		}
	
		return model;
	};

	const searchConditionFix = () => {
		if (searchValue === '' && activeSearchBox && !searchBoxCondition) setSearchBoxCondition(true)
	}

	const renderPreListText = (isViewAllButton) => {
		if (!preLineText) return;

		if (isViewAllButton) {
			if (preLineText) return `View all ${preLineText} Models`
		}

		if (searchValue !== '') return 'Matching results'
		if (preLineText) return `All ${preLineText} Models`
	}

	const modelDoesNotExistHandler = () => {
		if (searchProductsList && searchProductsList !== 'loading' && searchProductsList.length === 0) return true;
		return false;
	}

	const modelDoesNotExist = modelDoesNotExistHandler();

	const categoryLength = structure?.list?.value?.length;

	return (
		<section>
			<div className='support-products'>
				<h3 className='section-title container-fluid'>
					Select a product category to get started.
				</h3>

				<div className='support-category-row-container' style={{gridTemplateColumns: `repeat(${categoryLength}, 1fr)`}}>
					{structure?.list?.value.map((item, index) => (
						<button index={index} className={`slider-item slider-item-inner-button ${item?.category?.value === categoryId && 'support-selected'}`}
							onClick={() => {
								if (categoryId === item?.category?.value) return
								searchActiveHandler(item?.category?.value)
								setSearchValue('')
								setSearchBoxCondition(!searchBoxCondition)
								handleSearchFocus()
								if (preLineText !== item?.link?.title) setPreLineText(item?.link?.title)
							}}
						>
							<div className='d-flex flex-column '>
								<CustomImage
									src={item?.image?.src}
									alt={item?.image?.alt}
									title={item?.image?.title}
									className='slider-image'
									wrapperHeight={'100px'}
								/>
								<span className='slider-item-text'>
									{item?.link?.title}
								</span>
							</div>
						</button>
					))}
				</div>

					<div className='container-fluid d-flex justify-content-center mt-16'>
						<div className='support-search-container'>
							<input
								ref={searchRef}
								className={modelDoesNotExist ? 'search-is-error' : categoryId ? 'search-is-active' : ''}
								type='text'
								placeholder='find model number'
								onChange={e => {
									setSearchValue(e.target.value)
									searchConditionFix()
								}}
								value={searchValue}
								onBlur={() =>
									setTimeout(() => {
										setSearchBoxCondition(false)
									}, 500)
								}
							/>
							<SearchIcon color={categoryId ? 'black' : '#F0F2F2'} />
							<ul
								ref={dropdownRef}
								className=' mt-0 d-flex flex-column gap-2 w-100 list bg-white list-unstyled py-4 px-4 overflow-auto'
								style={{ maxHeight: '300px' }}>

								<span className='support-search-prelist-text'>{renderPreListText(false)}</span>
								
								{searchProductsList === 'loading' ? (
									<li className='py-5'>
										<Spinner size={20} className={'support-loading-spinner'}/>
									</li>
								) : Array.isArray(searchProductsList) &&
									searchProductsList.length > 0 ? (
									searchProductsList.map((item, index) => (
										<li key={'search-list-' + index}>
											<Link
												target={
													item.route?.target ? item.route?.target : '_self'
												}
												href={item.route}>
												<a
													target={
														item.route?.target
															? item.route?.target
															: '_self'
													}
													className='text-primary decora'>
													{renderBoldText(item.model)}
													{item.route?.target === '_blank' && (
														<img
															style={{ marginLeft: '10px' }}
															src={OpenPageOnNewTab.src}
														/>
													)}
												</a>
											</Link>
										</li>
									))
								) : modelDoesNotExist && (
									<li className='search-is-error-text'>
										Model number doesn{`'`}t exist
									</li>
								)}
							</ul>

							{preLineText && searchValue !== '' && searchProductsList !== 'loading' &&
								<button className='view-all-button'
									style={{bottom: -viewAllBtnOffset + 'px'}}
									onClick={() => {
										setSearchValue('')
										setSearchBoxCondition(true)
										handleSearchFocus()
									}}
								>
									{renderPreListText(true)}
								</button>
							}
						</div>
					</div>
			</div>
		</section>
	)
}

export default SupportNewProducts
