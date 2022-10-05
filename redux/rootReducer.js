import { combineReducers } from '@reduxjs/toolkit'
import UserAuthSlice from './slices/auth'

export const rootReducer = combineReducers({
	userAuth: UserAuthSlice
})
