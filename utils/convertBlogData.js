export const ConvertBlogData = (_data, _imageType) => {
	const image = _data?.meta?.find(item => {
		if (_imageType === 'vertical')
			return (
				item.name === 'property="og:image:vertical"' && item?.content !== ''
			)
		else if (_imageType === 'square')
			return item.name === 'property="og:image:square"' && item?.content !== ''
		else return item.name === 'property="og:image"'
	})?.content
	return {
		tag: {
			value: _data?.tags
		},
		link: {
			title: 'READ ARTICLE',
			value: _data?.route
		},
		image: {
			src: image
				? image
				: _data?.meta?.find(item => item.name === 'property="og:image"')
						?.content
		},
		title: {
			value: _data?.title
		}
	}
}
