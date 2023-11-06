import { faXmark } from '@fortawesome/free-solid-svg-icons'
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
	results
}) => {
	const [width] = useWindowSize()
	const [timer, setTimer] = useState(null)
	const [filterData, setFilterData] = useState()
	const [searchTerm, setSearchTerm] = useState('')
	const target = useRef()
	const router = useRouter()

	useEffect(() => {
		getNews()
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
				`https://imcxm.dev-api.hisenseportal.com/api/husa/getPosts/meta?type=news&brand_id=3`
			)
			setFilterData(response?.data)
		} catch (error) {
			console.log(error)
		}
	}

	function redirectToResultsPage() {
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
		<div className='newsroom_search'>
			<div ref={target} className='news_room_search_filter'>
				<div className=''>
					<div className='content'>
						<div className='filter_title'>
							<span className='title'>{title}</span>
						</div>
						{news &&
							(filters.search.length > 0 ||
								filters.year.length > 0 ||
								filters.product.length > 0) && (
								<div className='results'>{news.length} Results</div>
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
											onBlur={() => !results && redirectToResultsPage()}
										/>
										<MagnifierIcon stroke={'#8C8F8F'} />
									</div>
								</div>
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
