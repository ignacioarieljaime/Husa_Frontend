import React from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
// image
import ImageBg from 'public/assets/images/support/support-bg.jpg'
import Link from 'next/link'
import CustomImage from 'components/common/CustomImage'

function RegisterSupportConfirmation({ data }) {
	let { structure } = data

	const isBrowser = typeof window !== 'undefined'

	// Function to get value from localStorage
	const getValueFromLocalStorage = key => {
		if (isBrowser) {
			const value = localStorage.getItem(key)
			return value ? JSON.parse(value) : null
		}
		return null
	}

	// Usage
	const isRegister = getValueFromLocalStorage('product_register')

	// Function to remove item from localStorage
	const removeItemFromLocalStorage = key => {
		if (typeof window !== 'undefined') {
			localStorage.removeItem(key)
		}
	}

	// Usage
  const handleClick = () => {
		removeItemFromLocalStorage('product_register')
		console.log('Link clicked!')
	}
	

	return (
		<section
			id={data.name + data.id}
			className='register-confirmation'
			style={{ minHeight: '500px' }}>
			<div className='heading support-heading'>
				<div className='heading-text'>
					<h1>{structure?.title?.value}</h1>
					{isRegister && isRegister ? (
						<Link
							target={
								structure?.registerProductLink?.target
									? structure?.registerProductLink?.target
									: '_self'
							}
							href={
								structure?.registerProductLink?.value
									? structure?.registerProductLink?.value
									: '/'
							}>
							<a
								target={
									structure?.registerProductLink?.target
										? structure?.registerProductLink?.target
										: '_self'
								}
								onClick={handleClick}
								className='go-back-btn return-product-register d-block mx-auto w-fit'>
								{structure?.registerProductLink?.title}
							</a>
						</Link>
					) : (
						<Link
							target={
								structure?.supportLink?.target
									? structure?.supportLink?.target
									: '_self'
							}
							href={
								structure?.supportLink?.value
									? structure?.supportLink?.value
									: '/'
							}>
							<a
								target={
									structure?.supportLink?.target
										? structure?.supportLink?.target
										: '_self'
								}
								onClick={handleClick}
								className='go-back-btn return-product-support d-block mx-auto w-fit'>
								{structure?.supportLink?.title}
							</a>
						</Link>
					)}

					<Link target='_self' href='/'>
						<a
							target='_self'
							onClick={handleClick}
							className='go-back-btn return-home d-block mx-auto w-fit'>
							Go to Homepage
						</a>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default RegisterSupportConfirmation
