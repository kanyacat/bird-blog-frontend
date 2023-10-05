import React from 'react'
import styles from './Footer.module.scss'
import Container from '@mui/material/Container'

export const Footer = () => {
	return (
		<>
			<div className={styles.root}>
				<Container>
					<div className={styles.blocks}>
						<div className={styles.block}>
							<h2>Контакты</h2>
							<a href='mailto:kanyakancat@gmail.com'>kanyakancat@gmail.com</a>
							<a href='tel:+12345678910'>+1 (234) 567 89 10</a>
						</div>
						<div className={styles.block}>
							<h2>О сервисе</h2>
							<a href=''>О нас</a>
							<a href=''>Наши проекты</a>
							<a href=''>Партнеры</a>
							<a href='https://www.figma.com/file/rI3ISotdjRjudr3VlKx1oN/RUNO-Minimal-Blog-Template-(Community)?type=design&t=Wsoybicuo9JGvspL-6'>
								Макет сайта
							</a>
						</div>
						<div className={styles.block}>
							<h2>Наш адрес</h2>
							<p className={styles.address}>
								19 Птичья улица, 18001, Москва, Россия
							</p>
						</div>
						<div className={styles.block}>
							<h2>Социальные сети</h2>
							<div className={styles.social}>
								<a href=''>111111</a>
								<a href=''>222222</a>
								<a href=''>3333333</a>
								<a href=''>4444444</a>
							</div>
						</div>
					</div>
				</Container>
			</div>
			<div className={styles.bottom}>
				<Container>
					<p>2023 | KAN Publisher Studio</p>
				</Container>
			</div>
		</>
	)
}
