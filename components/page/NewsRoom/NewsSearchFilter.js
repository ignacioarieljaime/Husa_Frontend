import axios from 'axios'
import AngleArrow from 'components/icons/AngleArrow'
import MagnifierIcon from 'components/icons/MagnifierIcon'
import SelectBoxAngleArrow from 'components/icons/SelectBoxAngleArrow'
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
				`https://imcxm.dev-api.hisenseportal.com/api/husa/getPosts/meta?type=news&brand_id=3`
			)
			setFilterData(response?.data)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='news_room_search_filter'>
			<div className=''>
				<div className='content'>
					<div className='filter_title'>
						<span className='title'>{title}</span>
						<button
							className={!openFilter && 'close_button'}
							onClick={() => setOpenFilter(state => !state)}>
							Filters
							<AngleArrow />
						</button>
					</div>

					<div
						className='filter_options'
						style={{
							height: width > 980 ? 'fit-content' : openFilter ? '305px' : '0',
							marginTop: width > 980 ? '0' : openFilter ? '32px' : '0'
						}}>
						<div className='select_box_custom'>
							{/* <label>Model year</label> */}
							<div>
								<span>
									<span>{filters?.year || yearTitle}</span>
									<SelectBoxAngleArrow />
								</span>
								<div>
									<ul>
										<li>
											<button onClick={() => filterHandler('year', null)}>
												Clear
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
						</div>
						<div className='select_box_custom product_select_box'>
							{/* <label>Product select</label> */}
							<div>
								<span>
									<span>{filters?.product || categoryTitle}</span>
									<SelectBoxAngleArrow />
								</span>
								<div>
									<ul>
										<li>
											<button onClick={() => filterHandler('product', null)}>
												Clear
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
						</div>
						<div className='custom_input_box'>
							{/* <label>search archive</label> */}
							<div>
								<input onInput={inputChanged} placeholder={newsSearchTitle} />
								<MagnifierIcon />
							</div>
						</div>
						<button>Reset Filter</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewsSearchFilter
