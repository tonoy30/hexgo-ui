import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store/store";

export interface RouteState {
	currentPath: string;
	hideMenu: boolean;
}
const initialState: RouteState = {
	currentPath: "/",
	hideMenu: false,
};

export const routeSlice = createSlice({
	name: "route",
	initialState,
	reducers: {
		hideMenu: (state: RouteState, action: PayloadAction<boolean>) => {
			state.hideMenu = action.payload;
		},
	},
});

export const { hideMenu } = routeSlice.actions;
export const selectHideMenu = (state: RootState) => state.route.hideMenu;
export default routeSlice.reducer;
