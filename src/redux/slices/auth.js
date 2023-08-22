import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../axios'

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async params => {
	const { data } = await axios.post(`/auth/login/`, params)
	return data
})

const initialState = {
	data: null,
	status: 'loading'
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducer: {},
	extraReducers: {
		[fetchAuth.pending]: state => {
			state.data = null
			state.status = 'loading'
		},
		[fetchAuth.fulfilled]: (state, action) => {
			state.data = action.payload
			state.status = 'success'
		},
		[fetchAuth.rejected]: (state, action) => {
			state.data = null
			state.status = 'error'
		}
	}
})

export const isAuthSelector = state => Boolean(state.auth.data)

export const authReducer = authSlice.reducer
