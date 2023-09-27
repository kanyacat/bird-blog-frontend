import React from 'react'

import styles from './AddComment.module.scss'

import TextField from '@mui/material/TextField'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import { useParams } from 'react-router-dom'
import axios from '../../axios'
import { useDispatch } from 'react-redux'
import { addComment } from '../../redux/slices/posts'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material'

export const Index = user => {
	const { id } = useParams()

	const dispatch = useDispatch()

	const [isLoading, setLoading] = React.useState(false)

	const [text, setText] = React.useState('')

	const onSubmit = async () => {
		try {
			setLoading(true)

			const fields = { text }

			const { data } = await axios.post(`/posts/${id}/addComment`, fields)
			const { count } = await axios.patch(`/posts/${id}/addComment`, fields)

			setText('')

			dispatch(addComment(data))
		} catch (err) {
			console.warn(err)
			alert('Не удалось отправить комментарий')
		}
	}

	const theme = createTheme({
		palette: {
			primary: { main: '#d4a373' }
		}
	})

	return (
		<>
			<div className={styles.root}>
				<Avatar classes={{ root: styles.avatar }} src={user.user.avatarUrl} />
				<div className={styles.form}>
					<ThemeProvider theme={theme}>
						<TextField
							onChange={e => setText(e.target.value)}
							value={text}
							label='Написать комментарий'
							variant='outlined'
							maxRows={10}
							multiline
							fullWidth
							color='primary'
							InputProps={{ style: { fontFamily: 'Lora, serif' } }}
							InputLabelProps={{ style: { fontFamily: 'Lora, serif' } }}
						/>
					</ThemeProvider>
					<Button onClick={onSubmit} variant='contained'>
						Отправить
					</Button>
				</div>
			</div>
		</>
	)
}
