import React, { useEffect } from 'react'

import { Footer, Post, TagsBlock } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import {
	fetchPosts,
	fetchPostsByTag,
	fetchTags
} from '../../redux/slices/posts'
import styles from './AllPosts.module.scss'
import Container from '@mui/material/Container'
import { useParams } from 'react-router-dom'

export const AllPosts = () => {
	const { tag } = useParams()
	const userData = useSelector(state => state.auth.data)
	const { posts, tags } = useSelector(state => state.posts)
	const dispatch = useDispatch()

	const isPostsLoading = posts.status === 'loading'
	const isTagsLoading = tags.status === 'loading'

	useEffect(() => {
		if (tag) dispatch(fetchPostsByTag(tag))
		else dispatch(fetchPosts({ sortProperty: 'createdAt' }))

		dispatch(fetchTags())
	}, [tag])

	return (
		<div className={styles.root}>
			<Container maxWidth='lg'>
				{tag ? <h1>#{tag}</h1> : <h1>Все статьи</h1>}
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
			<Footer />
		</div>
	)
}
