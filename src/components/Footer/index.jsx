import React from 'react'
import styles from './Footer.module.scss'
import Container from '@mui/material/Container'
import { Link } from 'react-router-dom'

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
							<Link to='/about'>О нас</Link>
							<Link to={'/'}>Список статей</Link>
							<a
								target={'_blank'}
								href='https://www.figma.com/file/rI3ISotdjRjudr3VlKx1oN/RUNO-Minimal-Blog-Template-(Community)?type=design&t=Wsoybicuo9JGvspL-6'
							>
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
								<Link to={'/'}>
									<svg
										width='30'
										height='30'
										viewBox='0 0 48 48'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM25.2555 31.8761C25.2555 31.8761 25.7175 31.8257 25.9541 31.5762C26.1707 31.3476 26.1632 30.9162 26.1632 30.9162C26.1632 30.9162 26.1344 28.9018 27.0873 28.6043C28.0264 28.3118 29.2321 30.5524 30.5118 31.414C31.4784 32.0654 32.2121 31.9228 32.2121 31.9228L35.6316 31.8761C35.6316 31.8761 37.4196 31.7679 36.5719 30.3877C36.5018 30.2746 36.0773 29.3664 34.0302 27.5006C31.8853 25.5477 32.1733 25.8635 34.7551 22.4849C36.3278 20.4274 36.9563 19.1713 36.7597 18.6343C36.5732 18.1205 35.4162 18.2569 35.4162 18.2569L31.5673 18.2803C31.5673 18.2803 31.2818 18.2422 31.0702 18.3663C30.8636 18.488 30.7296 18.7719 30.7296 18.7719C30.7296 18.7719 30.1211 20.3635 29.3085 21.7179C27.5944 24.5743 26.9095 24.7254 26.629 24.5485C25.9767 24.1343 26.1394 22.8868 26.1394 22.0006C26.1394 19.2316 26.5677 18.0775 25.3068 17.7788C24.8886 17.6793 24.5806 17.6141 23.51 17.6031C22.1365 17.5896 20.9745 17.608 20.3159 17.9239C19.8777 18.134 19.5396 18.6035 19.7462 18.6306C20.0004 18.6637 20.5764 18.783 20.8819 19.191C21.2763 19.7183 21.2625 20.9006 21.2625 20.9006C21.2625 20.9006 21.4892 24.1601 20.7329 24.5644C20.2145 24.8422 19.5033 24.2756 17.9745 21.6835C17.192 20.3562 16.601 18.8887 16.601 18.8887C16.601 18.8887 16.487 18.6146 16.2829 18.4671C16.0363 18.2889 15.6919 18.2336 15.6919 18.2336L12.0346 18.2569C12.0346 18.2569 11.4849 18.2717 11.2833 18.5064C11.1043 18.7141 11.2695 19.1455 11.2695 19.1455C11.2695 19.1455 14.1331 25.7222 17.376 29.037C20.3497 32.0752 23.7254 31.8761 23.7254 31.8761H25.2555Z'
											fill='#E5E5E5'
										/>
									</svg>
								</Link>
								<Link to='/'>
									<svg
										width='30'
										height='30'
										viewBox='0 0 48 48'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z'
											fill='#E5E5E5'
										/>
										<path
											d='M36.265 18.0732C35.9706 16.9422 35.1031 16.0516 34.0016 15.7493C32.0054 15.2 24 15.2 24 15.2C24 15.2 15.9946 15.2 13.9983 15.7493C12.8967 16.0516 12.0292 16.9422 11.7348 18.0732C11.2 20.1231 11.2 24.4 11.2 24.4C11.2 24.4 11.2 28.6768 11.7348 30.7268C12.0292 31.8578 12.8967 32.7484 13.9983 33.0508C15.9946 33.6 24 33.6 24 33.6C24 33.6 32.0054 33.6 34.0016 33.0508C35.1031 32.7484 35.9706 31.8578 36.265 30.7268C36.8 28.6768 36.8 24.4 36.8 24.4C36.8 24.4 36.8 20.1231 36.265 18.0732'
											fill='#212529'
										/>
										<path
											d='M21.6 28.8V20.8L28 24.8001L21.6 28.8Z'
											fill='#E5E5E5'
										/>
									</svg>
								</Link>
								<Link to='/'>
									<svg
										width='30'
										height='30'
										viewBox='0 0 48 48'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M24 47.8033C37.2548 47.8033 48 37.1022 48 23.9016C48 10.7011 37.2548 0 24 0C10.7452 0 0 10.7011 0 23.9016C0 37.1022 10.7452 47.8033 24 47.8033Z'
											fill='none'
										/>
										<path
											d='M24 0C10.7457 0 0 10.7016 0 23.9016C0 34.0328 6.32099 42.6885 15.2494 46.1705C15.0321 44.282 14.8543 41.3705 15.3284 39.3049C15.763 37.4361 18.1333 27.423 18.1333 27.423C18.1333 27.423 17.4222 25.9869 17.4222 23.882C17.4222 20.5574 19.358 18.0787 21.7679 18.0787C23.8222 18.0787 24.8099 19.6131 24.8099 21.4426C24.8099 23.4885 23.5062 26.5574 22.8148 29.4098C22.242 31.7902 24.0198 33.7377 26.3704 33.7377C30.637 33.7377 33.916 29.2525 33.916 22.8C33.916 17.0754 29.7877 13.082 23.8815 13.082C17.0469 13.082 13.037 18.177 13.037 23.4492C13.037 25.4951 13.8272 27.6984 14.8148 28.8984C15.0123 29.1344 15.0321 29.3508 14.9728 29.5869C14.7951 30.3344 14.3802 31.9672 14.3012 32.3016C14.2025 32.7344 13.9457 32.8328 13.4914 32.6164C10.4889 31.2197 8.61235 26.8721 8.61235 23.3508C8.61235 15.8164 14.1037 8.8918 24.4741 8.8918C32.7901 8.8918 39.2691 14.7934 39.2691 22.7016C39.2691 30.9443 34.0543 37.5738 26.8247 37.5738C24.3951 37.5738 22.1037 36.3148 21.3333 34.8197C21.3333 34.8197 20.1284 39.3836 19.8321 40.5049C19.2988 42.5902 17.837 45.1869 16.8494 46.7803C19.1012 47.4689 21.4716 47.8426 23.9605 47.8426C37.2148 47.8426 47.9605 37.141 47.9605 23.941C48 10.7016 37.2543 0 24 0Z'
											fill='#E5E5E5'
										/>
									</svg>
								</Link>
								<Link to='/'>
									<svg
										width='30'
										height='30'
										viewBox='0 0 48 48'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z'
											fill='url(#paint0_linear)'
										/>
										<path
											d='M8.93822 25.174C11.7438 23.6286 14.8756 22.3388 17.8018 21.0424C22.836 18.919 27.8902 16.8324 32.9954 14.8898C33.9887 14.5588 35.7734 14.2351 35.9484 15.7071C35.8526 17.7907 35.4584 19.8621 35.188 21.9335C34.5017 26.4887 33.7085 31.0283 32.935 35.5685C32.6685 37.0808 30.774 37.8637 29.5618 36.8959C26.6486 34.9281 23.713 32.9795 20.837 30.9661C19.8949 30.0088 20.7685 28.6341 21.6099 27.9505C24.0093 25.5859 26.5539 23.5769 28.8279 21.0901C29.4413 19.6088 27.6289 20.8572 27.0311 21.2397C23.7463 23.5033 20.5419 25.9051 17.0787 27.8945C15.3097 28.8683 13.2479 28.0361 11.4797 27.4927C9.89428 26.8363 7.57106 26.175 8.93806 25.1741L8.93822 25.174Z'
											fill='#212529'
										/>
										<defs>
											<linearGradient
												id='paint0_linear'
												x1='18.0028'
												y1='2.0016'
												x2='6.0028'
												y2='30'
												gradientUnits='userSpaceOnUse'
											>
												<stop stop-color='#E5E5E5' />
												<stop offset='1' stop-color='#E5E5E5' />
											</linearGradient>
										</defs>
									</svg>
								</Link>
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
