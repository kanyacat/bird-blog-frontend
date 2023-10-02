import React, { useEffect, useRef } from 'react'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import SimpleMDE from 'react-simplemde-editor'

import 'easymde/dist/easymde.min.css'
import styles from './AddPost.module.scss'
import { useSelector } from 'react-redux'
import { isAuthSelector } from '../../redux/slices/auth'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from '../../axios'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material'
import Container from '@mui/material/Container'

export const AddPost = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const isAuth = useSelector(isAuthSelector)

	const [isLoading, setLoading] = React.useState(false)

	const [imageUrl, setImageUrl] = React.useState('')
	const [title, setTitle] = React.useState('')
	const [tags, setTags] = React.useState('')
	const [text, setText] = React.useState('')

	const inputFileRef = useRef(null)

	const isEditing = Boolean(id)

	const handleChangeFile = async event => {
		try {
			const formData = new FormData()
			const file = event.target.files[0]

			formData.append('image', file)

			const { data } = await axios.post('/upload', formData)
			setImageUrl(data.url)
		} catch (error) {
			console.warn(error)
			alert('Не удалось загрузить изображение')
		}
	}

	const onClickRemoveImage = () => {
		setImageUrl('')
	}

	const onChange = React.useCallback(value => {
		setText(value)
	}, [])

	const onSubmit = async () => {
		try {
			setLoading(true)

			const fields = { title, imageUrl, tags: tags.split(','), text }

			const { data } = isEditing
				? await axios.patch(`/posts/${id}`, fields)
				: await axios.post('/posts', fields)

			const _id = isEditing ? id : data._id

			navigate(`/posts/${_id}`)
		} catch (err) {
			console.warn(err)
			alert('Не удалось опубликовать статью')
		}
	}

	useEffect(() => {
		if (id) {
			axios.get(`/posts/${id}`).then(res => {
				setTitle(res.data.title)
				setText(res.data.text)
				setTags(res.data.tags.join(','))
				setImageUrl(res.data.imageUrl)
			})
		}
	}, [])

	const options = React.useMemo(
		() => ({
			spellChecker: false,
			maxHeight: '400px',
			autofocus: true,
			placeholder: 'Введите текст...',
			status: false,
			autosave: {
				enabled: true,
				delay: 1000
			}
		}),
		[]
	)

	const theme = createTheme({
		palette: {
			primary: { main: '#d4a373' },
			secondary: { main: '#495057' }
		}
	})

	if (!window.localStorage.getItem('token') && !isAuth) {
		return <Navigate to='/' />
	}

	return (
		<Container maxWidth='lg'>
			<ThemeProvider theme={theme}>
				<Paper className={styles.root} style={{ padding: 30 }} elevation={0}>
					<Button
						style={{ marginRight: 15 }}
						onClick={() => inputFileRef.current.click()}
						variant='outlined'
						size='large'
						color='primary'
					>
						Загрузить превью
					</Button>
					<input
						ref={inputFileRef}
						type='file'
						onChange={handleChangeFile}
						hidden
					/>
					{imageUrl && (
						<>
							<Button
								variant='contained'
								color='error'
								size='large'
								onClick={onClickRemoveImage}
							>
								Удалить
							</Button>
							<img
								className={styles.image}
								src={`${process.env.REACT_APP_API_URL}${imageUrl}`}
								alt='Uploaded'
							/>
						</>
					)}
					<TextField
						classes={{ root: styles.title }}
						variant='standard'
						placeholder='Заголовок...'
						value={title}
						onChange={e => setTitle(e.target.value)}
						fullWidth
					/>
					<TextField
						classes={{ root: styles.tags }}
						variant='standard'
						placeholder='Тэги'
						value={tags}
						onChange={e => setTags(e.target.value)}
						fullWidth
					/>
					<SimpleMDE
						className={styles.editor}
						value={text}
						onChange={onChange}
						options={options}
					/>
					<div className={styles.buttons}>
						<Button onClick={onSubmit} size='large' variant='contained'>
							{isEditing ? 'Редактировать' : 'Опубликовать'}
						</Button>
						<a href='/'>
							<Button size='large'>Отмена</Button>
						</a>
					</div>
				</Paper>
			</ThemeProvider>
		</Container>
	)
}
