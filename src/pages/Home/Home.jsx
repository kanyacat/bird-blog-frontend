import React, { useEffect } from 'react'

import { Post, Slider, TagsBlock } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLastPosts, fetchPosts, fetchTags } from '../../redux/slices/posts'
import styles from './Home.module.scss'
import Container from '@mui/material/Container'

export const Home = () => {
	const userData = useSelector(state => state.auth.data)
	const { posts, tags, lastPosts } = useSelector(state => state.posts)
	const dispatch = useDispatch()

	const isPostsLoading = posts.status === 'loading'
	const isTagsLoading = tags.status === 'loading'

	useEffect(() => {
		window.scrollTo(0, 0)
		dispatch(fetchPosts({ sortProperty: 'viewsCount', limit: 8 }))
		dispatch(fetchLastPosts({ sortProperty: 'createdAt', limit: 3 }))

		dispatch(fetchTags())
	}, [])

	return (
		<>
			<Slider isBottom={false} />
			<Container maxWidth='lg'>
				<h1 className={styles.title}>Популярные статьи</h1>
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
			<Slider isBottom={true} />
			<Container maxWidth='lg'>
				<h1 className={styles.title}>Последние статьи</h1>
				<div className={styles.posts}>
					{(isPostsLoading ? [...Array(3)] : lastPosts.items).map(
						(obj, index) =>
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
