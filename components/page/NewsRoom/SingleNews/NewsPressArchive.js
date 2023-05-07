import React from 'react'
import NewsSearchFilter from '../NewsSearchFilter'
import CustomImage from 'components/common/CustomImage'

const NewsPressArchive = () => {
	return (
		<>
			<NewsSearchFilter />
			<div className='news_press_archive container'>
				<div>
					<div className='items_box'>
						<h5>Press Archive</h5>

						<div className='items'>
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
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default NewsPressArchive
