import CustomImage from 'components/common/CustomImage'
import React from 'react'

function ProductFeatureWithImage({ data }) {
	let { structure } = data
	return (
		<section>
			{structure?.template?.value === 'v2' ? (
				<div
					style={{
						background: structure?.backgroundColor?.value,
						borderTop: structure?.border?.value ? `5px solid white` : 'none',
						borderBottom: structure?.border?.value ? `5px solid white` : 'none'
					}}
					className={`product_feature_image theme_${structure?.theme?.value} ${
						structure?.theme?.value === 'dark' ? 'text-white' : ''
					} ${
						structure?.direction?.value === 'ltr' ? 'flex-row-reverse' : ''
					}`}>
					<div className='content'>
						{structure?.littleTitle?.value && (
							<h4
								style={
									structure?.text_size?.value && {
										maxWidth: structure?.text_size?.value + 'px'
									}
								}
								className='subtitle'>
								{structure?.littleTitle?.value}
							</h4>
						)}
						{structure?.title?.value && (
							<h3
								style={
									structure?.text_size?.value && {
										maxWidth: structure?.text_size?.value + 'px'
									}
								}
								className='title'>
								{structure?.title?.value}
							</h3>
						)}
						{structure?.description?.value && (
							<h5
								style={
									structure?.text_size?.value && {
										maxWidth: structure?.text_size?.value + 'px'
									}
								}
								className='text'>
								{structure?.description?.value}
							</h5>
						)}
					</div>
					<div
						className='image_container'
						style={
							structure?.rounded?.value
								? {
										padding: '40px'
								  }
								: { padding: '0px' }
						}>
						<img
							src={structure?.image?.src}
							alt={structure?.image?.alt}
							className='image'
							style={
								structure?.rounded?.value
									? {
											borderRadius: '40px'
									  }
									: {}
							}
						/>
					</div>
				</div>
			) : structure?.template?.value === 'v3' ? (
                <div
                    style={{
                        background: structure?.backgroundColor?.value,
                        borderTop: structure?.border?.value ? `5px solid white` : 'none',
                        borderBottom: structure?.border?.value ? `5px solid white` : 'none',
                    }}
                    className={`product_feature_image theme_${structure?.theme?.value} ${
                        structure?.theme?.value === 'dark' ? 'text-white' : ''
                    } ${
                        structure?.direction?.value === 'ltr' ? 'flex-row-reverse' : ''
                    }`}>
                    <div className='content'>
                        {/* You can customize this part with new elements specific to v3 */}
                        <h3 className='title'>{structure?.title?.value}</h3>
                        <h4 className='subtitle'>{structure?.littleTitle?.value}</h4>
                        <h5 className='text'>{structure?.description?.value}</h5>
                    </div>
                    <div
                        className='image_container'
                        style={{
                            padding: structure?.rounded?.value ? '40px' : '0px',
                        }}>
                        <CustomImage
                            src={structure?.image?.src}
                            alt={structure?.image?.alt}
                            style={{
                                borderRadius: structure?.rounded?.value ? '40px' : '0px',
                            }}
                            wrapperClass='w-full h-full'
                        />
                    </div>
                </div>
            ) : (
				<div
					style={{
						background: structure?.backgroundColor?.value,
						borderTop: structure?.border?.value ? `5px solid white` : 'none',
						borderBottom: structure?.border?.value ? `5px solid white` : 'none'
					}}
					className={`row description-blocks theme-${structure?.theme?.value} ${
						structure?.theme?.value === 'dark' ? 'text-white' : ''
					} align-items-stretch ${
						structure?.direction?.value === 'rtl' ? 'flex-row-reverse' : ''
					}`}>
					<article className='introduction col-12 col-md-6 order-2'>
						<h4
							className='subtitle'
							style={{
								color: structure?.theme?.value === 'dark' ? '#fff' : '#000'
							}}>
							{structure?.littleTitle?.value}
						</h4>

						<h3
							className='title'
							style={{
								color: structure?.theme?.value === 'dark' ? '#fff' : '#000'
							}}>
							{structure?.title?.value}
						</h3>
						<p
							className='text'
							style={{
								color: structure?.theme?.value === 'dark' ? '#fff' : '#000'
							}}>
							{structure?.description?.value}
						</p>
					</article>
					<div
						className='image_container col-12 col-md-6 order-1 d-flex justify-content-center align-items-center'
						style={
							structure?.rounded?.value
								? {
										padding: '40px'
								  }
								: { padding: '0px' }
						}>
						<CustomImage
							src={structure?.image?.src}
							alt={structure?.image?.alt}
							style={
								structure?.rounded?.value
									? {
											borderRadius: '40px',
											overflow: 'hidden'
									  }
									: {}
							}
							wrapperClass='w-full h-full'
						/>
					</div>
				</div>
			)}
		</section>
		// 	<section>
		// 	<div
		// 		style={{ background: structure?.backgroundColor?.value }}
		// 		className={`product_feature_with_image theme-${
		// 			structure?.theme?.value
		// 		} ${structure?.direction?.value === 'rtl' ? 'flex-row-reverse' : ''}`}>
		// 		<article className='content'>
		// 			<h6 className='subtitle'>{structure?.littleTitle?.value}</h6>
		// 			<h3 className='title'>{structure?.title?.value}</h3>
		// 			<div className='text'>{structure?.description?.value}</div>
		// 		</article>
		// 		<div className='image_wrapper'>
		// 			<img
		// 				src={structure?.image?.src}
		// 				alt={structure?.image?.alt}
		// 				className='image'
		// 			/>
		// 		</div>
		// 	</div>
		// </section>
	)
}

export default ProductFeatureWithImage
