import React from 'react'
import Stack from '@mui/material/Stack'
import Skeleton from '@mui/material/Skeleton'

import styles from './TagsBlock.module.scss'

export const TagsSkeleton = () => {
	return (
		<div className={styles.skeleton}>
			<Stack spacing={10}>
				<Skeleton variant='text' width={60} height={25} />
			</Stack>
		</div>
	)
}
