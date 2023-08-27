import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../axios'

export const fetchRegister = createAsyncThunk(
	'auth/fetchRegister',
	async params => {
		const { data } = await axios.post('/auth/register', params)
		return data
	}
)

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async params => {
	const { data } = await axios.post(`/auth/login/`, params)
	return data
})

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
	const { data } = await axios.post('/auth/me')
	return data
})

const initialState = {
	data: null,
	status: 'loading'
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: state => {
			state.data = null
		}
	},
	extraReducers: {
		[fetchAuth.pending]: state => {
			state.data = null
			state.status = 'loading'
		},
		[fetchAuth.fulfilled]: (state, action) => {
			state.data = action.payload
			state.status = 'success'
		},
		[fetchAuthMe.rejected]: (state, action) => {
			state.data = null
			state.status = 'error'
		},
		[fetchAuthMe.pending]: state => {
			state.data = null
			state.status = 'loading'
		},
		[fetchAuthMe.fulfilled]: (state, action) => {
			state.data = action.payload
			state.status = 'success'
		},
		[fetchAuthMe.rejected]: (state, action) => {
			state.data = null
			state.status = 'error'
		},
		[fetchRegister.pending]: state => {
			state.data = null
			state.status = 'loading'
		},
		[fetchRegister.fulfilled]: (state, action) => {
			state.data = action.payload
			state.status = 'success'
		},
		[fetchRegister.rejected]: (state, action) => {
			state.data = null
			state.status = 'error'
		}
	}
})

export const isAuthSelector = state => Boolean(state.auth.data)

export const authReducer = authSlice.reducer

export const { logout } = authSlice.actions
