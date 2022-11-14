import React from 'react'

const UnathorizedRetailersList = ({ data: { structure } }) => {
	structure = {
		text: {
			value: '<p>The following retailers are NOT authorized by Hisense:</p>'
		},
		list: {
			value: [
				{
					value: [
						{
							title: {
								value:
									'47 Exchangasdasdfasfas fasf asf asf ase as asaj sjsj asdjhsjda  lfasklsakl fak'
							}
						},
						{
							title: {
								value: '47 Exchange'
							}
						},
						{
							title: {
								value: '47 Exchange'
							}
						}
					]
				},
				{
					value: [
						{
							title: {
								value: '47 Exchange'
							}
						},
						{
							title: {
								value: '47 Exchange'
							}
						}
					]
				},
				{
					value: [
						{
							title: {
								value: '47 Exchange'
							}
						},
						{
							title: {
								value: '47 Exchange'
							}
						}
					]
				}
			]
		},
		maxWidth: {
			value: 1440
		}
	}

	return (
		<section>
			<div>
				<div className='container'>
					<article
						className='article mx-auto px-5 mb-20 pb-5'
						style={{ maxWidth: '800px' }}>
						<div
							className='fw-bolder-700'
							dangerouslySetInnerHTML={{
								__html: structure?.text?.value
							}}></div>
					</article>
				</div>
				<article className='article unathorized-list'>
					<div
						className='row justify-content-start align-items-stretch flex-wrap mx-auto px-3 pb-10'
						style={{ maxWidth: structure?.maxWidth?.value }}>
						{structure?.list?.value.map((item, index) => (
							<div className='col-12 col-sm-6 col-xxl-4 p-0'>
								<div className='list'>
									<ul>
										{item?.value.map((item, index) => (
											<li key={index} className='fw-normal lh-base'>
												{item?.title?.value}
											</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</article>
			</div>
		</section>
	)
}

export default UnathorizedRetailersList
