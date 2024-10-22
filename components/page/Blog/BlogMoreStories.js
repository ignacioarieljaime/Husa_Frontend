import React, { useEffect } from 'react'

import BlogListLittleReadArticleBox from './../BlogList/BlogListLittleReadArticleBox'
import { GetBlogsByTagApi, getBlogsByIdApi } from 'services/cxm'
import { useState } from 'react'
import { ConvertBlogData } from 'utils/convertBlogData'

function BlogMoreStories({ data: { structure } }) {
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
			setBlogs(handleItemToShow(response?.data?.data))
			setBlogsList()
		} catch (error) {
			setBlogsList()
			console.log(error)
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
				{/* {blogsList ? (
					<BlogListTagsContent
						data={blogsList}
						getPosts={getPosts}
						backHandler={() => setBlogsList()}
					/>
				) : (
					<>
						{blogs?.map((item, index) => (
							<BlogListLittleReadArticleBox
								getTag={getPosts}
								key={index}
								data={item}
							/>
						))}
					</>
				)} */}
				{/* {structure?.list?.value.map((item, index) => (
					<BlogListLittleReadArticleBox key={index} data={item} />
				))} */}
			</div>
		</section>
	)
}

export default BlogMoreStories
