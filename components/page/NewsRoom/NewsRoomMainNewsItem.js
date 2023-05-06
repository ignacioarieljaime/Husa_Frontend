import CustomImage from 'components/common/CustomImage'
import React from 'react'

const NewsRoomMainNewsItem = ({ isFirst, isThree }) => {
	return (
		<>
			<div
				className={`news_room_main_news_item ${isThree && 'three_item'} ${
					isFirst ? 'horizontal' : 'vertical'
				}`}>
				<CustomImage
					src={
						'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=996&t=st=1683373900~exp=1683374500~hmac=6a8571256f2eecbb9073eff715c3ed673f2b350487c29f3771555e1320f6c9fe'
					}
					wrapperWidth={isFirst ? '50%' : '100%'}
					wrapperHeight={isThree ? '173px' : isFirst ? '100%' : '268px'}
				/>
				<div className='text'>
					<span className='subject'>press release</span>

					<h2>
						Hisense Unveils ULED X, A New Generation of Technology Representing
						the Ultimate LED TV, at CES 2023
					</h2>

					<span className='date'>April 17 2023</span>
				</div>
			</div>
		</>
	)
}

export default NewsRoomMainNewsItem
