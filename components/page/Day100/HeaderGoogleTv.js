import Link from 'next/link'

const HeaderGoogleTv = ({ data }) => {
	let { structure } = data
	return (
		<section className='day-100'>
			<div className='bg-black container-fluid'>
				<div className='row align-items-center justify-content-start justify-content-md-center py-3'>
					{structure?.list?.value.map((item, index) => (
						<Link href={item?.link?.value}>
							<img
								key={'header' + index}
								src={item?.image?.src}
								alt={item?.image?.alt}
								width='180'
								height='30'
								style={{ objectFit: 'contain' }}
								className='border-start border-2 border-secondary d-none d-md-block'
							/>
						</Link>
					))}
				</div>
			</div>
		</section>
	)
}

export default HeaderGoogleTv
