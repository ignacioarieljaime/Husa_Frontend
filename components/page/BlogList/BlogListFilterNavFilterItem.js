import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SelectBoxAngleArrow from 'components/icons/SelectBoxAngleArrow'
import useOutsideClick from 'hooks/useOutsideClick'
import { GetAllBlogs, GetNewsApi } from 'services/cxm'
import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const BlogListFilterNavFilterItem = ({
	filters,
	title,
	filterChangeHandler,
	data,
	dataKey,
	className,
	onClose,
	parentFix,
	parentTransparent,
	tagList,
	structureData
}) => {
	const [openDropdown, setOpenDropdown] = useState(false)
	const [filter, setFilter] = useState(filters)
	const wrapper = useRef()
	const outside = useOutsideClick(wrapper)
	const [allBlogs, setAllBlogs] = useState([])
	const controller = new AbortController()

	const onFilterChange = _item => {
		let temp = [...filter]
		if (temp && temp.length && temp.includes(_item))
			temp.splice(temp.indexOf(_item), 1)
		else temp.push(_item)
		setFilter(temp)
	}
	const getPostId = () => {
		let ids = []
		ids = structureData?.exclude_blogs?.value?.map(
			item => `&exclude[]=${item?.id?.value}`
		)
		return ids && ids.length ? ids.join(',').replaceAll(',', '') : null
	}

useEffect(() => {
  const getBLogs = async () => {
    try {
      let response = await GetAllBlogs(
        filters.tag,
        filters.year,
        filters.search,
        100000,
        filters.page,
        getPostId(),
        controller
      );
      setAllBlogs(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  getBLogs();
}, []);


	useEffect(() => {
		setFilter(filters)
	}, [filters])

	useEffect(() => {
		filterChangeHandler(dataKey, filter, false)
	}, [filter])
	return (
		<>
			{openDropdown && (
				<div
					onClick={() => {
						if (outside) {
							setOpenDropdown(false)
							onClose()
						}
					}}
					className='news_selectbox_backdrop'></div>
			)}
			<div
				ref={wrapper}
				className={`select_box_custom ${className || ''} ${
					openDropdown ? 'open' : ''
				}`}>
				{/* <label>Model year</label> */}
				<div>
					<span onClick={() => setOpenDropdown(true)}>
						<div className='dropdown_label'>
							{(filters && filters.length && filters.join(', ')) || title}
						</div>
						<SelectBoxAngleArrow color='#525454' />
					</span>
					{openDropdown && (
						<div>
							<ul>
								{dataKey === "tag" ? data
									?.sort((a, b) => b - a)
									?.filter(item => allBlogs.some(tag => tag.tags.includes(item)))
									?.map((item, index) => (
										<li key={index} className="list">
											{index === 0 && parentFix &&
												<div className='seemless-gradient' />
											}
											{index === 0 && !parentFix && !parentTransparent &&
												<div className='seemless-gradient-scrolled' />
											}
											<button
												className={`checkbox ${
													filter && filter.length
														? filter.includes(item)
															? 'checked'
															: ''
														: null
												}`}
												onClick={() => {
													onFilterChange(item)
												}}>
												{filter && filter.length
													? filter.includes(item) && (
															<FontAwesomeIcon
																color='#fff'
																icon={faCheck}
																size='2xs'
															/>
													  )
													: null}
											</button>
											<span>{item}</span>
										</li>
									)) : data
									?.sort((a, b) => b - a)
									?.map((item, index) => (
										<li key={index}>
											{index === 0 && parentFix &&
												<div className='seemless-gradient' />
											}
											{index === 0 && !parentFix && !parentTransparent &&
												<div className='seemless-gradient-scrolled' />
											}
											<button
												className={`checkbox ${
													filter && filter.length
														? filter.includes(item)
															? 'checked'
															: ''
														: null
												}`}
												onClick={() => {
													onFilterChange(item)
												}}>
												{filter && filter.length
													? filter.includes(item) && (
															<FontAwesomeIcon
																color='#fff'
																icon={faCheck}
																size='2xs'
															/>
													  )
													: null}
											</button>
											<span>{item}</span>
										</li>
									))}
							</ul>
							{/* <div className='bottom-spacer' /> */}
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default BlogListFilterNavFilterItem
