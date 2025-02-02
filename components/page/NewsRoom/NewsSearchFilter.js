import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import AngleArrow from 'components/icons/AngleArrow'
import MagnifierIcon from 'components/icons/MagnifierIcon'
import SelectBoxAngleArrow from 'components/icons/SelectBoxAngleArrow'
import { useWindowSize } from 'hooks/useWindowSize'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import NewsSearchFilterItem from './NewsSearchFilterItem'
import FilterResponsive from './responsiveFilter/FilterResponsive'
import { useRouter } from 'next/router'

let years = []

for (let year = new Date().getFullYear(); year >= 1980; year--) {
	years.push(year)
}

const NewsSearchFilter = ({
	title = 'Featured News',
	filters,
	yearTitle,
	categoryTitle,
	newsSearchTitle,
	filterHandler,
	news,
	targetRoute,
	results,
	newsLength,
	link,
	color = '#989A9A' // hex code taken from cxm
}) => {
	const [width] = useWindowSize()
	const [timer, setTimer] = useState(null)
	const [filterData, setFilterData] = useState()
	const [searchTerm, setSearchTerm] = useState('')
	const [fix, setFix] = useState(false)
	const [searchFocus, setSearchFocus] = useState(false)
	const target = useRef()
	const router = useRouter()

	useEffect(() => {
		getNews()
	}, [])

	useEffect(() => {
		if (window.scrollY < 61) setFix(true)
		if (window.scrollY >= 60) setFix(false)
		window.addEventListener('scroll', () => {
			if (target?.current?.offsetTop >= window.scrollY + 60) {
				setFix(true)
			} else {
				setFix(false)
			}
		})
	}, [])

	useEffect(() => {
		setSearchTerm(filters?.search)
	}, [filters])

	useEffect(() => {
		clearTimeout(timer)

		const newTimer = setTimeout(() => {
			filterHandler('search', searchTerm, false)
		}, 500)

		setTimer(newTimer)
	}, [searchTerm])

	const getNews = async () => {
		try {
			let response = await axios.get(
				`${process.env.NEXT_PUBLIC_CXM_API_ROUTE}/getPosts/meta?type=news&brand_id=${process.env.NEXT_PUBLIC_BRAND_ID}`,
				{
					headers: {
						BrandId: process.env.NEXT_PUBLIC_BRAND_ID
					}
				}
			)
			setFilterData(response?.data)
		} catch (error) {
			console.log(error)
		}
	}

	function redirectToResultsPage() {
		if (
			Object.keys(filters).some(
				key => key !== 'page' && filters[key].length > 0
			)
		)
			setTimeout(() => {
				router.push(
					{
						pathname: targetRoute,
						query: {
							filters: JSON.stringify({ ...filters, search: searchTerm })
						}
					},
					targetRoute
				)
			}, 1000)
	}

	function reloadPage() {
		router.reload()
	}

	const resetSearch = (year, product, search, reload) => {
		if (year) filterHandler('year', '', false)
		if (product) filterHandler('product', '', false)
		if (search) filterHandler('search', '', false)
		if (reload) reloadPage()
	}

	const resetVisible = () => {
		if (
			filters.year.length === 0 &&
			filters.product.length === 0 &&
			filters.search.length === 0
		)
			return false
		return true
	}
	// function confirmChanges() {
	// 	filterHandler('', '', { ...tempFilters, page: 1 })
	// 	setOpenFilter(false)
	// 	setTimeout(() => {
	// 		window.scrollTo({
	// 			top: target.current.scrollHeight + 250
	// 		})
	// 	}, 500)
	// }
	return (
		<div
			ref={target}
			style={{
				zIndex: !fix ? 1001 : 997
			}}
			className='newsroom_search'>
			<div className='news_room_search_filter'>
				<div className=''>
					<div className='content'>
						<div className='filter_title'>
							{link?.value ? (
								<Link
									href={link?.value}
									target={link?.target ? link?.target : '_self'}>
									<a
										target={link?.target ? link?.target : '_self'}
										style={{ color: color }}
										className='title'>
										{title}
									</a>
								</Link>
							) : (
								<span className='title' style={{ color: color }}>
									{title}
								</span>
							)}
						</div>
						{news &&
							(filters.search.length > 0 ||
								filters.year.length > 0 ||
								filters.product.length > 0) && (
								<div className='results'>{newsLength} Results</div>
							)}

						{width >= 768 && (
							<div className='filter_options'>
								<NewsSearchFilterItem
									filterChangeHandler={filterHandler}
									filters={filters?.year}
									title={yearTitle}
									data={filterData?.years}
									onClose={() => !results && redirectToResultsPage()}
									dataKey='year'
								/>
								<NewsSearchFilterItem
									filterChangeHandler={filterHandler}
									filters={filters?.product}
									title={categoryTitle}
									data={filterData?.tags}
									onClose={() => !results && redirectToResultsPage()}
									dataKey='product'
								/>

								<div className='custom_input_box'>
									{/* <label>search archive</label> */}
									<div>
										<input
											onChange={e => setSearchTerm(e.target.value)}
											placeholder={newsSearchTitle}
											value={searchTerm}
											onKeyUp={e => {
												if (e.key === 'Enter' && !results)
													redirectToResultsPage()
											}}
											onBlur={() => {
												setSearchFocus(prev => !prev)
												!results && redirectToResultsPage()
											}}
											onFocus={() => setSearchFocus(prev => !prev)}
										/>
										{searchFocus ? (
											<FontAwesomeIcon
												icon={faClose}
												size='md'
												className='search-close p-1'
												onMouseDown={e => {
													e.preventDefault()
													resetSearch(false, false, true, false)
												}}
											/>
										) : (
											<MagnifierIcon stroke={'#8C8F8F'} />
										)}
									</div>
								</div>

								{resetVisible() && (
									<div className='reset-container'>
										<button
											className='reset-button'
											onClick={() => resetSearch(true, true, true, true)}>
											Reset
										</button>
									</div>
								)}
							</div>
						)}
					</div>
				</div>
			</div>
			{width < 768 && (
				<FilterResponsive
					filters={filters}
					allFilters={filterData}
					yearTitle={yearTitle}
					categoryTitle={categoryTitle}
					newsSearchTitle={newsSearchTitle}
					filterHandler={filterHandler}
					news={news}
					onSearch={_v => setSearchTerm(_v)}
					searchTerm={searchTerm}
					onClose={() => !results && redirectToResultsPage()}
				/>
			)}
		</div>
	)
}

export default NewsSearchFilter
