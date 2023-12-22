import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import MagnifierIcon from 'components/icons/MagnifierIcon'
import { useWindowSize } from 'hooks/useWindowSize'
import Link from 'next/link'
import NewsSearchFilterItem from './NewsSearchFilterItem'
import FilterResponsive from './responsiveFilter/FilterResponsive'
import { useRouter } from 'next/router'

const NewsRoomNavbar = ({ data }) => {
	const { structure } = data
	const [width] = useWindowSize()
	const [timer, setTimer] = useState(null)
	const [filterData, setFilterData] = useState()
	const [searchTerm, setSearchTerm] = useState('')
	const [fix, setFix] = useState(false)
	const [filters, setFilters] = useState({
		year: [],
		product: [],
		search: '',
		page: 1
	})
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

	const filterHandler = (_key, _value, _a) =>
		_a && Object.keys(_a).length > 0
			? setFilters(_a)
			: setFilters({ ...filters, [_key]: _value, page: 1 })

	const getNews = async () => {
		try {
			let response = await axios.get(
				`https://imcxm.dev-api.hisenseportal.com/api/husa/getPosts/meta?type=news&brand_id=3`,
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
		setTimeout(() => {
			router.push(
				{
					pathname: structure?.target_route?.value,
					query: {
						filters: JSON.stringify({ ...filters, search: searchTerm })
					}
				},
				structure?.target_route?.value
			)
		}, 1000)
	}

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
							{structure?.title_link?.value ? (
								<Link
									href={structure?.title_link?.value}
									target={
										structure?.title_link?.target
											? structure?.title_link?.target
											: '_self'
									}>
									<a
										target={
											structure?.title_link?.target
												? structure?.title_link?.target
												: '_self'
										}
										className='title'>
										{structure?.title_link?.title}
									</a>
								</Link>
							) : (
								<span className='title'>{title}</span>
							)}
						</div>
						{width >= 768 && (
							<div className='filter_options'>
								<NewsSearchFilterItem
									filterChangeHandler={filterHandler}
									filters={filters?.year}
									title={structure?.year_text?.value}
									data={filterData?.years}
									onClose={() => redirectToResultsPage()}
									dataKey='year'
								/>
								<NewsSearchFilterItem
									filterChangeHandler={filterHandler}
									filters={filters?.product}
									title={structure?.product_category?.value}
									data={filterData?.tags}
									onClose={() => redirectToResultsPage()}
									dataKey='product'
								/>
								<div className='custom_input_box'>
									<div>
										<input
											onChange={e => setSearchTerm(e.target.value)}
											placeholder={structure?.newsroom_search?.value}
											value={searchTerm}
											onKeyUp={e => {
												if (e.key === 'Enter') redirectToResultsPage()
											}}
											onBlur={() => redirectToResultsPage()}
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
					yearTitle={structure?.year_text?.value}
					categoryTitle={structure?.product_category?.value}
					newsSearchTitle={structure?.newsroom_search?.value}
					filterHandler={filterHandler}
					onSearch={_v => setSearchTerm(_v)}
					searchTerm={searchTerm}
					onClose={() => redirectToResultsPage()}
				/>
			)}
		</div>
	)
}

export default NewsRoomNavbar
