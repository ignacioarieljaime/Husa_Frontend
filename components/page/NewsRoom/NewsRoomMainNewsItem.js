import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'
import React from 'react'

const NewsRoomMainNewsItem = ({
	isFirst,
	isThree,
	subject,
	title,
	date,
	image,
	link
}) => {
	return (
		<>
			<div
				className={`news_room_main_news_item ${isThree && 'three_item'} ${
					isFirst ? 'horizontal' : 'vertical'
				}`}>
				<CustomImage
					src={image}
					className='image'
					wrapperWidth={'100%'}
					wrapperHeight={isThree ? '173px' : isFirst ? '100%' : '268px'}
				/>
				<div className='text'>
					<span className='subject'>{subject}</span>

					<h2>
						<Link href={link || '/'}>
							<a>{title}ّ</a>
						</Link>
					</h2>

					<span className='date'>{date}</span>
				</div>
			</div>
		</>
	)
}

export default NewsRoomMainNewsItem
