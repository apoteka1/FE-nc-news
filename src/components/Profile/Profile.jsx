// import { useState, useEffect, useContext } from "react";
// import { UserContext } from "../../contexts/User";
// import { getUser } from "../utils/api";
// import { Link } from "react-router-dom";

const Profile = () => {
return <p>under construction...</p>

	// const { user, setUser} = useContext(UserContext);

	// const [userNameInput, setUserNameInput] = useState("");
	// const [isErr, setIsErr] = useState(false);

	// const handleChange = (e) => {
	// 	setUserNameInput(e.target.value);
	// };

	// const logOut = () => {
	// 	setUser(null);
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