import DownloadIconV2 from 'components/icons/DownloadIconV2'
import FacebookIcon from 'components/icons/FacebookIcon'
import Link from 'next/link'
import React from 'react'

const NewsSingleInfoBox = () => {
	return (
		<div className='container news_single_info_box'>
			<div className='media'>
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

			<ul className='download_box'>
				<li>
					<a>
						Download Text of This Article <DownloadIconV2 />
					</a>
				</li>
				<li>
					<a>
						Download Text of This Article <DownloadIconV2 />
					</a>
				</li>
				<li>
					<a>
						Download Text of This Article <DownloadIconV2 />
					</a>
				</li>
			</ul>
			<div className='info'>
				<div>
					<h5>Media Contacts</h5>
					<div>
						<div>
							<h6>Full Name</h6>
							<ul>
								<li>Hisense</li>
								<li>email@hisense.com</li>
								<li>+1 (000) 000 0000</li>
							</ul>
						</div>
						<div>
							<h6>Full Name</h6>
							<ul>
								<li>Hisense</li>
								<li>email@hisense.com</li>
								<li>+1 (000) 000 0000</li>
							</ul>
						</div>
					</div>
				</div>
				<div>
					<h5>About Hisense</h5>
					<p>
						Hisense USA is the U.S. headquarters that was established by our
						parent company - Hisense - in Suwanee, GA less then 10 years ago. We
						are a  fast-growing consumer electronics and appliance manufacturer
						that offers high-quality and cutting-edge TVs and home appliances.
					</p>
				</div>
			</div>
		</div>
	)
}

export default NewsSingleInfoBox
