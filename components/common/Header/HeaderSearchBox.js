import axios from 'axios'
import GoToPageIcon from 'components/icons/GoToPageIcon'
import MagnifierIcon from 'components/icons/MagnifierIcon'
import TelevisionSearchIcon from 'components/icons/TelevisionSearchIcon'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner'

function HeaderSearchBox({ searchInputCondition, theme }) {
	const [result, setResult] = useState()
	const [input, setInput] = useState()
	useEffect(() => {
		setResult()
		setInput('')
	}, [searchInputCondition])

	const searchHandler = async _value => {
		setInput(_value)
		if (_value.length >= 2) {
			setResult('loading')
			try {
				let response = await axios.get(
					`https://imcxm.dev-api.hisenseportal.com/api/husa/searchPage/${input}`
				)

				setResult(response.data)
			} catch (error) {
				console.log(error)
			}
		} else {
			setResult()
		}
	}
	return (
		<div className='container-fluid header_search_box'>
			<form
				className={`search-form col-12 col-sm-7 ${
					searchInputCondition && 'visible'
				}`}>
				<button className='btn py-0' type='button' aria-label='search item'>
					<MagnifierIcon />
				</button>
				<input
					onChange={e => searchHandler(e.target.value)}
					placeholder='SEARCH'
					value={input}
					className='search-box'
					type='text'
				/>
			</form>{' '}
			{input && searchInputCondition ? (
				<div className='search_result_box theme-dark '>
					<div>
						<h6>Products</h6>
						<ul>
							{result === 'loading' ? (
								<Spinner />
							) : Array.isArray(result) && result.length !== 0 ? (
								<>
									{result.map((item, index) => (
										<li key={`search-item-${index}`}>
											<Link href={item.route}>
												<a>
													<TelevisionSearchIcon />
													{item.title}
												</a>
											</Link>
										</li>
									))}
								</>
							) : (
								<li>it's empty</li>
							)}
						</ul>
					</div>
				</div>
			) : null}
		</div>
	)
}

export default HeaderSearchBox
