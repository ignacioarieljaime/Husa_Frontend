import { useEffect, useState } from 'react'
import { useAspectRatio } from 'hooks/useAspectRatio'

export const HomeAppliancesHeaderCategoryItem = _data => {
	const aspectRatio = useAspectRatio(_data?.data?.image?.src)

	return (
		<li>
			<a
				href={_data?.data?.link.value}
				className='text-decoration-none'
				style={{ color: '#000000' }}>
				<div
					className='image'
					style={{
						width:
							aspectRatio > 1
								? ((1 / aspectRatio) * 60).toFixed(2) + '%'
								: aspectRatio < 1
								? ((1 / aspectRatio) * 100).toFixed(2) + '%'
								: '45%'
					}}>
					<img
						src={_data?.data?.image?.src}
						alt={_data?.data?.image?.alt}
						height={'100%'}
					/>
				</div>
				{_data?.data?.title?.value && (
					<div
						className='cat-label'
						dangerouslySetInnerHTML={{ __html: _data.data.title.value }}
					/>
				)}
			</a>
		</li>
	)
}
const HomeAppliancesHeaderCategory = ({ data }) => {
	const { structure } = data
	const [scrolled, setScrolled] = useState(false)
	const [topVal, setTopVal] = useState(0)

	useEffect(() => {
		const scrollEvent = () => {
			if (window) {
				setScrolled(
					window.innerWidth > 1109
						? window.scrollY > 0
						: window.innerWidth > 991
						? window.scrollY > 0
						: false
				)
				setTopVal(
					window.innerWidth > 1109 && window.scrollY > 0
						? 62
						: window.innerWidth > 991 && window.scrollY > 0
						? 100
						: 0
				)
			}
		}
		if (window) window.addEventListener('scroll', scrollEvent)

		return () => {
			if (window) window.removeEventListener('scroll', scrollEvent)
		}
	}, [])

	return (
		<section className={scrolled ? 'scrolled' : undefined}>
			<div
				className='ha_header_cat'
				style={
					structure?.backgroundColor?.value
						? { background: structure.backgroundColor.value, top: topVal }
						: { top: topVal }
				}>
				<div className='content'>
					<div
						className='title'
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}
					/>
					<ul className='category'>
						{structure?.list?.value.map((item, index) => (
							<HomeAppliancesHeaderCategoryItem data={item} key={index} />
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default HomeAppliancesHeaderCategory
