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

	return (
		<Paper classes={{ root: styles.root }} elevation={0}>
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
		</Paper>
	)
}
