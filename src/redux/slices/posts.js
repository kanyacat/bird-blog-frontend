import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../axios'

export const fetchPosts = createAsyncThunk(
	'posts/fetchPosts',
	async sortProperty => {
		const { data } = await axios.get('/posts', { params: sortProperty })
		return data
	}
)

export const fetchPostsByTag = createAsyncThunk(
	'posts/fetchPostsByTag',
	async tag => {
		const { data } = await axios.get(`/tag/${tag}`, { params: tag })
		return data
	}
)

export const fetchTags = createAsyncThunk('posts/fetchTags', async () => {
	const { data } = await axios.get('/tags')
	return data
})

export const fetchComments = createAsyncThunk(
	'posts/fetchComments',
	async () => {
		const { data } = await axios.get('/comments')
		return data
	}
)

export const fetchRemovePost = createAsyncThunk(
	'posts/fetchRemovePost',
	async id => await axios.delete(`/posts/${id}`)
)

const initialState = {
	posts: {
		items: [],
		status: 'loading'
	},
	tags: {
		items: [],
		status: 'loading'
	},
	comments: {
		items: [],
		status: 'loading'
	}
}

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducer: {},
	extraReducers: {
		//получение статей
		[fetchPosts.pending]: state => {
			state.posts.items = []
			state.posts.status = 'loading'
		},
		[fetchPosts.fulfilled]: (state, action) => {
			state.posts.items = action.payload
			state.posts.status = 'success'
		},
		[fetchPosts.rejected]: (state, action) => {
			state.posts.items = []
			state.posts.status = 'error'
		},
		//получение постов по тегу
		[fetchPostsByTag.pending]: state => {
			state.posts.items = []
			state.posts.status = 'loading'
		},
		[fetchPostsByTag.fulfilled]: (state, action) => {
			state.posts.items = action.payload
			state.posts.status = 'success'
		},
		[fetchPostsByTag.rejected]: (state, action) => {
			state.posts.items = []
			state.posts.status = 'error'
		},
		//получение тегов
		[fetchTags.pending]: state => {
			state.tags.items = []
			state.tags.status = 'loading'
		},
		[fetchTags.fulfilled]: (state, action) => {
			state.tags.items = action.payload
			state.tags.status = 'success'
		},
		[fetchTags.rejected]: (state, action) => {
			state.tags.items = []
			state.tags.status = 'error'
		},
		//получение комментариев
		[fetchComments.pending]: state => {
			state.comments.items = []
			state.comments.status = 'loading'
		},
		[fetchComments.fulfilled]: (state, action) => {
			state.comments.items = action.payload
			state.comments.status = 'success'
		},
		[fetchComments.rejected]: (state, action) => {
			state.comments.items = []
			state.comments.status = 'error'
		},
		//удаление статьи
		[fetchRemovePost.pending]: (state, action) => {
			state.posts.items = state.posts.items.filter(
				obj => obj._id !== action.meta.arg
			)
		}
	}
})

export const postsReducer = postsSlice.reducer
