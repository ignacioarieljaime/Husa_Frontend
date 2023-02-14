import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DropDownSelectBox from 'components/common/DropDownSelectBox'
import LaserTv from 'components/icons/LaserTv'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import {
	GetProductWithSeriesAndProductIdApi,
	GetProductsListNewApi
} from 'services/Product'
import CardLayout from './CardLayout'

const ProductInfoForm = ({ data, dispatch }) => {
	const [products, setProducts] = useState(null)
	const [filters, setFilters] = useState(null)
	const [screenSizes, setScreenSizes] = useState(null)
	const [models, setModels] = useState(null)
	const [imageLoading, setImageLoading] = useState(null)
	const [file, setFile] = useState(null)
	const router = useRouter()

	useEffect(() => {
		getProductWithCategory()
	}, [])

	useEffect(() => {
		if (filters && filters.length > 0) {
			const sizes = filters[0]?.filters
				.find(filter => filter.id === 3)
				?.filter_values.filter(value => value?.title)
				.map(item => ({ name: item.title, value: item.title.slice(0, 3) }))
			if (sizes) setScreenSizes(sizes)
		}
		if (products) {
			const models = []
			products.map(product => {
				if (Array.isArray(product?.products)) {
					models = [
						...models,
						...product?.products.map(item => ({
							name: item?.product?.model,
							value: item?.product?.model
						}))
					]
				} else {
					models.push({
						name: product?.products?.product?.model,
						value: product?.products?.product?.model
					})
				}
			})
			setModels(models)
		}
	}, [products])

	const getProductWithCategory = async () => {
		try {
			let response = await GetProductsListNewApi(router, 3, [
				{ id: 7, type: 'CF', values: ['Laser TV'] }
			])
			console.log(response.data)
			setProducts(response.data.data)
			setFilters(response.data.filterTypes)
		} catch (error) {
			console.log(error)
		}
	}

	const retailers = [
		{
			name: 'Curacao',
			value: 'curacao'
		},
		{
			name: 'Exchange',
			value: 'exchange'
		},
		{
			name: 'Amazon',
			value: 'amazon'
		},
		{
			name: 'Best Buy',
			value: 'best_buy'
		},
		{
			name: 'walmart.com',
			value: 'walmart'
		},
		{
			name: 'Brandsmart Usa',
			value: 'brandsmart_usa'
		},
		{
			name: 'costco.com',
			value: 'costco'
		},
		{
			name: 'Walts',
			value: 'walts'
		},
		{
			name: 'Conns',
			value: 'conns'
		},
		{
			name: 'Target',
			value: 'target'
		},
		{
			name: 'Crutchfield',
			value: 'crutchfield'
		},
		{
			name: 'Electronic Express',
			value: 'electronic_express'
		},
		{
			name: 'Newegg',
			value: 'eewegg'
		},
		{
			name: 'PC Richard',
			value: 'pc_richard'
		},
		{
			name: 'BJs',
			value: 'bjs'
		},
		{
			name: 'World Wide Stereo',
			value: 'world_wide_stereo'
		},
		{
			name: 'Projector Screen',
			value: 'projector_screen'
		},
		{
			name: 'BH photo video',
			value: 'bh_photo_video'
		},
		{
			name: 'valueelectronics.com',
			value: 'valueelectronics'
		},
		{
			name: 'lowes.com',
			value: 'lowes'
		},
		{
			name: 'skybygramophone.com',
			value: 'skybygramophone'
		},
		{
			name: 'Beach Camera',
			value: 'beach_camera'
		}
	]

	const uploadFile = () => {
		console.log()
	}

	return (
		<CardLayout title='Product Information' icon={<LaserTv />}>
			<div className='row mx-0'>
				<div className='col-12 col-md-6 mb-8'>
					<div className='form_select_field z-3'>
						<DropDownSelectBox
							options={screenSizes}
							value={data.screen_size}
							placeholder='Laser TV Screen Size'
							onChange={newValue => dispatch({ screen_size: newValue.value })}
						/>
					</div>
				</div>
				<div className='col-12 col-md-6 mb-8'>
					<div className='form_select_field z-2'>
						<DropDownSelectBox
							options={models}
							value={data.model_number}
							placeholder='Laser TV Model Number '
							onChange={newValue => dispatch({ model_number: newValue.value })}
						/>
					</div>
				</div>
				<div className='col-12 col-md-6 mb-8 mb-md-0'>
					<div className='form_select_field z-1'>
						<DropDownSelectBox
							options={retailers}
							value={data.retailer}
							placeholder='Where did you purchase?'
							onChange={newValue => dispatch({ retailer: newValue.value })}
						/>
					</div>
				</div>
				<div className='col-12 col-md-6 file-upload position-relative'>
					<label className='laser_label'>Receipt Photo</label>
					<div className='file-upload-box position-relative'>
						{imageLoading && (
							<div className='image_loading'>
								<Spinner size={35} />
							</div>
						)}
						{file ? (
							<>
								<button className='remove_img' onClick={() => setFile(null)}>
									<FontAwesomeIcon icon={faXmark} />
								</button>
								<img src={URL.createObjectURL(file)} />
							</>
						) : (
							<>
								<input
									type='file'
									className=' position-absolute top-0 start-0 opacity-0 w-100 h-100'
									style={{ zIndex: 1 }}
									id='contact-file-input'
									accept='.jpg, .png, .jpeg'
									multiple='multiple'
									onChange={uploadFile}
								/>
								<article className='d-flex justify-content-center align-items-center flex-wrap'>
									<p>Drop files to attach, or</p>
									<button className='n-btn outline-black ms-3 py-4 px-6'>
										Browse
									</button>
								</article>
							</>
						)}
					</div>
				</div>
			</div>
		</CardLayout>
	)
}

export default ProductInfoForm
