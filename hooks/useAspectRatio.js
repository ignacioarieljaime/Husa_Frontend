import { useState } from 'react'
import { useImageRealSize } from './useImageRealSize'
import { useEffect } from 'react'

export const useAspectRatio = imgSrc => {
	const [aspectRatio, setAspectRatio] = useState(1)
	const ratio = useImageRealSize(imgSrc)

	useEffect(() => {
		if (ratio.length > 0 && ratio.every(item => item > 0)) {
			setAspectRatio(ratio[1] / ratio[0])
		}
	}, [ratio])

	return aspectRatio
}
