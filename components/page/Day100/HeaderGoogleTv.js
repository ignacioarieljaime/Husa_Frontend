import Link from 'next/link'

const HeaderGoogleTv = ({ data }) => {
	let { structure } = data
	return (
		<section className='day-100'>
			<div className='bg-black container-fluid'>
				<div className='row align-items-center justify-content-start justify-content-md-center py-3 header-100-day'>
					{structure?.list?.value.map((item, index) => (
						<Link
							target={item?.image?.target ? item?.image?.target : '_self'}
							href={item?.link?.value}>
							<a
								target={item?.image?.target ? item?.image?.target : '_self'}
								className='border-start border-2 border-secondary '>
								<img
									key={'header' + index}
									src={item?.image?.src}
									alt={item?.image?.alt}
									style={{
										objectFit: 'contain',
										maxHeight: '30px',
										width: '100%',
										maxWidth: '180px'
									}}
									className='d-none d-md-block'
								/>
							</a>
						</Link>
					))}
				</div>
			</div>
		</section>
	)
}

export default HeaderGoogleTv
