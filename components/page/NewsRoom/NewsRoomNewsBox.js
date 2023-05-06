import React from 'react'
import NewsSearchFilter from './NewsSearchFilter'
import NewsRoomMainNewsItem from './NewsRoomMainNewsItem'
import Link from 'next/link'

const NewsRoomNewsBox = () => {
	return (
		<div className='news_room_news_box'>
			<NewsSearchFilter />
			<div className='container items'>
				{[1, 2, 2, 2, 2, 3, 4, 5].map(
					(item, index) =>
						index <= 5 && (
							<NewsRoomMainNewsItem isFirst={index === 0} isThree={index > 2} />
						)
				)}
			</div>
			<Link href={'/'}>
				<a className='view_archive'>View Archive</a>
			</Link>
		</div>
	)
}

export default NewsRoomNewsBox
