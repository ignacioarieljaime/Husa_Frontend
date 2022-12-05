import React from 'react'

const GoogleTvTextBox = ({ data: { structure } }) => {
	return (
		<section>
			<div
				className={`google-tv-text-box ${
					structure?.theme?.value === 'dark' ? 'dark' : 'light'
				}`}>
				<article className='article'>
					<div
						dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
				</article>
			</div>
		</section>
	)
}

export default GoogleTvTextBox
