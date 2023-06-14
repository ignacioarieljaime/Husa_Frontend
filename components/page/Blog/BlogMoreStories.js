import React from 'react'

import BlogListLittleReadArticleBox from './../BlogList/BlogListLittleReadArticleBox'
import { GetBlogsByTagApi } from 'services/cxm'
import { useState } from 'react'
import { ConvertBlogData } from 'utils/convertBlogData'
import Spinner from 'components/common/Spinner'

function BlogMoreStories({ data: { structure } }) {
	const [blogsList, setBlogsList] = useState()
	const getPosts = async tag => {
		setBlogsList('loading')
		try {
			let response = await GetBlogsByTagApi(tag)
			handleItemToShow(response?.data?.data)
		} catch (error) {
			setBlogsList()
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
						value: ConvertBlogData(element[0])
					},
					smallPost: {
						id: 1,
						type: 'object',
						title: 'Small Post',
						value: ConvertBlogData(element[1])
					}
				})
			} else {
				result.push({
					largePost: {
						id: 1,
						type: 'object',
						title: 'Large Post',
						value: ConvertBlogData(element[0])
					}
				})
			}
		})
		setBlogsList(result)
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
				{blogsList ? (
					<>
						{blogsList === 'loading' ? (
							<Spinner />
						) : (
							<>
								{blogsList?.map((item, index) => (
									<BlogListLittleReadArticleBox
										getTag={getPosts}
										key={index}
										data={item}
									/>
								))}
							</>
						)}
					</>
				) : (
					<>
						{structure?.list?.value.map((item, index) => (
							<BlogListLittleReadArticleBox
								getTag={getPosts}
								key={index}
								data={item}
							/>
						))}
					</>
				)}
			</div>
		</section>
	)
}

export default BlogMoreStories
