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
						<div>BIRD BLOG</div>
					</Link>
					<div className={styles.buttons}>
						<div className={styles.links}>
							<Link to='/' className={styles.nav}>
								Главная
							</Link>
							<Link to='/posts' className={styles.nav}>
								Все статьи
							</Link>
							<Link to='/about' className={styles.nav}>
								О нас
							</Link>
						</div>
						<span className={styles.line}>|</span>
						{isAuth ? (
							<div className={styles.auth}>
								<Link to='/posts/me' className={styles.nav}>
									Мои статьи
								</Link>
								<Link to='/add-post' className={styles.nav}>
									Написать статью
								</Link>
								<button onClick={onClickLogout} className={styles.nav}>
									Выйти
								</button>
							</div>
						) : (
							<div className={styles.auth}>
								<Link to='/login' className={styles.nav}>
									Войти
								</Link>
								<Link to='/register' className={styles.nav}>
									Создать аккаунт
								</Link>
							</div>
						)}
					</div>
				</div>
			</Container>
		</div>
	)
}
