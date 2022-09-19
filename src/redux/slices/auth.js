import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	loginModalCondition: false
}

const UserAuthSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginModalHandler: (state, action) => {
			state.loginModalCondition = action.payload
		}
	}
})

export const { loginModalHandler } = UserAuthSlice.actions
export default UserAuthSlice.reducer
