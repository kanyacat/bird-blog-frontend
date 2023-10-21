import React from 'react'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'

import styles from '../Login/Login.module.scss'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRegister, isAuthSelector } from '../../redux/slices/auth'
import { Link, Navigate } from 'react-router-dom'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

export const Registration = () => {
	const isAuth = useSelector(isAuthSelector)
	const dispatch = useDispatch()

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isValid }
	} = useForm({
		defaultValues: {
			fullName: '',
			email: '',
			password: ''
		},
		mode: 'onChange'
	})

	const onSubmit = async values => {
		const data = await dispatch(fetchRegister(values))

		console.log(data)
		if (!data.payload) {
			return alert('Не удалось зарегистрироваться')
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
								Регистрация
							</Typography>
							<form onSubmit={handleSubmit(onSubmit)}>
								<TextField
									className={styles.field}
									label='Полное имя'
									error={Boolean(errors.fullName?.message)}
									helperText={errors.fullName?.message}
									{...register('fullName', { required: 'Укажите полное имя' })}
									fullWidth
								/>
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
									color='primary'
									type='submit'
									size='large'
									variant='outlined'
									fullWidth
									className={styles.regBtn}
								>
									Зарегистрироваться
								</Button>
							</form>
						</div>
						<div className={styles.block}>
							<Swiper
								spaceBetween={30}
								centeredSlides={true}
								autoplay={{
									delay: 4000,
									disableOnInteraction: false
								}}
								modules={[Autoplay]}
								className={styles.swiper}
							>
								<SwiperSlide className={styles.swiperSlide}>
									<div className={styles.info}>
										<h2 className={styles.title}>Уже есть аккаунт?</h2>
										<h3 className={styles.title}>
											Мы с нетерпением ждём твоего возвращения!
										</h3>
										<Link to='/login'>
											<Button
												className={styles.loginBtn}
												size='large'
												variant='outlined'
												fullWidth
											>
												Вход
											</Button>
										</Link>
									</div>
								</SwiperSlide>

								<SwiperSlide className={styles.swiperSlide}>
									<div className={styles.info}>
										<h2 className={styles.title}>Уже есть аккаунт?</h2>
										<h3 className={styles.title}>
											Мы с нетерпением ждём твоего возвращения!
										</h3>
										<Link to='/login'>
											<Button
												className={styles.loginBtn}
												size='large'
												variant='outlined'
												fullWidth
											>
												Вход
											</Button>
										</Link>
									</div>
								</SwiperSlide>

								<SwiperSlide className={styles.swiperSlide}>
									<div className={styles.info}>
										<h2 className={styles.title}>Уже есть аккаунт?</h2>
										<h3 className={styles.title}>
											Мы с нетерпением ждём твоего возвращения!
										</h3>
										<Link to='/login'>
											<Button
												className={styles.loginBtn}
												size='large'
												variant='outlined'
												fullWidth
											>
												Вход
											</Button>
										</Link>
									</div>
								</SwiperSlide>

								<SwiperSlide className={styles.swiperSlide}>
									<div className={styles.info}>
										<h2 className={styles.title}>Уже есть аккаунт?</h2>
										<h3 className={styles.title}>
											Мы с нетерпением ждём твоего возвращения!
										</h3>
										<Link to='/login'>
											<Button
												className={styles.loginBtn}
												size='large'
												variant='outlined'
												fullWidth
											>
												Вход
											</Button>
										</Link>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
					</Paper>
				</ThemeProvider>
			</div>
		</div>
	)
}
