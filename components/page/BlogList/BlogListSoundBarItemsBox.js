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
	useEffect(() => {
		if (Array.isArray(blogsList)) {
			window.document.body.style.overflow = 'hidden'
		} else {
			window.document.body.style.overflow = 'unset'
		}
	}, [blogsList])

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
			{blogsList ? (
				<div
					style={{
						position: 'fixed',
						width: '100%',
						height: '100vh',
						zIndex: '99999999999999',
						top: '0',
						left: '0',
						background: '#fff',
						overflow: 'auto',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}>
					{blogsList === 'loading' ? (
						<Spinner />
					) : (
						<div className='blog_text_container'>
							{blogsList?.map((item, index) => (
								<BlogListSoundBardItem
									getBlogs={getPosts}
									key={index}
									data={ConvertBlogData(item)}
								/>
							))}
						</div>
					)}
				</div>
			) : (
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
			)}
		</section>
	)
}

export default BlogListSoundBarItemsBox
