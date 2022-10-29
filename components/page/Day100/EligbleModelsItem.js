import Link from 'next/link'
import Tv from 'public/assets/images/100-day/tv.png'
const EligbleModelsItem = ({ data }) => {
	return (
		<div className='item day-100'>
			<div className='d-flex flex-column justify-content-between align-items-start'>
				<div>
					<span className='text-primary fs-4 fw-bold'>
						{data?.title?.value}
					</span>
					<div className='text-center position-relative'>
						<img src={data?.image?.src} alt={data?.image?.alt} width='90%' />
						<div className='infill-overlay'>Use current infills</div>
					</div>
					<div>
						<h5 className='item-size'>{data?.grayText?.value} </h5>
						<h4 className='item-series'>{data?.series?.value}</h4>
						<div
							className='item-features'
							dangerouslySetInnerHTML={{ __html: data?.specs.value }}></div>
					</div>
				</div>
				<div className='text-left mt-8'>
					<Link href={data?.shopNow?.value}>
						<a className='btn btn-primary rounded-5 px-5 py-2'>
							{data?.shopNow?.title}
						</a>
					</Link>
					<Link href={data?.learnMore?.value}>
						<a className='text-purple ms-5'>{data?.learnMore?.title}</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default EligbleModelsItem
