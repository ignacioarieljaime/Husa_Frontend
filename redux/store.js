import { configureStore } from '@reduxjs/toolkit'
import UserAuthSlice from './slices/auth'
import LayoutSlice from './slices/layout'
import CompareSlice from './slices/compare'

export const store = configureStore({
	devTools: process.env.NODE_ENV !== 'production',
	reducer: {
		userAuth: UserAuthSlice,
		layoutData: LayoutSlice,
		compareData: CompareSlice
	}
})
