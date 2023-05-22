import React from 'react'
import NewsSearchFilter from './NewsSearchFilter'
import NewsRoomMainNewsItem from './NewsRoomMainNewsItem'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Spinner from 'components/common/Spinner'
import { GetNewsApi } from 'services/cxm'
import CustomImage from 'components/common/CustomImage'
import { useWindowSize } from 'hooks/useWindowSize'
import moment from 'moment'
import NewsRoomPagination from './SingleNews/NewsRoomPagination'

const NewsRoomNewsBox = ({ data }) => {
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
		if (filters?.product || filters?.search || filters?.year) {
			getNews()
		} else {
			setNews(null)
		}
	}, [filters])

	const getNews = async () => {
		setNews('loading')
		try {
			let response = await GetNewsApi(filters, 15)

			setNews(response.data.data)
			setPagination(response.data.meta)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='news_room_news_box'>
			<NewsSearchFilter
				filter={filters}
				filterHandler={(_key, _value) =>
					setFilters({ ...filters, [_key]: _value })
				}
				title={structure?.title?.value}
			/>
			<div className='container items '>
				{/* {news === 'loading' ? (
					<Spinner />
				) : Array.isArray(news) ? ( */}
				{news ? (
					<>
						{news === 'loading' ? (
							<div style={{ width: '100%', marginBottom: '30px' }}>
								<Spinner />
							</div>
						) : (
							<>
								<div className='news_room_news_box_search_items'>
									{news.map(item => (
										<div>
											<div style={{ width: width > 600 ? '370px' : '100%' }}>
												<CustomImage
													src={
														item?.meta?.find(
															element => element?.name === 'property="og:image"'
														)?.content
													}
													wrapperWidth={width > 600 ? '370px' : '100%'}
													wrapperHeight={width > 600 ? '100%' : '144px'}
												/>
											</div>
											<div className='text_box'>
												<span className='subject'>{item?.tags[0]}</span>
												<h5>
													<Link href={item?.route || '/'}>
														<a>{item?.title}</a>
													</Link>
												</h5>
												<span className='date'>
													{moment(item?.created_at).format('MMMM DD YYYY')}
												</span>
											</div>
										</div>
									))}
								</div>
								<div className='pagination'>
									{pagination && (
										<NewsRoomPagination
											handler={_page => setFilters({ ...filters, page: _page })}
											pagination={pagination}
										/>
									)}
								</div>
							</>
						)}
					</>
				) : (
					structure?.list?.value.map(
						(item, index) =>
							index <= 5 && (
								<NewsRoomMainNewsItem
									link={item?.link?.value}
									target={item?.link?.target}
									date={item?.date?.value}
									image={item?.image?.src}
									subject={item?.tag?.value}
									title={item?.title?.value}
									isFirst={index === 0}
									isThree={index > 2}
								/>
							)
					)
				)}
				{/* ) : null} */}
			</div>
			{!news && (
				<Link
					target={structure?.link?.target || '_self'}
					href={structure?.link?.value || '/ّ'}>
					<a className='view_archive'>{structure?.link?.title}</a>
				</Link>
			)}
		</div>
	)
}

export default NewsRoomNewsBox
