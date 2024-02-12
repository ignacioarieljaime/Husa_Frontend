import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const AboutUsAwards = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])
	return (
		<section>
			<div id={data?.name + data?.id} className='aboutus_awards'>
				<div className='content'>
					<h3
						className='title'
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></h3>
					<div
						className='text'
						dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
				</div>
				<div className='list'>
					{structure?.list?.value.map((item, index) => (
						<div
							className='item'
							key={index}
							style={{ backgroundImage: `url(${item?.image?.src})` }}>
							<div className='item_content'>
								<h5
									className='title'
									dangerouslySetInnerHTML={{
										__html: item?.title?.value
									}}></h5>
								<div
									className='text'
									dangerouslySetInnerHTML={{
										__html: item?.text?.value
									}}></div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default AboutUsAwards
