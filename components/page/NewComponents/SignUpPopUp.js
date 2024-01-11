import React, { useEffect, useState } from 'react'

const SignUpPopUp = ({ data }) => {
	const { structure } = data
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(structure)
	}, [])

	return (
		<div className='signup_popup'>
			<div className='signup_popup___container'>
				<div className='signup_popup___container___content'>
					<div className='signup_popup___container___content___image'>
						<img
							src={content?.background?.src}
							alt={content?.background?.alt}
							className='background'
						/>
					</div>
					<div className='signup_popup___container___content___text'>
						<h3 className='signup_popup___container___content___text___title'>
							{content?.title?.value}
						</h3>
						<p className='signup_popup___container___content___text___subtitle'>
							{content?.subtitle?.value}
						</p>
						<div className='signup_popup___container___content___text___text'>
							<p className='signup_popup___container___content___text___text___p'>
								{content?.text?.value}
							</p>
						</div>
						<div className='signup_popup___container___content___text___button'></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignUpPopUp
