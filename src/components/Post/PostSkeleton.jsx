import React from 'react'
import Stack from '@mui/material/Stack'
import Skeleton from '@mui/material/Skeleton'

import styles from './Post.module.scss'

export const PostSkeleton = () => {
	return (
		<div className={styles.skeleton}>
			<Stack spacing={1}>
				<Skeleton variant='rectangular' width='100%' height={280} />
				<div className={styles.skeletonContent}>
					<div className={styles.skeletonUser}>
						<Skeleton
							variant='circular'
							width={33}
							height={35}
							style={{ marginRight: 20 }}
						/>
						<div className={styles.skeletonUserDetails}>
							<Skeleton variant='text' width={60} height={20} />
							<Skeleton variant='text' width={100} height={15} />
						</div>
					</div>
					<div>
						<Skeleton variant='text' width='100%' height={45} />
						<Skeleton variant='text' width='100%' height={80} />
					</div>
				</div>
			</Stack>
		</div>
	)
}
