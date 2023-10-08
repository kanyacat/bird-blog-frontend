import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import styles from './Slider.module.scss'
import Container from '@mui/material/Container'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

export const Slider = props => {
	const { isBottom } = props

	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false
				}}
				pagination={{
					clickable: true
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className={styles.swiper}
			>
				<SwiperSlide
					className={clsx(styles.swiperSlide, {
						[styles.swiperSlideBottom]: isBottom
					})}
				>
					<div className={clsx(styles.root, { [styles.rootBottom]: isBottom })}>
						<div className={styles.text}>
							<Container maxWidth='lg'>
								<Link
									to='/tag/love'
									className={clsx(styles.tag, { [styles.tagBottom]: isBottom })}
								>
									#love
								</Link>
								<h2
									className={clsx(styles.title, {
										[styles.titleBottom]: isBottom
									})}
								>
									Richird Norton photorealistic rendering as real photos
								</h2>

								<p
									className={clsx(styles.text, {
										[styles.textBottom]: isBottom
									})}
								>
									Progressively incentivize cooperative systems through
									technically sound functionalities. The credibly productivate
									seamless data. Progressively incentivize cooperative systems
									through technically sound functionalities. The credibly
									productivate seamless data.
								</p>
							</Container>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide
					className={clsx(styles.swiperSlide, {
						[styles.swiperSlideBottom]: isBottom
					})}
				>
					<div className={clsx(styles.root, { [styles.rootBottom]: isBottom })}>
						<div className={styles.text}>
							<Container maxWidth='lg'>
								<Link
									to='/tag/love'
									className={clsx(styles.tag, { [styles.tagBottom]: isBottom })}
								>
									#love
								</Link>
								<h2
									className={clsx(styles.title, {
										[styles.titleBottom]: isBottom
									})}
								>
									Richird Norton photorealistic rendering as real photos
								</h2>

								<p
									className={clsx(styles.text, {
										[styles.textBottom]: isBottom
									})}
								>
									Progressively incentivize cooperative systems through
									technically sound functionalities. The credibly productivate
									seamless data. Progressively incentivize cooperative systems
									through technically sound functionalities. The credibly
									productivate seamless data.
								</p>
							</Container>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide
					className={clsx(styles.swiperSlide, {
						[styles.swiperSlideBottom]: isBottom
					})}
				>
					<div className={clsx(styles.root, { [styles.rootBottom]: isBottom })}>
						<div className={styles.text}>
							<Container maxWidth='lg'>
								<Link
									to='/tag/love'
									className={clsx(styles.tag, { [styles.tagBottom]: isBottom })}
								>
									#love
								</Link>
								<h2
									className={clsx(styles.title, {
										[styles.titleBottom]: isBottom
									})}
								>
									Richird Norton photorealistic rendering as real photos
								</h2>

								<p
									className={clsx(styles.text, {
										[styles.textBottom]: isBottom
									})}
								>
									Progressively incentivize cooperative systems through
									technically sound functionalities. The credibly productivate
									seamless data. Progressively incentivize cooperative systems
									through technically sound functionalities. The credibly
									productivate seamless data.
								</p>
							</Container>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide
					className={clsx(styles.swiperSlide, {
						[styles.swiperSlideBottom]: isBottom
					})}
				>
					<div className={clsx(styles.root, { [styles.rootBottom]: isBottom })}>
						<div className={styles.text}>
							<Container maxWidth='lg'>
								<Link
									to='/tag/love'
									className={clsx(styles.tag, { [styles.tagBottom]: isBottom })}
								>
									#love
								</Link>
								<h2
									className={clsx(styles.title, {
										[styles.titleBottom]: isBottom
									})}
								>
									Richird Norton photorealistic rendering as real photos
								</h2>

								<p
									className={clsx(styles.text, {
										[styles.textBottom]: isBottom
									})}
								>
									Progressively incentivize cooperative systems through
									technically sound functionalities. The credibly productivate
									seamless data. Progressively incentivize cooperative systems
									through technically sound functionalities. The credibly
									productivate seamless data.
								</p>
							</Container>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide
					className={clsx(styles.swiperSlide, {
						[styles.swiperSlideBottom]: isBottom
					})}
				>
					<div className={clsx(styles.root, { [styles.rootBottom]: isBottom })}>
						<div className={styles.text}>
							<Container maxWidth='lg'>
								<Link
									to='/tag/love'
									className={clsx(styles.tag, { [styles.tagBottom]: isBottom })}
								>
									#love
								</Link>
								<h2
									className={clsx(styles.title, {
										[styles.titleBottom]: isBottom
									})}
								>
									Richird Norton photorealistic rendering as real photos
								</h2>

								<p
									className={clsx(styles.text, {
										[styles.textBottom]: isBottom
									})}
								>
									Progressively incentivize cooperative systems through
									technically sound functionalities. The credibly productivate
									seamless data. Progressively incentivize cooperative systems
									through technically sound functionalities. The credibly
									productivate seamless data.
								</p>
							</Container>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	)
}
