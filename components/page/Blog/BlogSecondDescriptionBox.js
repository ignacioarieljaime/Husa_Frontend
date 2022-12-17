import React, { useEffect, useState } from 'react'

function BlogSecondDescriptionBox({ data: { structure } }) {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.title?.value)
	}, [])
	return (
		<section>
			<div className='bg-light-orange-gradient py-20'>
				<div className='blog_text_container my-10'>
					<div
						data-aos='fade-zoom-in'
						data-aos-duration='1600'
						data-aos-delay='450'>
						<div
							className='big-title'
							dangerouslySetInnerHTML={{
								__html: text
							}}></div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BlogSecondDescriptionBox
