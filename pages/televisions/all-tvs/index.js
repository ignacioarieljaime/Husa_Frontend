
import axios from 'axios'
import Layout from "components/common/Layout/Layout";
import componentGenerator from 'hooks/componentGenerator';
import CustomImage from "components/common/CustomImage";
import Logo from "components/icons/Logo";
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse'
import  {  useEffect } from 'react'

function Index193({pim,data}) {
	useEffect(() => {
		setTimeout(() => {
			window.scrollTo(0, 0)
		}, 500)
		if (
			data?.widgets &&
			!data?.widgets.some(c => c.name === 'VelaroChatBox') &&
			document.getElementsByClassName('rocketchat-widget').length
		) {
			document
				.getElementsByClassName('rocketchat-widget')[0]
				.parentNode.removeChild(
					document.getElementsByClassName('rocketchat-widget')[0]
				)
		}
	}, [])
return (
	<Layout header={data?.widgets && data?.widgets[0]?.name === "Header"} title={data?.title} meta={data?.meta}>
      	<section className='all-tv-section'>
				{data?.widgets && data?.widgets.length ? data.widgets.map(block => componentGenerator(block, pim , block.name === 'Header' ? data.notifications : null )) : 
					<>
						<MouseParallaxContainer globalFactorX={1} globalFactorY={1}>
							<div className='error_page'>
								<div className='image_container'>
									<CustomImage
										src='https://assets.hisense-usa.com/resources/themes/default/images/products/lg9/section-7-daylight.jpg'
										alt='background'
										wrapperWidth={'100%'}
										wrapperHeight={'100%'}
									/>
									<div className='backdrop'></div>
								</div>
								<div className='content'>
									<MouseParallaxChild
										factorX={0.015}
										factorY={0.015}
										resetOnLeave={true}>
										<div className='mb-20'>
											<Logo width={'250'} height={'50'} />
										</div>
										<h2 className='fs-3x lh-base mb-15'>
											Oops!
											<br />
											We're sorry
										</h2>
										<p className='fs-8 fs-md-5'>
											Our website is under construction, please be patient.
										</p>
									</MouseParallaxChild>
								</div>
							</div>
						</MouseParallaxContainer>
					</>
				}
		</section>
	</Layout>
    )
  }
export async function getServerSideProps({req,res}) {		
			res.setHeader(
				'Cache-Control',
				'public, s-maxage=10, stale-while-revalidate=59'
			)
			console.log('send cxm request')
				let data = await axios
				   .get(
					   'https://imcxm.dev-api.hisenseportal.com/api/husa/getPageInfo/193',
					   {
						   headers: {
							   'CLIENT_ID': req.ip
						   }
					   }
				   )
				   .then(response => {
					   console.log('get cxm data')
					   return response.data
				   })
				   .catch(error => {
					   console.error('Error:', error)
					   return null
				   })	
				   if (data?.status?.name === 'Hidden' || data?.status_id === 2) {
					return {
						notFound: true
					}
					}
					if (!data?.widgets || data?.widgets.length == 0) {
						return {
							notFound: true
						}
					}
				 else {
					return { props: { data }} 
				}
}
export default Index193