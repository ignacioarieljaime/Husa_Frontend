import ClaimPrizeLevels from './ClaimPrizeLevels'

const ClaimPrize = ({ data }) => {
	let { structure } = data
	return (
		<section className='position-relative day-100 '>
			<div className='bg-eggplant pb-15'>
				<div className='container claim-prize'>
					<article className='article text-center'>
						<div className='under-line mb-0 mb-md-13'>
							<p className='bg-eggplant px-3 px-md-7'>HOW IT WORKS</p>
						</div>
					</article>
					<div className='row align-items-stretch'>
						{structure?.list?.value.map((item, index) => (
							<div
								key={'tiny-box-' + index}
								className='col-12 col-md-6 my-8 my-xl-0 col-xl-3 '>
								<ClaimPrizeLevels
									level={index + 1}
									description={item?.title?.value}
									link={item?.linkUrl?.value}
									linkTitle={item?.linkTitle?.value}
								/>
							</div>
						))}
					</div>
					<div className='tiny-banner mt-10'>
						<article
							className='article text-center'
							dangerouslySetInnerHTML={{
								__html: structure?.text?.value
							}}></article>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ClaimPrize
