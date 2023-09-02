import React from 'react'

import styles from './AddComment.module.scss'

import TextField from '@mui/material/TextField'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import { useParams } from 'react-router-dom'
import axios from '../../axios'

export const Index = user => {
	const { id } = useParams()

	const [isLoading, setLoading] = React.useState(false)

	const [text, setText] = React.useState('')

	const onSubmit = async () => {
		try {
			setLoading(true)

			const fields = { text }

			const { data } = await axios.post(`/posts/${id}/addComment`, fields)
			setText('')
		} catch (err) {
			console.warn(err)
			alert('Не удалось отправить комментарий')
		}
	}

	return (
		<>
			<div className={styles.root}>
				<Avatar classes={{ root: styles.avatar }} src={user.user.avatarUrl} />
				<div className={styles.form}>
					<TextField
						onChange={e => setText(e.target.value)}
						value={text}
						label='Написать комментарий'
						variant='outlined'
						maxRows={10}
						multiline
						fullWidth
					/>
					<Button onClick={onSubmit} variant='contained'>
						Отправить
					</Button>
				</div>
			</div>
		</>
	)
}
