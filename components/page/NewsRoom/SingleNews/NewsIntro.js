import FacebookIcon from 'components/icons/FacebookIcon'
import Link from 'next/link'
import React from 'react'

const NewsIntro = () => {
	return (
		<div className=' container news_intro_box'>
			<div>
				<h6>press release</h6>
				<h3>
					Hisense Unveils ULED X, A New Generation of Technology Representing
					the Ultimate LED TV, at CES 2023
				</h3>
				<span>April 17 2023</span>
				<div>
					<span>Share Article</span>
					<ul>
						<li>
							<Link href={'/'}>
								<a>
									<FacebookIcon />
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default NewsIntro
