import React from 'react'

function AuthorizedRetailersBadge({ data }) {
	let { structure } = data
	return (
		<section
			data-fpo-label='Jargon - Picture Box Left'
			className='authorize-badge'>
			<figure className='m-0'>
				<img
					style={{ maxWidth: '150px' }}
					src={structure?.image?.src}
					alt={structure?.image?.alt}
					className='me-2'
				/>
				<h1 className='fs-1'>
					<b>{structure?.title?.value}</b>
				</h1>
			</figure>
		</section>
	)
}

export default AuthorizedRetailersBadge
