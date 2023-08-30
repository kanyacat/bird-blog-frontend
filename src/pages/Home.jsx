import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Grid from '@mui/material/Grid'

import { CommentsBlock, Post, TagsBlock } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, fetchTags } from '../redux/slices/posts'
import { Link } from 'react-router-dom'

export const Home = () => {
	const userData = useSelector(state => state.auth.data)
	const { posts, tags } = useSelector(state => state.posts)
	const dispatch = useDispatch()

	const isPostsLoading = posts.status === 'loading'
	const isTagsLoading = tags.status === 'loading'

	const [isPopulate, setIsPopulate] = useState(false)

	useEffect(() => {
		const sortProperty = isPopulate ? 'viewsCount' : 'createdAt'

		dispatch(fetchPosts(sortProperty))

		dispatch(fetchTags())
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
				<Grid xs={8} item>
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
				<Grid xs={4} item>
					<TagsBlock items={tags.items} isLoading={isTagsLoading} />
					<CommentsBlock
						items={[
							{
								user: {
									fullName: 'Вася Пупкин',
									avatarUrl: 'https://mui.com/static/images/avatar/1.jpg'
								},
								text: 'Это тестовый комментарий'
							},
							{
								user: {
									fullName: 'Иван Иванов',
									avatarUrl: 'https://mui.com/static/images/avatar/2.jpg'
								},
								text: 'When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top'
							}
						]}
						isLoading={false}
					/>
				</Grid>
			</Grid>
		</>
	)
}
