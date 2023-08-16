import React, { useEffect } from 'react'
import NewsSearchFilter from '../NewsSearchFilter'
import CustomImage from 'components/common/CustomImage'
import { useWindowSize } from 'hooks/useWindowSize'
import { useState } from 'react'
import Spinner from 'components/common/Spinner'
import NewsRoomPagination from './NewsRoomPagination'
import moment from 'moment/moment'
import { GetNewsApi } from 'services/cxm'
import Link from 'next/link'

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

	useEffect(() => {
		window.scrollTo({ top: 0 })
	}, [news])

	const getPostId = () => {
		let ids = structure?.exclude_news?.value?.map(
			item => `&exclude[]=${item.id}`
		)
		return ids.join(',').replaceAll(',', '')
	}

	const getNews = async () => {
		setNews('loading')

		try {
			let response = await GetNewsApi(
				filters,
				structure?.count?.value,
				getPostId()
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
					setFilters({ ...filters, [_key]: _value, page: 1 })
				}
				title={structure?.titleOne?.value}
				yearTitle={
					structure?.year_text?.value ? structure?.year_text?.value : 'Year'
				}
				categoryTitle={
					structure?.product_category?.value
						? structure?.product_category?.value
						: 'Product Category'
				}
				newsSearchTitle={
					structure?.newsroom_search?.value
						? structure?.newsroom_search?.value
						: 'search newsroom'
				}
			/>
			<div className='news_press_archive container px-4'>
				<div>
					<div className='items_box'>
						<h5>{structure?.titleTwo?.value}</h5>

						<div className='items'>
							{news === 'loading' ? (
								<Spinner />
							) : Array.isArray(news) ? (
								news.map(item => (
									<div>
										<Link href={item?.route || '/'}>
											<a
												className='d-block h-100'
												style={{ width: width > 600 ? '370px' : '100%' }}>
												<CustomImage
													src={
														item?.meta?.find(
															element => element?.name === 'property="og:image"'
														)?.content
													}
													wrapperWidth={width > 600 ? '370px' : '100%'}
													wrapperHeight={'100%'}
												/>
											</a>
										</Link>
										<div className='text_box'>
											{item?.tags.map(item => (
												<span className='subject'>{item}</span>
											))}

											<h5>
												<Link href={item?.route || '/'}>
													<a>{item?.title}</a>
												</Link>
											</h5>
											<span className='date'>
												{item?.published_at
													? moment(item?.published_at).format('MMMM DD YYYY')
													: moment(item?.created_at).format('MMMM DD YYYY')}
											</span>
										</div>
									</div>
								))
							) : null}
						</div>

						{pagination && (
							<NewsRoomPagination
								handler={_page => setFilters({ ...filters, page: _page })}
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
