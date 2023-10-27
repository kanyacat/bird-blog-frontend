import React from 'react'
import styles from './TagsBlock.module.scss'
import { Tag } from './Tag'

export const TagsBlock = ({ items, isLoading = true }) => {
	return (
		<ul className={styles.root}>
			<li className={styles.title}>Последние теги</li>
			{(isLoading ? [...Array(5)] : items).map((name, i) => (
				<Tag name={name} isLoading={isLoading} />
			))}
		</ul>
	)
}
