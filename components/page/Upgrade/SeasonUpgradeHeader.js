import MenuWhite from 'components/icons/MenuIcon'
import SearchIcon from 'components/icons/SearchIcon'
import { useWindowSize } from 'hooks/useWindowSize'
import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const SeasonUpgradeHeader = ({ data }) => {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [])
	const windowSize = useWindowSize()

	return (
		<section>
			<div id={data?.name + data?.id} className='season_upgrade_header'>
				<div>
					<img
						src={content?.image?.src}
						alt={content?.image?.alt}
						className='image'
					/>
					<p className='gradient_text'>{content?.title?.value}</p>
				</div>
				{windowSize[0] > 991 ? (
					<ul className='nav'>
						{content?.list?.value.map(
							(item, index) =>
								item?.link?.value && (
									<li key={index}>
										<Link href={item?.link?.value}>
											<a className='text-decoration-none'>
												{item?.link?.title}
											</a>
										</Link>
									</li>
								)
						)}
					</ul>
				) : (
					<div className='buttons'>
						<button>
							<SearchIcon />
						</button>
						<button>
							<MenuWhite />
						</button>
					</div>
				)}
			</div>
		</section>
	)
}

export default SeasonUpgradeHeader
