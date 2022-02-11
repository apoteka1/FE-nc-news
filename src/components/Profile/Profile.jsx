import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/User";
import "./Profile.css";

const Profile = () => {
	const { user, setUser } = useContext(UserContext);
	const logOut = () => {
		setUser({ username: "", name: "", avatar_url: "" });
	};

	return user.username ? (
		<div className="main-section no-border--rounded profile--card">
			<button
				onClick={() => logOut()}
				className="logout-button no-border--rounded background--white text--pink ">
				logout
			</button>
			<p className="background--white profile-block no-border--rounded ">
				{user.name}
				<br></br>
				<img id="profile-pic" src={user.avatar_url} />
				<br></br>
				username: {user.username}
			</p>
		</div>
	) : (
		<div className="main-section no-border--rounded">logged out...</div>
	);

	// const handleChange = (e) => {
	// 	setUserNameInput(e.target.value);
	// };

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	getUser(userNameInput)
	// 		.then((res) => {
	// 			setUser(res);
	// 			setIsErr(false);
	// 		})
	// 		.catch(() => setIsErr(true));

	// 	setUserNameInput("");
	// };

	// return isLoggedIn ? (
	// 	<div>
	//         <br/>
	// 		<button onClick={() => logOut()}>logout</button>
	// 		<p>username: {user.username}</p>
	// 		<img
	// 			alt="profile pic"
	// 			src={user.avatar_url}
	// 			className="profile__pic"
	// 		/>
	// 		<p>kudos: {user.kudos}</p>
	// 		<p>NCM orders: {user.items_ordered} </p>
	// 	</div>
	// ) : (
	// 	<div>
	//          <br/>
	// 		<form onSubmit={handleSubmit}>
	// 			<input
	// 				id="profile__login"
	// 				type="text"
	// 				value={userNameInput}
	// 				onChange={handleChange}
	// 				required
	// 			/>
	// 			<button type="submit">log in</button>
	// 		</form>
	// 		{isErr ? <p>"user not found" </p>: null}
	// 	</div>
	// );
};

export default Profile;
