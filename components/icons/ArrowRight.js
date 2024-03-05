import React from 'react'

const ArrowRight = ({ color = '#00AAA6', width = '21', height = '20' }) => {
	return (
        <svg width={width} height={height} viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.833334 0.581706L5 4.74837L0.833333 8.91504L0.0937501 8.17546L3.52083 4.74837L0.0937507 1.32129L0.833334 0.581706Z" fill={color}/>
        </svg>
	)
}

export default React.memo(ArrowRight)
