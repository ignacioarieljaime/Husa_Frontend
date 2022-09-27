import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleDown,
	faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'

function BlogListSearchBox() {
	const [dropDownCondition, setDropDownCondition] = useState(false)
	return (
		<section>
			<div class='container'>
				<div class='row mb-9 pt-9 mx-0 border-top'>
					<div class='col-12 col-md-7 py-3 px-0 fs-5'>
						Scroll for Stories & Inspiration from
						<span class='text-primary-dark'>Hisense</span>
					</div>
					<div class='col-12 col-md-5 py-3 px-0'>
						<div class='row justify-content-start justify-content-md-end align-items-center'>
							<div class='col-xl-4 dropdown'>
								<button
									className='bg-transparent border-0'
									onClick={() => setDropDownCondition(!dropDownCondition)}>
									<span className='me-2'>All stories</span>
									<FontAwesomeIcon
										icon={faAngleDown}
										color={'rgba(0, 158, 145, 1)'}
									/>
								</button>
								{dropDownCondition && (
									<ul class='dropdown-menu d-block'>
										<li>
											<a class='dropdown-item' href='#'>
												All stories
											</a>
										</li>
										<li>
											<a class='dropdown-item' href='#'>
												All stories
											</a>
										</li>
										<li>
											<a class='dropdown-item' href='#'>
												Some Stories
											</a>
										</li>
									</ul>
								)}
							</div>
							<div class='col-xl-4 d-flex justify-content-between align-items-center'>
								<input
									type='text'
									placeholder='Search'
									class='search-articles'
								/>
								<button class='search-articles-btn'>
									<FontAwesomeIcon
										icon={faMagnifyingGlass}
										color={' text-primary-dark'}
									/>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BlogListSearchBox
