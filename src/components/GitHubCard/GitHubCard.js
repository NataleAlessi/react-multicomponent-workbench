import { useState, useEffect } from 'react';
import './GitHubCard.css';
import axios from 'axios';

const api = axios.create({
	baseURL: `https://api.github.com/users`,
	headers: {
		"Content-type": "application/json"
	}
})


// const SmallCardList = () => {

// 	const mostActiveUsersLoginName = [
// 		'fabpot',
// 		'andrew',
// 		'taylorotwell',
// 		'egoist',
// 		'HugoGiradeul'
// 	]
	
// 	return (
// 		<div>
// 			{mostActiveUsersLoginName.map((value, index) => {
// 				return (
// 					<div>
// 						<img alt='avatar' className='CardAvatar' src=''/>
// 						<div>
// 							<p className='CardName'> {value} </p>
// 							<p className='CardName'> Employed </p> 
// 						</div>
// 					</div>
// 					)
//       		})}
//     	</div>
//     )
// }


const GitHubCard = () => {

	const [response, setResponse] = useState({})

	useEffect(() => {
		api.get('/NataleAlessi')
			.then(res => {
				setResponse(res.data)
				console.log(res.data)
			})
			.catch(e => {
				console.log(e)
			})
	}, [])

	api.get('/NataleAlessi').then(res => {
		console.log(res.data)
	})

	return (
		<div className='GitHubCard'>
			<p> GitHubCard here! </p>
			<img alt='avatar' className='CardAvatar' src={response.avatar_url}/>
			<div>
				<p className='CardName'> {response.name} </p>
				{response.hireable 
					? <p className='CardName'> Hireable </p>
					: <p className='CardName'> Employed </p> 
				}
			</div>
		</div>
	);
}

export default GitHubCard;