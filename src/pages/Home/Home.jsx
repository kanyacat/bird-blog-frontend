import React, { useEffect, useState } from 'react'

import { Post, TagsBlock } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchComments, fetchPosts, fetchTags } from '../../redux/slices/posts'
import styles from './Home.module.scss'

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
			<h1>Последние статьи</h1>
			<TagsBlock items={tags.items} isLoading={isTagsLoading} />
			{/*<Tabs*/}
			{/*	style={{ marginBottom: 15 }}*/}
			{/*	value={Number(isPopulate)}*/}
			{/*	aria-label='basic tabs example'*/}
			{/*>*/}
			{/*	<Link to={'/'} onClick={() => setIsPopulate(false)}>*/}
			{/*		<Tab label='Новые' />*/}
			{/*	</Link>*/}
			{/*	<Link to={'/'} onClick={() => setIsPopulate(true)}>*/}
			{/*		<Tab label='Популярные' />*/}
			{/*	</Link>*/}
			{/*</Tabs>*/}
			{/*<Grid container spacing={4}>*/}
			{/*	<Grid sm={12} xs={12} item>*/}
			<div className={styles.posts}>
				{(isPostsLoading ? [...Array(8)] : posts.items).map((obj, index) =>
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
							children={obj.text}
							isEditable={userData?._id === obj.user._id}
						/>
					)
				)}
				{/*</Grid>*/}
				{/*<Grid sm={4} xs={12} item>*/}
				{/*	<CommentsBlock items={comments.items} isLoading={false} />*/}
				{/*</Grid>*/}
				{/*</Grid>*/}
			</div>
		</>
	)
}
