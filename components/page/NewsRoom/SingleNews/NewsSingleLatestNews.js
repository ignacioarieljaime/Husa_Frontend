import React from 'react'
import NewsRoomMainNewsItem from '../NewsRoomMainNewsItem'
import Link from 'next/link'

const NewsSingleLatestNews = () => {
	return (
		<div className='single_news_latest_news'>
			<div className='container'>
				<div>
					<h5>Latest News</h5>
					<div className='items'>
						<NewsRoomMainNewsItem isThree={true} />
						<NewsRoomMainNewsItem isThree={true} />
						<NewsRoomMainNewsItem isThree={true} />
					</div>
					<Link href={'/'}>
						<a>View All News</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default NewsSingleLatestNews
