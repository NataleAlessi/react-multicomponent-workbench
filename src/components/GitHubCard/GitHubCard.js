import { useState } from 'react';
import './GitHubCard.css';
import axios from 'axios';

const GitHubCard = () => {

	const [response, setResponse] = useState({})

	// const getResponse = async () => {
	// 	let res = await axios.get(`https://api.github.com/users/NataleAlessi`);
	// 	let { data } = res.data;
	// 	setResponse({ reponse: data });
	// 	return {data}
	// };

	return (
		<div className='GitHubCard'>
			<p> GitHubCard here! </p>
			<p> NAME SLOT ___  </p>
			<p> SITE SLOT ___ </p>
			<p> IMAGE SLOT ___ </p>
		</div>
	);

}

export default GitHubCard;