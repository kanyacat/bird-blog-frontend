import React, { useEffect, useState } from 'react'

import { Main, Post, TagsBlock } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchComments, fetchPosts, fetchTags } from '../../redux/slices/posts'
import styles from './Home.module.scss'
import Container from '@mui/material/Container'

export const Home = () => {
	const userData = useSelector(state => state.auth.data)
	const { posts, tags, comments } = useSelector(state => state.posts)
	const dispatch = useDispatch()

	const isPostsLoading = posts.status === 'loading'
	const isTagsLoading = tags.status === 'loading'

	let isPopulatePost = false

	const [isPopulate, setIsPopulate] = useState(false)

	useEffect(() => {
		const sortProperty = isPopulate ? 'viewsCount' : 'createdAt'

		dispatch(fetchPosts(sortProperty))

		dispatch(fetchTags())
		dispatch(fetchComments())
	}, [isPopulate])

	return (
		<>
			<Main isBottom={false} />
			<Container maxWidth='lg'>
				<h1>Последние статьи</h1>
				<TagsBlock items={tags.items} isLoading={isTagsLoading} />
				<div className={styles.posts}>
					{(isPostsLoading ? [...Array(8)] : posts.items).map((obj, index) =>
						isPostsLoading ? (
							<Post key={index} isLoading={true} isPopulatePost={false} />
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
								isPopulatePost={false}
							/>
						)
					)}
				</div>
			</Container>
			<Main isBottom={true} />
			<Container maxWidth='lg'>
				<h1>Популярные посты</h1>
				<div className={styles.posts}>
					{(isPostsLoading ? [...Array(3)] : posts.items).map((obj, index) =>
						isPostsLoading ? (
							<Post key={index} isLoading={true} isPopulatePost={true} />
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
								isPopulatePost={true}
							/>
						)
					)}
				</div>
			</Container>
		</>
	)
}
