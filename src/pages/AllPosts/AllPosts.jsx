import React, { useEffect } from 'react'

import { Post, TagsBlock } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import {
	fetchMyPosts,
	fetchPosts,
	fetchPostsByTag,
	fetchTags
} from '../../redux/slices/posts'
import styles from './AllPosts.module.scss'
import Container from '@mui/material/Container'
import { useParams } from 'react-router-dom'
import { NotFound } from '../NotFound/NotFound'

export const AllPosts = () => {
	let isMe = window.location.href.includes('me')
	const { tag } = useParams()
	const userData = useSelector(state => state.auth.data)
	const { posts, tags } = useSelector(state => state.posts)
	const dispatch = useDispatch()

	const isPostsLoading = posts.status === 'loading'
	const isTagsLoading = tags.status === 'loading'

	useEffect(() => {
		window.scrollTo(0, 0)

		if (tag) dispatch(fetchPostsByTag(tag))
		else if (isMe) {
			dispatch(fetchMyPosts({ userId: userData?._id }))
		} else {
			isMe = false
			dispatch(fetchPosts({ sortProperty: 'createdAt' }))
		}

		dispatch(fetchTags())
	}, [tag, userData, isMe])

	if (posts.items.toString() === '') {
		return (
			<div className={styles.root}>
				<Container maxWidth='lg'>
					<NotFound text={'Вы еще не написали ни одной статьи'} />
				</Container>
			</div>
		)
	}

	return (
		<div className={styles.root}>
			<Container maxWidth='lg'>
				{tag ? (
					<h1>#{tag}</h1>
				) : isMe ? (
					<h1>Мои статьи</h1>
				) : (
					<h1>Все статьи</h1>
				)}
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
		</div>
	)
}
