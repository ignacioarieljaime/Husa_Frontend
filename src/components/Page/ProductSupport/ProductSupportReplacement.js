import React from 'react'

// image
import WerenchIcon from 'components/icons/WerenchIcon'

function ProductSupportReplacement() {
	return (
		<section class='border-bottom border-dark' id='#parts'>
			<div class='container py-20'>
				<div class='row align-items-center'>
					<div class='col-12 col-sm-6'>
						<div class='d-flex align-items-center justify-content-center justify-content-sm-start'>
							<div class='bg-black p-3 me-7'>
								<WerenchIcon />
							</div>
							<div>
								<h2 class='mb-2 fs-2'>Replacement Parts</h2>
								<p class='fs-8 fw-normal mb-0'>
									Find replacement parts for your
								</p>
							</div>
						</div>
					</div>
					<div class='col-12 col-sm-6 mt-6 mt-sm-0 text-center text-sm-end'>
						<button class='btn btn-outline-dark rounded-5 py-2 px-5'>
							SEARCH PARTS
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProductSupportReplacement
