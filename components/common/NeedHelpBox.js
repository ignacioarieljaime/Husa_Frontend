import React from 'react'

function NeedHelpBox({ data: { structure } }) {
	return (
		<section>
			<div className='support-help'>
				<h3>Need More Help?</h3>
				<div className='container'>
					<div className='row justify-content-evenly align-items-center'>
						{structure.list.value.map((item, index) => (
							<div className='help-box'>
								<h4>{item.title.value}</h4>
								<a
									href={item.url.value}
									className='btn btn-secondary btn-hover-primary'>
									Get Started
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default NeedHelpBox
