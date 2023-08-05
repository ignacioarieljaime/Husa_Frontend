import React, { useEffect } from 'react'
import BlogListSoundBardItem from './BlogListSoundBardItem'
import { useState } from 'react'
import { GetBlogsByTagApi, getBlogsByIdApi } from 'services/cxm'
import Spinner from 'components/common/Spinner'
import { ConvertBlogData } from 'utils/convertBlogData'
import Header from 'components/common/Header/Header'
import Footer from 'components/common/Footer'
import AngleArrow from 'components/icons/AngleArrow'
import BlogListTagsContent from './BlogListTagsContent'

function BlogListSoundBarItemsBox({ data: { structure }, pim }) {
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
			// let response = await getBlogsByIdApi(
			// 	encodeURIComponent(JSON.stringify(productsIds))
			// )
			let response = await GetBlogsByTagApi()
			setBlogs(selectData(response?.data?.data))
			setBlogsList()
		} catch (error) {
			setBlogsList()
			console.log(error)
		}
	}

	const selectData = data => {
		let _data = data
		if (structure?.selectby?.value === 'new') {
			return _data.filter((_, index) => index < structure?.count?.value)
		} else {
			_data = data.filter(
				item =>
					item.id !== pim.id && item.tags.some(tag => pim.tags.includes(tag))
			)
			return _data.filter((_, index) => index < structure?.count?.value)
		}
	}

	const getPosts = async tag => {
		setBlogsList('loading')
		try {
			let response = await GetBlogsByTagApi(tag)
			console.log('tag ', response)
			setBlogsList(response?.data?.data)
		} catch (error) {
			setBlogsList()
			console.log(error)
		}
	}

	return (
		<section>
			{/* {blogsList ? (
				<BlogListTagsContent
					data={blogsList}
					getPosts={getPosts}
					backHandler={() => setBlogsList()}
				/>
			) : ( */}
			<div className='blog_text_container mb-6 mb-md-20 pb-0 pb-md-10'>
				{/* {structure?.list?.value.map((item, index) => (
						<BlogListSoundBardItem key={index} data={item} />
					))} */}
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
			{/* )} */}
		</section>
	)
}

export default BlogListSoundBarItemsBox
