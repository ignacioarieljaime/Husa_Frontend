import Layout from 'components/common/Layout/Layout'
import axios from 'axios'
import dynamic from 'next/dynamic'

const HeaderGoogleTv = dynamic(() =>
	import('components/page/Day100/HeaderGoogleTv')
)
const HeaderBanner = dynamic(() =>
	import('components/page/Day100/HeaderBanner')
)
const ClaimPrize = dynamic(() => import('components/page/Day100/ClaimPrize'))
const DoubleWarranty = dynamic(() =>
	import('components/page/Day100/DoubleWarranty')
)
const EligibleModels = dynamic(() =>
	import('components/page/Day100/EligibleModels')
)
const ExpertsAdv = dynamic(() => import('components/page/Day100/ExpertsAdv'))
const DigitalTrends = dynamic(() =>
	import('components/page/Day100/DigitalTrends')
)
const ImageBox = dynamic(() => import('components/common/ImageBox'))
const Guarantee = dynamic(() => import('components/page/Day100/Guarantee'))
const Footer = dynamic(() => import('components/common/Footer'))

function Index43({ pim, data }) {
	return (
		<Layout
			title={'100 day landing page'}
			meta={[
				{ rel: 'blank', name: 'title', content: '100 day landing page' },
				{ rel: 'blank', name: 'description', content: null },
				{
					rel: 'property="og:site_name"',
					name: 'property="og:site_name"',
					content: 'Hisense USA'
				},
				{
					rel: 'property="og:title"',
					name: 'property="og:title"',
					content: '100 day landing page'
				},
				{
					rel: 'property="og:description"',
					name: 'property="og:description"',
					content: null
				},
				{
					rel: 'property="og:image"',
					name: 'property="og:image"',
					content: null
				},
				{
					rel: 'property="og:url"',
					name: 'property="og:url"',
					content: 'https://hisense-usa.com/100-day-landing-page-'
				},
				{
					rel: 'property="og:type"',
					name: 'property="og:type"',
					content: 'website'
				},
				{
					rel: 'property="og:locale"',
					name: 'property="og:locale"',
					content: 'en_US'
				}
			]}>
			<section>
				{data && data.length > 0 && data[0]?.structure ? (
					<HeaderGoogleTv data={data[0]} />
				) : null}{' '}
				{data && data.length > 0 && data[1]?.structure ? (
					<HeaderBanner data={data[1]} />
				) : null}{' '}
				{data && data.length > 0 && data[2]?.structure ? (
					<ClaimPrize data={data[2]} />
				) : null}{' '}
				{data && data.length > 0 && data[3]?.structure ? (
					<DoubleWarranty data={data[3]} />
				) : null}{' '}
				{data && data.length > 0 && data[4]?.structure ? (
					<EligibleModels data={data[4]} />
				) : null}{' '}
				{data && data.length > 0 && data[5]?.structure ? (
					<ExpertsAdv data={data[5]} />
				) : null}{' '}
				{data && data.length > 0 && data[6]?.structure ? (
					<DigitalTrends data={data[6]} />
				) : null}{' '}
				{data && data.length > 0 && data[7]?.structure ? (
					<ImageBox data={data[7]} />
				) : null}{' '}
				{data && data.length > 0 && data[8]?.structure ? (
					<Guarantee data={data[8]} />
				) : null}{' '}
				{data && data.length > 0 && data[9]?.structure ? (
					<Footer data={data[9]} />
				) : null}
			</section>
		</Layout>
	)
}

export async function getServerSideProps(context) {
	console.log('send ssr request')
	let data = await axios
		.get('https://imcxm.dev-api.hisenseportal.com/api/husa/getPageInfo/43')
		.then(response => {
			console.log('get ssr data')
			return response.data.widgets
		})
		.catch(error => {
			console.error('Error:', error)
			return null
		})

	return { props: { data } }
}

export default Index43
