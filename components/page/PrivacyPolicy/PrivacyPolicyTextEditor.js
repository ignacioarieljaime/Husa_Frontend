import React from 'react'

const PrivacyPolicyTextEditor = () => {
	let { structure } = data

	return (
		<article
			style={{ maxWidth: `${structure?.width?.value}px` }}
			className={
				'privacy-policy article text-editor text_editor lh-lg mx-auto pt-5 px-6 pb-6'
			}
			dangerouslySetInnerHTML={{
				__html: structure?.text?.value
					? structure?.text?.value
					: structure?.text
			}}></article>
	)
}

export default PrivacyPolicyTextEditor
