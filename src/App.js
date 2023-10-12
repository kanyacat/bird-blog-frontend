import { Header } from './components'
import { AddPost, FullPost, Home, Login, Registration } from './pages'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchAuthMe, isAuthSelector } from './redux/slices/auth'
import { AboutUs } from './pages/AboutUs/AboutUs'
import { AllPosts } from './pages/AllPosts/AllPosts'

function App() {
	const dispatch = useDispatch()
	const isAuth = useSelector(isAuthSelector)

	useEffect(() => {
		dispatch(fetchAuthMe())
	}, [])

	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/posts/' element={<AllPosts />} />
				<Route path='/posts/:id' element={<FullPost />} />
				<Route path='/posts/:id/edit' element={<AddPost />} />
				<Route path='/tag/:tag' element={<AllPosts />} />
				<Route path='/add-post' element={<AddPost />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Registration />} />
				<Route path='/about' element={<AboutUs />} />
			</Routes>
		</>
	)
}

export default App
