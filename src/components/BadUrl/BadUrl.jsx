const BadUrl = () => {
	return (
		<p className="main-section">
			Error 404: <br /> {`${window.location.href}`} <br /> not found on
			server
		</p>
	);
};

export default BadUrl;
