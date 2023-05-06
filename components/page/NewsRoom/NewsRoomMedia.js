import CustomImage from 'components/common/CustomImage'
import DownloadIconV2 from 'components/icons/DownloadIconV2'
import Link from 'next/link'
import React from 'react'

const NewsRoomMedia = () => {
	return (
		<div className='news_room_media'>
			<h5>Hisense Media+</h5>

			<div>
				<div>
					<div>
						<CustomImage
							src={
								'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=996&t=st=1683373900~exp=1683374500~hmac=6a8571256f2eecbb9073eff715c3ed673f2b350487c29f3771555e1320f6c9fe'
							}
							wrapperWidth={'100%'}
							wrapperHeight={'244px'}
						/>
					</div>
					<div>
						{' '}
						<a>
							Download Media Kit <DownloadIconV2 />
						</a>
					</div>
				</div>
				<div>
					<div>
						<CustomImage
							src={
								'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=996&t=st=1683373900~exp=1683374500~hmac=6a8571256f2eecbb9073eff715c3ed673f2b350487c29f3771555e1320f6c9fe'
							}
							wrapperWidth={'100%'}
							wrapperHeight={'244px'}
						/>
						<span className='text'>Blogsense</span>
					</div>
					<div>
						<Link href={'/'}>
							<a>Read Blogs</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewsRoomMedia
