import axios from 'axios'
import AngleArrow from 'components/icons/AngleArrow'
import MagnifierIcon from 'components/icons/MagnifierIcon'
import { useWindowSize } from 'hooks/useWindowSize'
import React, { useEffect, useState } from 'react'

let years = []

for (let year = new Date().getFullYear(); year >= 1980; year--) {
	years.push(year)
}

const NewsSearchFilter = ({
	title = 'Featured News',
	filters,
	yearTitle,
	categoryTitle,
	newsSearchTitle,
	filterHandler
}) => {
	const [openFilter, setOpenFilter] = useState(false)
	const [width] = useWindowSize()
	const [timer, setTimer] = useState(null)
	const [filterData, setFilterData] = useState()

	useEffect(() => {
		getNews()
	}, [])

	const inputChanged = e => {
		clearTimeout(timer)

		const newTimer = setTimeout(() => {
			filterHandler('search', e.target.value)
		}, 500)

		setTimer(newTimer)
	}

	const getNews = async () => {
		try {
			let response = await axios.get(
				`https://imcxm.dev-api.hisenseportal.com/api/husa/getPosts/meta?type=news`
			)
			setFilterData(response?.data)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='news_room_search_filter'>
			<div className='container'>
				<div className='content'>
					<span>{title}</span>

					<div
						style={{
							height: width > 980 ? 'fit-content' : openFilter ? '300px' : '0'
						}}>
						<div className='select_box_custom'>
							<span>
								{filters?.year || yearTitle} <AngleArrow />
							</span>
							<div>
								<ul>
									<li>
										<button onClick={() => filterHandler('year', null)}>
											clear
										</button>
									</li>
									{filterData?.years?.map(item => (
										<li>
											<button onClick={() => filterHandler('year', item)}>
												{item}
											</button>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className='select_box_custom product_select_box'>
							<span>
								{filters?.product || categoryTitle}
								<AngleArrow />
							</span>
							<div>
								<ul>
									<li>
										<button onClick={() => filterHandler('product', null)}>
											clear
										</button>
									</li>
									{filterData?.tags?.map(item => (
										<li>
											<button onClick={() => filterHandler('product', item)}>
												{item}
											</button>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className='custom_input_box'>
							<input onInput={inputChanged} placeholder={newsSearchTitle} />
							<MagnifierIcon />
						</div>
						<button>Reset Filter</button>
					</div>
					<button
						className={!openFilter && 'close_button'}
						onClick={() => setOpenFilter(state => !state)}>
						Filters
						<AngleArrow />
					</button>
				</div>
			</div>
		</div>
	)
}

export default NewsSearchFilter
