import React, { useEffect, useState } from 'react'
import BlogListReadArticleBox from './BlogListReadArticleBox'
import BlogListLittleReadArticleBox from './BlogListLittleReadArticleBox'
import BlogListSoundBardItem from './BlogListSoundBardItem'
import { GetBlogsByTagApi } from 'services/cxm'
import {
	useParallax,
	useParallaxController,
	ParallaxProvider
} from 'react-scroll-parallax'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
import Link from 'next/link'
import { ConvertBlogData } from 'utils/convertBlogData'
import BlogListFilterNavFilter from './BlogListFilterNavFilter'

function BlogListReadArticleBoxContainer({ structure, data }) {
	const parallaxController = useParallaxController()

	const imageRef = useParallax({
		speed: 10,
		translateY: [12, -12]
	})

	return (
		<div id='articles' className='blog_text_container'>
			<div className='row'>
				<div className='col-12'>
					<figure className='blog-article-box-full' ref={imageRef.ref}>
						<div className='image-box'>
							<Link target={'_self'} href={data?.route ? data?.route : '/'}>
								<a className='d-block'>
									<img
										src={
											data?.meta?.find(
												item =>
													item.name === 'property="og:image:square"' &&
													item?.content !== ''
											)?.content
												? data?.meta?.find(
														item =>
															item.name === 'property="og:image:square"' &&
															item?.content !== ''
												  )?.content
												: data?.meta?.find(
														item => item.name === 'property="og:image"'
												  )?.content
										}
										alt={data?.title}
										style={{ objectFit: 'cover' }}
										width='100%'
										onLoad={() => parallaxController.update()}
									/>
								</a>
							</Link>
						</div>
						<figcaption>
							<div className='row justify-content-between align-items-center mt-5'>
								<div className='col-12 col-md-9 order-2 order-md-1 mb-8'>
									<h3 className='fs-3 mb-0'>{data?.title}</h3>
								</div>
								<div className='col-12 col-md-3 order-1 order-md-2 text-start text-md-end mb-3 mb-md-8'>
									{data?.tags.map((item, index) => (
										<span
											key={index}
											style={{
												marginRight: '20px',
												border: 'none',
												background: 'transparent'
											}}
											className='text-primary-dark text-decoration-none'>
											{item}
										</span>
									))}
								</div>
								<div className='col-12 order-3 text-start'>
									<Link href={data?.route ? data?.route : '/'}>
										<a
											style={{ display: 'block' }}
											className='n-btn blog-primary medium w-fit h-fit rounded-5 text-uppercase'>
											read article
										</a>
									</Link>
								</div>
							</div>
						</figcaption>
					</figure>
				</div>
			</div>
		</div>
	)
}

const BlogListSearchableComponent = ({ data }) => {
	const { structure } = data
	const [blogsList, setBlogsList] = useState([])
	const [singleBlog, setSingleBlog] = useState()
	const [rowBlogs, setRowBlogs] = useState()
	const [gridBlogs, setGridBlogs] = useState()
	const [filters, setFilters] = useState({
		year: [],
		tag: [],
		search: '',
		page: 1
	})

	useEffect(() => {
		getAllPosts()
	}, [])

	// useEffect(() => {
	// 	if (Array.isArray(blogsList)) {
	// 		window.document.body.style.overflow = 'hidden'
	// 	} else {
	// 		window.document.body.style.overflow = 'unset'
	// 	}
	// }, [blogsList])

	const getPostId = () => {
		let ids = []
		ids = structure?.exclude_blogs?.value?.map(
			item => `&exclude[]=${item?.id?.value}`
		)
		return ids && ids.length ? ids.join(',').replaceAll(',', '') : null
	}

	const getAllPosts = async () => {
		setBlogsList('loading')
		const countValue = structure?.count?.value
		const countNumber =
			typeof countValue === 'string'
				? parseInt(structure?.count?.value, 10)
				: null
		let finalCountValue
		if (countNumber) finalCountValue = (countNumber + 1).toString()
		else finalCountValue = countValue

		try {
			let response = await GetBlogsByTagApi(
				filters.tag,
				filters.year,
				filters.search,
				finalCountValue,
				filters.page,
				getPostId()
			)
			console.log(response?.data?.data)
			const filterdByOffset = response?.data?.data.filter(
				(_, index) => index >= parseInt(structure['start-offset']?.value)
			)
			console.log(filterdByOffset)
			console.log(
				filterdByOffset.filter(
					(_, index) =>
						index > 0 && index < parseInt(structure['grid-count']?.value) + 1
				)
			)
			console.log(
				filterdByOffset.filter(
					(_, index) =>
						index >= parseInt(structure['grid-count']?.value) + 1 &&
						index <
							parseInt(structure['grid-count']?.value) +
								parseInt(structure['row-count']?.value) +
								1
				)
			)
			setSingleBlog(filterdByOffset[0])
			setGridBlogs(
				handleItemToShow(
					filterdByOffset.filter(
						(_, index) =>
							index > 0 && index < parseInt(structure['grid-count']?.value) + 1
					)
				)
			)
			setRowBlogs(
				filterdByOffset.filter(
					(_, index) =>
						index >= parseInt(structure['grid-count']?.value) + 1 &&
						index <
							parseInt(structure['grid-count']?.value) +
								parseInt(structure['row-count']?.value) +
								1
				)
			)
			setBlogsList(filterdByOffset)
		} catch (error) {
			setBlogsList([])
			console.log(error)
		}
	}

	const handleItemToShow = _items => {
		let items = divideArray(_items, Math.round(_items?.length / 2))
		let result = []

		items.forEach(element => {
			if (element?.length === 2) {
				result.push({
					largePost: {
						id: 1,
						type: 'object',
						title: 'Large Post',
						value: ConvertBlogData(element[0], 'vertical')
					},
					smallPost: {
						id: 1,
						type: 'object',
						title: 'Small Post',
						value: ConvertBlogData(element[1], 'vertical')
					}
				})
			} else {
				result.push({
					largePost: {
						id: 1,
						type: 'object',
						title: 'Large Post',
						value: ConvertBlogData(element[0], 'vertical')
					}
				})
			}
		})

		return result
	}

	const divideArray = (arr, size) => {
		return arr.reduce((acc, val, ind) => {
			const subIndex = ind % size
			if (!Array.isArray(acc[subIndex])) {
				acc[subIndex] = [val]
			} else {
				acc[subIndex].push(val)
			}
			return acc
		}, [])
	}

	const getPosts = async tag => {
		setBlogsList('loading')
		try {
			let response = await GetBlogsByTagApi(tag)
			setBlogsList(response?.data?.data)
		} catch (error) {
			setBlogsList([])
			console.log(error)
		}
	}

	return (
		<section>
			<div className='blog_main_box'>
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
					blogsList={blogsList}
					targetRoute={structure?.link?.value}
					newsLength={blogsList.length}
					color={structure?.titleColor?.value}
				/>
				<div
					id={data?.name + data?.id}
					className='blog_main_box___blog_list_searchable'>
					{singleBlog && (
						<ParallaxProvider>
							<BlogListReadArticleBoxContainer data={singleBlog} />
						</ParallaxProvider>
					)}
					<div className='blog_text_container pt-5'>
						{gridBlogs &&
							gridBlogs.map((item, index) => (
								<BlogListLittleReadArticleBox key={index} data={item} />
							))}
					</div>
					<div className='blog_text_container pb-10'>
						{rowBlogs &&
							rowBlogs?.map((item, index) => (
								<BlogListSoundBardItem
									getBlogs={getPosts}
									key={index}
									data={{
										tag: {
											value: item?.tags
										},
										link: {
											title: 'READ ARTICLE',
											value: item?.route
										},
										image: {
											src: item?.meta?.find(
												item =>
													item.name === 'property="og:image:square"' &&
													item?.content !== ''
											)?.content
												? item?.meta?.find(
														item =>
															item.name === 'property="og:image:square"' &&
															item?.content !== ''
												  )?.content
												: item?.meta?.find(
														item => item.name === 'property="og:image"'
												  )?.content
										},
										title: {
											value: item?.title
										}
									}}
								/>
							))}
					</div>
					<Link
						target={structure?.link?.target ? structure?.link?.target : '_self'}
						href={structure?.link?.value ? structure?.link?.value : '/'}>
						<a
							target={
								structure?.link?.target ? structure?.link?.target : '_self'
							}
							style={{ display: 'block' }}
							className='blog_main_box___blog_list_searchable___main_link'>
							{structure?.link?.title}
							{structure?.link?.target === '_blank' && (
								<img
									style={{ marginLeft: '10px', objectFit: 'cover' }}
									src={OpenPageOnNewTab.src}
								/>
							)}
						</a>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default BlogListSearchableComponent
