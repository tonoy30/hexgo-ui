import SignUp from "@components/SignUp";
import { useAppDispatch } from "@hooks/redux";
import { hideMenu } from "@store/features/routeSlice";
import React, { useEffect } from "react";

const Login = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(hideMenu(true));
		return () => {
			dispatch(hideMenu(false));
		};
	}, []);

	return (
		<div className="flex-1 mx-auto bg-gray-100 p-14">
			<SignUp />
		</div>
	);
};

export default Login;
