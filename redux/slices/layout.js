import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	headerData: null,
	footerData: null
}

const LayoutSlice = createSlice({
	name: 'LayoutData',
	initialState,
	reducers: {
		setHeaderData: (state, action) => {
			state.headerData = action.payload
		},
		setFooterData: (state, action) => {
			state.footerData = action.payload
		}
	}
})

export const { setHeaderData, setFooterData } = LayoutSlice.actions
export default LayoutSlice.reducer
