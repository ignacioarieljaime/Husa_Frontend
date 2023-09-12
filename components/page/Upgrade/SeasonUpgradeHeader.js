import Logo from 'components/icons/Logo'
import MenuWhite from 'components/icons/MenuIcon'
import SearchIcon from 'components/icons/SearchIcon'
import { useWindowSize } from 'hooks/useWindowSize'
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
			<div className='season_upgrade_header'>
				<div>
					<Logo color={'#fff'} />
					<p className='gradient_text'>the ultimate sales event is here.</p>
				</div>
				{windowSize[0] > 991 ? (
					<ul className='nav'>
						<li>DEAL OF THE WEEK</li>
						<li>MORE DEALS</li>
						<li>SWEEPSTAKES</li>
						<li>NBA 2K24 OFFER</li>
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
