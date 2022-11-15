import { combineReducers } from '@reduxjs/toolkit'
import UserAuthSlice from './slices/auth'
import LayoutSlice from './slices/layout'
import CompareSlice from './slices/compare'

export const rootReducer = combineReducers({
	userAuth: UserAuthSlice,
	layoutData: LayoutSlice,
	compareData: CompareSlice
})
