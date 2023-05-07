import React from 'react'
import NewsSearchFilter from '../NewsSearchFilter'
import CustomImage from 'components/common/CustomImage'
import PaginationDabbleArrow from 'components/icons/PaginationDabbleArrow'
import PaginationArrow from 'components/icons/PaginationArrow'

const NewsPressArchive = () => {
	return (
		<>
			<NewsSearchFilter />
			<div className='news_press_archive container'>
				<div>
					<div className='items_box'>
						<h5>Press Archive</h5>

						<div className='items'>
							{[1, 1, 1, 1].map(item => (
								<div>
									<CustomImage
										src={
											'https://images.unsplash.com/photo-1540634354115-0a35d263fdf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
										}
										wrapperWidth={'370px'}
										wrapperHeight={'100%'}
									/>
									<div className='text_box'>
										<span className='subject'>press release</span>
										<h5>
											Hisense Unveils ULED X, A New Generation of Technology
											Representing the Ultimate LED TV, at CES 2023
										</h5>
										<span className='date'>April 17 2023</span>
									</div>
								</div>
							))}
						</div>

						<ul>
							<li>
								<button>
									<PaginationDabbleArrow />
								</button>
							</li>
							<li>
								<button>
									<PaginationArrow />
								</button>
							</li>
							<li className='active'>
								<button>
									<span>1</span>
								</button>
							</li>
							<li>
								<button>
									{' '}
									<span>2</span>
								</button>
							</li>
							<li>
								<button>
									{' '}
									<span>3</span>
								</button>
							</li>
							<li className='active'>
								<button>
									<PaginationArrow />
								</button>
							</li>
							<li className='active'>
								<button>
									<PaginationDabbleArrow />
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default NewsPressArchive
