import {
	faCircleExclamation,
	faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { getFirmWareModels } from 'services/servicePortal'
import FirmwareBannerModelNumberDialog from './FirmwareBannerModelNumberDialog'
import { RouteHandler } from 'utils/routeHandler'
import axios from 'axios'
import { useRouter } from 'next/router'
import Spinner from 'components/common/Spinner'

const FirmwareBanner = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	const [showModal, setShowModal] = useState(false)
	const [searchTerm, setSearchTerm] = useState('')
	const [model, setModel] = useState({})
	const [loading, setLoading] = useState(false)

	const router = useRouter()

	// useEffect(() => {
	// 	setContent(structure)
	// }, [])

	useEffect(() => {
		if (model?.model?.title) getPageUrl(model?.model?.pid)
	}, [model])

	const getPageUrl = async _value => {
		// this method called after getModel method
		// this method send request to cxm to getting product url by product model
		// because this method get us list of products we should find the specific model in the response
		// and redirect to the final destination
		try {
			let response = await axios.get(
				`${process.env.NEXT_PUBLIC_CXM_API_ROUTE}/page/support/route/${_value}`,
				{
					headers: {
						BrandId: process.env.NEXT_PUBLIC_BRAND_ID
					}
				}
			)
			if (response?.data?.route) {
				router.push(
					{
						pathname: response?.data?.route,

						query: {
							model: JSON.stringify(model?.files),
							serialNumber: searchTerm
						}
					},
					response?.data?.route
				)
			}
			setLoading(false)

			// if (response?.data?.data && response?.data?.data.length > 0) {
			// 	// response?.data?.data.forEach(
			// 	// 	item =>
			// 	// 		item.product.model === _value &&
			// 	// 		router.push(
			// 	// 			{
			// 	// 				pathname: item.route,
			// 	// 				query: { model: JSON.stringify(model?.files) }
			// 	// 			},
			// 	// 			item.route
			// 	// 		)
			// 	// )
			// }
		} catch (error) {
			console.log(error)
			setLoading(false)
		}
	}

	const getModel = async (e, _searchTerm) => {
		e.preventDefault()
		if (_searchTerm === '') {
			toast.error('Please enter your product serial number')
		} else {
			setLoading(true)
			try {
				const response = await getFirmWareModels(_searchTerm)
				setModel(response?.data)
			} catch (e) {
				toast.error(
					e?.response?.data?.message
						? e?.response?.data?.message
						: 'There was an error submitting your request.'
				)
				setLoading(false)
			}
		}
	}

	return (
		<section>
			<div className='firmware_banner'>
				<div className='background'>
					<CustomImage
						src={structure?.image?.src}
						alt={structure?.image?.alt}
						wrapperHeight='100%'
						wrapperWidth='100%'
					/>
				</div>
				<div className='content'>
					<h2
						className='title'
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></h2>
					<form className={`search_container`}>
						<input
							onChange={e => setSearchTerm(e.target.value)}
							value={searchTerm}
							type='text'
							placeholder='Enter your product serial number'
						/>
						<button
							onClick={e => getModel(e, searchTerm)}
							className='n-btn outline-white medium transparent'>
							{loading ? <Spinner size={20} /> : 'Search'}
						</button>
					</form>
					<button
						className='n-btn white-text medium fs-8 border-0 text-decoration-underline transparent mt-4 p-4'
						type='button'
						onClick={() => setShowModal(prevState => !prevState)}>
						<FontAwesomeIcon
							icon={faCircleExclamation}
							size='lg'
							className='me-2'
						/>
						Where to find serial number?
					</button>
				</div>
			</div>
			{showModal && (
				<FirmwareBannerModelNumberDialog
					text={structure?.text?.value}
					onClose={() => setShowModal(false)}
				/>
			)}
		</section>
	)
}

export default FirmwareBanner
