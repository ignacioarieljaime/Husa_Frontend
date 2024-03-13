import React, { useEffect } from 'react'
import CustomImage from 'components/common/CustomImage'
import { useWindowSize } from 'hooks/useWindowSize'
import { useState } from 'react'
import Spinner from 'components/common/Spinner'
import moment from 'moment/moment'
import { GetBlogsByTagApi, GetNewsApi } from 'services/cxm'
import Link from 'next/link'
import { useRouter } from 'next/router'
import BlogListFilterNavFilter from './BlogListFilterNavFilter'
import NewsRoomPagination from '../NewsRoom/SingleNews/NewsRoomPagination'

const BlogResults = ({ data }) => {
	let { structure } = data
	const [width] = useWindowSize()
	const [blogsLength, setBlogsLength] = useState()
	const [blogs, setBlogs] = useState([])
	const [finalBlogs, setFinalBlogs] = useState(null)
	const [initLoading, setInitLoading] = useState(false)
	const [pagination, setPagination] = useState()
	const [filters, setFilters] = useState({
		year: [],
		tag: [],
		search: '',
		page: 1
	})
	const router = useRouter()
	const controller = new AbortController()

	useEffect(() => {
		setInitLoading(true)
		setBlogs('loading')
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
		if (blogs?.length && blogs === 'loading') controller.abort()
		else getBLogs()
	}, [filters])

	useEffect(() => {
		if (Array.isArray(blogs) && blogs.length > 0)
			setFinalBlogs(
				blogs.filter(
					item =>
						item.title !== 'Blog Results' && item.title !== 'Hisense USA Blog'
				)
			)
		window.scrollTo({ top: 0 })
	}, [blogs])

	const getPostId = () => {
		let ids = []
		ids = structure?.exclude_blogs?.value?.map(
			item => `&exclude[]=${item?.id?.value}`
		)
		return ids && ids.length ? ids.join(',').replaceAll(',', '') : null
	}

	const getBLogs = async () => {
		try {
			setBlogs('loading')
			let response = await GetBlogsByTagApi(
				filters.tag,
				filters.year,
				filters.search,
				structure?.count?.value,
				filters.page,
				getPostId(),
				controller
			)
			console.log(response)
			setBlogs(response.data.data)
			setPagination(response.data.meta)

			// Removes 2 from amount if year is 2024 because 'Blog Results' and 'Hisense USA Blog' articles from 2024 are excluded from list
			if (filters.search === '' && (filters.year?.length === 0 || (filters.year?.length === 1 && filters.year[0] === 2024))) setBlogsLength((response.data?.meta?.total) - 2)
			else setBlogsLength(response.data?.meta?.total)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<section>
			<div className='blog_results'>
				<BlogListFilterNavFilter
					filters={filters}
					filterHandler={(_key, _value, _a) => {
						_a && Object.keys(_a).length > 0
							? setFilters(_a)
							: setFilters({ ...filters, [_key]: _value, page: 1 })
					}}
					title={structure?.title?.value}
					link={structure?.titleLink}
					yearTitle={
						structure?.year_text?.value ? structure?.year_text?.value : 'Year'
					}
					categoryTitle={
						structure?.tag_placeholder?.value
							? structure?.tag_placeholder?.value
							: 'Tag'
					}
					newsSearchTitle={
						structure?.blog_search?.value
							? structure?.blog_search?.value
							: 'search Blogs'
					}
					blogs={finalBlogs}
					blogsLength={blogsLength}
					results
				/>
				<div className='blog_results___content'>
					<div className='blog_results___content___list'>
						{blogs === 'loading' || initLoading ? (
							<Spinner />
						) : Array.isArray(finalBlogs) ? (
							finalBlogs.map((item, index) => (
								<div
									className='blog_results___content___list___item'
									key={index}>
									<div className='blog_results___content___list___item___content'>
										<Link href={item?.route || '/'}>
											<a className='blog_results___content___list___item___content___image'>
												<img
													src={
														item?.meta?.find(
															element => element?.name === 'property="og:image"'
														)?.content
													}
													height={'100%'}
												/>
											</a>
										</Link>
										<div className='blog_results___content___list___item___content___text_box'>
											<div className='blog_results___content___list___item___content___text_box___tags'>
												{item?.tags.map(item => (
													<span className=''>{item}</span>
												))}
											</div>
											<Link href={item?.route || '/'}>
												<a className='blog_results___content___list___item___content___text_box___title'>
													<h5>{item?.title}</h5>
												</a>
											</Link>
											<span className='blog_results___content___list___item___content___text_box___date'>
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
									</div>
									<Link href={item?.route || '/'}>
										<a className='blog_results___content___list___item___link'>
											READ ARTICLE
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
		</section>
	)
}

export default BlogResults
