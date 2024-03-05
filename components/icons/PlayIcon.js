import React from 'react'

const PlayIcon = ({ color = '#00AAA6', width = '21', height = '20' }) => {
	return (
        <svg width={width} height={height} viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.75" width="10" height="10" rx="5" fill={color}/>
            <mask id="mask0_13389_210" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="1" y="2" width="8" height="7">
            <rect x="1.8501" y="2.54712" width="6.4" height="6.4" fill="#D9D9D9" fill-opacity="1"/>
            </mask>
            <g mask="url(#mask0_13389_210)">
            <path d="M4.39007 7.3538C4.30118 7.41158 4.21118 7.41491 4.12007 7.3638C4.02895 7.31269 3.9834 7.2338 3.9834 7.12714V4.36714C3.9834 4.26047 4.02895 4.18158 4.12007 4.13047C4.21118 4.07936 4.30118 4.08269 4.39007 4.14047L6.5634 5.52047C6.6434 5.5738 6.6834 5.64936 6.6834 5.74714C6.6834 5.84491 6.6434 5.92047 6.5634 5.9738L4.39007 7.3538Z" fill="white"/>
            </g>
        </svg>
	)
}

export default React.memo(PlayIcon)
