import React from 'react'

const CommentItem = ({ quote, author }) => {
	return (
		<div className='comment-item p-8 p-md-18'>
			<h5 className='quote fs-md-1'>{quote}</h5>
			<p className='author fs-5'>{author}</p>
		</div>
	)
}

export default CommentItem
