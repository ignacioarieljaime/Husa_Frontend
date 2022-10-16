import { combineReducers } from '@reduxjs/toolkit'
import UserAuthSlice from './slices/auth'
import LayoutSlice from './slices/layout'


export const rootReducer = combineReducers({
	userAuth: UserAuthSlice,
	layoutData: LayoutSlice
})
