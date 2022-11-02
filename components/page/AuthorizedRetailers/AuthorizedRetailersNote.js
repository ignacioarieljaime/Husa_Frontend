import React from 'react'


// image
import InfoIcon from "public/assets/images/info.png"

function AuthorizedRetailersNote({ data }) {
	let { structure } = data
	return (
		<section>
			<div>
				<div class='info-box mb-5 mt-18'>
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
							__html: structure?.note?.value
						}}></p>
				</div>
			</div>
		</section>
	)
}

export default AuthorizedRetailersNote
