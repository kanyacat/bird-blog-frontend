import React, { useEffect, useState } from 'react'

import { CommentsBlock, Index, Post } from '../components'
import { useParams } from 'react-router-dom'
import axios from '../axios'
import ReactMarkdown from 'react-markdown'
import { useSelector } from 'react-redux'
import { isAuthSelector } from '../redux/slices/auth'
import { commentsSelector } from '../redux/slices/posts'

export const FullPost = () => {
	const isAuth = useSelector(isAuthSelector)
	const comm = useSelector(commentsSelector)

	const [data, setData] = useState()
	const [comments, setComments] = useState()
	const [isLoading, setIsLoading] = useState(true)

	const { id } = useParams()

	useEffect(() => {
		window.scrollTo(0, 0)

		axios
			.get(`/posts/${id}`)
			.then(res => {
				setData(res.data)
				setIsLoading(false)
			})
			.catch(err => {
				console.warn(err)
				alert('Ошибка при получении статьи')
			})
	}, [])

	useEffect(() => {
		axios
			.get(`/posts/${id}/comments`)
			.then(res => {
				setComments(res.data)
			})
			.catch(err => {
				console.warn(err)
				alert('Ошибка при получении комментариев')
			})
	}, [comm])

	if (isLoading) {
		return <Post isLoading={isLoading} isFullPost />
	}

	return (
		<>
			<Post
				id={data._id}
				title={data.title}
				imageUrl={
					data.imageUrl
						? `${process.env.REACT_APP_API_URL}${data.imageUrl}`
						: ''
				}
				user={data.user}
				createdAt={data.createdAt}
				viewsCount={data.viewsCount}
				commentsCount={data.commentsCount}
				tags={data.tags}
				isFullPost
			>
				<ReactMarkdown children={data.text} />
			</Post>
			<CommentsBlock items={comments ? comments : ''} isLoading={false}>
				{isAuth && <Index user={data.user} />}
			</CommentsBlock>
		</>
	)
}
