import React from 'react'

function ProductResourceBox({ pim, data }) {
	console.log(data);
	return (
		<div id={data.name + data.id} className='resources py-7 py-sm-18'>
			<h2>Resources</h2>
			<ul>
				{pim?.assets.map(
					(item, index) =>
						item.type_id === 3 && (
							<li key={index}>
								<a href={item.url ? item.url : ''} download>
									<span className='underline-on-hover'>{item.title}</span>
								</a>
							</li>
						)
				)}

				{/* <li>
					<a href='#'>
						<span className='underline-on-hover'>PRODUCT SUPPORT</span>
					</a>
				</li>
				<li>
					<a href='#'>
						<span className='underline-on-hover'>INSTALLATION REQUEST</span>
					</a>
				</li> */}
			</ul>
		</div>
	)
}

export default ProductResourceBox
