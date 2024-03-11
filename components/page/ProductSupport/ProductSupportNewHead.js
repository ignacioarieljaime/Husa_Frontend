import CustomImage from 'components/common/CustomImage'
import DownloadIcon from 'components/icons/DownloadIcon'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import OpenNewPageIcon from 'public/assets/images/OpenNewPageIcon.png'
import SupportFirmwareLoading from 'components/common/SupportFirmwareLoading'
import { useSwiperSlide } from 'swiper/react'
import ExclamationMarkIcon from 'components/icons/ExclamationMarkIcon'

function ProductSupportNewHead({ pim }) {
	const [image, setImage] = useState('')

	useEffect(() => {
		if (pim?.image) {
			setImage(pim?.image)
		} else if (
			pim?.assets?.find(item => item.order === 1 && item.type_id === 1)
		) {
			setImage(pim?.assets.find(item => item.order === 1 && item.type_id)?.url)
		} else if (pim?.Category?.media?.url) {
			setImage(pim?.Category?.media?.url)
		}
	}, [])

	return (
		<section className='product_support_new_head'>
			<div className='product_support_new_head___content'>
				<div className='product_support_new_head___content___image'>
					<img src={image} alt={pim?.name} />
				</div>
				<div className='product_support_new_head___content___texts'>
					<h4 className='product_support_new_head___content___texts___model'>
						{pim?.model}
					</h4>
					<h1 className='product_support_new_head___content___texts___title'>
						{pim?.name}
					</h1>
				</div>
			</div>
		</section>
	)
}

export default ProductSupportNewHead
