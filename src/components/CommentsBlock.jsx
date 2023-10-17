import React from 'react'

import { SideBlock } from './SideBlock'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import Skeleton from '@mui/material/Skeleton'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material'

export const CommentsBlock = ({ items, children, isLoading = true }) => {
	const theme = createTheme({
		typography: {
			fontFamily: `Lora,serif`,
			fontSize: 17
		}
	})

	return (
		<ThemeProvider theme={theme}>
			<SideBlock title='Комментарии' disableGutters={true}>
				<List>
					{(isLoading ? [...Array(5)] : items ? items : [...Array(5)]).map(
						(obj, index) => (
							<React.Fragment key={index} style={{ fontFamily: 'Lora, serif' }}>
								<ListItem alignItems='flex-start'>
									<ListItemAvatar>
										{isLoading ? (
											<Skeleton variant='circular' width={40} height={40} />
										) : (
											<Avatar
												alt={obj.user.fullName}
												src={obj.user.avatarUrl}
											/>
										)}
									</ListItemAvatar>
									{isLoading ? (
										<div style={{ display: 'flex', flexDirection: 'column' }}>
											<Skeleton variant='text' height={25} width={120} />
											<Skeleton variant='text' height={18} width={230} />
										</div>
									) : (
										<ListItemText
											primary={obj.user.fullName}
											secondary={obj.text}
										/>
									)}
								</ListItem>
								<Divider variant='inset' component='li' />
							</React.Fragment>
						)
					)}
				</List>
				{children}
			</SideBlock>
		</ThemeProvider>
	)
}
