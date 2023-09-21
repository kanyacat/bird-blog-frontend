import styles from './Main.module.scss'
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container'

export const Main = () => {
	return (
		<div className={styles.root}>
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
