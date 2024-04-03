import React, { useEffect, useState } from 'react'

function TextEditor({ data }) {
	let { structure } = data
	const [isMobile, setMobile] = useState(false)

	useEffect(() => {
		// Function to update isMobile state based on window width
		const handleResize = () => {
			setMobile(window.innerWidth < 768)
		}
		// Initial call to handleResize
		handleResize()
		// Event listener to handle window resize
		window.addEventListener('resize', handleResize)
		// Cleanup function to remove event listener
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<section
			style={{
				// Set background color if structure.backgroundColor has a value
				backgroundColor: structure?.backgroundColor?.value,
				...(
				// Check if either backgroundImage or mobileBackgroundImage has a source
				(structure?.backgroundImage?.src ||
					structure?.mobileBackgroundImage?.src)
					? {
							// If there's a background image, configure its properties
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundImage: `url("${
								isMobile
									? // If window width is less than 768, use mobileBackgroundImage if available, otherwise use backgroundImage
									  structure?.mobileBackgroundImage?.src.length > 0
										? structure?.mobileBackgroundImage?.src
										: structure?.backgroundImage?.src.length > 0
										? structure?.backgroundImage?.src
										: ''
									: // If window width is greater than or equal to 768, use backgroundImage if available
									structure?.backgroundImage?.src.length > 0
									? structure?.backgroundImage?.src
									: ''
							}")`
					  }
					: {})
			}}>
			<article
				style={{
					maxWidth: `${structure?.width?.value}px`
				}}
				className={`${'dark'} article text-editor text_editor mx-auto pt-5  pb-6 ${
					structure?.template?.value === 'template_2'
						? 'version_2 px-4'
						: 'px-6'
				}`}
				dangerouslySetInnerHTML={{
					__html: structure?.text?.value
						? structure?.text?.value
						: structure?.text
				}}></article>
		</section>
	)
}

export default TextEditor
