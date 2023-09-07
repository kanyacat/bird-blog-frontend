import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid'

import { CommentsBlock, Post, TagsBlock } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import {
	fetchComments,
	fetchPostsByTag,
	fetchTags
} from '../redux/slices/posts'
import { useParams } from 'react-router-dom'

export const PostsByTag = () => {
	const { tag } = useParams()

	const userData = useSelector(state => state.auth.data)
	const { posts, tags, comments } = useSelector(state => state.posts)
	const dispatch = useDispatch()

	const isPostsLoading = posts.status === 'loading'
	const isTagsLoading = tags.status === 'loading'

	useEffect(() => {
		dispatch(fetchPostsByTag(tag))

		dispatch(fetchTags())
		dispatch(fetchComments())
	}, [tag])

	return (
		<>
			<h2>#{tag}</h2>
			<Grid container spacing={4}>
				<Grid sm={8} xs={12} item>
					{(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) =>
						isPostsLoading ? (
							<Post key={index} isLoading={true} />
						) : (
							<Post
								id={obj._id}
								key={index}
								title={obj.title}
								imageUrl={
									obj.imageUrl
										? `${process.env.REACT_APP_API_URL}${obj.imageUrl}`
										: ''
								}
								user={obj.user}
								createdAt={obj.createdAt}
								viewsCount={obj.viewsCount}
								commentsCount={3}
								tags={obj.tags}
								isEditable={userData?._id === obj.user._id}
							/>
						)
					)}
				</Grid>
				<Grid sm={4} xs={12} item>
					<TagsBlock items={tags.items} isLoading={isTagsLoading} />
					<CommentsBlock items={comments.items} isLoading={false} />
				</Grid>
			</Grid>
		</>
	)
}
