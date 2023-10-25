import React, { useEffect } from 'react'
import Container from '@mui/material/Container'
import styles from './NotFound.module.scss'

export const NotFound = props => {
	const { text, numError } = props
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className={styles.root}>
			<Container maxWidth='lg'>
				<div className={styles.text}>
					<h1 className={styles.title}>{numError}</h1>
					<h1 className={styles.title}>{text}</h1>
				</div>
			</Container>
		</div>
	)
}
