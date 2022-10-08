import Logo from 'components/icons/Logo'
import GoogleTv from 'public/assets/images/100-day/googletv.png'

const HeaderGoogleTv = () => (
	<section>
		<div className='bg-black container-fluid'>
			<div className='row align-items-center justify-content-start justify-content-md-center py-3'>
				<Logo />
				<img
					src={GoogleTv.src}
					width='180'
					height='30'
					className='border-start border-2 border-secondary d-none d-md-block'
				/>
			</div>
		</div>
	</section>
)

export default HeaderGoogleTv
