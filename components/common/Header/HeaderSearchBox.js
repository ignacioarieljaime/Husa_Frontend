import axios from 'axios'
import DocumentIcon from 'components/icons/DocumentIcon'
import GoToPageIcon from 'components/icons/GoToPageIcon'
import MagnifierIcon from 'components/icons/MagnifierIcon'
import SupportIcon from 'components/icons/SupportIcon'
import TelevisionSearchIcon from 'components/icons/TelevisionSearchIcon'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

function HeaderSearchBox({
	searchInputCondition,
	theme,
	setSearchInputCondition
}) {
	const [result, setResult] = useState()
	const [input, setInput] = useState()

	useEffect(() => {
		setResult()
		setInput('')
	}, [searchInputCondition])

	const searchHandler = async _value => {
		setInput(_value)
		setResult('loading')
		try {
			let response = await axios.get(
				`${process.env.NEXT_PUBLIC_CXM_API_ROUTE}/searchPage/${_value}?brand_id=${process.env.NEXT_PUBLIC_BRAND_ID}`
			)
			setResult(response.data)
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<div className='container-fluid header_search_box'>
			<form
				className={`search-form col-12 col-sm-9 ${
					searchInputCondition && 'visible'
				}`}>
				<button
					className='btn py-0 search_button'
					type='button'
					aria-label='search item'>
					<MagnifierIcon />
				</button>
				<div className='search-box'>
					<input
						onChange={e => searchHandler(e.target.value)}
						placeholder='SEARCH'
						value={input}
						className='search_field'
						type='text'
					/>
					<button
						onClick={() => setSearchInputCondition(false)}
						className='search_close py-0 '
						type='button'
						aria-label='search item'>
						<FontAwesomeIcon icon={faClose} size='lg' className='text-white' />
					</button>
				</div>
			</form>{' '}
			{input && searchInputCondition ? (
				<div className='search_result_box theme-dark '>
					{result === 'loading' ? (
						<Spinner />
					) : (
						<div>
							{result?.products.length !== 0 && (
								<div>
									<h6>Products</h6>
									<ul>
										{result?.products.map((item, index) => (
											<li key={`search-item-${index}`}>
												<Link
													target={item?.target ? item?.target : '_self'}
													href={item.route}>
													<a>
														<TelevisionSearchIcon />
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
										))}
									</ul>
								</div>
							)}

							{result?.support.length !== 0 && (
								<div>
									<h6>Support</h6>
									<ul>
										{result?.support.map((item, index) => (
											<li key={`search-item-${index}`}>
												<Link
													target={item?.target ? item?.target : '_self'}
													href={item.route}>
													<a target={'_blank'}>
														<SupportIcon />
														{item.title}
														<span className='ms-2'>
															<GoToPageIcon />
														</span>
														{item?.target === '_blank' && (
															<img
																style={{ marginLeft: '10px' }}
																src={OpenPageOnNewTab.src}
															/>
														)}
													</a>
												</Link>
											</li>
										))}
									</ul>
								</div>
							)}

							{result?.documents.length !== 0 && (
								<div>
									<h6>Documents</h6>
									<ul>
										{result?.documents.map((item, index) => (
											<li key={`search-item-${index}`}>
												<a target={'_blank'} href={item.url}>
													<DocumentIcon />
													{item.title}
												</a>
											</li>
										))}
									</ul>
								</div>
							)}
						</div>
					)}
				</div>
			) : null}
		</div>
	)
}

export default HeaderSearchBox
