import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const CustomButton = ({
	onClick,
	href,
	style,
	className,
	target,
	children,
	cxmStyles
}) => {
	const [customStyles, setCustomStyles] = useState({})

	useEffect(() => {
		setCustomStyles({
			backgroundColor: cxmStyles?.fillColor?.value,
			border: cxmStyles?.outlineColor?.value
				? `1px solid ${cxmStyles?.outlineColor?.value}`
				: 'none',
			color: cxmStyles?.textColor?.value
		})
	}, [])

	function handleMouseEnter() {
		setCustomStyles({
			...customStyles,
			backgroundColor: cxmStyles?.fillHoverColor?.value,
			border: cxmStyles?.outlineColor?.value
				? `1px solid ${cxmStyles?.outlineHoverColor?.value}`
				: 'none',
			color: cxmStyles?.textHoverColor?.value
		})
	}

	function handleMouseLeave() {
		setCustomStyles({
			...customStyles,
			backgroundColor: cxmStyles?.fillColor?.value,
			border: cxmStyles?.outlineColor?.value
				? `1px solid ${cxmStyles?.outlineColor?.value}`
				: 'none',
			color: cxmStyles?.textColor?.value
		})
	}

	return href ? (
		<Link href={href} target={target}>
			<a
				target={target}
				className={className}
				style={{ ...style, ...customStyles }}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}>
				{children}
			</a>
		</Link>
	) : (
		<button
			className={className}
			style={{ ...style, ...customStyles }}
			onClick={onClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			{children}
		</button>
	)
}

export default CustomButton
