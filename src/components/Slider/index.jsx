import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import styles from './Slider.module.scss'
import Container from '@mui/material/Container'
import clsx from 'clsx'

export const Slider = props => {
	const { isBottom } = props

	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 4000,
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
								{isBottom ? (
									<>
										<h2
											className={clsx(styles.title, {
												[styles.titleBottom]: isBottom
											})}
										>
											Наша платформа о птицах - это настоящий путеводитель в
											мире пернатых
										</h2>

										<p
											className={clsx(styles.text, {
												[styles.textBottom]: isBottom
											})}
										>
											Подготовьтесь к невероятным фотографиям, захватывающим
											историям и уникальным знаниям, которые помогут вам понять
											и полюбить этих прекрасных созданий.
										</p>
									</>
								) : (
									<>
										<h2
											className={clsx(styles.title, {
												[styles.titleBottom]: isBottom
											})}
										>
											Исследуйте мир птиц на нашей открытой платформе статей
										</h2>

										<p
											className={clsx(styles.text, {
												[styles.textBottom]: isBottom
											})}
										>
											Погрузитесь в удивительное и разнообразное царство птиц
											мира с помощью нашей платформы. Увидьте уникальные виды,
											изучайте их поведение и особенности, и делитесь своими
											собственными открытиями с сообществом.
										</p>
									</>
								)}
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
								{isBottom ? (
									<>
										<h2
											className={clsx(styles.title, {
												[styles.titleBottom]: isBottom
											})}
										>
											Изучите удивительный мир птиц на нашей платформе
										</h2>

										<p
											className={clsx(styles.text, {
												[styles.textBottom]: isBottom
											})}
										>
											Каждая статья открывает новую главу в истории этих
											удивительных созданий, вы узнаете о самых разных видах, их
											поведении и их местах обитания.
										</p>
									</>
								) : (
									<>
										<h2
											className={clsx(styles.title, {
												[styles.titleBottom]: isBottom
											})}
										>
											Начните своё путешествие по миру птиц
										</h2>

										<p
											className={clsx(styles.text, {
												[styles.textBottom]: isBottom
											})}
										>
											Раскройте великолепие птичьих миграций, редкие виды и
											изысканные оперения нашей открытой платформы статей. Здесь
											вы найдете отличный источник инсайтов и информации о
											птицах со всего мира. Откройте список статей и начните
											захватывающее путешествие по увлекательному миру птиц.
										</p>
									</>
								)}
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
								{isBottom ? (
									<>
										<h2
											className={clsx(styles.title, {
												[styles.titleBottom]: isBottom
											})}
										>
											Освободите свою дикую сторону с нашими статьями о птицах
										</h2>

										<p
											className={clsx(styles.text, {
												[styles.textBottom]: isBottom
											})}
										>
											Узнайте о жизни необычных и экзотических птиц через
											уникальные истории, о которых вы никогда не слышали ранее.
											Откройте для себя их удивительные способности и
											разнообразие, которое предлагает мир птиц.
										</p>
									</>
								) : (
									<>
										<h2
											className={clsx(styles.title, {
												[styles.titleBottom]: isBottom
											})}
										>
											Изучите мир птиц с нашим набором статей
										</h2>

										<p
											className={clsx(styles.text, {
												[styles.textBottom]: isBottom
											})}
										>
											Проведите время, исследуя фотографии впечатляющих птиц, а
											также читая информативные и увлекательные статьи,
											написанные нашими экспертами. Наша открытая платформа
											статей дает вам возможность не только узнать больше о
											птицах, но и делиться своими знаниями и фотографиями с
											другими птицелюбителями со всего мира
										</p>
									</>
								)}
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
								{isBottom ? (
									<>
										<h2
											className={clsx(styles.title, {
												[styles.titleBottom]: isBottom
											})}
										>
											Проведите время с природой, не выходя из дома, благодаря
											нашей платформе
										</h2>

										<p
											className={clsx(styles.text, {
												[styles.textBottom]: isBottom
											})}
										>
											Дайте себе возможность узнать больше о мире птиц,
											наблюдать их в их естественной среде обитания, а также
											узнать о приемах их охраны и сохранения
										</p>
									</>
								) : (
									<>
										<h2
											className={clsx(styles.title, {
												[styles.titleBottom]: isBottom
											})}
										>
											Раскройте все тайны птичьего мира
										</h2>

										<p
											className={clsx(styles.text, {
												[styles.textBottom]: isBottom
											})}
										>
											Возможности нашей открытой платформы статей бесконечны -
											от уникальных фотографий и подробных описаний различных
											видов птиц до интересных историй и рекомендаций по
											наблюдению за птицами в дикой природе.
										</p>
									</>
								)}
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
								{isBottom ? (
									<>
										<h2
											className={clsx(styles.title, {
												[styles.titleBottom]: isBottom
											})}
										>
											Добро пожаловать в виртуальное будущее птиц
										</h2>

										<p
											className={clsx(styles.text, {
												[styles.textBottom]: isBottom
											})}
										>
											Наш сайт предлагает вам уникальную возможность погрузиться
											в удивительный мир этих фееричных созданий. Статьи на
											нашей платформе охватывают все: от миграции до развития
											перьев. Подготовьтесь к захватывающему приключению!
										</p>
									</>
								) : (
									<>
										<h2
											className={clsx(styles.title, {
												[styles.titleBottom]: isBottom
											})}
										>
											Найдётся место для каждого
										</h2>

										<p
											className={clsx(styles.text, {
												[styles.textBottom]: isBottom
											})}
										>
											Здесь у нас есть место для всех - от новичков, только
											заинтересовавшихся птицами, до опытных орнитологов,
											которые ищут продолжения своих исследований и хотят
											поделиться своими находками. Мы поощряем дружелюбие,
											сотрудничество и обмен знаниями.
										</p>
									</>
								)}
							</Container>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	)
}
