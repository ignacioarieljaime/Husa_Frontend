import { useState } from 'react'
import ProductSupportRegisterTab from './ProductSupportRegisterTab'
import ProductSupportServiceRegister from './ProductSupportServiceRegister'

function ProductSupportRegister({ pim, data }) {
	const { structure } = data
	const [formCondition, setFormCondition] = useState(false)
	const [formDisplay, setFormDisplay] = useState()
	return (
		<section id={data.name + data.id} className={formDisplay && 'd-none'}>
			<div className='container form-container px-8 px-md-20 mt-12'>
				<div className='d-flex justify-content-center align-items-center flex-nowrap mb-15'>
					<div className='me-6'>
						<button
							className={`tab-btn ${!formCondition && 'active'}`}
							id='tab-1'
							onClick={() => setFormCondition(false)}>
							{structure?.title?.value}
						</button>
					</div>
					<div className='ms-6'>
						<button
							className={`tab-btn ${formCondition && 'active'}`}
							id='tab-2'
							onClick={() => setFormCondition(true)}>
							{structure?.secondTitle?.value}
						</button>
					</div>
				</div>
				{formCondition ? (
					<ProductSupportServiceRegister
						data={structure}
						pim={pim}
						formHandler={setFormDisplay}
					/>
				) : (
					<ProductSupportRegisterTab
						data={structure}
						pim={pim}
						formHandler={setFormDisplay}
					/>
				)}
			</div>
		</section>
	)
}

export default ProductSupportRegister
