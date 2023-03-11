import React from 'react'

const AuthorizedRetailersBanner = ({ data }) => {
	let { structure } = data
	return (
		<div
			className='authorized_retailers_banner'
			style={{
				paddingTop: '42%',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundImage: `url('${structure?.image?.src}')`
			}}>
			<div>
				<h1>
					Hisense's Authorized Reseller Program benefits
					{/* {structure?.title?.value} */}
				</h1>
				<h6>{structure?.subtitle?.value}</h6>
			</div>
		</div>
	)
}

export default AuthorizedRetailersBanner
