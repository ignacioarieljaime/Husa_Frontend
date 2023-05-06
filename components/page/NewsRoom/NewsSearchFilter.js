import AngleArrow from 'components/icons/AngleArrow'
import MagnifierIcon from 'components/icons/MagnifierIcon'
import React from 'react'

const NewsSearchFilter = () => {
	return (
		<div className='news_room_search_filter'>
			<div className='container'>
				<div className='content'>
					<span>Featured News</span>

					<div>
						<div className='select_box_custom'>
							<span>
								Year <AngleArrow />
							</span>
							<div>
								<ul>
									<li>
										<button>2004</button>
									</li>
								</ul>
							</div>
						</div>
						<div className='select_box_custom product_select_box'>
							<span>
								Product <AngleArrow />
							</span>
							<div>
								<ul>
									<li>
										<button>2004</button>
									</li>
								</ul>
							</div>
						</div>
						<div className='custom_input_box'>
							<input placeholder='search newsroom' />
							<MagnifierIcon />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewsSearchFilter
