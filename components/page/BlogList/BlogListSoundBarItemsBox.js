import React, { useEffect } from 'react'
import BlogListSoundBardItem from './BlogListSoundBardItem'
import { useState } from 'react'
import { GetBlogsByTagApi, getBlogsByIdApi } from 'services/cxm'
import Spinner from 'components/common/Spinner'
import { ConvertBlogData } from 'utils/convertBlogData'

function BlogListSoundBarItemsBox({ data: { structure } }) {
	const [blogsList, setBlogsList] = useState()
	// useEffect(() => {
	// 	getAllPosts()
	// }, [])
	

	const getAllPosts = async () => {
		console.log(structure?.list?.value);
		// try {
		// 	let response = await getBlogsByIdApi()
		// } catch (error) {
		// 	console.log(error)
		// }
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
			<div className='blog_text_container mb-6 mb-md-20 pb-0 pb-md-10'>
				{blogsList ? (
					<>
						{blogsList === 'loading' ? (
							<Spinner />
						) : (
							<>
								{blogsList?.map((item, index) => (
									<BlogListSoundBardItem
										getBlogs={getPosts}
										key={index}
										data={ConvertBlogData(item)}
									/>
								))}
							</>
						)}
					</>
				) : (
					<>
						{structure?.list?.value.map((item, index) => (
							<BlogListSoundBardItem
								getBlogs={getPosts}
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

export default BlogListSoundBarItemsBox
