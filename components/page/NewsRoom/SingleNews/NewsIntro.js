import FacebookIcon from 'components/icons/FacebookIcon'
import Link from 'next/link'
import React from 'react'

const NewsIntro = ({ data }) => {
	let { structure } = data
	console.log(structure)
	return (
		<div className=' container news_intro_box'>
			<div>
				<h6>{structure?.subject?.value}</h6>
				<h3>{structure?.title?.value}</h3>
				<span>{structure?.title?.value}</span>
				<div>
					<span>Share Article</span>
					<ul>
						{structure?.socials?.value?.map((item, index) => (
							<li>
								<a
									key={index}
									target={item?.target ? item?.target : '_self'}
									href={item.url ? item.url : ''}
									className={`social_media_link socicon socicon-${item.name}`}
									style={{
										fontSize: '22px',
										color: theme?.value === 'dark' ? '#ffffffb3' : '#000000b3'
									}}></a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default NewsIntro
