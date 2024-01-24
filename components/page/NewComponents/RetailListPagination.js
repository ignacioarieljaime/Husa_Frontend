import PaginationArrow from 'components/icons/PaginationArrow'
import PaginationDabbleArrow from 'components/icons/PaginationDabbleArrow'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const RetailListPagination = ({ pagination, handler, translate }) => {
	const [pagesCount, setPagesCount] = useState()
	useEffect(() => {
		generatePage()
	}, [pagination])

	const generatePage = () => {
		let pages = []
		for (let index = 0; index < pagination?.last_page; index++) {
			pages.push(index + 1)
		}
		setPagesCount(pages)
	}

	const generatePagination = index => {
		if (pagination?.current_page === 1) {
			if (pagination?.last_page >= 3) {
				return index >= pagination?.current_page &&
					index <= pagination?.current_page + 2 ? (
					<li className={index === pagination?.current_page ? 'active' : ''}>
						<button
							onClick={() =>
								handler(index - 1, {
									...pagination,
									current_page: index
								})
							}>
							<span>{index}</span>
						</button>
					</li>
				) : null
			} else {
				return index >= pagination?.current_page &&
					index <= pagination?.last_page ? (
					<li className={index === pagination?.current_page ? 'active' : ''}>
						<button
							onClick={() =>
								handler(index - 1, {
									...pagination,
									current_page: index
								})
							}>
							<span>{index}</span>
						</button>
					</li>
				) : null
			}
		}
		if (pagination?.current_page === pagination?.last_page) {
			return index >= pagination?.current_page - 2 &&
				index <= pagination?.current_page ? (
				<li className={index === pagination?.current_page ? 'active' : ''}>
					<button
						onClick={() =>
							handler(index - 1, {
								...pagination,
								current_page: index
							})
						}>
						<span>{index}</span>
					</button>
				</li>
			) : null
		}

		if (pagination?.current_page !== 1) {
			return index >= pagination?.current_page - 1 &&
				index <= pagination?.current_page + 1 ? (
				<li className={index === pagination?.current_page ? 'active' : ''}>
					<button
						onClick={() =>
							handler(index - 1, {
								...pagination,
								current_page: index
							})
						}>
						<span>{index}</span>
					</button>
				</li>
			) : null
		}
	}

	console.log(pagination)

	return (
		<ul>
			<li className='active'>
				<button
					onClick={() =>
						handler(0, {
							...pagination,
							current_page: 1
						})
					}
					disabled={pagination?.current_page <= 2}>
					<PaginationDabbleArrow />
				</button>
			</li>
			<li className='active'>
				<button
					onClick={() =>
						handler(translate - 1, {
							...pagination,
							current_page: pagination?.current_page - 1
						})
					}
					disabled={pagination?.current_page === 1}>
					<PaginationArrow />
				</button>
			</li>

			{pagination?.total < pagination?.per_page ? (
				<li className={'active'}>
					<button>
						<span>1</span>
					</button>
				</li>
			) : (
				<>{pagesCount?.map((item, index) => generatePagination(index + 1))}</>
			)}

			<li className='active'>
				<button
					onClick={() =>
						handler(translate + 1, {
							...pagination,
							current_page: pagination?.current_page + 1
						})
					}
					disabled={pagination?.current_page === pagination?.last_page}>
					<PaginationArrow />
				</button>
			</li>
			<li className='active'>
				<button
					onClick={() =>
						handler(pagination?.last_page - 1, {
							...pagination,
							current_page: pagination?.last_page
						})
					}
					disabled={pagination?.current_page === pagination?.last_page}>
					<PaginationDabbleArrow />
				</button>
			</li>
		</ul>
	)
}

export default RetailListPagination
