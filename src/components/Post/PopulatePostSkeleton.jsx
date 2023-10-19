import React from 'react'
import Skeleton from '@mui/material/Skeleton'

import styles from './Post.module.scss'

export const PopulatePostSkeleton = () => {
	return (
		<div className={styles.populateSkeleton}>
			<Skeleton variant='rectangular' width='100%' height={350} />
		</div>
	)
}
