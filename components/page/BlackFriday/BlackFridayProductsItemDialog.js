import React, { useEffect } from 'react'
import CustomImage from 'components/common/CustomImage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Link from 'next/link'
import { GetSingleProduct } from 'services/Product'
import { useRouter } from 'next/router'

const BlackFridayProductsItem = ({ onClick, model }) => {
	return (
		<div className='retailers_dialog'>
			<div className='backdrop' onClick={() => onClick(false)}></div>
			<div className='dialog_body'>
				<button className='close_button' onClick={() => onClick(false)}>
					<FontAwesomeIcon icon={faXmark} size={'lg'} />
				</button>
				<p>Available at these authorized retailers:</p>
				<iframe
					width={'100%'}
					style={{ height: '83vh' }}
					height={'83vh'}
					src={`https://where-to-buy.co/widgets/core/BuyOnlineBuyLocalV2/index.html?pid=12040849&model=${model}`}
					frameborder='0'></iframe>
				<div className='text-center'>
					{/* {data?.retailers?.value.map((item, index) => (
						<Link>
							<a>
								<CustomImage
									key={index}
									src={item?.image?.src}
									alt={item?.image?.alt}
									wrapperWidth={'125px'}
									wrapperHeight={'125px'}
									className='mx-auto'
								/>
							</a>
						</Link>
					))} */}
				</div>
			</div>
		</div>
	)
}

export default BlackFridayProductsItem
