import styles from './Main.module.scss'
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container'
import clsx from 'clsx'

export const Main = props => {
	const { isBottom } = props

	return (
		<div className={clsx(styles.root, { [styles.rootBottom]: isBottom })}>
			<div className={styles.text}>
				<Container maxWidth='lg'>
					<Link to='/tag/love' className={styles.tag}>
						#love
					</Link>
					<h2>Richird Norton photorealistic rendering as real photos</h2>

					<p>
						Progressively incentivize cooperative systems through technically
						sound functionalities. The credibly productivate seamless data.
						Progressively incentivize cooperative systems through technically
						sound functionalities. The credibly productivate seamless data.
					</p>
				</Container>
			</div>
		</div>
	)
}
