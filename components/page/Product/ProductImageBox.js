import { useEffect, useState } from 'react'

import CustomImage from 'components/common/CustomImage'
import { useAspectRatio } from 'hooks/useAspectRatio'

function ProductImageBox({ data }) {
	let { structure } = data

	const [margin, setMargin] = useState(0)
	const borderBlock = structure?.borderBlock?.value ?? 0
	const marginDesktop = structure?.marginDesktop?.value ?? 0
	const marginMobile = structure?.marginMobile?.value ?? 0
	const aspectRatio = useAspectRatio(structure?.image?.src)

	useEffect(() => {
		// Function to update isMobile state based on window width
		const handleResize = () => {
			setMargin(window.innerWidth < 768 ? marginMobile : marginDesktop)
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
				borderStyle: 'solid',
				borderColor: structure?.borderColor?.value ?? '#ffffff',
				borderBlockWidth: `${borderBlock}px`,
				borderInlineWidth: 0
			}}>
			<div
				id={data.name + data.id}
				className='header-secondary2 header-secondary-product-image'
				style={{
					...(aspectRatio < 1
						? { paddingTop: (aspectRatio * 100).toFixed(2) + '%' }
						: {}),
					borderRadius: `${margin}px`,
					height: 'auto',
					margin: `${margin}px`,
					maxWidth: `calc(100% - ${margin * 2}px)`
				}}>
				<CustomImage
					src={structure?.image?.src}
					wrapperClass={'position-absolute top-0'}
					wrapperHeight={'101%'}
					wrapperWidth='100%'
					alt={structure?.image?.alt}
				/>
			</div>
		</section>
	)
}

export default ProductImageBox
