import {
	faAngleDown,
	faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function SubMenuHeader() {
	const [dropDownCondition, setDropDownCondition] = useState(false)

	return (
		<div className='container'>
			<div className='row pt-4 mx-0 border-top w-100 stories-row'>
				<div className='col-12 col-md-7 px-0 fs-5'>
					Scroll for Stories & Inspiration from
					<span className='text-primary-dark ms-2'>Hisense</span>
				</div>
				<div className='col-12 col-md-5 px-0'>
					<div className='row justify-content-start justify-content-md-end align-items-center'>
						<div className='col-xl-4 col-xxl-3 dropdown'>
							<button
								className='bg-transparent border-0'
								onClick={() => setDropDownCondition(!dropDownCondition)}>
								<span className='me-2'> All Stories</span>
								<FontAwesomeIcon
									icon={faAngleDown}
									color={'rgba(0, 158, 145, 1)'}
								/>
							</button>
							{dropDownCondition && (
								<ul className='dropdown-menu d-block'>
									<li>
										<a className='dropdown-item' href='#'>
											All stories
										</a>
									</li>
									<li>
										<a className='dropdown-item' href='#'>
											All stories
										</a>
									</li>
									<li>
										<a className='dropdown-item' href='#'>
											Some Stories
										</a>
									</li>
								</ul>
							)}
						</div>
						<div className='col-xl-4 col-xxl-3 d-flex justify-content-between align-items-center'>
							<input type='text' placeholder='Search' className='search-articles' />
							<button className='search-articles-btn'>
								<FontAwesomeIcon
									icon={faMagnifyingGlass}
									color={'text-primary-dark'}
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SubMenuHeader
