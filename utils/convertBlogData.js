export const ConvertBlogData = _data => {
	return {
		tag: {
			value: _data?.tags
		},
		link: {
			title: 'READ ARTICLE',
			value: _data?.route
		},
		image: {
			src: _data?.meta?.find(item => item.name === 'property="og:image"')
				?.content
		},
		title: {
			value: _data?.title
		}
	}
}
