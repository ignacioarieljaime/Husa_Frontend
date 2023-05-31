import React, { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faAngleDown,
	faMagnifyingGlass,
	faXmark
} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Spinner from 'components/common/Spinner'
import Link from 'next/link'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

function BlogListSearchBox({ data: { structure } }) {
	const [dropDownCondition, setDropDownCondition] = useState(false)
	const [blogList, setBlogList] = useState(null)
	const [blogListCondition, setBlogListCondition] = useState(false)
	const [inputValue, setInputValue] = useState(null)
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.text?.value)
	}, [])
	const searchBlog = async _searchValue => {
		setInputValue(_searchValue)
		setBlogListCondition(true)
		setBlogList('loading')
		try {
			let response = await axios.get(
				`${process.env.NEXT_PUBLIC_CXM_API_ROUTE}/searchPost?string=${_searchValue}`
			)
			setBlogList(response.data.data)
		} catch (error) {
			setBlogList(null)
			console.log(error)
		}
	}

	return (
		<section>
			<div className='blog_text_container px-7'>
				<div className='row mb-9 pt-9 mx-0 border-top'>
					<div
						className='col-12 col-md-7 py-3 px-0 fs-5'
						dangerouslySetInnerHTML={{ __html: text }}></div>
					<div className='col-12 col-md-5 py-3 px-0'>
						<div className='row justify-content-start justify-content-md-end align-items-center position-relative'>
							{/* <div className='col-xl-4 dropdown'>
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
							</div> */}
							<div className='col-xl-4 '>
								<div className='d-flex justify-content-between align-items-center '>
									<div>
										<input
											type='text'
											placeholder='Search'
											className='search-articles'
											value={inputValue}
											onChange={e => searchBlog(e.target.value)}
										/>
										<button className='search-articles-btn'>
											<FontAwesomeIcon
												icon={faMagnifyingGlass}
												color={'#43898A'}
											/>
										</button>
									</div>
									{blogListCondition && (
										<div className='blog_search_box'>
											<button
												onClick={() => {
													setBlogListCondition(false)
													setInputValue('')
												}}>
												<FontAwesomeIcon icon={faXmark} />
											</button>
											<ul>
												{blogList === 'loading' ? (
													<li>
														<Spinner size={35} />
													</li>
												) : blogList.length === 0 ? (
													<li className='text-align-center'>empty</li>
												) : (
													blogList.map(item => (
														<li>
															<Link
																target={item?.target ? item?.target : '_self'}
																href={item?.route ? item?.route : '/'}>
																<a
																	target={
																		item?.target ? item?.target : '_self'
																	}>
																	{item.title}
																	{item?.target === '_blank' && (
																		<img
																			style={{ marginLeft: '10px' }}
																			src={OpenPageOnNewTab.src}
																		/>
																	)}
																</a>
															</Link>
														</li>
													))
												)}
											</ul>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BlogListSearchBox
