import CustomImage from 'components/common/CustomImage'
import moment from 'moment'
import Link from 'next/link'
import React from 'react'

const NewsRoomMainNewsItem = ({
	isFirst,
	isThree,
	subject,
	title,
	date,
	image,
	link,
	target
}) => {
	return (
		<>
		<Link href={link || '/'} target={target || '_self'}>
			<a
				className={`news_room_main_news_item box-group-link ${isThree && 'three_item'} ${
				isFirst ? 'horizontal' : 'vertical'
			}`}>
			<div>
				<Link href={link || '/'} target={target || '_self'}>
					<a className='image_wrapper_link' target={target || '_self'}>
						<CustomImage
							src={image}
							className='image'
							wrapperWidth={'100%'}
							wrapperHeight={isThree ? '173px' : isFirst ? '100%' : '268px'}
						/>
					</a>
				</Link>
				<div className='text'>
					<span className='subject'>{subject}</span>

					<h2>
						<Link href={link || '/'} target={target || '_self'}>
							<a target={target || '_self'}>{title}</a>
						</Link>
					</h2>

					<span className='date'>
						{date && date.includes('T')
							? moment(date).format('DD MMMM YYYY')
							: date}
					</span>
				</div>
			</div>
			</a>
			</Link>
		</>
	)
}

export default NewsRoomMainNewsItem
