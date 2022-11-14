import React from 'react'

const PrivacyPolicyTextEditor = ({ data: { structure } }) => {
	return (
		<article
			style={{ maxWidth: `${structure?.width?.value}px` }}
			className={
				'privacy-policy article text-editor text_editor mx-auto pt-8 px-6 pb-6'
			}>
			<div
				className='mx-6'
				dangerouslySetInnerHTML={{
					__html: structure?.text?.value
						? structure?.text?.value
						: structure?.text
				}}></div>
		</article>
	)
}

export default PrivacyPolicyTextEditor
