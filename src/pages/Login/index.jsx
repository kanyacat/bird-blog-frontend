import React from 'react'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'

import styles from './Login.module.scss'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuth, isAuthSelector } from '../../redux/slices/auth'
import { Navigate } from 'react-router-dom'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material'

export const Login = () => {
	const isAuth = useSelector(isAuthSelector)
	const dispatch = useDispatch()

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isValid }
	} = useForm({
		defaultValues: {
			email: 'test1@test.ru',
			password: '12345'
		},
		mode: 'onChange'
	})

	const onSubmit = async values => {
		const data = await dispatch(fetchAuth(values))

		console.log(data)
		if (!data.payload) {
			return alert('Не удалось авторизоваться')
		}

		if (data.payload.token) {
			window.localStorage.setItem('token', data.payload.token)
		}
	}

	if (isAuth) {
		return <Navigate to='/' />
	}

	const theme = createTheme({
		palette: {
			primary: { main: '#d4a373' }
		}
	})

	return (
		<div className={styles.body}>
			<div className={styles.background}>
				<ThemeProvider theme={theme}>
					<Paper classes={{ root: styles.root }} elevation={0}>
						<div className={styles.block}>
							<Typography classes={{ root: styles.title }} variant='h5'>
								Вход в аккаунт
							</Typography>
							<form onSubmit={handleSubmit(onSubmit)}>
								<TextField
									className={styles.field}
									label='E-Mail'
									type='email'
									error={Boolean(errors.email?.message)}
									helperText={errors.email?.message}
									{...register('email', { required: 'Укажите почту' })}
									fullWidth
								/>
								<TextField
									className={styles.field}
									label='Пароль'
									type='password'
									error={Boolean(errors.password?.message)}
									helperText={errors.password?.message}
									{...register('password', { required: 'Укажите пароль' })}
									fullWidth
								/>
								<Button
									disabled={!isValid}
									type='submit'
									size='large'
									variant='contained'
									fullWidth
								>
									Войти
								</Button>
							</form>
						</div>
						<div className={styles.block}>
							<img
								src='https://oir.mobi/uploads/posts/2022-09/1662318764_6-oir-mobi-p-pushistie-ptichki-instagram-9.jpg'
								alt=''
							/>
						</div>
					</Paper>
				</ThemeProvider>
			</div>
		</div>
	)
}
