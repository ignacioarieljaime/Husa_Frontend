import React, { useEffect, useState } from 'react'

const UnauthorizedList = ({ data }) => {
	const [content, setContent] = useState()
	useEffect(() => {
		setContent(data?.structure)
	}, [])
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
								__html: content?.title?.value
							}}></div>
					</article>
				</div>
				<article className='article unathorized-list'>
					<div
						className='row justify-content-start align-items-stretch flex-wrap mx-auto px-3 pb-10'
						style={{ maxWidth: content?.maxWidth?.value + 'px' }}>
						{content?.list?.value.map((item, index) => (
							<div className='col-12 col-sm-6 col-xxl-4 p-0'>
								<div
									className='list'
									dangerouslySetInnerHTML={{ __html: item?.text?.value }}></div>
							</div>
						))}
					</div>
				</article>
			</div>
		</section>
	)
}

export default UnauthorizedList
