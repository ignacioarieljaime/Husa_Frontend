import React, { useEffect, useState } from 'react'
import InfoIcon from 'public/assets/images/info.png'

function AuthorizedRetailersNote({ data }) {
	let { structure } = data
	const [text, setText] = useState()
	useEffect(() => {
		setText(structure?.note?.value)
	}, [])
	return (
		<section>
			<div>
				<div class='info-box px-8 py-18 p-md-18 mb-5 mt-18'>
					<div class='grid-item'>
						<img
							src={InfoIcon.src}
							alt='Alt Text for This Image Goes Here'
							width='40'
						/>
					</div>
					<p
						style={{ margin: 0 }}
						dangerouslySetInnerHTML={{
							__html: text
						}}></p>
				</div>
			</div>
		</section>
	)
}

export default AuthorizedRetailersNote
