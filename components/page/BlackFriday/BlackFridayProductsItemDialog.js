import React, { useEffect } from 'react'
import CustomImage from 'components/common/CustomImage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Link from 'next/link'
import { GetSingleProduct } from 'services/Product'
import { useRouter } from 'next/router'

const BlackFridayProductsItem = ({ onClick, retailers }) => {
	return (
		<div className='retailers_dialog'>
			<div className='backdrop' onClick={() => onClick(false)}></div>
			<div className='dialog_body'>
				<button className='close_button' onClick={() => onClick(false)}>
					<FontAwesomeIcon icon={faXmark} size={'lg'} />
				</button>
				<div className='content'>
					<p>Available at these authorized retailers:</p>
					<div className='text-center'>
						{retailers.length > 0
							? retailers.map((item, index) =>
									item?.Media?.url ? (
										<Link href={item?.Media?.url}>
											<a>
												<CustomImage
													key={index}
													src={item?.Media?.url}
													alt={item?.name}
													wrapperWidth={'125px'}
													wrapperHeight={'125px'}
													className='mx-auto'
												/>
											</a>
										</Link>
									) : null
							  )
							: null}
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlackFridayProductsItem
