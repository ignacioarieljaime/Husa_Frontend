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

	const getNews = async () => {
		setNews('loading')
		try {
			let response = await GetNewsApi(filters, structure?.count?.value)

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
										<div style={{ width: width > 600 ? '370px' : '100%' }}>
											<CustomImage
												src={
													item?.meta?.find(
														element => element?.name === 'property="og:image"'
													)?.content
												}
												wrapperWidth={width > 600 ? '370px' : '100%'}
												wrapperHeight={'100%'}
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
