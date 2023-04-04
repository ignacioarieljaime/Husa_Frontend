import { useState } from 'react'
import { useEffect } from 'react'

export const useImageRealSize = imgSrc => {
	const [ratio, setRatio] = useState([])

	useEffect(() => {
		var newImg = new Image()
		newImg.onload = function () {
			var height = newImg.height
			var width = newImg.width

			setRatio([width, height])
		}

		newImg.src = imgSrc
	}, [])

	return ratio
}
