import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Grid from '@mui/material/Grid'

import { CommentsBlock, Post, TagsBlock } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchComments, fetchPosts, fetchTags } from '../redux/slices/posts'
import { Link } from 'react-router-dom'

export const Home = () => {
	const userData = useSelector(state => state.auth.data)
	const { posts, tags, comments } = useSelector(state => state.posts)
	const dispatch = useDispatch()

	const isPostsLoading = posts.status === 'loading'
	const isTagsLoading = tags.status === 'loading'

	const [isPopulate, setIsPopulate] = useState(false)

	useEffect(() => {
		const sortProperty = isPopulate ? 'viewsCount' : 'createdAt'

		dispatch(fetchPosts(sortProperty))

		dispatch(fetchTags())
		dispatch(fetchComments())
	}, [isPopulate])

	return (
		<>
			<Tabs
				style={{ marginBottom: 15 }}
				value={Number(isPopulate)}
				aria-label='basic tabs example'
			>
				<Link to={'/'} onClick={() => setIsPopulate(false)}>
					<Tab label='Новые' />
				</Link>
				<Link to={'/'} onClick={() => setIsPopulate(true)}>
					<Tab label='Популярные' />
				</Link>
			</Tabs>
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
								commentsCount={obj.commentsCount}
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
