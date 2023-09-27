import React from 'react'
import { Link } from 'react-router-dom'
import styles from './TagsBlock.module.scss'

export const TagsBlock = ({ items, isLoading = true }) => {
	return (
		<ul className={styles.root}>
			<Link className={styles.link} to={`/`}>
				<li>Все статьи</li>
			</Link>
			{(isLoading ? [...Array(5)] : items).map((name, i) => (
				<Link className={styles.link} to={`/tag/${name}`}>
					<li key={i}>#{name}</li>
				</Link>
			))}
		</ul>
	)
}

{
	/*<ListItem key={i} disablePadding>*/
}
{
	/*	<ListItemButton>*/
}
{
	/*		<ListItemIcon>*/
}
{
	/*			<TagIcon />*/
}
{
	/*		</ListItemIcon>*/
}
{
	/*		{isLoading ? (*/
}
{
	/*			<Skeleton width={100} />*/
}
{
	/*		) : (*/
}
{
	/*			<ListItemText primary={name} />*/
}
{
	/*		)}*/
}
{
	/*	</ListItemButton>*/
}
{
	/*</ListItem>*/
}