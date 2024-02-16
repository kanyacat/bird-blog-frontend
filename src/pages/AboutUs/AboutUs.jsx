import React from 'react'
import Container from '@mui/material/Container'
import styles from './AboutUs.module.scss'

export const AboutUs = () => {
	window.scrollTo(0, 0)

	return (
		<div className={styles.root}>
			<div className={styles.main}>
				<h1>О BIRD BLOG</h1>
			</div>
			<Container maxWidth='lg' className={styles.container}>
				<div>
					<h1 className={styles.title}>Мы действительно любим птиц</h1>
					<p className={styles.subtext}>
						Станьте частью дружного сообщества, открывайте для себя новую
						информацию о птицах, пишите уникальные статьи, изучайте материалы и
						обсуждайте их с другими!
					</p>
				</div>
				<div className={styles.info}>
					<div className={styles.block}>
						<div className={styles.text}>
							<h2>Удивительный мир птиц</h2>
							<p>
								BIRD BLOG посвящен уникальному и удивительному миру пернатых
								созданий. Мы стараемся донести до наших посетителей информацию о
								разнообразии и красоте птиц, их поведении, привычках,
								особенностях различных видов и их местах обитания.
							</p>
							<p>
								Мы верим, что птицы являются одним из самых интересных и
								красивых видов животных на планете, и поэтому с удовольствием
								делаем все возможное для того, чтобы поделиться нашими знаниями
								и информацией о них с вами.
							</p>
						</div>
						<img
							src='https://oir.mobi/uploads/posts/2021-04/1619672090_29-oir_mobi-p-milie-ptichki-zhivotnie-krasivo-foto-30.jpg'
							alt='птица'
						/>
					</div>
					<div className={styles.block}>
						<img
							src='https://www.fonstola.ru/images/201308/fonstola.ru_103489.jpg'
							alt='птица'
						/>
						<div className={styles.text}>
							<h2>Большое количество материала</h2>
							<p>
								Мы уделяем особое внимание образованию и пропаганде охраны птиц
								и их естественной среды обитания, публикуем прекрасные
								фотографии и видео, позволяющие вам насладиться великолепием
								природы и узнать больше о разнообразии птичьего мира.
							</p>
							<p>
								Наша цель - повышать осведомленность людей о важности сохранения
								биоразнообразия и защите птиц от вымирания.
							</p>
						</div>
					</div>
					<div className={styles.block}>
						<div className={styles.text}>
							<h2>Простор для творчества</h2>
							<p>
								Одной из особенностей нашего сайта является возможность
								публикации своих собственных статей. У нас все желающие могут
								поделиться своими наблюдениями, опытом содержания или разведения
								определенных видов птиц.
							</p>
							<p>
								Мы предлагаем уникальную платформу для обмена знаниями и опытом,
								где каждый автор может стать уважаемым экспертом в своей
								области.
							</p>
						</div>
						<img
							src='https://naturfotografen-forum.de/data/o/127/638796/image::Harald_Klier.jpgbelenkaya-ptichka-vkontakte-18.jpg'
							alt='птицы'
						/>
					</div>
				</div>
				<h1 className={styles.title}>
					<p> СТАНЬ ЧАСТЬЮ НАШЕЙ ДРУЖНОЙ СЕМЬИ ПТИЦЕЛЮБОВ</p>
				</h1>
			</Container>
		</div>
	)
}
