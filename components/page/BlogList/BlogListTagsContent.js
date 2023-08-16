import Spinner from 'components/common/Spinner'
import AngleArrow from 'components/icons/AngleArrow'
import React from 'react'
import BlogListSoundBardItem from './BlogListSoundBardItem'
import Footer from 'components/common/Footer'
import { ConvertBlogData } from 'utils/convertBlogData'

const BlogListTagsContent = ({ data, backHandler, getPosts }) => {
	return (
		<div
			style={{
				paddingTop: '90px',
				position: 'fixed',
				width: '100%',
				height: '100%',
				minHeight: '100vh',
				zIndex: '997',
				top: '0',
				left: '0',
				background: '#fff',
				overflow: 'auto',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between'
			}}>
			{data === 'loading' ? (
				<Spinner />
			) : (
				<>
					{/* <button
						style={{
							background: '#000',
							color: '#fff',
							display: 'flex',
							gap: '10px',
							padding: '10px 20px',
							borderRadius: '5px'
						}}
						onClick={backHandler}>
						<span style={{ transform: 'rotate(90deg)' }}>
							<AngleArrow />
						</span>
						<span style={{paddingTop:"1px"}}>BACK</span>
					</button> */}
					<div className='blog_text_container'>
						{data?.map((item, index) => (
							<BlogListSoundBardItem
								getBlogs={getPosts}
								key={index}
								data={ConvertBlogData(item, 'square')}
							/>
						))}
					</div>
					<div style={{ width: '100%' }}>
						{sessionStorage?.footer && (
							<Footer data={JSON.parse(sessionStorage?.footer)} />
						)}
					</div>
				</>
			)}
		</div>
	)
}

export default BlogListTagsContent
