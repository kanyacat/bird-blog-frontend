import React from 'react'
import { Link } from 'react-router-dom'
import styles from './TagsBlock.module.scss'
import { TagsSkeleton } from './TagsSkeleton'

export const Tag = ({ isLoading, name }) => {
	if (isLoading) return <TagsSkeleton />

	return (
		<Link className={styles.link} to={`/tag/${name}`}>
			<li>#{name}</li>
		</Link>
	)
}
