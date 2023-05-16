import React from 'react'
import NewsSearchFilter from './NewsSearchFilter'
import NewsRoomMainNewsItem from './NewsRoomMainNewsItem'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const NewsRoomNewsBox = () => {
	const [news, setNews] = useState()
	const [filters, setFilters] = useState({
		year: undefined,
		product: undefined,
		search: undefined
	})

	useEffect(() => {
		getNews()
	}, [filters])

	const getNews = async () => {
		setNews('loading')
		try {
			let response = await axios.get(
				`https://imcxm.dev-api.hisenseportal.com/api/husa/getPosts?type=news&years=${filters.year}&product=${filters.product}&search=${filters.search}`
			)

			setNews(response.data.data)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='news_room_news_box'>
			<NewsSearchFilter
				filter={filters}
				filterHandler={(_key, _value) =>
					setFilters({ ...filters, [_key]: _value })
				}
				title={structure?.titleOne?.value}
			/>
			<div className='container items'>
				{news === 'loading' ? (
					<Spinner />
				) : Array.isArray(news) ? (
					news.map(
						(item, index) =>
							index <= 5 && (
								<NewsRoomMainNewsItem
									data={item}
									isFirst={index === 0}
									isThree={index > 2}
								/>
							)
					)
				) : null}
			</div>
			<Link href={'/'}>
				<a className='view_archive'>View Archive</a>
			</Link>
		</div>
	)
}

export default NewsRoomNewsBox
