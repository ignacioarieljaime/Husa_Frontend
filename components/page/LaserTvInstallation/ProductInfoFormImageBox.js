import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ProductInfoFormImageBox = ({
	imageLoading,
	file,
	setFile,
	uploadFile,
	withUpload
}) => {
	return (
		<>
			{withUpload && imageLoading ? (
				<div className='image_loading'>
					<Spinner size={35} />
				</div>
			) : null}
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
		</>
	)
}

export default ProductInfoFormImageBox
