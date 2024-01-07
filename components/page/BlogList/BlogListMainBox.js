import React, { useEffect } from 'react'
import BlogListSoundBardItem from './BlogListSoundBardItem'
import { useState } from 'react'
import { GetBlogsByTagApi } from 'services/cxm'

function BlogListMainBox({ data: { structure }, pim }) {
	const [blogsList, setBlogsList] = useState()
	const [blogs, setBlogs] = useState()
	useEffect(() => {
		getAllPosts()
	}, [])
	useEffect(() => {
		if (Array.isArray(blogsList)) {
			window.document.body.style.overflow = 'hidden'
		} else {
			window.document.body.style.overflow = 'unset'
		}
	}, [blogsList])

	const getAllPosts = async () => {
		setBlogsList('loading')
		try {
			let response = await GetBlogsByTagApi()
			setBlogs([
				...handleItemToShow(
					response?.data?.data.filter(
						(_, index) => index < structure?.count?.value
					)
				),
				...selectData(
					response?.data?.data.filter(
						(_, index) => index >= structure?.count?.value
					)
				)
			])
			setBlogsList()
		} catch (error) {
			setBlogsList()
			console.log(error)
		}
	}

	const selectData = data => {
		let _data = data
		if (structure?.selectby?.value === 'new') {
			return _data.filter(
				(item, index) => item.id !== pim.id && index < structure?.count?.value
			)
		} else {
			_data = data.filter(
				item =>
					item.id !== pim.id && item.tags.some(tag => pim.tags.includes(tag))
			)
			return _data.filter(
				(item, index) => item.id !== pim.id && index < structure?.count?.value
			)
		}
	}

	const handleItemToShow = _items => {
		let trimmedItems = _items.filter(
			(_, index) => index < structure?.count?.value
		)
		let items = divideArray(trimmedItems, Math.round(trimmedItems?.length / 2))
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
			setBlogsList()
			console.log(error)
		}
	}

	return (
		<section>
			<div className='blog_text_container mt-0 mt-md-20 pt-5'>
				{structure?.title?.value && (
					<h2 className='fs-2tx fw-normal my-5 mb-md-15'>
						{structure?.title?.value}
					</h2>
				)}
				{blogs &&
					blogs.map((item, index) => (
						<BlogListLittleReadArticleBox key={index} data={item} />
					))}
			</div>
			<div className='blog_text_container mb-6 mb-md-20 pb-0 pb-md-10'>
				{blogs?.map((item, index) => (
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
		</section>
	)
}

export default BlogListMainBox
