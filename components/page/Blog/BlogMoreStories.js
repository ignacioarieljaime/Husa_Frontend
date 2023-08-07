import React, { useEffect } from 'react'

import BlogListLittleReadArticleBox from './../BlogList/BlogListLittleReadArticleBox'
import { GetBlogsByTagApi, getBlogsByIdApi } from 'services/cxm'
import { useState } from 'react'
import { ConvertBlogData } from 'utils/convertBlogData'
import Spinner from 'components/common/Spinner'
import BlogListSoundBardItem from '../BlogList/BlogListSoundBardItem'
import BlogListTagsContent from '../BlogList/BlogListTagsContent'

function BlogMoreStories({ data: { structure } }) {
	// const [blogsList, setBlogsList] = useState()
	// const [blogs, setBlogs] = useState()
	// useEffect(() => {
	// 	getAllPosts()
	// }, [])

	// useEffect(() => {
	// 	if (Array.isArray(blogsList)) {
	// 		window.document.body.style.overflow = 'hidden'
	// 	} else {
	// 		window.document.body.style.overflow = 'unset'
	// 	}
	// }, [blogsList])

	// const getAllPosts = async () => {
	// 	setBlogsList('loading')
	// 	try {
	// 		let response = await getBlogsByIdApi(
	// 			encodeURIComponent(JSON.stringify(getItemsId()))
	// 		)
	// 		setBlogs(handleItemToShow(response?.data?.data))
	// 		setBlogsList()
	// 	} catch (error) {
	// 		setBlogsList()
	// 		console.log(error)
	// 	}
	// }

	// const getItemsId = () => {
	// 	let ids = []
	// 	structure?.list?.value.forEach(element => {
	// 		ids.push(
	// 			element?.largePost?.value?.id?.value,
	// 			element?.smallPost?.value?.id?.value
	// 		)
	// 	})
	// 	return ids
	// }

	// const getPosts = async tag => {
	// 	setBlogsList('loading')
	// 	try {
	// 		let response = await GetBlogsByTagApi(tag)

	// 		setBlogsList(response?.data?.data)
	// 	} catch (error) {
	// 		setBlogsList()
	// 		console.log(error)
	// 	}
	// }

	// const handleItemToShow = _items => {
	// 	let items = divideArray(_items, Math.round(_items?.length / 2))
	// 	let result = []

	// 	items.forEach(element => {
	// 		if (element?.length === 2) {
	// 			result.push({
	// 				largePost: {
	// 					id: 1,
	// 					type: 'object',
	// 					title: 'Large Post',
	// 					value: ConvertBlogData(element[0])
	// 				},
	// 				smallPost: {
	// 					id: 1,
	// 					type: 'object',
	// 					title: 'Small Post',
	// 					value: ConvertBlogData(element[1])
	// 				}
	// 			})
	// 		} else {
	// 			result.push({
	// 				largePost: {
	// 					id: 1,
	// 					type: 'object',
	// 					title: 'Large Post',
	// 					value: ConvertBlogData(element[0])
	// 				}
	// 			})
	// 		}
	// 	})

	// 	return result
	// }

	// const divideArray = (arr, size) => {
	// 	return arr.reduce((acc, val, ind) => {
	// 		const subIndex = ind % size
	// 		if (!Array.isArray(acc[subIndex])) {
	// 			acc[subIndex] = [val]
	// 		} else {
	// 			acc[subIndex].push(val)
	// 		}
	// 		return acc
	// 	}, [])
	// }
	return (
		<section>
			<div className='blog_text_container mt-0 mt-md-20 pt-5'>
				{structure?.title?.value && (
					<h2 className='fs-2tx fw-normal my-5 mb-md-15'>
						{structure?.title?.value}
					</h2>
				)}
				{structure?.list?.value.map((item, index) => (
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
