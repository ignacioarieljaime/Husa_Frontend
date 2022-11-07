import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CompareIcon from 'components/icons/CompareIcon'
import useOutsideClick from 'hooks/useOutsideClick'
import Link from 'next/link'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	changeCompareCondition,
	changeErrorModalCondition,
	removeCompare
} from 'redux/slices/compare'

function CompareModal() {
	const dispatch = useDispatch()
	const compareErrorModal = useRef()
	const compareErrorModalOutside = useOutsideClick(compareErrorModal)
	const { compareCondition, compareList, compareErrorCondition } = useSelector(
		state => state.compareData
	)

	return (
		<>
			<section
				onClick={() => dispatch(changeCompareCondition(false))}
				className={`compare_modal_wrapper ${
					compareCondition ? '' : 'd-none'
				}`}></section>
			<div
				className={`compare_modal ${
					compareCondition ? 'compare_modal_active' : ''
				}`}>
				<button
					className='close_button'
					onClick={() => dispatch(changeCompareCondition(false))}>
					<FontAwesomeIcon icon={faXmark} color={'#818181'} />
				</button>
				<h6>COMPARE 3 PRODUCTS</h6>
				<div className='list__btns'>
					<div className='list'>
						{compareList.map((item, index) => (
							<div key={'compare-item-' + index} className='item'>
								<button onClick={() => dispatch(removeCompare(item.id))}>
									<FontAwesomeIcon icon={faXmark} color={'#818181'} />
								</button>
								<img src={item.media.url} />
								<h6>Model: {item.model}</h6>
								<h5>{item.name}</h5>
							</div>
						))}
					</div>
					<div className='btns'>
						<button
							className='clear_btn'
							onClick={() => dispatch(removeCompare('all'))}>
							Clear All
						</button>
						<Link href={'/test'}>
							<a className='compare_btn'>COMPARE</a>
						</Link>
					</div>
				</div>
			</div>

			<section
				onClick={() =>
					compareErrorModalOutside && dispatch(changeErrorModalCondition(false))
				}
				className={`compare_error_wrapper ${
					compareErrorCondition ? '' : 'd-none'
				}`}>
				<div ref={compareErrorModal} className='compare_error_modal'>
					<button
						className='close_modal'
						onClick={() => dispatch(changeErrorModalCondition(false))}>
						<FontAwesomeIcon icon={faXmark} color={'#fff'} />
					</button>
					<p>
						You can compare a maximum of 3 products. Please remove a product
						before adding another one
					</p>
				</div>
			</section>

			{compareList.length !== 0 && (
				<button
					onClick={() => dispatch(changeCompareCondition(true))}
					className='compare_layout_button'>
					<CompareIcon />
					Compare
				</button>
			)}
		</>
	)
}

export default CompareModal
