import React, { useEffect } from 'react'
import NewsSearchFilter from '../NewsSearchFilter'
import CustomImage from 'components/common/CustomImage'
import PaginationDabbleArrow from 'components/icons/PaginationDabbleArrow'
import PaginationArrow from 'components/icons/PaginationArrow'
import { useWindowSize } from 'hooks/useWindowSize'
import NewsRoomMainNewsItem from '../NewsRoomMainNewsItem'
import axios from 'axios'
import { useState } from 'react'
import Spinner from 'components/common/Spinner'
import NewsRoomPagination from './NewsRoomPagination'

const NewsPressArchive = ({ data }) => {
	const [width] = useWindowSize()
	let { structure } = data
	const [news, setNews] = useState()
	const [pagination, setPagination] = useState()

	const [filters, setFilters] = useState({
		year: '',
		product: '',
		search: '',
		page: 1
	})

	useEffect(() => {
		getNews()
	}, [filters])

	const getNews = async () => {
		setNews('loading')
		try {
			let response = await axios.get(
				`https://imcxm.dev-api.hisenseportal.com/api/husa/getPosts?type=news&year=${filters.year}&product=${filters.product}&title=${filters.search}&page=${filters.page}`
			)

			setNews(response.data.data)
			setPagination(response.data.meta)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<NewsSearchFilter
				filters={filters}
				filterHandler={(_key, _value) =>
					setFilters({ ...filters, [_key]: _value })
				}
				title={structure?.titleOne?.value}
			/>
			<div className='news_press_archive container'>
				<div>
					<div className='items_box'>
						<h5>{structure?.titleTwo?.value}</h5>

						<div className='items'>
							{news === 'loading' ? (
								<Spinner />
							) : Array.isArray(news) ? (
								news.map(item => (
									<div>
										<CustomImage
											src={
												'https://images.unsplash.com/photo-1540634354115-0a35d263fdf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
											}
											wrapperWidth={width > 600 ? '370px' : '100%'}
											wrapperHeight={width > 600 ? '100%' : '144px'}
										/>
										<div className='text_box'>
											<span className='subject'>press release</span>
											<h5>
												Hisense Unveils ULED X, A New Generation of Technology
												Representing the Ultimate LED TV, at CES 2023
											</h5>
											<span className='date'>April 17 2023</span>
										</div>
									</div>
								))
							) : null}
						</div>

						{pagination && (
							<NewsRoomPagination
								handler={(_page => setFilters({ ...filters, page: _page }))}
								pagination={pagination}
							/>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default NewsPressArchive
