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
import { useRouter } from 'next/router'

const NewsPressArchive = ({ data }) => {
	const [width] = useWindowSize()
	let { structure } = data
	const [newsLength, setNewsLength] = useState()
	const [news, setNews] = useState([])
	const [initLoading, setInitLoading] = useState(false)
	const [pagination, setPagination] = useState()
	const [filters, setFilters] = useState({
		year: [],
		product: [],
		search: '',
		page: 1
	})
	const router = useRouter()
	const controller = new AbortController()

	useEffect(() => {
		setInitLoading(true)
		setNews('loading')
		const toLoading = setTimeout(() => {
			setInitLoading(false)
		}, 2400)
		const to = setTimeout(() => {
			if (router && router?.query && router?.query?.filters) {
				setFilters({ ...JSON.parse(router?.query?.filters) })
			}
		}, 1500)
		return () => {
			clearTimeout(toLoading)
			clearTimeout(to)
		}
	}, [])

	useEffect(() => {
		if (news?.length && news === 'loading') controller.abort()
		else getNews()
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
		try {
			setNews('loading')
			let response = await GetNewsApi(
				filters,
				structure?.count?.value,
				getPostId(),
				controller
			)
			setNews(response.data.data)
			setPagination(response.data.meta)
			setNewsLength(response.data?.meta?.total)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<NewsSearchFilter
				filters={filters}
				filterHandler={(_key, _value, _a) =>
					_a && Object.keys(_a).length > 0
						? setFilters(_a)
						: setFilters({ ...filters, [_key]: _value, page: 1 })
				}
				title={structure?.titleOne?.value}
				link={structure?.titleOneLink}
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
				news={news}
				results
				newsLength={newsLength}
			/>
			<div className='news_press_archive container px-4'>
				<div>
					<div className='items_box'>
						<h5>{structure?.titleTwo?.value}</h5>

						<div className='items'>
							{news === 'loading' || initLoading ? (
								<Spinner />
							) : Array.isArray(news) ? (
								news.map((item, index) => (
									<div key={index}>
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
										<Link href={item?.route || '/'}>
											<a className='box-group-link'>
												<div className='text_box'>
													{item?.tags.map((item, _index) => (
														<span key={_index} className='subject'>
															{item}
														</span>
													))}

													<h5>{item?.title}</h5>
													<span className='date'>
														{item?.published_at
															? moment(item?.published_at)
																	.format('MMMM DD YYYY')
																	.split(' ')[0] +
															  ' ' +
															  moment(item?.published_at)
																	.format('MMMM DD YYYY')
																	.split(' ')[1] +
															  ', ' +
															  moment(item?.published_at)
																	.format('MMMM DD YYYY')
																	.split(' ')[2]
															: moment(item?.created_at)
																	.format('MMMM DD YYYY')
																	.split(' ')[0] +
															  ' ' +
															  moment(item?.created_at)
																	.format('MMMM DD YYYY')
																	.split(' ')[1] +
															  ', ' +
															  moment(item?.created_at)
																	.format('MMMM DD YYYY')
																	.split(' ')[2]}
													</span>
												</div>
											</a>
										</Link>
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
