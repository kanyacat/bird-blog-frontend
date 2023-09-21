import React from 'react'

import styles from './Header.module.scss'
import Container from '@mui/material/Container'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { isAuthSelector, logout } from '../../redux/slices/auth'

export const Header = () => {
	const isAuth = useSelector(isAuthSelector)
	const dispatch = useDispatch()

	const onClickLogout = () => {
		if (window.confirm('Вы действительно хотите выйти?')) {
			dispatch(logout())
			window.localStorage.removeItem('token')
		}
	}

	return (
		<div className={styles.root}>
			<Container maxWidth='lg'>
				<div className={styles.inner}>
					<Link className={styles.logo} to='/'>
						<div>BLOG</div>
					</Link>
					<div className={styles.buttons}>
						<Link to='/' className={styles.nav}>
							Главная
						</Link>
						<Link to='/' className={styles.nav}>
							О нас
						</Link>
						<Link to='/' className={styles.nav}>
							Что-то еще
						</Link>
						<span className={styles.line}>|</span>
						{isAuth ? (
							<>
								<Link to='/add-post' className={styles.nav}>
									Написать статью
								</Link>
								<button onClick={onClickLogout} className={styles.nav}>
									Выйти
								</button>
							</>
						) : (
							<>
								<Link to='/login' className={styles.nav}>
									Войти
								</Link>
								<Link to='/register' className={styles.nav}>
									Создать аккаунт
								</Link>
							</>
						)}
					</div>
				</div>
			</Container>
		</div>
	)
}
