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
	const [content, setContent] = useState(null)
	const [showModal, setShowModal] = useState(false)
	const [searchTerm, setSearchTerm] = useState('')
	const [model, setModel] = useState({})
	const [loading, setLoading] = useState(false)

	const router = useRouter()

	useEffect(() => {
		setContent(data?.structure)
	}, [])

	useEffect(() => {
		if (model?.model?.title) getPageUrl(model?.model)
	}, [model])

	const getPageUrl = async _value => {
		// this method called after getModel method
		// this method send request to cxm to getting product url by product model
		// because this method get us list of products we should find the specific model in the response
		// and redirect to the final destination
		try {
			let response = await axios.get(
				`${process.env.NEXT_PUBLIC_CXM_API_ROUTE}/searchProduct?type=support&status[]=7&status[]=3&status[]=1&string=${_value}&brand_id=${process.env.NEXT_PUBLIC_BRAND_ID}`
			)

			if (response?.data?.data && response?.data?.data.length > 0) {
				let product = response?.data?.data.find(
					item => item?.product?.id === _value?.pid
				)
				if (product) {
					router.push(
						{
							pathname: product?.route,
							query: { model: JSON.stringify(model?.files) }
						},
						product?.route
					)
				}
				// response?.data?.data.forEach(
				// 	item =>
				// 		item.product.model === _value &&
				// 		router.push(
				// 			{
				// 				pathname: item.route,
				// 				query: { model: JSON.stringify(model?.files) }
				// 			},
				// 			item.route
				// 		)
				// )
			}
		} catch (error) {
			console.log(error)
		}
	}

	const getModel = async _searchTerm => {
		if (_searchTerm === '') {
			toast.error('Please enter your product serial number')
		} else {
			setLoading(true)
			try {
				const response = await getFirmWareModels(_searchTerm)
				setModel(response?.data)
				setLoading(false)
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
						src={content?.image?.src}
						alt={content?.image?.alt}
						wrapperHeight='100%'
						wrapperWidth='100%'
					/>
				</div>
				<div className='content'>
					<h2
						className='title'
						dangerouslySetInnerHTML={{ __html: content?.title?.value }}></h2>
					<div className={`search_container`}>
						<input
							onChange={e => setSearchTerm(e.target.value)}
							value={searchTerm}
							type='text'
							placeholder='Enter your product serial number'
						/>
						<button
							onClick={() => getModel(searchTerm)}
							className='n-btn outline-white transparent py-4 px-6'>
							{loading ? <Spinner size={20} /> : 'Search'}
						</button>
					</div>
					<button
						className='n-btn white-text fs-8 border-0 text-decoration-underline transparent mt-4 p-4'
						type='button'
						onClick={() => setShowModal(prevState => !prevState)}>
						<FontAwesomeIcon
							icon={faCircleExclamation}
							size='lg'
							className='me-2'
						/>
						Where do I find my model number?
					</button>
				</div>
			</div>
			{showModal && (
				<FirmwareBannerModelNumberDialog
					text={content?.text?.value}
					onClose={() => setShowModal(false)}
				/>
			)}
		</section>
	)
}

export default FirmwareBanner
