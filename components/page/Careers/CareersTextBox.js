import React, { useState, useEffect } from 'react'
import CustomImage from 'components/common/CustomImage'

const CareersTextBox = ({ data: { structure } }) => {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.text?.value)
	}, [])
	return (
		<section>
			<div
				className='careers_textbox'
				style={{
					backgroundColor:
						structure?.template?.value === 'v1'
							? structure?.backgroundColor?.value
							: '#fff'
				}}>
				{structure?.template?.value === 'v1' ? (
					<>
						<div
							className='v1'
							style={{ backgroundColor: structure?.backgroundColor?.value }}>
							{structure?.image?.src && (
								<CustomImage
									src={structure?.image?.src}
									alt={structure?.image?.alt}
									wrapperWidth='100%'
									WrapperMaxWidth='40px'
									wrapperClass='mb-9 mx-auto'
								/>
							)}
							<div
								className='text'
								dangerouslySetInnerHTML={{
									__html: text
								}}></div>
						</div>
					</>
				) : (
					<>
						<div className='v2'>
							<div
								className='text'
								dangerouslySetInnerHTML={{
									__html: text
								}}></div>
						</div>
					</>
				)}
			</div>
		</section>
	)
}

export default CareersTextBox
