import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	headerData: null,
	footerData: null
}

const LayoutSlice = createSlice({
	name: 'LayoutData',
	initialState,
	reducers: {
		setHeaderAndFooterData: (state, { payload }) => {
			state.headerData = payload.find(item => item.title === 'header')
			state.footerData = payload.find(item => item.title === 'footer')
		}
	}
})

export const { setHeaderAndFooterData } = LayoutSlice.actions
export default LayoutSlice.reducer
