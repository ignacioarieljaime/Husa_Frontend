import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'
import React from 'react'

const BlackFridayHeader = ({ data: { structure } }) => {
	return (
		<header>
			<nav
				className={`navbar navbar-expand justify-content-center theme-dark top-nav py-3 px-sm-4 fixed-top flex-wrap`}>
				<div className='container-fluid'>
					<div className='row justify-content-between align-items-center w-100 m-auto'>
						<Link href='/'>
							<a className='navbar-brand m-0 col-xl-4 text-start'>
								<CustomImage
									src={structure?.image?.src}
									alt={structure?.image?.alt}
									WrapperMaxWidth={'135px'}
								/>
							</a>
						</Link>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default BlackFridayHeader
