import React from 'react'
import clsx from 'clsx'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Clear'
import EditIcon from '@mui/icons-material/Edit'
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'

import styles from './Post.module.scss'
import { PostSkeleton } from './Skeleton'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchRemovePost } from '../../redux/slices/posts'
import { UserInfo } from '../UserInfo'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material'

export const Post = ({
	id,
	title,
	createdAt,
	imageUrl,
	user,
	viewsCount,
	commentsCount,
	tags,
	children,
	isFullPost,
	isLoading,
	isEditable
}) => {
	const dispatch = useDispatch()
	if (isLoading) {
		return <PostSkeleton />
	}

	const onClickRemove = () => {
		if (window.confirm('Вы действительно хотите удалить статью?')) {
			dispatch(fetchRemovePost(id))
		}
	}

	const theme = createTheme({
		palette: {
			primary: { main: '#d4a373' },
			secondary: { main: '#495057' }
		}
	})

	return (
		<div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
			{isEditable && (
				<ThemeProvider theme={theme}>
					<div className={styles.editButtons}>
						<Link to={`/posts/${id}/edit`}>
							<IconButton color='primary'>
								<EditIcon />
							</IconButton>
						</Link>
						<IconButton onClick={onClickRemove} color='secondary'>
							<DeleteIcon />
						</IconButton>
					</div>
				</ThemeProvider>
			)}
			{imageUrl && (
				<img
					className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
					src={imageUrl}
					alt={title}
				/>
			)}
			<div className={styles.wrapper}>
				<UserInfo {...user} additionalText={createdAt} />
				<div className={styles.indention}>
					<h2
						className={clsx(styles.title, { [styles.titleFull]: isFullPost })}
					>
						{isFullPost ? title : <Link to={`/posts/${id}`}>{title}</Link>}
					</h2>
					<ul className={clsx(styles.tags, { [styles.tagsFull]: isFullPost })}>
						{tags.map(name => (
							<li key={name}>
								<Link to={`/tag/${name}`}>#{name}</Link>
							</li>
						))}
					</ul>
					{children && (
						<div
							className={clsx(styles.content, {
								[styles.contentFull]: isFullPost
							})}
						>
							{children}
						</div>
					)}
					<ul
						className={clsx(styles.postDetails, {
							[styles.postDetailsFull]: isFullPost
						})}
					>
						<li>
							<EyeIcon />
							<span>{viewsCount}</span>
						</li>
						<li>
							<CommentIcon />
							<span>{commentsCount}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
