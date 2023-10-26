import React from 'react'
import clsx from 'clsx'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Clear'
import EditIcon from '@mui/icons-material/Edit'
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'

import styles from './Post.module.scss'
import { PostSkeleton } from './PostSkeleton'
import { PopulatePostSkeleton } from './PopulatePostSkeleton'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchRemovePost } from '../../redux/slices/posts'
import { UserInfo } from '../UserInfo'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material'
import { FullPostSkeleton } from './FullPostSkeleton'

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
	isEditable,
	isPopulatePost
}) => {
	const dispatch = useDispatch()

	if (isLoading && isPopulatePost) {
		return <PopulatePostSkeleton />
	}

	if (isLoading && isFullPost) {
		return <FullPostSkeleton />
	}

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
		<div
			className={clsx(
				styles.root,
				{ [styles.rootFull]: isFullPost },
				{ [styles.rootPopulate]: isPopulatePost }
			)}
		>
			{isEditable && (
				<ThemeProvider theme={theme}>
					<div
						className={clsx(styles.editButtons, {
							[styles.editButtonsPopulate]: isPopulatePost
						})}
					>
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
				<Link to={`/posts/${id}`}>
					<img
						className={clsx(
							styles.image,
							{ [styles.imageFull]: isFullPost },
							{ [styles.imagePopulate]: isPopulatePost }
						)}
						src={imageUrl}
						alt={title}
					/>
				</Link>
			)}
			<div
				className={clsx(styles.wrapper, {
					[styles.wrapperPopulate]: isPopulatePost
				})}
			>
				<span
					className={clsx(styles.userInfo, {
						[styles.userInfoPopulate]: isPopulatePost
					})}
				>
					<UserInfo {...user} additionalText={createdAt} isPopulatePost />
				</span>
				<div>
					<h2
						className={clsx(
							styles.title,
							{ [styles.titleFull]: isFullPost },
							{ [styles.titlePopulate]: isPopulatePost }
						)}
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
							className={clsx(
								styles.content,
								{
									[styles.contentFull]: isFullPost
								},
								{ [styles.contentPopulate]: isPopulatePost }
							)}
						>
							{children}
						</div>
					)}
					<ul
						className={clsx(
							styles.postDetails,
							{
								[styles.postDetailsFull]: isFullPost
							},
							{ [styles.postDetailsPopulate]: isPopulatePost }
						)}
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
