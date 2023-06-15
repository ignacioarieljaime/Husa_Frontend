import React, { useEffect } from 'react'
import BlogListSoundBardItem from './BlogListSoundBardItem'
import { useState } from 'react'
import { GetBlogsByTagApi, getBlogsByIdApi } from 'services/cxm'
import Spinner from 'components/common/Spinner'
import { ConvertBlogData } from 'utils/convertBlogData'

function BlogListSoundBarItemsBox({ data: { structure } }) {
	const [blogsList, setBlogsList] = useState()
	const [blogs, setBlogs] = useState()
	useEffect(() => {
		getAllPosts()
	}, [])

	const getAllPosts = async () => {
		setBlogsList('loading')
		let productsIds = structure?.list?.value?.map(item => item?.id?.value)
		try {
			let response = await getBlogsByIdApi(
				encodeURIComponent(JSON.stringify(productsIds))
			)
			setBlogs(response?.data?.data)
			setBlogsList()
		} catch (error) {
			setBlogsList()
			console.log(error)
		}
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
											item => item.name === 'property="og:image"'
										)?.content
									},
									title: {
										value: item?.title
									}
								}}
							/>
						))}
					</>
				)}
			</div>
		</section>
	)
}

export default BlogListSoundBarItemsBox
