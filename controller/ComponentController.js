require('dotenv').config()
const { ComponentList } = require('../utils/ComponentList')

const FindComponent = _componentData => {
	const components = Array.isArray(_componentData)
		? _componentData.map(item => {
				let pageComponents = ComponentList.find(pageComponent => {
					if (pageComponent.name === item.name) {
						pageComponent.id = item?.id
						pageComponent.structure = item?.structure
						return pageComponent
					}
				})
				return pageComponents
		  })
		: []
	return components
}

const GenerateComponentStructure = (_page, _content, _condition) => {
	return `
import axios from 'axios'
import Layout from "components/common/Layout/Layout";
import componentGenerator from 'hooks/componentGenerator';
import CustomImage from "components/common/CustomImage";
import Logo from "components/icons/Logo";
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse'
import  {  useEffect } from 'react'

function Index${_page.id}({pim,data}) {
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
      	<section>
				{data?.widgets && data?.widgets.length ? data.widgets.map(block => componentGenerator(block, pim , block.name === 'Header' ? data.notifications : null, data?.id )) : 
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
${
	_page.model_id !== 0 &&
	(_page.model_type === 'product' || _page.model_type === 'support')
		? `  export async function getServerSideProps({req,res}) {		
			res.setHeader(
				'Cache-Control',
				'public, s-maxage=10, stale-while-revalidate=59'
			)
			console.log('send cxm request')
				let data = await axios
				   .get(
					   '${process.env.CXM_API_ROUTE}/getPageInfo/${_page.id}',
					   {
						   headers: {
							   'CLIENT_ID': req.ip,
							   BrandId: ${process.env.BRAND_ID},
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
				console.log('send pim request')
				 let pim = await axios
						.get(
							'${process.env.PIM_API_ROUTE}/getProduct/${_page.model_id}'
						)
						.then(response => {
							console.log('get pim data')
							return response.data.data
						})
						.catch(error => {
							if (error?.response?.status === 404) {
								return 404
							}
							console.error('Error:', error)
							return null
						})
				
					if (pim === 404) {
						return {
							notFound: true
						}
					}

					if (!data?.widgets || data?.widgets.length == 0) {
						return {
							notFound: true
						}
					}

						if (data?.status?.name === 'Hidden' || data?.status_id === 2) {
							return {
								notFound: true
							}
						} else {
							return { props: { pim,data }}
						}
	 }`
		: _page.model_type === 'post'
		? `  export async function getServerSideProps({req,res}) {		
		res.setHeader(
			'Cache-Control',
			'public, s-maxage=10, stale-while-revalidate=59'
		)
		console.log('send cxm request')
			let data = await axios
			   .get(
				   '${process.env.CXM_API_ROUTE}/getPageInfo/${_page.id}',
				   {
					   headers: {
						   'CLIENT_ID': req.ip,
						   BrandId: ${process.env.BRAND_ID},
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
			console.log('send pim request')
			 let pim = await axios
					.get(
						'${process.env.CXM_API_ROUTE}/getPostInfo/${_page.post?.id}',
						{
							headers: {
								BrandId: ${process.env.BRAND_ID},
							 }
						}
					)
					.then(response => {
						console.log('get pim data')
						if(response?.data)
							return response?.data
						return {}
					})
					.catch(error => {
						if (error?.response?.status === 404) {
							return 404
						}
						console.error('Error:', error)
						return null
					})
			
				if (pim === 404) {
					return {
						notFound: true
					}
				}
				if (!data?.widgets || data?.widgets.length == 0) {
					return {
						notFound: true
					}
				}
					if (data?.status?.name === 'Hidden' || data?.status_id === 2) {
						return {
							notFound: true
						}
					} else {
						return { props: { pim,data }}
					}
 }`
		: `export async function getServerSideProps({req,res}) {		
			res.setHeader(
				'Cache-Control',
				'public, s-maxage=10, stale-while-revalidate=59'
			)
			console.log('send cxm request')
				let data = await axios
				   .get(
					   '${process.env.CXM_API_ROUTE}/getPageInfo/${_page.id}',
					   {
						   headers: {
							   'CLIENT_ID': req.ip,
								BrandId: ${process.env.BRAND_ID},
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
}`
}
export default Index${_page.id}`
}

const GenerateDynamicPageComponents = (_page, _content, _condition) => {
	return `
import axios from 'axios'
import Layout from "components/common/Layout/Layout";
import componentGenerator from 'hooks/componentGenerator';
import CustomImage from "components/common/CustomImage";
import Logo from "components/icons/Logo";
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse'
import  {  useEffect } from 'react'

function Preview({pim,data}) {

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
      	<section>
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

  export async function getServerSideProps({ req, res, query }) {
	let pim = null
	res.setHeader(
		'Cache-Control',
		'public, s-maxage=10, stale-while-revalidate=59'
	)
	console.log('send cxm request')
	let data = await axios
		.get(
${
	_page?.post
		? `"${process.env.CXM_API_ROUTE}/getPostInfo/" + ${_page?.post?.id}`
		: `"${process.env.CXM_API_ROUTE}/getPageInfo/" + query.pageid`
}
		,
			{
				headers: {
					CLIENT_ID: req.ip,
					BrandId: ${process.env.BRAND_ID},
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

	if(data?.model_type === 'post' && data?.post && data?.post?.id){
		pim = await axios
			.get("${process.env.CXM_API_ROUTE}/getPostInfo/" + data?.post?.id,
				{
					headers: {
						BrandId: ${process.env.BRAND_ID},
					}
				}
			)
			.then(response => {
				console.log('get pim data')
				return response.data
			})
			.catch(error => {
				console.error('Error:', error)
				return null
			})
	}
	else if (data?.model_id && data?.model_id > 0) {
		pim = await axios
			.get("${process.env.PIM_API_ROUTE}/getProduct/" + data.model_id)
			.then(response => {
				console.log('get pim data')
				return response.data.data
			})
			.catch(error => {
				console.error('Error:', error)
				return null
			})
	} 

	if (!data?.widgets || data?.widgets.length == 0) {
		return {
			notFound: true
		}
	}
	return { props: { data, pim: pim ? pim : null } }
}

export default Preview`
}

const GenerateNotFoundPage = (_page, _content, _condition) => {
	return `
import axios from 'axios'
import Layout from "components/common/Layout/Layout";
import componentGenerator from 'hooks/componentGenerator';
import { useEffect, useState } from 'react'
import Spinner from 'components/common/Spinner'


function Error() {
	const [data, setData] = useState(null)
	useEffect(() => {
		getData()
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
	const getData = async () => {
		let data = await axios
		.get(
			'${process.env.CXM_API_ROUTE}/getPageInfo/${_page.id}',
			{
				headers: {
					BrandId: ${process.env.BRAND_ID},
				}
			}
		)
			.then(response => {
				console.log('get cxm data')
				setData(response.data)
			})
			.catch(error => {
				console.error('Error:', error)
				return null
			})
	}

return (
	<Layout header={data?.widgets && data?.widgets[0]?.name === "Header"} title={data?.title} meta={${
		_condition === 'pages'
			? `${
					typeof _page.meta === 'string'
						? _page.meta
						: JSON.stringify(_page.meta)
			  }`
			: JSON.stringify(_page.meta)
	}}>
      	<section>
				{data?.widgets && data?.widgets.length ? data.widgets.map(block => componentGenerator(block, null , block.name === 'Header' ? data.notifications : null )) : 	<div
				style={{
					height: '100vh',
					display: 'flex',
					justifyContent: 'center'
				}}>
				<Spinner />
			</div>}
		</section>
	</Layout>
    )
  }

export default Error`
}

const GenerateAllComponentStructure = () => {
	return `
	import Layout from "components/common/Layout/Layout"
	  ${ComponentList.map(item => `import ${item.name} from '${item.path}';`).join(
			' '
		)}

	  function AllComponents() {
	    return (
			<Layout>
	      <section> ${ComponentList.map(item => `<${item.name} />`).join(
					' '
				)}</section>
		</Layout>
	    )
	  }

	  export default AllComponents`
}

const generateFirmwarePage = () => {
	return `
	import Layout from 'components/common/Layout/Layout'
	import componentGenerator from 'hooks/componentGenerator'
	import CustomImage from 'components/common/CustomImage'
	import Logo from 'components/icons/Logo'
	import {
		MouseParallaxChild,
		MouseParallaxContainer
	} from 'react-parallax-mouse'
	import axios from 'axios'
	
	const DownloadFirmwate = ({ pim, data }) => {
		return (
			<Layout
				header={data && data[0]?.name === 'Header'}
				title={data?.title}
				meta={data?.meta}>
				<section>
					{data ? (
						data.map(block =>
							componentGenerator(
								block,
								pim,
								block.name === 'Header' ? data.notifications : null
							)
						)
					) : (
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
					)}
				</section>
			</Layout>
		)
	}
	
	export async function getServerSideProps({ req, res, query }) {
		let pim = null
		if (!query?.productId || !query?.serialNumber) {
			return {
				notFound: true
			}
		}
		res.setHeader(
			'Cache-Control',
			'public, s-maxage=10, stale-while-revalidate=59'
		)
		console.log('send cxm request')
		let data = await axios
			.get(
					"${process.env.CXM_API_ROUTE}/template/"+query?.productId+ "/"+query?.serialNumber,
					{
						headers: {
							BrandId: ${process.env.BRAND_ID},
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

		return {
			props: {
				data: data?.data?.widgets,
				pim: data?.data?.product
			}
		}
	}
	
	export default DownloadFirmwate
	`
}

module.exports = {
	FindComponent,
	GenerateComponentStructure,
	GenerateAllComponentStructure,
	GenerateNotFoundPage,
	GenerateDynamicPageComponents,
	generateFirmwarePage
}
