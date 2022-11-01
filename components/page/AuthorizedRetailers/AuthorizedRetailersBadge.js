import React from 'react'

function AuthorizedRetailersBadge({ data }) {
	let { structure } = data
	return (
		<section data-fpo-label='Jargon - Picture Box Left' class='authorize-badge'>
			<figure class='m-0'>
				<img
					style={{ maxWidth: '150px' }}
					src={structure?.image?.src}
					alt={structure?.image?.alt}
					class='me-2'
				/>
				<span class='fs-1'>
					<b>{structure?.title?.value}</b>
				</span>
			</figure>
		</section>
	)
}

export default AuthorizedRetailersBadge
